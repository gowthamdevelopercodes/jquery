$("img").attr("width", "400px");

/* $("img").attr(
  "src",
  "https://cdn.pixabay.com/photo/2017/02/20/14/18/technology-2082642_1280.jpg"
); */

// $("input").attr("value", "some value");

// $("input").val("enter your content")

//? Add class

// $("input").addClass("added");
$("li").addClass("added");
$("a").addClass("added");

//? remove class

// $("input").removeClass("added");

$("h1").removeClass("added");

document.querySelector("h1").addEventListener("click", () => {
  console.log("clicked");
});

$("h1").click(function(){
  // this.CSS("background", "pink"); // using this keyword created an error
  $(this).css("background", "pink");
});
