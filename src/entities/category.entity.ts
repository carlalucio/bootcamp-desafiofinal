import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProductEntity } from './product.entity';

@Entity({ name: 'categories' })
export class CategoryEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', nullable: false })
  name!: string;

  @Column({ type: 'date', nullable: false })
  created_at!: Date;

  @Column({ type: 'date', nullable: false })
  updated_at!: Date;

  @OneToMany(()=> ProductEntity, (product)=>product.category)
  products?:ProductEntity[];


}