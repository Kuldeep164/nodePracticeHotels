const express = require('express');
const router = express.Router();

const menuItem = require('./../models/Menu');
const Person = require('../models/Person');

router.post('/', async function(req, res) {
    try {
        const data = req.body;

        const newMenuItem = new menuItem(data);

        const responseDataAfterSaving = await newMenuItem.save();

        console.log('Lo bhai hogya data save');

        res.status(200).json(responseDataAfterSaving);
    } catch (error) {
        console.log(error);
        res.status(500).json({error : 'Aagya na internal server error'});
    }
})

router.get('/', async function(req, res) {
    try {
        const data = await menuItem.find();

        console.log('Hn bhai dikh gya data');

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error : 'Lo Bhai aagya na koi internal server error' });
    }
})


module.exports = router;