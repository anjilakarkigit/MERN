import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Create() {
  const classes = useStyles();
  
  const [student, setStudent] = useState({

    regNo: 0,
    studentName: '',
    grade: '',
    section: ''
  });

  return (
    <>
    <h2>Create Student</h2>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Registration No." variant="outlined" value ={student.regNo} onChange={(e)=>{
        setStudent({...student, regNo: e.target.value})
      }}/>
      <TextField id="outlined-basic" label="Name" variant="outlined" value ={student.name}/>
      <TextField id="outlined-basic" label="Grade" variant="outlined" value ={student.grade}/>
      <TextField id="outlined-basic" label="Section" variant="outlined" value ={student.section}/>
      <Button variant="contained" color="primary">
        Create Student
      </Button>
    </form>
    </>
  );
}
