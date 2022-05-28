import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("category_pkey", ["category_id"], { unique: true })
@Entity("category", { schema: "public" })
export class Category {
  @PrimaryGeneratedColumn({ type: "smallint", name: "category_id" })
  category_id: number;

  @Column("character varying", { name: "name", length: 25 })
  name: string;

  @Column("timestamp without time zone", {
    name: "last_update",
    default: () => "CURRENT_TIMESTAMP",
  })
  last_update: Date;
}
