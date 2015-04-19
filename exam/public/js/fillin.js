/* match.js
 * Nathan Samano
 * created 4/18/2015
 * contains the logic for fillin page
 */

fillin_form = function( jqueryMap, visited ) {
  console.log("fillin_form" + visited);
  
  var data = FILLIN; // set data to JSON data
  

  // array to keep the corect answers
  var solutionsF = [];


  // if the page was visited just show it again
  // else create the content of the page
  if (visited){
    jqueryMap.$fillin.show();
  }else{
    jqueryMap.$fillin.show();
    // display all the statments(questions) as paragraph from the data 
    for (var i = 0; i < data.length; ++i){
      // created the row to place the bootstrap collumns into it
      jqueryMap.$fillin.append('<div class="row"></div>');
    
      // bootstrap collumns
      // xs for phone size will have one collumn
      // md medium desktop and grater will have two 
      $('.row:last').append('<div class="col-xs-12 col-md-6"></div>');  // append it to row div
      $('.col-md-6:last').append('<label></label>'); //append it to collumn
      var question = data[i].text;

      // set multivalue answers in array (2D array)
      for (var j = 0; j < data[i].length; ++j) {
        solutionsF[i] = data[i][j].value;
      }

      $("label:last").html( question );

      // create and add answears
      $('.row:last').append('<div class="col-xs-12 col-md-6"></div>');
      $('.col-md-6:last').append(
        '<div class="form-group">'
          + '<label for="answer">Type your answear:</label>'
	  // fillin-ans class so that answers could be selected
          + '<input type="text" class="form-control fillin-ans" id="answer">'
        + '</div>'
      );
      
    } // end for

    // adds the button to the end of the div
    // it will check the answers 
    // and display the number of corect and missed questions
    var buttonString = '<div class="row">'
	                 + '<div class="col-xs-12 submit">'
			   + '<button type="button" class="btn btn-primary btn-block submit-btn-fillin">Submit</button>'
			 + '</div>'
		       + '</div>';
    jqueryMap.$fillin.append(buttonString);
    console.log(solutions.toString());
    $('.submit-btn-fillin').click({solutionsF:solutionsF},gradeFillin);
  } // end if else
} // end match_form



var checkScore = function(){
  
}

var gradeFillin = function( event ) {
  var solutionsF = event.data.solutionsF;
  console.log("Submit Clicked " + solutionsF.toString());

  var ans = []; // array to store user answers
  var i = 0;    // to keep the place to store the value in ans array
  // move through all the input lists and get the selected value
  $('.fillin-ans').each(function() {
    ans[i] = $(this).val();
    console.log($(this).val());
    i++;
  });

  var wrong = 0;
  var correct = 0;

  // check are the answers correct
  // unanswered questions will be considered wrong
  for (var j = 0; j < solutionsF.length; ++j){
    // test for all possible solutions in second dimension
    for (var k = 0; j < solutionsF[j].length; ++k) {
      // found answer
      if (ans[j] == solutionsF[j][k]){
        correct++;
      } 
      // if the answer is not last possible solution
      else if (k == solutionsF[j].length - 1 && ans[j] != solutionsF[j][solutionsF[j].length - 1]) {
        wrong++;
      } else {
        continue;
      }
    } // for k
  } // for j

  console.log("correct answers: " + correct + " wrong ans: " + wrong);
  $('.fillin').empty();
  $('.fillin').append(
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
