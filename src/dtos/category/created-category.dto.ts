import { CategoryEntity } from '../../entities/category.entity';
import { CreateCategoryDto } from './create-category.dto';

export class CreatedCategoryDto extends CreateCategoryDto {
  id!: string;
  createdAt?: Date;
  updatedAt?: Date;

  constructor({ id, name, createdAt, updatedAt }: CategoryEntity) {
    super();
    this.id = id;
    this.name = name;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;

  }
}