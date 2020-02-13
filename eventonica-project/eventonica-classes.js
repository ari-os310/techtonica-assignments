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
        this.events.push(new Event(name, date, category, id));
    }

    addUser(name, id) {
    // Adds a new User to the System
        this.users.push(new User(name, id));
    }

    saveUserEvent(userId, event){
    // Allow users to save events to a personal Events array.
        let user = this.findUserById(userId);
        user.personalEvents.push(event);
    }
    

    deleteUser(userId) {
    // Deletes a User from the system
        this.users.splice(this.findUserById(userId), 1);
    }
   
    deleteEvent(eventId) {
    // Deletes the Event from the system
        this.users.splice(this.events.indexOf(eventId), 1);
    }
    
    findUserById (userId) {
        return this.users.find((user) => user.id === userId);
    }

    findUserByEvent(){
        return this.users.find((user) => user.id === userId);
    }

    findEventsByDate(date){
    // Returns all events on a given date
        return this.events.filter((event) => event.date === date);
        }
    
    findEventsByCategory(category){
    // Returns all events in a given category
        return this.events.filter((categories) => categories.category === category);
    }
}

if (typeof module != 'undefined'){
    module.exports = { EventRecommender, User,  Event} 
}