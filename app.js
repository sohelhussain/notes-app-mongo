const express = require('express');
const path = require('path');
const app = express();
const titleModel = require('./user')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const title = titleModel;
    console.log(title);
    res.render('home',{title: titleModel});
})
app.post('/create', async (req, res) => {
     const notecreated = await titleModel.create({
        title: req.body.title,
        description: req.body.description,
    })
    res.redirect('/');
});
app.listen(3000);