describe("EventRecommender", () => {
    const { EventRecommender, User, Event } = require('../eventonica-classes.js'); // Update with your class names and file name
    let er; 
    
    beforeEach(() => {
      er = new EventRecommender();
    });
  
    describe("addEvent", () => {
      it("adds a new Event to the system", () => {
        er.addEvent("Emo Fantasy", "2020-2-20", "Music", 022);
        expect(er.events.length).toEqual(1);
        expect(er.events[0].name).toEqual("Emo Fantasy"); // what are some other things you can test?
      });
    });
    
    describe("addUser", () => {
      it("adds a new User to the system", () => {
        er.addUser("Assata", 888);
        expect(er.users.length).toEqual(1);
        // expect(er.user[0].name).toEqual("Assata");
      });
    });
  
    describe("saveUserEvent", () => {
      it("adds an event to a user's personal event array", () => {
        er.addUser("Assata", 888);
        er.addEvent("Emo Fantasy", "2020-2-20", "Music", 022);
        er.saveUserEvent(888, "Emo Fantasy"); // change these to match your method signature
        expect(er.users[0].name).toEqual("Assata");
        expect(er.users[0].personalEvents.length).toEqual(1);
        expect(er.users[0].personalEvents[0].name).toEqual("Emo Fantasy");
      });
    });
  
    describe("deleteUser", () => {
      it("removes a User from the system", () => {
        er.addUser("Assata", 888);
        er.deleteUser("Assata", 888);
        expect(er.users.length).toEqual(0);
      });
    });
    
    describe("deleteEvent", () => {
      it("removes the event from the system", () => {
        er.addEvent("Emo Fantasy", "2020-2-20", "Music", 022);
        er.deleteEvent("Emo Fantasy", "2020-2-20", "Music", 022);
        expect(er.events.length).toEqual(0);
      });
    });
  });