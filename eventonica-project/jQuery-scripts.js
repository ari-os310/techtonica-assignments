$(document).ready( () => {
    const eventRecommender = new EventRecommender(); 
    // Your code here
                          // Default Users
    eventRecommender.addUser("XELA", 323);
    eventRecommender.addUser("Nkiru", 515);
    eventRecommender.addUser("RGBM", 333);
    
                        // Default Events
    eventRecommender.addEvent("Emo Fantasy", "2020-2-20", "Music", 022);

                        // display Users && Events
            displayUsers();
            
    function displayUsers() {
      let defaultUser = "";
        for (let user of eventRecommender.users) {
          defaultUser += `<li>${user.name}</li>`;
      }
      $("#all-users").html(defaultUser);
    }

            displayEvents();

    function displayEvents() {
      let defaultEvent = "";
        for (let event of eventRecommender.events) {
          defaultEvent += `<li>${event.name + " | " + event.category + 
          " | " + event.date + " | " + event.id}</li>`;
      }
      $("#all-events").html(defaultEvent);
  }
  

                      // Adding Users & Events
// Users
$("#add-user").submit((event) => {
    event.preventDefault();
      let id = $("#add-user-id").val();
      let name = $("#add-user-name").val();
       eventRecommender.addUser(name, id);
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
  eventRecommender.addEvent(name, date, category, id);
    displayEvents();
  $("#add-event").trigger("reset");
});



                      // NavBar usability
    let mainNav = document.getElementById('js-menu');
    let navBarToggle = document.getElementById('js-navbar-toggle');
    
    navBarToggle.addEventListener('click', function () {
      mainNav.classList.toggle('active');
    });

});