$(function () {
  // create new burger
  $(".add-burger-form").on("submit", function (event) {
    // Prevent page reload on submit
    event.preventDefault();

    let newBurger = { burger_name: $("#burger-input").val().trim() };
    console.log(newBurger);

    $.ajax("/api/burgers", { type: "POST", data: newBurger }).then(function () {
      console.log(`New burger ${newBurger} created.`);
      location.reload();
    });
  });
});
