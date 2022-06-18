import {Router, Request, Response, NextFunction} from 'express';
import { CategoryController } from './controllers/category.controllers';
import { CategoryService } from './services/category.service';
import { AppDataSource } from './config/data-source';
import { validator } from './middlewares';
import multer from 'multer';
import { multerConfig } from './config/multer';
import { UpdateProductDto } from './dtos/product/update-product.dto';
import { CreateCategoryDto } from './dtos/category/create-category.dto';
import { CreateProductDto } from './dtos/product/create-product.dto';
import { ProductController } from './controllers/products.controllers';
import { ProductService } from './services/product.service';


const routes = Router();

const categoryController = new CategoryController(
  new CategoryService(AppDataSource)
);

const productControler = new ProductController(
  new ProductService(AppDataSource)
);

routes.get('/', (request: Request, response: Response) => {

    return response.json({ status: 'success', version: '1.0.0'}).status(200)
  });
  
routes.get('/categories', (request: Request, response: Response, next: NextFunction) => {
     categoryController.getAll(request, response).catch((error: Error) =>{
      next(error);
    })
  });
  
routes.post('/categories', CreateCategoryDto.validators(), validator, 
  (request: Request, response: Response,next: NextFunction) => {
    categoryController.create(request, response).catch((error: Error) =>{
      next(error);
    })
  });
  


routes.get('/products', (request: Request, response: Response, next: NextFunction) => {
  productControler.getAll(request, response).catch((error: Error) =>{
    next(error);
  })
});

routes.get('/products/img/:name', (request: Request, response: Response, next: NextFunction) => {
  productControler.getImgByName(request, response).catch((error:Error) =>{
    next(error);
  });
},
);

routes.post('/products', multer(multerConfig).single('image'), CreateProductDto.validators(), validator,(request: Request, response: Response,next: NextFunction) => {
  productControler.create(request, response).catch((error: Error) =>{
    next(error);
  })
});

routes.get('/products/:id', (request: Request, response: Response,next: NextFunction) => {
  productControler.show(request, response).catch((error: Error) =>{
    next(error);
  })
});

routes.put('/products/:id', multer(multerConfig).single('image'), UpdateProductDto.validators(), validator, (request: Request, response: Response,next: NextFunction) => {
  productControler.update(request, response).catch((error: Error) =>{
    next(error);
  }) 
});

routes.delete('/products/:id', (request: Request, response: Response,next: NextFunction) => {
  productControler.delete(request, response).catch((error: Error) =>{
    next(error);
  })
});

  export{routes};