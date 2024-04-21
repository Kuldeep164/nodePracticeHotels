const express = require('express');
const router = express.Router();
const Person = require('./../models/Person');

// abhi data bharne ke liye main ek post route bna deta hu.....
router.post('/', async function(req, res) {

    try {
        const data = req.body;

        const newPerson = new Person(data);
    
        const responseData = await newPerson.save();
    
        console.log('Hogya bhai save data');
    
        res.status(200).json(responseData);

    } catch ( error ) {
        console.log(error);
        response.status(500).json({ error : ' Bhai ye to internal server hai' })
    }
})

// chlo bhhidu abhi ek get method lgakr data dekh bhi leta hu zara

router.get('/', async function (req, res) {
    try {
        const data = await Person.find()
        console.log('Dikh rha hai bhai data');

        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        response.status(500).json({ error : 'Bhai ye bhi to internal server error hi hai' })
    }
})

router.get('/:workType' , async function(req, res) {
    try {
        const workType = req.params.workType;  // here, I'm  trying to extract the workType from the url parameter

        if (workType == 'chef' || workType == 'manager' || workType == 'waiter') {
            const response = await Person.find({ work : workType });
            res.status(200).json(response);
        }
    } catch ( error ) {
        res.status(500).json({error : 'Lo bhyi aagya invalid work type error'});
    }
})

router.put('/:id', async function (req, res) {
    try {
        const personId = req.params.id;  // extracting the id from the url parameter

        const dataToBeUpdated = req.body;  // extracted id se jo data mila usse update krdunga dataToBeUpdated se

        const responseAfterUpdate = await Person.findByIdAndUpdate( personId, dataToBeUpdated, {
            new : true,
            runValidators : true
        })

        if (!responseAfterUpdate) {
            res.status(404).json({error : 'Person not found'});
        }

        console.log('Hogya hai update');
        res.status(200).json(responseAfterUpdate);
    } catch (error) {
        console.log(error);
        res.status(500).json({error : 'internal server error'});
    }
})

// github mein changes kaise push krna hai....bss yhi check krne ke liye yhan ye comment add krne ka naatak krr rha hu 
module.exports = router;