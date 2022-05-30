import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('actor_pkey', ['actor_id'], { unique: true })
@Index('idx_actor_last_name', ['last_name'], {})
@Entity('actor', { schema: 'public' })
export class Actor {
  @PrimaryGeneratedColumn({ type: 'smallint', name: 'actor_id' })
  actor_id: number;

  @Column('character varying', { name: 'first_name', length: 45 })
  first_name: string;

  @Column('character varying', { name: 'last_name', length: 45 })
  last_name: string;

  @Column('timestamp without time zone', {
    name: 'last_update',
    default: () => 'CURRENT_TIMESTAMP',
  })
  last_update: Date;
}
