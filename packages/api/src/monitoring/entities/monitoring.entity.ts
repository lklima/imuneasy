import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Monitoring {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  temperature: number;

  @Column()
  humidity: number;
}
