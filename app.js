const express = require('express');
const path = require('path');
const app = express();
const titleModel = require('./user')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');


// create tasks -->

app.get('/', async (req, res) => {
    const box = await titleModel.find()
    res.render('home',{box});
})


app.post('/create', async (req, res) => {
     const notecreated = await titleModel.create({
        title: req.body.title,
        description: req.body.description,
    })
    res.redirect('/');
});

// read tasks -->

app.get('/read/:task', async (req, res) => {
    const search = await titleModel.findOne({_id: req.params.task}) 
    res.render('read', {search});
})

app.listen(3000);