// ? using toggleClass

/* $("li").on("click", function () {
  $(this).toggleClass("grey");
}); */

// ! span tag fadeout animation

/* $("span").on("click", function () {
  // alert("span tag is triggered");
  $(this).fadeOut(1000);
});
 */
// ! stop propogation

/* $("ul").on("click", function () {
  alert("this is from ul");
});

$("div").on("click", function () {
  alert("this is from div");
});

$("body").on("click", function () {
  alert("this is from body");
}); */

//  ? span, using stop propogation to the parent element, lock the propogation

/* $("span").on("click", function (event) {
  // alert("using stop propagation");
  event.stopPropagation();
  $(this).remove();
}); */

//  ! not using these type, its an error

$("span").on("click", function (event) {
  // $(this).('li');   // error
  event.stopPropagation();
});

// ! remove

/* $("span").on("click", function (event) {
  $(this).parent().remove();
  event.stopPropagation();
}); */

// ? fadeOut

$("span").on("click", function (event) {
  $(this).parent().fadeOut(1000);
  event.stopPropagation();
});

// ! at same time using both fadeout and remove
// ? remove action is initially triggered before the fadeout animation
// ** then  li element hide

$("span").on("click", function (event) {
  $(this).parent().fadeOut(1000).remove();
  event.stopPropagation();
});

// ! using callback function to solve this problem
// ? li element is totally removed

$("span").on("click", function () {
  $(this)
    .parent()
    .fadeOut(1500, function () {
      $(this).remove();
    });
});
