import express from 'express';
const teachers = express.Router();

teachers.get('/', (req, res) => { 
    res.status(200).send('Teachers route');
});


export default teachers;