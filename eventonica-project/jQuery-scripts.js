$(document).ready( () => {
    const eventRecommender = new EventRecommender(); 
    // Your code here
    // Default Users
    eventRecommender.addUser("XELA", "323");
    
    // Default Events
    eventRecommender.addEvent();

    // NavBar usability
    let mainNav = document.getElementById('js-menu');
    let navBarToggle = document.getElementById('js-navbar-toggle');
    
    navBarToggle.addEventListener('click', function () {
      mainNav.classList.toggle('active');
    });

    // $("#delete-event input[type='submit']").click(function(e) {
    //     //this is to prevent the page from reloading
    //     e.preventDefault();
});