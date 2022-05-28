import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Customer } from "./Customer";

@Index("invoice_pkey", ["invoice_id"], { unique: true })
@Entity("invoice", { schema: "public" })
export class Invoice {
  @PrimaryGeneratedColumn({ type: "smallint", name: "invoice_id" })
  invoice_id: number;

  @Column("character varying", { name: "service", length: 45 })
  service: string;

  @Column("numeric", { name: "rate", precision: 4, scale: 2 })
  rate: string;

  @Column("numeric", { name: "hours", precision: 4, scale: 2 })
  hours: string;

  @Column("timestamp without time zone", {
    name: "date",
    default: () => "now()",
  })
  date: Date;

  @Column("boolean", { name: "paid", default: () => "false" })
  paid: boolean;

  @ManyToOne(() => Customer, (customer) => customer.invoices, {
    onDelete: "RESTRICT",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "customer_id", referencedColumnName: "customer_id" }])
  customer: Customer;
}
