/* $("li").on("click", function () {
  $("li").css("color", "yellow");
  $("li").css("text-decoration", "line-through");
}); */

/* $("ul li").on("click", function () {
    $(this).css("color", "yellow");
    $(this).css("text-decoration", "line-through");
  }); */

//?  object like css

/* $("li").on("click", function () {
  $(this).css("color", "yellow");
  $(this).css("text-decoration", "line-through");
});

$("li").on("click", function () {
  $(this).css({
    color: "red",
    textDecoration: "lineThrough",
  });
});
 */

// ? checing console

/* $("li").on("click", function () {
  console.log($(this).css("color"));
}); */

//? conditon based color changing

/* $("li").on("click", function () {
  if ($(this).css("color") === "rgb(255, 255, 0)") {
    $(this).css({
      color: "#fff",
      textDecoration: "none",
      display: "none",
    });
  } else {
    $(this).css({
      color: "yellow",
      textDecoration: "line-through",
    });
  }
}); */

// ? using toggleClass

$("li").on("click", function () {
  $(this).toggleClass("grey");
});
