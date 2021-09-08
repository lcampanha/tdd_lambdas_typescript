import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne } from "typeorm";
import { Book } from "./book";

@Entity()
export class Author {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 100})
    name: string;

    @Column()
    age: number;

    @OneToMany(() => Book, book => book.author)
    books: Book[];
}
