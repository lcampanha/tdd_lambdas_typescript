import "reflect-metadata";
import {createConnection} from "typeorm";
import {Author} from "./entities/author";

createConnection().then(async connection => {

    console.log("Inserting a new author into the database...");
    const author = new Author();
    author.name = "Timber";
    author.age = 25;
    await connection.manager.save(author);
    console.log("Saved a new author with id: " + author.id);

    console.log("Loading author from the database...");
    const users = await connection.manager.find(Author);
    console.log("Loaded author: ", users);

    console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));
