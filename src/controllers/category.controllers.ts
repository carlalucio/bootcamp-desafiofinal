import { Request, Response } from 'express';
import { CreateCategoryDto } from '../dtos/category/create-category.dto';
import { CreatedCategoryDto } from '../dtos/category/created-category.dto';
import { CategoryService } from '../services/category.service';
import { HttpStatus } from '../utils/enums/http-status.enum'



interface CreateCategoryBody extends Request {
  body: CreateCategoryDto;
}

export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  async getAll(request: Request, response: Response) {
    const categories = await this.categoryService.getAll();
    return response.status(HttpStatus.OK).json(categories);
  }

  async create({ body: { name, created_at, updated_at} }: CreateCategoryBody, response: Response): Promise<Response<CreatedCategoryDto>> {
    const createdCategory = await this.categoryService.create({ name, created_at, updated_at});
    return response.status(HttpStatus.CREATED).json(createdCategory);
  }

}