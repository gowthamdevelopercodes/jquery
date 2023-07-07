$("#idone").text("cascading style sheets");

$("#idone").css("color", "#004e92");

$(".classone").css("color", "#CAC531");

console.log($(".classone").html());

// $("li").html("<li>I hacked You </>");

// $("li").html(
//   "<li>I hacked You 1</> <li>I hacked You 2</> <li>I hacked You 3</>"
// );

// $("li").html('<a href="#">google</a>');

$("li").css("color", "red");

let list = document.querySelectorAll("li");
list.forEach((li) => (li.style.color = "purple"));

/* list.forEach((li) => {
  li.style.fontSize = "30px";
  li.style.color = "purple";
});
 */
