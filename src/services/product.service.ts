import { DataSource, FindOptionsWhere, ILike, Repository } from 'typeorm';
import { ProductEntity } from '../entities/product.entity';
import { HttpStatus } from '../utils/enums/http-status.enum';
import { CreatedProductDto } from '../dtos/product/created-product.dto';
import { CreateProductDto } from '../dtos/product/create-product.dto';
import { UpdateProductDto } from '../dtos/product/update-product.dto';
import { HttpException } from '../handler-Exceptions/http-exception.provider';

export class ProductService {
  private productRepository: Repository<ProductEntity>;

  constructor(private readonly connection: DataSource) {
    this.productRepository = this.connection.getRepository(ProductEntity);
  }

  async getAll({name, disponibility, categoryName }:{
    name?: string ,
    categoryName? : string ,
    disponibility?: boolean   
  }): Promise<CreatedProductDto[]> {
   
    const filter: FindOptionsWhere<ProductEntity> = {}

      if(name)
        {filter ['name'] = ILike(`%${name}%`)}
      if(categoryName)
        {filter['category'] = {name: ILike(`%${categoryName}%`)}}
      if(disponibility)
      {filter['disponibility'] = 
        typeof disponibility === "string" && disponibility === "true" ? true : false}
     
   try {
      const products = await this.productRepository.find({relations: ["category"], where: filter});
      return products.map((product) => new CreatedProductDto(product));
    } catch (error) {
      throw new HttpException('Houve um erro ao listar os produtos!', HttpStatus.BAD_REQUEST);
    }
  }
  
  async create({categoryId, person_count, description, disponibility, image, name, value}: CreateProductDto): Promise<CreatedProductDto> {
    try {
      const createProduct = this.productRepository.create({
        category: { id: categoryId },
        person_count,
        description,
        disponibility :
        typeof disponibility ==='string' && disponibility === 'true'
        ? true
        :false,
        image,
        name,
        value,
      });
      const saveProduct = await this.productRepository.save(createProduct);
      return new CreatedProductDto(saveProduct);
    } catch (error) {
      throw new HttpException(
        "Houve um erro ao cadastrar produto!",
        HttpStatus.BAD_REQUEST
      );
    }
  }
   
  async show(id: string): Promise<CreatedProductDto>{
    try {
      const product = await this.productRepository.findOne({relations: ['category'], where:{id}});
      if(!product){
        throw new HttpException('Curso não encontrado!', HttpStatus.NOT_FOUND)
      }
      return new CreatedProductDto(product);
    } catch (error) {
      throw new HttpException('Houve um erro ao listar o produto', HttpStatus.BAD_REQUEST)
    }
  }  

    async update( id: string,{name, description,value, image, disponibility, categoryId}: Partial<UpdateProductDto>): Promise<void>{
    const oldProduct = await this.productRepository.findOne({relations: ["category"], where: { id } });
    if (!oldProduct ) {
      throw new HttpException('Produto não encontrado!', HttpStatus.NOT_FOUND);
    }
   try{
      const updateProduct = this.productRepository.merge(oldProduct, {
        description,
        disponibility:
        disponibility === undefined
        ? undefined
        : typeof disponibility === 'string' && disponibility === 'true'
        ? true
        : false,
        image,
        name,
        value,
        category: { id: categoryId }
      });
      await this.productRepository.save(updateProduct);}
    catch (error) {
      console.log(error)
      throw new HttpException('Houve um erro ao atualizar curso!', HttpStatus.BAD_REQUEST);
      
    }
  }

  
  async delete(id:string): Promise<void>{
    try {
      const product = await this.productRepository.findOne({where:{id}});
       await this.productRepository.delete(id);
    } catch (error) {
      throw new HttpException('Houve um erro ao excluir curso!', HttpStatus.BAD_REQUEST);
    }
  }
}