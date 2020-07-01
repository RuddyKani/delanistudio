$(document).ready(function () {

  $("div#developmentimage").click(function () {
    $("div#developmentimage").hide();
    $("div#development").show();
  });
  $("div#development").click(function (event) {
    $("div#development").hide();
    $("div#developmentimage").show();
  });


  $("div#productimage").click(function () {
    $("div#productimage").hide();
    $("div#productmanagement").show();
  });
  $("div#productmanagement").click(function (event) {
    $("div#productmanagement").hide();
    $("div#productimage").show();
  });


  $("div#designimage").click(function () {
    $("div#designimage").hide();
    $("div#design").show();
  });
  $("div#design").click(function (event) {
    $("div#design").hide();
    $("div#designimage").show();
  });


  $("#blackimage").mouseenter(function () {
    $("#blacktext").show();
  }).mouseleave(function () {
    $("#blacktext").hide();
  });

  $("#ontarioimage").mouseenter(function () {
    $("#ontariotext").show();
  }).mouseleave(function () {
    $("#ontariotext").hide();
  });

  $("#prismimage").mouseenter(function () {
    $("#prismtext").show();
  }).mouseleave(function () {
    $("#prismtext").hide();
  });

  $("#statsimage").mouseenter(function () {
    $("#statstext").show();
  }).mouseleave(function () {
    $("#statstext").hide();
  });

  $("#gooddayimage").mouseenter(function () {
    $("#gooddaytext").show();
  }).mouseleave(function () {
    $("#gooddaytext").hide();
  });

  $("#calculatorimage").mouseenter(function () {
    $("#calculatortext").show();
  }).mouseleave(function () {
    $("#calculatortext").hide();
  });

  $("#burnedimage").mouseenter(function () {
    $("#burnedtext").show();
  }).mouseleave(function () {
    $("#burnedtext").hide();
  });

  $("#giraffeimage").mouseenter(function () {
    $("#giraffetext").show();
  }).mouseleave(function () {
    $("#giraffetext").hide();
  });

   
  $("form#subscription").submit(function(event){
    
    var name = $("input#mce-FNAME").val();
    var email = $("input#mce-EMAIL").val();
    var message = $("textarea#mce-MESSAGE").val();
    if (name.length > 0 && email.length >0){
      alert (name + ", we have received your message. Thank you for reaching out to us.");
    }
    else {
      alert("Please enter your name and email!");
  }
    //event.preventDefault();
  });

});
