
  //You will be given a ramdom number at the start of the game.

  //2. there are a four images bellow.. 
  //...by clicking on them you will add a specific amount of point to your total score.

  //3.You win the game by matching your total score to the random number, --> 
  //<!-- you lose the game if your total score bo above to the ramdom number. -->

  //<!-- 4.The value of each image is hidden for you untill you click on it. -->

  //<!-- 5. Each time when the game start, the game will change the value of each  images -->
var imageNames = ["abuelos.jpg","nana.jpg","mom&dad.jpg", "santa2.jpg"];
var targetNumber =0; 
var imgValue = 0;
var counter = 0;

function startGame() {

   counter = 0;

   $("#crystals").empty();
//The random number shown at the start of the game  between 19 - 120.
   targetNumber = Math.floor(Math.random() * 120) + 19;

//is targeting the id in the html and inserting targetnumber between the spand tags tags
  $("#numberToGuess").text(targetNumber);

//  loop  create the four  image that i am putting in the game
  for (var i = 0; i < 4; i++) {
 
 //choose a ramdon number between 1 and 12
  	imgValue = Math.floor(Math.random() * 12) + 1;
    
    
    var imageCrystal = $("<img>").addClass("crystalImage").attr("src", "assets/images/" + imageNames[i])
    .attr("data-imagevalue", imgValue);
    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(imageCrystal);
  }

}


    // Now for the hard part. Creating multiple crystals each with their own unique number value.
startGame()
  // Next we create a for loop to create crystals for every numberOption.

// This time, our click event applies to every single crystal on the page. Not just one.
  $(document).on("click", ".crystalImage", function() {


    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .data("crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // (It automatically strips the "data-" part).
   var crystalValue = ($(this).data("imagevalue"));

    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter = counter + crystalValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    $("#score").html("<h1>New score: " + counter + "</h1>");

    if (counter === targetNumber) {
      $("#message").html("<h1>You win! Now try to get the new number!</h1>");
      startGame()
      //this is when you would refresh the values 
      //you would set the variables to new values 
    }

    else if (counter > targetNumber) {
      $("#message").html("<h1>You lose! You can try again!</h1>");
      startGame()
    } 
    else {
    	$("#message").html("<h1>Keep going!</h1>");
    }

  });

  