// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".display-burger").on("click", function(event) {
    var id = $(this).data("id");

    // Send the PUT request?
    $.ajax("/api/burger/" + id, {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("New burger added");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".burgerDwn").on("click", function(event) {
    //preventDefault 
    event.preventDefault();

    var id = $(this).data("id");
    var devouredEvent = {
      devoured: 1
    };

    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: devouredEvent 
    }).then(
      function() {
        console.log("Devoured");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-burg").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burger_name/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted burger_name", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
