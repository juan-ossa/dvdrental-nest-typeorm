import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { City } from "./City";
import { Customer } from "./Customer";

@Index("address_pkey", ["address_id"], { unique: true })
@Index("idx_fk_city_id", ["city_id"], {})
@Entity("address", { schema: "public" })
export class Address {
  @PrimaryGeneratedColumn({ type: "smallint", name: "address_id" })
  address_id: number;

  @Column("character varying", { name: "address", length: 50 })
  address: string;

  @Column("character varying", {
    name: "address2",
    nullable: true,
    length: 50,
    default: () => "NULL::character varying",
  })
  address2: string | null;

  @Column("character varying", { name: "district", length: 20 })
  district: string;

  @Column("smallint", { name: "city_id" })
  city_id: number;

  @Column("character varying", {
    name: "postal_code",
    nullable: true,
    length: 10,
    default: () => "NULL::character varying",
  })
  postal_code: string | null;

  @Column("character varying", { name: "phone", length: 20 })
  phone: string;

  @Column("timestamp without time zone", {
    name: "last_update",
    default: () => "CURRENT_TIMESTAMP",
  })
  last_update: Date;

  @ManyToOne(() => City, (city) => city.addresses, {
    onDelete: "RESTRICT",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "city_id", referencedColumnName: "city_id" }])
  city: City;

  @OneToMany(() => Customer, (customer) => customer.address)
  customers: Customer[];
}
