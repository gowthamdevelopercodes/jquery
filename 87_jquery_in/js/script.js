//? $("h1").text("changed by developer");

//* document.querySelector("h1").textContent = "changed by js";

// ? $("li").text("changed by Jquery");

//? $("li:first").text("changed by first list");

//? $("li:last").text("changed by last list");

$("ul li a").text("front end");

//? document.querySelector("h1").style.color = "white";
//? document.querySelector("h1").style.backgroundColor = "green";

$("h1").css("color", "#fff");
$("h1").css("background", "green");

// $("h1").css("fontSize", "24px");
// $("h1").css("display", "none");

let styles = {
  background: "purple",
  color: "#fff",
  textAlign: "center",
  fontSize: "50px",
  border: "2px solid #000",
  padding: "10px",
};

$("h1").css(styles);
