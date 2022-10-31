const express = require('express');

const router = express.Router();

const items = [];

router.get('/add-product', (req, res, next) => {
    res.render('addItem', { title: 'Add an Item' });
});

router.post('/add-product', (req, res, next) => {
    items.push(req.body);
    console.log(items);
    res.redirect('/');
});

exports.items = items;
exports.router = router;