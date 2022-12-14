import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors, { CorsOptions } from 'cors';
import rateLimiter from 'express-rate-limit';
import routes from './routes/index'
const limiter = rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again after 15 minutes'
})

const app = express();

const whiteList = ['http://localhost:3000','http://localhost:3001']
const corsConfig = {
    origin: (origin:CorsOptions, callback:Function) => {
        if (whiteList.indexOf(origin as string) !== -1) {
            callback(null,true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

app.use(morgan('dev'));
app.use(helmet())
app.use(cors());
app.use(limiter);


app.use('/api',routes)
app.get('/readcsv', (req, res) => {
    
})


const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


