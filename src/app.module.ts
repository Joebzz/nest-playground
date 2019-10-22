import { Module } from '@nestjs/common';

import { CatsModule } from './cats/cats.module';
import { ProductsService } from './products/products.service';
import { ProductsController } from './products/products.controller';

@Module({
  imports: [CatsModule],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class AppModule {}
