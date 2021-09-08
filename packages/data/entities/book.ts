import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { Author } from "./author";

@Entity()
export class Book {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 100})
    title: string;

    @Column("text")
    description: string;

    @ManyToOne(() => Author, author => author.books)
    author: Author
}