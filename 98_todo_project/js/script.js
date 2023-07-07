// $("input").on("keypress", function (event) {
//   // console.log(event);
//   if (event.which == 13) {
//     // console.log("pressed");
//     console.log(event.target.value); // gowtham
//     console.log($(this).val()); // gowtham
//   }
// });

// ! step 2

/* $("input").on("keypress", function (event) {
  if (event.which == 13) {
    // console.log($(this).val());
    let addTodo = $(this).val();
    $(this).val("");
    // console.log(addTodo);
    $("ol").append(`<li> <span>x</span> ${addTodo}</li>`);
  }
}); */

// ! step 3

$("ol").on("click", "li", function () {
  $(this).toggleClass("grey");
});

$("ol").on("click", "span", function (event) {
  $(this)
    .parent()
    .fadeOut(1000, function () {
      $(this).remove();
    });
  event.stopPropagation();
});

$("input").on("keypress", function (event) {
  if (event.which == 13) {
    let addTodo = $(this).val();
    $(this).val("");
    $("ol").append(`<li> <span>x</span> ${addTodo}</li>`);
  }
});
