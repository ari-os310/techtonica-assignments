$(document).ready( () => {
    const eventRecommender = new EventRecommender(); 
    // Your code here
    // Default Users
    eventRecommender.addUser();
    
    // Default Events
    eventRecommender.addEvent();

    let mainNav = document.getElementById('js-menu');
    let navBarToggle = document.getElementById('js-navbar-toggle');
    
    navBarToggle.addEventListener('click', function () {
      mainNav.classList.toggle('active');
    });

});