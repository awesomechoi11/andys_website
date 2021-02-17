const express = require('express')
var exphbs  = require('express-handlebars');
const app = express()
const port = 8080
var favicon = require('serve-favicon');

//icon 
app.use(favicon(__dirname + '/assets/favicon.ico'));

app.engine('handlebars', exphbs());

app.set('view engine', 'handlebars');



app.get('/', (req, res) => {
    res.render('home');
})
app.get('/clothes', (req, res) => {
    res.render('clothes');
})
app.get('/about', (req, res) => {
    res.render('about');
})



.get('/styles/*', (req, res) => {
    res.sendFile(__dirname+req.path);
})
.get('/scripts/*', (req, res) => {
    res.sendFile(__dirname+req.path);
})
.get('/assets/*', (req, res) => {
    res.sendFile(__dirname+req.path);
})
.get('/node_modules/*', (req, res) => {
    res.sendFile(__dirname+req.path);
})
items = {
    genie:{
        name:'GENIE',
        type: 'HOODIE',
        sizes:['S','M','L','XL'],
        price: 150,
        img:[
            '/assets/img/catalog/aladin.jpg',
            '/assets/img/carousel/gabe_3.jpg',
            '/assets/img/carousel/jack_1.jpg',
            '/assets/img/carousel/jackjasmine_1.jpg'
        ]
    },
    nightmare:{
        name:'NIGHTMARE',
        type: 'HOODIE',
        sizes:['S','M','L','XL'],
        price: 150,
        img:[
            '/assets/img/catalog/nightmare.jpg',
            '/assets/img/carousel/jack_2.jpg',
            '/assets/img/carousel/gabe_4.jpg',
            '/assets/img/carousel/tim_1.jpg'
        ]
    },
    incredibles:{
        name:'INCREDIBLES',
        type: 'HOODIE',
        sizes:['S','M','L','XL'],
        price: 150,
        img:[
            '/assets/img/catalog/incredibles.jpg',
            '/assets/img/carousel/jasmine_1.jpg',
            '/assets/img/carousel/jasmine_2.jpg'
        ]
    },
    scooby:{
        name:'SCOOBY-DOO',
        type: 'HOODIE',
        sizes:['S','M','L','XL'],
        price: 150,
        img:[
            '/assets/img/catalog/scoobydoo.jpg',
            '/assets/img/carousel/gabe_2.jpg',
            '/assets/img/carousel/tim_3.jpg'
        ]
    },
    toystory:{
        name:'TOY STORY',
        type: 'HOODIE',
        sizes:['S','M','L','XL'],
        price: 150,
        img:[
            '/assets/img/catalog/toystory.jpg',
            '/assets/img/carousel/jack_3.jpg',
            '/assets/img/carousel/tim_2.jpg',
            '/assets/img/carousel/jackjasmine_1.jpg'
        ]
    }
}

app.get('/*', (req, res) => {
    if(items[req.params[0]]==undefined){
        res.send('owo hello')
    }
    //console.log(items[req.params[0]])
    res.render('item',items[req.params[0]]);
})

app.listen(port, () => console.log(`app listening at http://localhost:${port}`))