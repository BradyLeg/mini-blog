//import express
import express from 'express';

import mariadb from 'mariadb';

import dotenv from 'dotenv';

dotenv.config();


const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_Name,
    port: process.env.DB_PORT
})



async function connect() {
    try {
        let conn = await pool.getConnection();
        console.log("connected to database");
        return conn;
    } catch (err) {
        console.log(`Error connecting to the database: ${err}`);
    }
}

//Instantiate an Express application 
const app = express();


//Serve static files from the 'public' directory
app.use(express.static('public'));

//
app.use(express.urlencoded({ extended: true }));

//setting view engine
app.set('view engine', 'ejs');

//Define a port number for our server to listen on 
const PORT = process.env.APP_PORT || 3000;

//Define a "default" route for our home page 
app.get('/', (req, res) => {
    //Send our home page as a response to the client
    res.render(`home`); //render works with ejs files res.send is for html
});

//create post
app.post('/submit', async (req, res) => {


    const newPost = {
        name: req.body.name,
        title: req.body.title,
        content: req.body.content
    };

    console.log(newPost);

    const conn = await connect();

    const insertQuery = await conn.query(`INSERT INTO 
        post(author, title, content)
        VALUES(?,?,?)`,
        [newPost.name,
        newPost.title,
        newPost.content]);


    res.render('confirmation', { newPost });
});

app.get('/entires', async (req, res) => {

    const conn = await connect();
    const posts = await conn.query(`SELECT * FROM post ORDER BY created_at DESC;`);

    console.log(posts);

    res.render('entries', { posts });
});


//Send port in Console.
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});