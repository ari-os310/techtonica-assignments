$(document).ready( () => {
    const eventRecommender = new EventRecommender(); 
    // Your code here
                          // Default Users
    eventRecommender.addUser("XELA", 323);
    eventRecommender.addUser("Nkiru", 515);
    eventRecommender.addUser("RGBM", 333);
    
                        // Default Events
    eventRecommender.addEvent("Emo Fantasy", "2020-2-20", "Music", 022);

                        // display Users
            displayUsers();
  
    function displayUsers() {
      let defaultUser = "";
        for (let user of eventRecommender.users) {
          defaultUser += `<li>${user.name}</li>`;
      }
      $("#all-users").html(defaultUser);
    }

                      // NavBar usability
    let mainNav = document.getElementById('js-menu');
    let navBarToggle = document.getElementById('js-navbar-toggle');
    
    navBarToggle.addEventListener('click', function () {
      mainNav.classList.toggle('active');
    });

});