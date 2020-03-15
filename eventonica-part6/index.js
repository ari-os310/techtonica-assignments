const express = require('express');
const bodyParser = require ('body-parser');
const path = require('path');
const { EventRecommender, User, Event } = require ('./public/eventonica-classes')
const pgp = require('pg-promise')();
const db = pgp('postgres://arrm@localhost:5432/eventonica_db');

const app = express();
const port = process.env.PORT || 3000;
const er = new EventRecommender;
const events = er.allEvents();
const users = er.allUsers();

                            // Middleware
app.use(bodyParser.urlencoded({ extended: true }));                            
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));


                                        // ROUTES
// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });    


// EVENTS
app
    .route('/events')
    
    .get((req, res) => {
    res.status(200).send(events);
})

    .post((req, res) => {
    let { name, date, category, id } = req.body;
    let addedEvent = er.addEvent( name, date, category, id );
    events.push(addedEvent);
    res.status(200).send( `New Event :  ${addedEvent} `);
});

// W. ID PARAM
app
    .route('/events:id')
    
    .get((req, res) => {
    let {id} = req.params.id;
    let event = er.findEventById(id);
    if (!event) res.status(404).send("ERROR: Event with that ID does not exist.");
    else res.status(200).send(event);
})

    .put((req, res) => {
    let {id} = req.params.id;
    let event = er.findEventById(id);    
    if (!event) res.status(404).send("ERROR: Event with that ID does not exist.");

    event.name = req.body.name,
    event.date = req.body.date, 
    event.category = req.body.category
    res.status(200).send(event);
    })

    .delete((req, res) => {
    let {id} = req.params.id;
    let deletedEvent = er.deleteEvent(id);
    if (!deletedEvent) res.status(404).send("ERROR: Event with that ID does not exist.");
    else res.status(200).send(`Event :  ${deletedEvent} deleted successfully`);
});

// W. Keyword Param
app 
    .route('/events:keyword')

    .get((req, res) => {
    res.status(200).send(req.params.keyword);
 });

// W. Category Param
app 
    .route('/events:category')

    .get((req, res) => {
    let category = req.params.category;
    let eventsByCategory = er.findEventsByCategory(category);
    if (eventsByCategory.length > 0){
    res.status(200).send(eventsByCategory);
    } else {
        res.status(400).send(`There are no current events under ${category}.` )
    }
 });

 // W. Date Param
app 
    .route('/events:date')

    .get((req, res) => {
    let date = req.params.date;
    let eventsByDate = er.findEventsByDate(date);
    if (eventsByDate.length > 0){
    res.status(200).send(eventsByDate);
    } else {
        res.status(400).send(`There are no current events for ${date}.` )
    }
    });

    
// USERS

app
    .route ('/users')
    
    .get((req, res) => {
        db.any(`SELECT * FROM users`)
        .then(function(data) {
            res.status(200).send(data);
            // console.log(`This is the ${data}`)
        })
        .catch(function(error) {
            res.status(400).send(error);
        })
    })
    
    .post((req, res) => {
        db.one(`INSERT INTO users(userName) VALUES($1) RETURNING userID `, [req.body.name])
        .then(data => {
            res.status(200).send(data);
            console.log(`This is the data: ${data}`)
        })
        .catch(function (error) {
            res.status(400).send(error);
            console.log(`This is the ${error}.`);
        })
    });
    


// W. ID PARAM
app
    .route('/users:id')

    .get((req, res) => {
    let {id} = req.params.id;
    let user = er.findUserById(id);
    if (!user) res.status(404).send("ERROR: User with that ID does not exist.");
    else res.status(200).send(user);
})

    .put((req, res) => {
    let {id} = req.params.id;
    let updatedUser = er.findUserById(id);    
    if (!updatedUser) res.status(404).send("ERROR: User with that ID does not exist.");

    user.name = req.body.name,
    user.id = req.body.id, 
    res.status(200).send(updatedUser);
    })

    .delete((req, res) => {
    let {id} = req.params.id;
    let deletedUser = er.deleteUser(id);
    if (!deletedUser) res.status(404).send("ERROR: User with that ID does not exist.");
    else res.status(200).send(`User :  ${deletedUser} deleted successfully`);
});



// app.get('/api/courses', (req, res) => {
//     res.send([1,2,3]);
// });

app.listen(port, () => 
    console.log(`Example app listening on port ${port}!`))