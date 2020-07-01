$(document).ready(function(){
  
  $("div#developmentimage").click(function(){     
    $("div#developmentimage").hide();
    $("div#development").show();
  });
  $("div#development").click(function(event){
    $("div#development").hide();
    $("div#developmentimage").show();    
  });


  $("div#productimage").click(function(){       
    $("productimage").hide();
    $("div#productmanagement").show();
  });
  $("div#productmanagement").click(function(event){
    $("div#productmanagement").hide();
    $("div#productimage").show();    
  });


  $("div#designimage").click(function(){ 
    $("div#designimage").hide();
    $("div#design").show();
  });
  $("div#design").click(function(event){
    $("div#design").hide();
    $("div#designimage").show();    
  });
});
