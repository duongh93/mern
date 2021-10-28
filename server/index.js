import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import posts from './routers/posts.js';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.port || 5000;
const URI = 'mongodb+srv://admin:admin@cluster0.gicvs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

//Middleware
app.use(bodyParser.json({limit: '30mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '30mb'}));
app.use(cors());

//Router
app.use('/posts', posts);

mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('CONNECT TO DB');
        app.listen(PORT, () => {
            console.log(`Server is running on ${PORT}`);
        });
    }).catch(err => {
    console.log('err', err);
});

