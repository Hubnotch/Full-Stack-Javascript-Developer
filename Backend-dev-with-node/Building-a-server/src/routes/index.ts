import express from 'express';
import teachers from './api/teachers';
import students from './api/students';
import reader from './api/readcsv';

const routes = express.Router();

routes.get('/', (req, res) => {
    res.status(200).send('Code your future API');
});
routes.use('/teachers', teachers);
routes.use('/students', students);
routes.use('/reader', reader)



export default routes;

