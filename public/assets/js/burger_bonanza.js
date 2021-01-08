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
  $(".burger-button").on("click", function () {
    const currentBurgerId = $(this).data("id");
    const devouredVal = $(this).data("devoured") === 0;
    const objToSend = { devoured: devouredVal };
    $.ajax(`/api/burgers/${currentBurgerId}`, { type: "PUT", data: objToSend }).then(function () {
      console.log(`Burger id ${currentBurgerId} updated to devoured=true`);
      location.reload();
    });
  });
});
