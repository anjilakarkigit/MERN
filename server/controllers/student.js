import  StudentData  from '../models/student.js';

export const getStudents = async(req, res)=>{
    try{
        const allStudents = await StudentData.find()
        
        //status 200 means that the request is completed

        res.status(200).json(allStudents)
    } catch (error){
        // 404 --> not
        res.status(404).json({ message: error.message})
    }
} 

export const createStudent = async (req, res)=>{
    
        const student = req.body
        const newStudent = new StudentData(student)
    try{
        await newStudent.save()
        //201 indicates that the request has been completed and has led to the creation of a resource
        res.status(201).json(newStudent)
    } catch (error) {
        //409->a request conflict with current state of the target resource. occurs with put request
        res.status(409).json({message: error.message})
    }

}

export const deleteStudent = async(req, res)=>{
    const id = req.params.id;
    try {
        await StudentData.findByIdAndRemove(id).exec()
        res.send('Sucessfully Deleted')
    } catch (error) {
        console.log(error)
    }
}


