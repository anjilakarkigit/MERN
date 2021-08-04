import mongoose from  'mongoose'

// This is Schema

const studentSchema = new mongoose.Schema({
    regNo : Number,
    firstName: String,
    LastName: String,
    grade: String,
    section: {
        type: String,
        default: 'A',
    },
    subjects: [String]
})

// This is model
// const name is same in both places
 
const student = mongoose.model('student', studentSchema )

export default student 