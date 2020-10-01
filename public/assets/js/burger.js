$(document).ready(function () {
  
  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var addBurger = {
      burger_name: $("#ca").val().trim(),
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: addBurger
    }).then(
      function() {
        location.reload();
      }
    );
  });

  
  $(".eatburger").on("click", function(event) {
    event.preventDefault();

    var id = $(this).data("id");
    var devouredState = {
        devoured: 1
    };

    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredState
    }).then(function() {
  
        location.reload();
    });
  });

  $(".trashburger").on("click", function(event) {
    event.preventDefault();
    
    var id = $(this).data("id");

    $.ajax({
        type: "DELETE",
        url: "/api/burgers/" + id
    }).then(location.reload());
  });


});