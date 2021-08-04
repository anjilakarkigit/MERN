import React, {useState} from 'react';  
import axios from 'axios';  

const Student = ()=>{
    const [student, setStudent] = useState({
          regNo: 0,
          firstName: '',
          lastName: '',  
    })

    //npm install axios --save
    const createStudent= ()=>{
          axios.post('http://localhost:5000/students', student) 
    }
    return(
        <div>
            <h2>Create Student</h2>
            <form>
                <label>First Name</label>
                <input type="text" value={student.firstName} onChange={(event)=>{
                    setStudent({...student, firstName: event.target.value })
                }}/><br/><br/>
                <label>Last Name</label>
                <input type="text" value={student.lastName} onChange={(event)=>{
                    setStudent({...student, lastName: event.target.value })
                }}/>
                <br/><br/>
                <button onClick={createStudent}>Create Student</button>
            </form>
        </div>
    )
}

 export default Student;