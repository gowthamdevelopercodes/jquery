$("h1").mouseover(() => {
  console.log("mouse over is working");
});

$("h1").on("mouseover", function () {
  $(this).css("font-weight", "bold");
});

$("h1").on("click", function () {
  $(this).hide();
});
