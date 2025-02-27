//import express
import express from 'express';

//Instantiate an Express application 
const app = express();


//Serve static files from the 'public' directory
app.use(express.static('public'));

//
app.use(express.urlencoded({ extended: true }));

//setting view engine
app.set('view engine', 'ejs');

//Define a port number for our server to listen on 
const PORT = 3000;

//Define a "default" route for our home page 
app.get('/', (req, res) => {
    //Send our home page as a response to the client
    res.render(`home`); //render works with ejs files res.send is for html
});

//create post
app.post('/submit', (req, res) => {

    const newPost = {
        name: req.body.name,
        title: req.body.title,
        content: req.body.content
    };

    console.log(newPost)

    res.render('confirmation', { newPost });
});

//Send port in Console.
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});