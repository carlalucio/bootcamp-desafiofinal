import {Request, Response} from 'express';
import { resolve } from 'path';
import { CreatedProductDto } from '../dtos/product/created-product.dto';
import { ProductService } from '../services/product.service';
import { HttpStatus } from '../utils/enums/http-status.enum';




export class ProductController {
    constructor(private readonly productService: ProductService){}

    async getAll(request: Request, response: Response): Promise<Response<CreatedProductDto[]>>{
        const courses = await this.productService.getAll(request.query);
        return response.status(HttpStatus.OK).json(courses);
    }
    
    async create({body, file}: Request, response: Response):Promise<Response<CreatedProductDto>> {
        const course = await this.productService.create({...body,image:file?.filename});
        return response.status(HttpStatus.CREATED).json(course);
    }
    
    async show({params}: Request, response: Response): Promise<Response<CreatedProductDto>> {
        const course = await this.productService.show(params.id);
        return response.status(HttpStatus.OK).json(course);                                         
      }
    
    async update({body, file, params}: Request, response: Response) :Promise<Response<void>>{
      await this.productService.update(params.id, {...body,image:file?.filename});
        return response.status(HttpStatus.NO_CONTENT).json();
      }
    
      async delete({params}: Request, response: Response): Promise<Response<void>> {
        await this.productService.delete(params.id);
        return response.status(HttpStatus.NO_CONTENT).json();
      }

      async getImgByName(
        {params}: Request, response: Response): Promise<any>{
          const directory = resolve(__dirname, '..', 'uploads');
          return response.status(HttpStatus.OK).sendFile(`${directory}/${params.name}`);
        }
    }
