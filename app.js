const express = require('express');
const path = require('path');
const app = express();
const titleModel = require('./user')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

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

// delete --->

app.get('/delete/:id', async (req, res) => {
    const deleteId = await titleModel.findOneAndDelete({_id: req.params.id})
    res.redirect('/');
});

app.listen(3000);