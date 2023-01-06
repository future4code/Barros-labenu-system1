import { TclassRoom } from "../models/ClassRoom"
import { TExpertise } from "../models/Expertise"
import { THobby } from "../models/Hobby"
import { TstudentHobby } from "../models/StudentHobby"
import { TteacherExpertise } from "../models/TeacherExpertise"
import { TUser } from "../models/User"


export const classroom: TclassRoom[]= [
    {
        id: "1",
        name: "Barros",
        module: "6"
    },
    {
        id: "2",
        name: "Hooks",
        module: "2"
    },
    {
        id: "3",
        name: "Lammar",
        module: "0"
    },
    
]

export const student: TUser[] = [
    {
        id: "1",
        name: "Kayo Céshar",
        email: "kayo.c.shar@gmail.com",
        birth_date: "1989-04-15",
        class_id: "1"
    },
    {
        id: "2",
        name: "Felipe Alcântara",
        email: "felipe-alcantara@gmail.com",
        birth_date: "1995-06-21",
        class_id: "2"
    },
]

export const teacher: TUser[]= [
    {
        id: "1",
        name: "Junior Prado",
        email: "jr.prado@gmail.com",
        birth_date: "1995-07-13",
        class_id: "1"
    },
    {
        id: "2",
        name: "Fayra Miranda",
        email: "fay-miranda@gmail.com",
        birth_date: "1995-05-27",
        class_id: "2"
    }
]


export const studentHobby: TstudentHobby[] = [
    {
        id: "1",
        student_id: "1",
        hobby_id: "1"
    },
    {
        id: "2",
        student_id: "1",
        hobby_id: "2"
    },
    {
        id: "3",
        student_id: "2",
        hobby_id: "3"
    },
    {
        id: "4",
        student_id: "2",
        hobby_id: "4"
    },
    
]




export const hobby: THobby[] = [
    {
        id: "1",
        name: "Pescar"
    },
    {
        id: "2",
        name: "Viajar"
    },
    {
        id: "3",
        name: "Cinema"
    },
    {
        id: "4",
        name: "Nadar"
    }
]


export const teacherExpertise: TteacherExpertise[] = [
    {
        id: "1",
        teacher_id: "1",
        expertise_id: "1"
    },
    {
        id: "2",
        teacher_id: "1",
        expertise_id: "2"
    },
    {
        id: "3",
        teacher_id: "2",
        expertise_id: "3"
    },
    {
        id: "4",
        teacher_id: "2",
        expertise_id: "4"
    },
]



export const expertise: TExpertise[] = [
    {
        id: "1",
        name: "JS"        
    },
    {
        id: "2",
        name: "CSS"
    },
    {
        id: "3",
        name: "React"
    },
    {
        id: "4",
        name: "TypeScript"       
    }
]

