$(document).ready(() => {
  const er = new EventRecommender();
  const APIKey = "7elxdku9GGG5k8j0Xm8KWdANDgecHMV0";
  // Your code here

  // DISPLAY ALL
  // Display Users
  function displayUsers() {
    let req = $.ajax({
      method: "GET",
      url: "/users"
    });

    req.done(users => {
      let defaultUser = "";
      for (let user of users) {
        defaultUser += `<li> ID: ${user.id} ${user.name}</li>`;
      }
      $("#all-users").html(defaultUser);
    });
  }
  displayUsers();

  // Display Events
  function displayEvents() {
    let req = $.ajax({
      method: "GET",
      url: "/events"
    });

    req.done(events => {
      let defaultEvent = "";
      for (let event of events) {
        defaultEvent += `<li>${event.name}  |   ${event.category} 
           |  ${event.date}  |   ${event.id}</li>`;
      }
      $("#all-events").html(defaultEvent);
    });
  }
  displayEvents();

  // INSERT / POST
  // Add Users
  $("#add-user").submit(user => {
    user.preventDefault();
    let name = $("#add-user-name").val();
    let id = $("#add-user-id").val();

    let req = $.ajax({
      method: "POST",
      url: "/users",
      data: { name: name, id: id },
      contentType: "application/x-www-form-urlencoded"
    });

    req.done(() => {
      console.log(`${name} has been added. `);
      displayUsers();
    });
    req.fail(() => console.log(`${name} could not be added at this time.`));

    $("#add-user").trigger("reset");
    displayUsers();
  });

  // Add Events
  $("#add-event").submit(event => {
    event.preventDefault();
    let name = $("#add-event-name").val();
    let date = $("#add-event-date").val();
    let category = $("#add-event-category").val();
    let id = $("#add-event-id").val();

    let req = $.ajax({
      method: "POST",
      url: "/events",
      data: { name: name, date: date, category: category, id: id },
      contentType: "application/x-www-form-urlencoded"
    });

    req.done(() => {
      console.log(`${name} has been added. `);
      displayEvents();
    });
    req.fail(() => console.log(`${name} could not be added at this time.`));

    displayEvents();
    $("#add-event").trigger("reset");
  });

  // DELETE
  // Delete Users
  $("#delete-user").submit(user => {
    user.preventDefault();
    console.log("inside delete user jquery user:", user);
    let userId = { id: $("#delete-user-id").val() };
    let req = $.ajax({
      method: "DELETE",
      url: "/users:id",
      data: userId
    });

    req.done(() => {
      console.log(`${user.name} has been removed. `);
      displayUsers();
    });
    req.fail(() =>
      console.log(`${user.name} could not be deleted at this time.`)
    );

    $("#delete-user").trigger("reset");
    displayUsers();
  });

  // Delete Events
  $("#delete-event").submit(event => {
    event.preventDefault();
    let eventId = $("#delete-event-id").val();
    let req = $.ajax({
      method: "DELETE",
      url: "/events:id",
      data: { id: eventId }
    });

    req.done(() => {
      console.log(`${event.name} has been removed. `);
      displayEvents();
    });
    req.fail(() =>
      console.log(`${event.name} could not be deleted at this time.`)
    );

    displayEvents();
    $("#delete-event").trigger("reset");
  });

  // API IMPLEMENTATION

  // let keyword = "Rap";

  $("#ticket-master-search").submit(event => {
    event.preventDefault();
    let keyword = $("#keyword-search").val();
    $.ajax({
      type: "GET",
      url: `https://app.ticketmaster.com/discovery/v2/events?apikey=${APIKey}&keyword=${keyword}`,
      async: true,
      dataType: "json",
      success: json => {
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
        er.addEvent(name, date, category, id);
        displayEvents();
        // console.log("Lo hecimos??");
      },
      error: function(xhr, status, err) {
        // This time, we do not end up here!
      }
    });
  });
  // });

  // NavBar usability
  let mainNav = document.getElementById("js-menu");
  let navBarToggle = document.getElementById("js-navbar-toggle");

  navBarToggle.addEventListener("click", function() {
    mainNav.classList.toggle("active");
  });
});
