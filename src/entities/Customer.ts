import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Address } from "./Address";
import { Invoice } from "./Invoice";

@Index("idx_fk_address_id", ["address_id"], {})
@Index("customer_pkey", ["customer_id"], { unique: true })
@Index("idx_last_name", ["last_name"], {})
@Entity("customer", { schema: "public" })
export class Customer {
  @PrimaryGeneratedColumn({ type: "smallint", name: "customer_id" })
  customer_id: number;

  @Column("smallint", { name: "store_id" })
  store_id: number;

  @Column("character varying", { name: "first_name", length: 45 })
  first_name: string;

  @Column("character varying", { name: "last_name", length: 45 })
  last_name: string;

  @Column("character varying", { name: "phone", nullable: true, length: 45 })
  phone: string | null;

  @Column("character varying", {
    name: "email",
    nullable: true,
    length: 50,
    default: () => "NULL::character varying",
  })
  email: string | null;

  @Column("smallint", { name: "address_id" })
  address_id: number;

  @Column("boolean", { name: "active", default: () => "true" })
  active: boolean;

  @Column("timestamp without time zone", { name: "create_date" })
  create_date: Date;

  @Column("timestamp without time zone", {
    name: "last_update",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  last_update: Date | null;

  @ManyToOne(() => Address, (address) => address.customers, {
    onDelete: "RESTRICT",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "address_id", referencedColumnName: "address_id" }])
  address: Address;

  @OneToMany(() => Invoice, (invoice) => invoice.customer)
  invoices: Invoice[];
}
