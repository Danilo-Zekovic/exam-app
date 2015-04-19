/* match.js
 * Nathan Samano
 * created 4/18/2015
 * contains the logic for fillin page
 */

fillin_form = function( jqueryMap, visited ) {
  console.log("fillin_form" + visited);
  
  var data = FILLIN; // set data to JSON data
  

  // array to keep the corect answers
  var solutions = [];


  // if the page was visited just show it again
  // else create the content of the page
  if (visited){
    jqueryMap.$match.show();
  }else{
    jqueryMap.$match.show();
    // display all the statments(questions) as paragraph from the data 
    for (var i = 0; i < data.length; ++i){
      // created the row to place the bootstrap collumns into it
      jqueryMap.$match.append('<div class="row"></div>');
    
      // bootstrap collumns
      // xs for phone size will have one collumn
      // md medium desktop and grater will have two 
      $('.row:last').append('<div class="col-xs-12 col-md-6"></div>');  // append it to row div
      $('.col-md-6:last').append('<label></label>'); //append it to collumn
      var question = data[i].text;

      // set multivalue answers in array (2D array)
      for (var j = 0; j < data[i].length; ++j) {
        solutions[i] = data[i][j].value;
      }

      $("label:last").html( question );

      // create and add answears
      $('.row:last').append('<div class="col-xs-12 col-md-6"></div>');
      $('.col-md-6:last').append(
        '<div class="form-group">'
          + '<label for="answer">Type your answear:</label>'
          + '<input type="text" class="form-control" id="answer">'
        + '</div>'
      );
      
    } // end for

    // adds the button to the end of the div
    // it will check the answers 
    // and display the number of corect and missed questions
    var buttonString = '<div class="row">'
	                 + '<div class="col-xs-12 submit">'
			   + '<button type="button" class="btn btn-primary btn-block submit-btn">Submit</button>'
			 + '</div>'
		       + '</div>';
    jqueryMap.$match.append(buttonString);
    console.log(solutions.toString());
    $('.submit-btn').click({solutions:solutions},grade);
  } // end if else
} // end match_form



var checkScore = function(){
  
}

var grade = function( event ) {
  var solutions = event.data.solutions;
  console.log("Submit Clicked " + solutions.toString());

  var ans = []; // array to store user answers
  var i = 0;    // to keep the place to store the value in ans array
  // move through all the input lists and get the selected value
  $('.match-ans').each(function() {
    ans[i] = $(this).val();
    console.log($(this).val());
    i++;
  });

  var wrong = 0;
  var correct = 0;

  // check are the answers correct
  // unanswered questions will be considered wrong
  for (var j = 0; j < solutions.length; ++j){
    // test for all possible solutions in second dimension
    for (var k = 0; j < solutions[j].length; ++k) {
      // found answer
      if (ans[j] == solutions[j][k]){
        correct++;
      } 
      // if the answer is not last possible solution
      else if (k == solutions[j].length - 1 && ans[j] != solutions[j][solutions[j].length - 1]) {
        wrong++;
      } else {
        continue;
      }
    } // for k
  } // for j

  console.log("correct answers: " + correct + " wrong ans: " + wrong);
  $('.match').empty();
  $('.match').append(
     '<div class="row">'
      + '<div class="col-xs-12">'
        + '<label></label>'
      + '</div>'
    + '</div>'
  );
  var str = 'Correct: ' + correct + ', wrong: ' + wrong;
  console.log(str);
  $('label:first').html(str);
}  // end grade