import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PRM_KEY", ["id"], { unique: true })
@Entity("todo", { schema: "public" })
export class Todo {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "name", nullable: true, length: 100 })
  name: string | null;

  @Column("boolean", { name: "iscomplete", nullable: true })
  iscomplete: boolean | null;
}
