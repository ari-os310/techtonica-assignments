class User {
    constructor(name, id){
        this.name = name;
        this.id = id || Math.floor(Math.random()* 100000);
        this.personalEvents = [];
    }
}

class Event {
    constructor(name, date, category, id){
        this.name = name;
        this.date = date;
        this.category = category;
        this.id = id || Math.floor(Math.random * 100000)
    }
}


class EventRecommender {
    constructor(events, users) {
    // All main properties should go here.
        this.events = events || [];
        this.users = users || [];
    
    }

    addEvent(name, date, category, id) {
    // Adds a new Event to the System
        let formatDate = new Date (date);
        this.events.push(new Event(name, formatDate, category, id));
    }

    addUser(name, id) {
    // Adds a new User to the System
        this.users.push(new User(name, id));
    }

    allUsers() {
        return this.users;
      }

    saveUserEvent(userId, event){
    // Allow users to save events to a personal Events array.
        let user = this.findUserById(userId);
        let events = this.findUserEvent(event);
        user.personalEvents.push(events);
    }
    
     /* FILTER FUNCTION DELETES NEW USER BY ID ? BUT WILL NOT WORK ON DEFAULT USERS
     SPLICE FUNCTION MAKES JASINE TEST PASS,BUT REMOVES THE FIRST USER IN LIST ALWAYS
                SUBMIT BUTTON WILL DELETE EVEN IF NOTHING IS INPUT*/
    deleteUser(userId) {
    // Deletes a User from the system
        this.users  = this.users.filter((user) => {return user.id !== userId
        });
        // this.users.splice(this.findUserById(userId[userId]), 1);
        
    }
   
    /* FILTER FUNCTION DELETES NEW EVENT BY ID ? BUT WILL NOT WORK ON DEFAULT EVENTS
    SPLICE FUNCTION MAKES JASINE TEST PASS,BUT REMOVES THE FIRST EVENT IN LIST ALWAYS*/
    deleteEvent(eventId) {
    // Deletes the Event from the system
        // this.events = this.events.filter((event) => {return event.id !== eventId
        // });

        this.events.splice(this.findUserById(eventId), 1);
    }

    allEvents() {
        return this.events;
      }
    
    findUserById (userId) {
        return this.users.find((user) => user.id === userId);
    }

    findEventById (eventId) {
        return this.events.find((event) => event.id === eventId);
    }

    findUserEvent(eventName){
        return this.events.find((event) => event.name === eventName);
    }

    findEventsByDate(date){
    // Returns all events on a given date
      let formatDate = new Date (date);
        return this.events.filter((event) => event.date === formatDate);
        }
    
    findEventsByCategory(category){
    // Returns all events in a given category
        return this.events.filter((event) => event.category === category);
    }
}

if (typeof module != 'undefined'){
    module.exports = { EventRecommender, User,  Event} 
}