/* match.js
 * Danilo Zekovic
 * created 3/17/2015
 * contains the logic for page 1, that will represent the match problems
 */

match_form = function( jqueryMap, visited ) {
  console.log("match_form" + visited);
  
  var data = MATCH; // set data to JSON data
  

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
      solutions[i] = data[i].value;
      $("label:last").html( question );

      // create and add answears
      $('.row:last').append('<div class="col-xs-12 col-md-6"></div>');
      $('.col-md-6:last').append(
        '<div class="form-group">'
          + '<label for="sel1">Select your answer:</label>'
	  + '<select class="form-control match-ans" id="sel1">'
	    + '<option></option>'
	  + '</select>'
        + '</div>'
      );
      // to keep track of elements already selected
      var selected = [];
      for (var k = 0; k < data.length; ++k) {
        selected[k] = false;
      }
      // loop until all the elements have been added to the list 
      while (isAllSelected(selected)){
	// get the random number between 0 and the number of elements
	var num = Math.floor((Math.random() * data.length));
	// check if the number has been selected befor if not than add it
        if(selected[num] != true){
	  $('select:last').append('<option></option>');
	  var answer = data[num].value;
	  $('option:last').html(answer);
	  selected[num] = true;
	} // end if
      } // end while
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

// to check are have all the elements already been selected
var isAllSelected = function(selected) {
  for (var i = 0; i < selected.length; ++i){
    if (selected[i]){
      continue;
    }else{
      return true;
    }
  }
  return false;
}

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
  for (var j = 0; j< solutions.length; ++j){
    if (ans[j] == solutions[j]){
      correct++;
    }else{
      wrong++;
    }
  }

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
