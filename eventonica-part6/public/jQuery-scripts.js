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
      let req = $.ajax( {
        method : "GET",
        url: '/users'
      });

      req.done (() => {
        let defaultUser = "";
         for (let user of er.users) {
            defaultUser += `<li>${user.name}</li>`;
        }
        $("#all-users").html(defaultUser);
      })
    }
    
            displayEvents();

    function displayEvents() {
      let req = $.ajax( {
        method : "GET",
        url: '/events'
      });

      req.done (() => {
        let defaultEvent = "";
        for (let event of er.events) {
          defaultEvent += `<li>${event.name}  |   ${event.category} 
           |  ${event.date}  |   ${event.id}</li>`;
      }
      $("#all-events").html(defaultEvent);
      })
    }
  
                      // Adding Users & Events
// Users
$("#add-user").submit((event) => {
    event.preventDefault();
      let name = $("#add-user-name").val();
      let id = $("#add-user-id").val();

      let req = $.ajax( {
        method : "POST",
        url: '/users',
        data: {'name': name, 'id': id},
        contentType: 'application/x-www-form-urlencoded'
      });     
    
      req.done(() => console.log (`${name} has been added. `))
      req.fail(() => console.log (`${name} could not be added at this time.`))
          
        displayUsers();
$("#add-user").trigger("reset");
    });
 
// Events
$("#add-event").submit((event) => {
    event.preventDefault();
      let name = $("#add-event-name").val();
      let date = $("#add-event-date").val();
      let category = $("#add-event-category").val();
      let id = $("#add-event-id").val();

      let req = $.ajax({
        method : "POST",
        url: '/events',
        data: {'name': name, 'date': date, 'category': category, 'id': id},
        contentType: 'application/x-www-form-urlencoded'
      }); 
      
      req.done(() => console.log (`${name} has been added. `))
      req.fail(() => console.log (`${name} could not be added at this time.`))
    
      displayEvents();
  $("#add-event").trigger("reset");
});

                          // Delete Users & Events
// Users
$("#delete-user").submit((user) => {
  event.preventDefault();
    let userId = $("#delete-user-id").val();
    let req = $.ajax({
      method : "DELETE",
      url: '/users:id',
      data: {'id': userId}
    });

    req.done(() => console.log (`${user.name} has been removed. `))
    req.fail(() => console.log (`${user.name} could not be deleted at this time.`))

    displayUsers();
  $("#delete-user").trigger("reset");
});

// Events
$("#delete-event").submit((event) => {
  event.preventDefault();
    let eventId = $("#delete-event-id").val();
    let req = $.ajax({
      method : "DELETE",
      url: '/events:id',
      data: {'id': eventId}
    });

    req.done(() => console.log (`${event.name} has been removed. `))
    req.fail(() => console.log (`${event.name} could not be deleted at this time.`))

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
      let req = $.ajax({
        method : "GET",
        url: '/events:date',
        data: {'date': query}
      });

      req.done(() => console.log (`The following events match ${query} search.` ))
      req.fail(() => console.log (`No such events exist for ${query}.`))
      
      displayEventsByDate();
    });
  
                              // API IMPLEMENTATION

    // let keyword = "Rap";

  $("#ticket-master-search").submit((event) => {
    event.preventDefault();
    let keyword = $("#keyword-search").val();
  $.ajax({
  type:"GET",
  url:`https://app.ticketmaster.com/discovery/v2/events?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&keyword=${keyword}`,
  async:true,
  dataType: "json",
  success: ((json) => {
    console.log(json);
    let events = json._embedded.events;
    let name = events[0].name;
    let date = events[0].dates.start.localDate;
    let category = events[0].classifications[0].segment.name;
    let id = events.id;
    console.log(events[0]); 
   
                          //Display TicketMaster Functionality
   
 $("#keyword-results").html(name);
 // Parse the response.
   er.addEvent( name, date, category, id );
     displayEvents();
      // console.log("Lo hecimos??");
  }),
  error: function(xhr, status, err) {
              // This time, we do not end up here!
           }
   })
  })
// });

                      // NavBar usability
    let mainNav = document.getElementById('js-menu');
    let navBarToggle = document.getElementById('js-navbar-toggle');
    
    navBarToggle.addEventListener('click', function () {
      mainNav.classList.toggle('active');
    });

});