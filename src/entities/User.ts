import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Profile } from "./Profile";

@Entity("users")
class User {
  @PrimaryColumn()
  readonly id: string;
  
  @Column()
  email: string;

  @Column()
  password: string;

  @JoinColumn({ name: "idProfile" })
  @ManyToOne(() => Profile)
  profile: Profile;
  @Column()
  idProfile: Number;


  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { User }