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
import { Country } from "./Country";

@Index("city_pkey", ["city_id"], { unique: true })
@Index("idx_fk_country_id", ["country_id"], {})
@Entity("city", { schema: "public" })
export class City {
  @PrimaryGeneratedColumn({ type: "smallint", name: "city_id" })
  city_id: number;

  @Column("character varying", { name: "city", length: 50 })
  city: string;

  @Column("smallint", { name: "country_id" })
  country_id: number;

  @Column("timestamp without time zone", {
    name: "last_update",
    default: () => "CURRENT_TIMESTAMP",
  })
  last_update: Date;

  @OneToMany(() => Address, (address) => address.city)
  addresses: Address[];

  @ManyToOne(() => Country, (country) => country.cities, {
    onDelete: "RESTRICT",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "country_id", referencedColumnName: "country_id" }])
  country: Country;
}
