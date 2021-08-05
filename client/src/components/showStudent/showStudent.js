import axios from 'axios';
import React, {useState, useEffect} from 'react';



export default function ShowStudent(){

const[studentList, setStudentList] = useState  ([])

useEffect(()=>{
    axios.get('http://localhost:5000/students').then ((allStudents)=>{
        setStudentList(allStudents.data);
    })
}, []) 
    return(
        <div>
            {studentList.map((student,key)=>{
                return(
                <h1>{student.firstName}</h1>)
        
            })}
        </div>
    )
} 