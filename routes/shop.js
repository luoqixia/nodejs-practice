const express = require('express');
const adminRoutes = require('./admin')

const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('shop', { title: 'Available Items', items: adminRoutes.items });
});

module.exports = router;