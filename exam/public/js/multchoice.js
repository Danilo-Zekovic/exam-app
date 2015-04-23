/* multchoice.js
 * Nathan Samano
 * created 4/22/2015
 * contains the logic for multchoice page
 */

mult_choice_form = function( jqueryMap, visited ) {
  console.log("mult_choice_form" + visited);
  
  var data = MULT_CHOICE; // set data to JSON data
  

  var solutions = [];  // array to keep the corect answers
  var decoys = [];     // array to keep the decoy answers
  var choices = [];    // array to keep both correct and decoy answers


  // if the page was visited just show it again
  // else create the content of the page
  if (visited){
    jqueryMap.$multChoice.show();
  }else{
    jqueryMap.$multChoice.show();

    // set data for proper use (have to separate from instantiation of divs
    //   due to the need of shuffling after the data has fully populated arrays)

    // display all the statments(questions) as paragraph from the data 
    for (var i = 0; i < data.length; ++i){
       
      var question = data[i].text;    // set the text values to question
      solutions[i] = data[i].answer;  // set the answer values to solutions

      decoys[i]  = []; // make decoys  a 2D array
      choices[i] = []; // make choices a 2D array

      // set multivalue decoys in array (2D array)
      for (var j = 0; j < data[i].decoys.length; ++j) {
        decoys[i][j] = data[i].decoys[j];
      }

      // put answer and decoys in same array
      choices[i][0] = data[i].answer;
      //console.log("This should be an answer: " + choices[i][0]);
      for (var j = 0; j < data[i].decoys.length; ++j) {
        //console.log("About to put this value in choices: " + data[i].decoys[j]);
        choices[i][j+1] = data[i].decoys[j];
      }
      //console.log("LOOK HERE=====>> " + choices.toString());
      
    } // end for

    // shuffle the choices
    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex ;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    } // shuffle()

    console.log("Unshuffled choices: " + choices.toString());
    for (var i = 0; i < choices.length; ++i) {
      shuffle(choices[i]);
    }
    console.log("Shuffled choices: " + choices.toString());


    console.log("Data has been instantiated!");


    // display all the statments(questions) as paragraph from the data 
    for (var i = 0; i < data.length; ++i){
      // created the row to place the bootstrap collumns into it
      jqueryMap.$multChoice.append('<div class="row"></div>');
    
      // bootstrap collumns
      // xs for phone size will have one collumn
      // md medium desktop and grater will have two 
      $('.row:last').append('<div class="col-xs-12 col-md-6"></div>');  // append it to row div
      $('.col-md-6:last').append('<label></label>'); //append it to collumn
    
      $("label:last").html( question );

      // create and add answears
      $('.row:last').append('<div class="col-xs-12 col-md-6"></div>');
      $('.col-md-6:last').append(
        // Bootstrap checkboxes
        '<div class="radio">'
          + '<label><input class="multChoice-ans" id="c1" type="radio" name="optradio" value="">'+choices[i][0]+'</label>'
        + '</div>'
        + '<div class="radio">'
          + '<label><input class="multChoice-ans" id="c2" type="radio" name="optradio" value="">'+choices[i][1]+'</label>'
        + '</div>'
        + '<div class="radio">'
          + '<label><input class="multChoice-ans" id="c3" type="radio" name="optradio" value="">'+choices[i][2]+'</label>'
        + '</div>'
        + '<div class="radio">'
          + '<label><input class="multChoice-ans" id="c4" type="radio" name="optradio" value="">'+choices[i][3]+'</label>'
        + '</div>'
      );
      
      $('#c1').val(choices[i][0]);
      $('#c2').val(choices[i][1]);
      $('#c3').val(choices[i][2]);
      $('#c4').val(choices[i][3]);
      console.log("checking value in first slot " + $('#c1').val());

    } // end for


    // adds the button to the end of the div
    // it will check the answers 
    // and display the number of corect and missed questions
    var buttonString = 
      '<div class="row">'
	      + '<div class="col-xs-12 submit">'
			    + '<button type="button" class="btn btn-primary btn-block submit-btn-multChoice">Submit</button>'
			  + '</div>'
		  + '</div>';
    jqueryMap.$multChoice.append(buttonString);
    $('.submit-btn-multChoice').click({solutions:solutions},gradeMultChoice);
  } // end if else
} // end match_form



var gradeMultChoice = function( event ) {
  var solutions = event.data.solutions;
  console.log("Submit Clicked " + solutions.toString());

  var ans = []; // array to store user answers
  var i = 0;    // to keep the place to store the value in ans array

  // move through all the input lists and get the selected value
  $('.multChoice-ans').each(function() {
    console.log("Hey I am actually in this function!!!");

    // test all four options for checked (code needs to be optimized)
    if ($(this).is(':checked') && $(this).attr('id') == 'c1') {
      console.log("testing if if checked works + " + $(this).attr('id'));
      ans[i] = $('#c1').val();
      i++;
    }
    else if ($(this).is(':checked') && $(this).attr('id') == 'c2') {
      console.log("testing if if checked works + " + $(this).attr('id'));
      ans[i] = $('#c2').val();
      i++;
    }
    else if ($(this).is(':checked') && $(this).attr('id') == 'c3') {
      console.log("testing if if checked works + " + $(this).attr('id'));
      ans[i] = $('#c3').val();
      i++;
    }
    else if ($(this).is(':checked') && $(this).attr('id') == 'c4') {
      console.log("testing if if checked works + " + $(this).attr('id'));
      ans[i] = $('#c4').val();
      i++;
    }
    else {
      i++;
    }

      //ans[i] = $(this).val();
      //console.log($('#c1').val() + " <===");
  
  });

  var wrong = 0;
  var correct = 0;

  // check are the answers correct
  // unanswered questions will be considered wrong
  for (var j = 0; j < solutions.length; ++j){
    if (ans[j] == solutions[j]){
      correct++;
    }else{
      wrong++;
    }
  }

  console.log("Answers you selected are: " + ans.toString());

  console.log("correct answers: " + correct + " wrong ans: " + wrong);
  $('.multChoice').empty();
  $('.multChoice').append(
     '<div class="row">'
      + '<div class="col-xs-12">'
        + '<label class="multChoice-grade"></label>'
      + '</div>'
    + '</div>'
  );
  var str = 'Correct: ' + correct + ', wrong: ' + wrong;
  console.log(str);
  $('.multChoice-grade').html(str);
}  // end grade
