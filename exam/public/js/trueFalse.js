/*
 * trueFalse.js
 * Ryan Postma, Danilo Zekovic
 * 4/22/2015
 * Create the ture false questions that will be read freom tfJson.js file
 */

true_false_form = function( jqueryMap, visited ) {

  console.log("true_false_form " + visited);
  
  var data = TRUEFALSE;  // set data to the data from tfJson.js 

  // array to keep the corect answears
  var solutions = [];


  if (visited){
    jqueryMap.$tf.show();
  }else{
    jqueryMap.$tf.show();
    for (var i = 0; i < data.length; ++i){
      // created the row to place the bootstrap collumns into it
      jqueryMap.$tf.append('<div class="row"></div>');
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
        + '<select class="form-control tf-ans" id="sel1">'
          + '<option></option>'
	  + '<option>True</option>'
	  + '<option>False</option>'
        + '</select>'
        + '</div>'
      );
    }//end for

    // adds the button to the end of the div
    // it will check the answers
    // and display the number of corect and missed questions
    var buttonString = '<div class="row">'
    + '<div class="col-xs-12 submit">'
    + '<button type="button" class="btn btn-primary btn-block submit-btn-tf">Submit</button>'
    + '</div>'
    + '</div>';
    jqueryMap.$tf.append(buttonString);
    console.log(solutions.toString());
    $('.submit-btn-tf').click({solutions:solutions},gradeTf);
  } // end if else
} // end truefalse_for


var gradeTf = function( event ) {
  var solutions = event.data.solutions;
  console.log("Submit Clicked " + solutions.toString());
  var ans = []; // array to store user answer
  var i = 0;    // to keep the place to store the value in ans array
  // move through all the input lists and get the selected value
  $('.tf-ans').each(function() {
    ans[i] = $(this).val();
    console.log(ans[i] + "<<<<<<<<<<<<<<<<<<<<<< " + i);
    i++;
  });
  var wrong = 0;
  var correct = 0;
  // check are the answers correct
  // unanswered questions will be considered wrong
  for (var j = 0; j< solutions.length; ++j){
    if (ans[j] == solutions[j]){
      console.log(">>>>>>>>>> " + ans[j] + " -------- " + solutions[j] + " true");
      correct++;
    }else{
      console.log(">>>>>>>>>> " + ans[j] + " -------- " + solutions[j]);
      wrong++;
    }
  }

  console.log("correct answers: " + correct + " wrong ans: " + wrong);
  $('.true-false').empty();
  $('.true-false').append('<div class="row">'
      + '<div class="col-xs-12">'
        + '<label class="tf-grade"></label>'
      + '</div>'
    + '</div>'
  );
  var str = 'Correct: ' + correct + ', wrong: ' + wrong;
  console.log(str);
  $('.tf-grade').html(str);
}  // end grade
