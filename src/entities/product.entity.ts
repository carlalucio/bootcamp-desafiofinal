import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CategoryEntity } from './category.entity';

@Entity({ name: 'products' })
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', nullable: false })
  name!: string;

  @Column({ type: 'varchar', nullable: false })
  description!: string;

  @Column({ type: 'float', nullable: false })
  value!: number;

  @Column({ type: 'float', nullable: false })
  person_count!: number;

  @Column({ type: 'varchar', nullable: false })
  image!: string;

  @Column({ type: 'boolean', nullable: false })
  disponibility!: boolean;

  @Column({ type: 'date', nullable: false })
  created_at!: Date;

  @Column({ type: 'date', nullable: false })
  updated_at!: Date;

 @ManyToOne(()=>CategoryEntity,(category)=>category.products,{
   onDelete: 'CASCADE', 
   nullable: false,})
 @JoinColumn({name: 'category_id', referencedColumnName:'id'})
 category!: CategoryEntity
  
}