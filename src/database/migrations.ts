import connection from "./connection";
import { classroom, expertise, hobby, student, teacher } from "./data";
import { TABLE_CLASS, TABLE_EXPERTISE, TABLE_HOBBY, TABLE_STUDENTES, TABLE_TEACHERS } from "./tableNames";



const createTables = async () => {
    await connection.raw(`
SET FOREIGN_KEY_CHECKS=0;
DROP TABLE IF EXISTS ${TABLE_CLASS}, ${TABLE_STUDENTES}, ${TABLE_HOBBY}, ${TABLE_TEACHERS}, ${TABLE_EXPERTISE};

CREATE TABLE ${TABLE_CLASS}(
    id VARCHAR(255) PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL UNIQUE,
    module VARCHAR(255) DEFAULT 0
);

CREATE TABLE ${TABLE_STUDENTES}(
    id VARCHAR(255) PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    birth_date DATE,
    class_id VARCHAR(255),
    FOREIGN KEY (class_id) REFERENCES ${TABLE_CLASS}(id)
);

CREATE TABLE ${TABLE_TEACHERS}(
    id VARCHAR(255) PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    birth_date DATE,
    class_id VARCHAR(255),
    FOREIGN KEY (class_id) REFERENCES ${TABLE_CLASS}(id) 
);

CREATE TABLE ${TABLE_HOBBY}(
    id VARCHAR(255) PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    student_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (student_id) REFERENCES ${TABLE_STUDENTES}(id)
);

CREATE TABLE ${TABLE_EXPERTISE}(
    id VARCHAR(255) PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    teacher_id VARCHAR(255),
    FOREIGN KEY (teacher_id) REFERENCES ${TABLE_TEACHERS}(id) 
);

SET FOREIGN_KEY_CHECKS=1;
    `)

    .then(() => {
        console.log(`Tables created successfully!`)
        insertData()
    })
    .catch((error: any) => printError(error))
}


const insertData = async () => {
    try {
        await connection(TABLE_CLASS)
        .insert(classroom)
        .then(() => console.log(`${TABLE_CLASS} populated!`))
        .catch((error: any) => printError(error))

        await connection(TABLE_STUDENTES)
        .insert(student)
        .then(() => console.log(`${TABLE_STUDENTES} populated!`))
        .catch((error: any) => printError(error))

        await connection(TABLE_TEACHERS)
        .insert(teacher)
        .then(() => console.log(`${TABLE_TEACHERS} populated!`))
        .catch((error: any) => printError(error))

        await connection(TABLE_HOBBY)
        .insert(hobby)
        .then(() => console.log(`${TABLE_HOBBY} populated!`))
        .catch((error: any) => printError(error))

        await connection(TABLE_EXPERTISE)
        .insert(expertise)
        .then(() => console.log(`${TABLE_EXPERTISE} populated!`))
        .catch((error: any) => printError(error))

    }catch (error: any) {
        console.log(error.sqlMessage || error.message)
    } finally {
        console.log("Ending connection!")
        return connection.destroy()
    }
}

const printError = (error: any) => {
    console.log(error.sqlMessage || error.message)
}

createTables()