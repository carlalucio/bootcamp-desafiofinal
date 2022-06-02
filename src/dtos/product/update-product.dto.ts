import { body, ValidationChain } from 'express-validator';
import { CreateProductDto } from './create-product.dto';
export class UpdateProductDto extends CreateProductDto{
     constructor() {
      super();
    }
    static validators(): ValidationChain[] {
        return [
          body('name', 'Valor name não é uma string!').optional().isString(),
          body("description","O campo description deve ser uma string!").optional().isString(),
          body("value", "O campo value deve ser um número!").optional().isNumeric(),
          // body("person_count", "O campo person_count deve ser um número!").optional().isNumeric(),
          body("disponibility", "O campo disponibility deve ser um booleano!").optional().isBoolean(),
          body("categoryId", "O campo categoryId deve ser uma string!").optional().isString(),
          body("categoryId", "O campo categoryId deve ser um UUID!").optional().isUUID(),
        ];
      }
}