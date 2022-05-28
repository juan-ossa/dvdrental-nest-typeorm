import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("user_pkey", ["user_id"], { unique: true })
@Index("idx_user_name", ["user_name"], {})
@Index("user_user_name_key", ["user_name"], { unique: true })
@Entity("user", { schema: "public" })
export class User {
  @PrimaryGeneratedColumn({ type: "smallint", name: "user_id" })
  user_id: number;

  @Column("character varying", { name: "user_name", unique: true, length: 252 })
  user_name: string;

  @Column("character varying", { name: "first_name", length: 45 })
  first_name: string;

  @Column("character varying", { name: "last_name", length: 45 })
  last_name: string;

  @Column("character varying", { name: "email", length: 252 })
  email: string;

  @Column("character varying", { name: "password", length: 252 })
  password: string;

  @Column("character varying", { name: "role", length: 252 })
  role: string;

  @Column("timestamp without time zone", {
    name: "last_update",
    default: () => "CURRENT_TIMESTAMP",
  })
  last_update: Date;
}
