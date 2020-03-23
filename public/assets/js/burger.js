// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".display-burger").on("click", function (event) {
    var id = $(this).data("id");
    var newDev = $(this).data("devoured");

    var newDevState = {
      devoured: newDev
    };

    // Send the PUT +request?
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: newDevState,
    }).then(
      function () {
        console.log("Change to devoured");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $("#submtB").on("click", function (event) {
    //preventDefault 
    event.preventDefault();
    var newBurger = {
      burger_name: $("#zBurger").val().trim(),

    };

    // Send the POST request.
    if (newBurger) {
      $.ajax("/api/burger", {
        type: "POST",
        data: newBurger
      }).then(
        function () {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    }
  });
  $(".delete-burg").on("click", function (event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burger/" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("deleted burger_name", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});