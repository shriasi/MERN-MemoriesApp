import express from 'express';
import bodyparser from 'body-parser';
import mongoose from 'mongoose';
import corse from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use('/posts', postRoutes);

app.use(bodyparser.json({limit: "30mb" , extended: true}));
app.use(bodyparser.urlencoded({limit: "30mb" , extended: true}));
app.use(corse());

//connect to database - mongodb.com

const CONNECTION_URL = 'mongodb+srv://nilu123:kWM00Gy6doLNbLrh@cluster0.6gmjm.mongodb.net/<dbname>?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {  useNewUrlParser: true, useUnifiedTopology: true }).then(() => app.listen(PORT,() => console.log('Server running on port: ${PORT}')))
.catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);