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
    $("ol").append(
      `<li> <span> <i class="far fa-times-circle"></i> <span/> ${addTodo} </li>`
    );
  }
});
