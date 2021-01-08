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

  // Handle burger button click - update 'this' burger to devoured=true
  $(".burger-button").on("click", function (event) {
    const currentBurgerId = $(this).data("id");
    const devouredVal = { devoured: true };
    $.ajax(`/api/burgers/${currentBurgerId}`, { type: "PUT", data: devouredVal }).then(function () {
      console.log(`Burger id ${currentBurgerId} updated to devoured=true`);
      location.reload();
    });
  });
});
