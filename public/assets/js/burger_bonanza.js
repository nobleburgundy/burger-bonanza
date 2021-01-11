$(function () {
  // create new burger
  $(".add-burger-form").on("submit", function (event) {
    // Prevent page reload on submit
    event.preventDefault();

    // check input length
    let inputLength = $("#burger-input").val().length;
    console.log(inputLength);
    if (inputLength > 1 && inputLength <= 255) {
      let newBurger = { burger_name: $("#burger-input").val().trim() };

      $.ajax("/api/burgers", { type: "POST", data: newBurger }).then(function () {
        console.log(`New burger ${newBurger} created.`);
        location.reload();
      });
    } else {
      // add class 'was-validated'
      $(this).addClass("was-validated is-invalid");
    }
  });

  // Handle burger button click - update 'this' burger to devoured=true
  $(".burger-button").on("click", function () {
    const currentBurgerId = $(this).data("id");
    const devouredVal = $(this).data("devoured") === 0;
    const objToSend = { devoured: devouredVal };
    $.ajax(`/api/burgers/${currentBurgerId}`, { type: "PUT", data: objToSend }).then(function () {
      location.reload();
    });
  });

  // Handle delete button click with confirm asking 'if sure'
  $(".delete-button").on("click", function () {
    const currentBurgerId = $(this).data("id");
    const currentBurgerName = $(this).data("name");
    if (confirm(`Are you sure you want to delete the ${currentBurgerName}?`)) {
      $.ajax(`/api/burgers/${currentBurgerId}`, { type: "DELETE" }).then(function () {
        console.log(`Burger with id ${currentBurgerId} deleted`);
        location.reload();
      });
    }
  });
});
