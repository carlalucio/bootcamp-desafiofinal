import { ProductEntity } from '../../entities/product.entity';
import { CreateProductDto } from './create-product.dto';

export class CreatedProductDto extends CreateProductDto {
  id!: string;
  
  constructor({ id, name, description, value, person_count, image, disponibility, category, created_at, updated_at}: ProductEntity) {
    super();
    this.id = id;
    this.name = name;
    this.description = description;
    this.value = value;
    this.person_count = person_count;
    this.image = image;
    this.disponibility = disponibility = 
    typeof disponibility ==='string' && disponibility === 'true'
    ? true
    :false;
    this.categoryId = category.id;   
    this.created_at = created_at;
    this.updated_at = updated_at; 
  }
}