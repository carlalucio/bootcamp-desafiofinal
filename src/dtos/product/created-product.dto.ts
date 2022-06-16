import { ProductEntity } from '../../entities/product.entity';
import { CreateProductDto } from './create-product.dto';
import { CategoryEntity } from '../../entities/category.entity';

export class CreatedProductDto extends CreateProductDto {
  id!: string;
  createdAt?: Date;
  updatedAt?: Date;
  category?: CategoryEntity
  
  constructor({ id, name, description, value, size, image, disponibility, category, createdAt, updatedAt}: ProductEntity) {
    super();
    this.id = id;
    this.name = name;
    this.description = description;
    this.value = value;
    this.size = size;
    this.image = image;
    this.disponibility = disponibility ;  
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.category = category;
  }
}