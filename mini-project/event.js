class Event {
    constructor(name, description, date) {
      this.name = name;
      this.description = description;
      this.availableTickets = []
      this.eventDate = date;
    };

     addAvailableTickets(seat,price) {
        this.availableTickets.push(new TicketType(seat, price));
    } 

    allTickets(){
        
    }    
  } 

  class TicketType {
    constructor(seat, price) {
        this.seat = seat;
        this.price = price;
    }
}

  const eventObj1 = new Event("KLOS Golden Gala", "An evening with hollywood vampires");
  const eventObj2 = new Event("Skillet & Sevendust", "Victorious war tour");
  const eventObj3 = new Event("Jenny Lewis", "On the line tour 2019");

  const eventArray = new Array();
  eventArray.push(eventObj1, eventObj2, eventObj3);
//   console.log(eventArray);
    
        /* Adding diff types of event tickets */
    eventObj1.addAvailableTickets("human", 299);
    eventObj1.addAvailableTickets("vampire", 99);
    eventObj2.addAvailableTickets("General Admission", 25)
   eventObj2.addAvailableTickets("Floor Seating", 80)
   eventObj3.addAvailableTickets("Orchestra", 300)
   eventObj3.addAvailableTickets("Mezzanine", 200)
   eventObj3.addAvailableTickets("Balcony", 100)
  
  
  
  $(document).ready(function() {
    let html = "";
    $.each(eventArray, function(index, item) {
      html+= `<li>${item.name} - ${item.description}</li>`;
    });
    // insert final html into #event...
    $("#event").html(html);
  });