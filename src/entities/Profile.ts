import {
  Column,
  Entity,
  PrimaryColumn
} from "typeorm";

@Entity("profiles")
class Profile {
  @PrimaryColumn()
  id: Number;

  @Column()
  name: string;
}

export { Profile }