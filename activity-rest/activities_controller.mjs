import 'dotenv/config';
import * as activities from './activities_model.mjs';
import express from 'express';
import moment from 'moment';

const PORT = process.env.PORT;

const app = express();


app.use(express.json());


app.post('/activities', (req, res) => {
    const { name, start, end, amount, color, memo } = req.body;

    // Check if all required fields are provided
    if (!name || !start ) {
        res.status(400).json({ Error: 'All fields are required' });
        return;
    }


    // Create activity
    activities.createActivity(name, start, end, amount, color, memo)
        .then(activity => {
            res.status(201).json(activity);
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({ Error: 'An error occurred while creating the activity' });
        });
});


app.get('/activities/:_id', (req, res) => {
    const activityId = req.params._id;
    activities.findActivityById(activityId)
        .then(activity => { 
            if (activity !== null) {
                res.status(200).json(activity);
            } else {
                res.status(404).json({ Error: 'Resource not found' });
            }         
         })
        .catch(error => {
            res.status(400).json({ Error: 'Request failed' });
        });

});


app.get('/activities', (req, res) => {
    let filter = {};
    // Is there a query parameter named year? If so add a filter based on its value.
    if(req.query.year !== undefined){
        filter = { year: req.query.year };
    }
    activities.findActivities(filter, '', 0)
        .then(activities => {
            res.status(200).send(activities);
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'Request failed' });
        });

});

app.put('/activities/:_id', (req, res) => {
    // Check if all required fields are provided
    if (!req.body.name || !req.body.start ) {
        res.status(400).json({ Error: 'All fields are required' });
        return;
    }

    if (!Number.isInteger(req.body.amount)) {
        res.status(400).json({ Error: 'Invalid input for yhe amount property.' });
        return;
    }

    activities.replaceActivity(req.params._id, req.body.name, req.body.start, req.body.end, req.body.amount, req.body.color, req.body.memo)
        .then(numUpdated => {
            if (numUpdated === 1) {
                res.status(200).json({ _id: req.params._id, name: req.body.name, start: req.body.start, end: req.body.end, amount: req.body.amount, color: req.body.color, memo: req.body.memo })
            } else {
                res.status(404).json({ Error: 'Resource not found' });
            }
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({ Error: 'Request failed' });
        });
});


app.delete('/activities/:_id', async (req, res) => {
    try {
        const deletedCount = await activities.deleteById(req.params._id);
        if (deletedCount === 1) {
            res.status(204).send(); // Respond with a 204 status code
        } else {
            res.status(404).json({ Error: 'Resource not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Request failed' });
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});