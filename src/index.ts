import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import { ping } from './endpoints/ping'
import { createClass } from './endpoints/createClass'
import { searchActiveClass } from './endpoints/searchActiveClass'
import { updateClass } from './endpoints/updateClass'
import { createStudent } from './endpoints/createStudent'
import { searchStudentByName } from './endpoints/searchStudentByName'
import { updateStudent } from './endpoints/updateStudent'
import { createTeacher } from './endpoints/createTeacher'
import { searchTeacher } from './endpoints/searchTeachers'
import { updateTeacher } from './endpoints/updateTeacher'


dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})

app.get("/ping", ping)
app.post("/classroom", createClass)
app.get("/classroom", searchActiveClass)
app.patch("/classroom/:className", updateClass)
app.post("/student", createStudent)
app.get("/student/:name", searchStudentByName)
app.patch("/student/:id", updateStudent)
app.post("/teacher", createTeacher)
app.get("/teacher", searchTeacher)
app.patch("/teacher/:id", updateTeacher)


