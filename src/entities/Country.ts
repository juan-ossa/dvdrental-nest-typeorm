import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { City } from './City';

@Index('country_pkey', ['country_id'], { unique: true })
@Entity('country', { schema: 'public' })
export class Country {
  @PrimaryGeneratedColumn({ type: 'smallint', name: 'country_id' })
  country_id: number;

  @Column('character varying', { name: 'country', length: 50 })
  country: string;

  @Column('timestamp without time zone', {
    name: 'last_update',
    default: () => 'CURRENT_TIMESTAMP',
  })
  last_update: Date;

  @OneToMany(() => City, (city) => city.country)
  cities: City[];
}
