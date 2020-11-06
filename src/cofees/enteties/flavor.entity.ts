import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Coffee } from './cofee.entity';

@Entity()
export class Flavor {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @ManyToMany(
    type => Coffee,
    cofee => cofee.flavors,
  )
  cofees: Coffee[];
}
