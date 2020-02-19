$(document).ready( () => {
    const er = new EventRecommender(); 
    // Your code here
                          // Default Users
    er.addUser("XELA", 323);
    er.addUser("Nkiru", 515);
    er.addUser("RGBM", 333);
    
                        // Default Events
    er.addEvent("Emo Fantasy", "2020-2-20", "Music", 022);

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
      let searchDate = er.findEventsByDate(query);
    displayEventsByDate(searchDate);
    });
  
                              // API IMPLEMENTATION

    let keyword = "Rap";
                    
  $.ajax({
  type:"GET",
  url:`https://app.ticketmaster.com/discovery/v2/events?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&keyword=${keyword}`,
  async:true,
  dataType: "json",
  success: function(json) {
    let events = json._embedded.events;
    let name = events[0].name;
    let date = events[0].dates.start.localDate;
    let category = events[0].classifications[0].segment.name;
    let id = events.id;

            // to revisit later
    // let time = events[0].dates.start.localTime;

    console.log(events[0]); 
              // Parse the response.
              // Do other things.
           },
  error: function(xhr, status, err) {
              // This time, we do not end up here!
           }
});






                      // NavBar usability
    let mainNav = document.getElementById('js-menu');
    let navBarToggle = document.getElementById('js-navbar-toggle');
    
    navBarToggle.addEventListener('click', function () {
      mainNav.classList.toggle('active');
    });

});