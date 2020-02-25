$(document).ready( () => {
    const er = new EventRecommender(); 
    const APIKey = '7elxdku9GGG5k8j0Xm8KWdANDgecHMV0';
    // Your code here
                          // Default Users
    er.addUser("XELA", 323);
    er.addUser("Nkiru", 515);
    er.addUser("RGBM", 333);
    
                        // Default Events
    er.addEvent("Emo Fantasy", "2020-2-20", "Music", 022);
    er.addEvent("La Sad Gurl", "2020-2-22", "Comedy", 666);
    er.addEvent("For the Homie", "2020-2-23", "Ceremony", 888);

                        // display Users && Events
            displayUsers();
            
    function displayUsers() {
      let defaultUser = "";
        for (let user of er.users) {
          defaultUser += `<li>${user.name}</li>`;
      }
      $("#all-users").html(defaultUser);
    }

            displayEvents();

    function displayEvents() {
      let defaultEvent = "";
        for (let event of er.events) {
          defaultEvent += `<li>${event.name}  |   ${event.category} 
           |  ${event.date}  |   ${event.id}</li>`;
      }
      $("#all-events").html(defaultEvent);
  }
  

                      // Adding Users & Events
// Users
$("#add-user").submit((event) => {
    event.preventDefault();
      let id = $("#add-user-id").val();
      let name = $("#add-user-name").val();
    er.addUser(name, id);
          displayUsers();
$("#add-user").trigger("reset");
    });
 
// Events
$("#add-event").submit((event) => {
    event.preventDefault();
      let id = $("#add-event-id").val();
      let name = $("#add-event-name").val();
      let date = $("#add-event-date").val();
      let category = $("#add-event-category").val();
    er.addEvent(name, date, category, id);
    displayEvents();
  $("#add-event").trigger("reset");
});

                          // Delete Users & Events
// Users
$("#delete-user").submit((event) => {
  event.preventDefault();
    let userId = $("#delete-user-id").val();
      er.deleteUser(userId);
  
  displayUsers();
    $("#delete-user").trigger("reset");
});

// Events
$("#delete-event").submit((event) => {
  event.preventDefault();
    let eventId = $("#delete-event-id").val();
      er.deleteEvent(eventId);
  
  displayEvents();
    $("#delete-event").trigger("reset");
});

                          // DISPLAY SEARCHED EVENTS
  function displayEventsByDate(searchDate) {
    let eventsByDate = $('<ul>');
        for (let i=0; i<searchDate.length; i++) {
        // for (let event of searchDate){
            eventsByDate.append("<li>" + searchDate[i].name + "</li>");
        }
          $("#search-date-results").html(eventsByDate);
    }


                          // SEARCH EVENTS
  $("#date-search").submit((event) => {
    event.preventDefault();
      let query = $("#date-search-id").val();
      let dateResults = er.findEventsByDate(query);
        displayEventsByDate(dateResults);
    });
  

                      // NavBar usability
    let mainNav = document.getElementById('js-menu');
    let navBarToggle = document.getElementById('js-navbar-toggle');
    
    navBarToggle.addEventListener('click', function () {
      mainNav.classList.toggle('active');
    });

});