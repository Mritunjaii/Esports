const express = require('express')
const path=require('path')
const evt=require('../data/event')

const router = express.Router()


router.get('/', (req, res) => {
    evt.forEach(e => {
        // console.log(e.title);
    });
    res.render('home',{
        evt:evt
    });
})

router.get('/contact', (req, res) => {
    res.render('contact')
})

router.get('/about', (req, res) => {
    
    
    res.render('about')
})


module.exports=router