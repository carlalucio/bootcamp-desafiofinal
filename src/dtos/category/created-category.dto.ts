import { CategoryEntity } from '../../entities/category.entity';
import { CreateCategoryDto } from './create-category.dto';

export class CreatedCategoryDto extends CreateCategoryDto {
  id!: string;

  constructor({ id, name, created_at, updated_at }: CategoryEntity) {
    super();
    this.id = id;
    this.name = name;
    this.created_at = created_at;
    this.updated_at = updated_at;

  }
}