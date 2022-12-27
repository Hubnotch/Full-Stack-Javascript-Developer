import express, {Request,Response, NextFunction } from 'express';
const students = express.Router();

const logger = (req:Request, res:Response, next:NextFunction) => {
    console.log(req.originalUrl);
    next();
}

students.get('/',logger, (req, res) => {
    // console.log(req.originalUrl);
    
    res.status(200).send('students route');
});


export default students;