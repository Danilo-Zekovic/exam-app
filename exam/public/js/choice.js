

/* match.js
 * Nathan Samano
 * created 4/18/2015
 * contains the logic for fillin page
 */

multchoice_form = function( jqueryMap, visited ) {
  console.log("multtiple_choice" + visited);
  
  //var data = multiple; // set data to JSON data
  

  // array to keep the corect answers
  //var solutions = [];


  // if the page was visited just show it again
  // else create the content of the page
  if (visited){
    jqueryMap.$multchoice.show();
  }else{
    jqueryMap.$multchoice.show();



    

	var numOfQuestions = 7;
    var nums = 1;
    var count =0;

  var data = JSON.parse(multiple);

 jqueryMap.$multchoice.append('<div class="craig"></div>'); // had to move this outside of for loop to work, not sure why yet, I will look into it more
 //jqueryMap.$choice.append('<div class="num " id="work"></div>');
 //////////////////////////////questions displayed//////////////////////////////
 //////////////////////////////////////////////////////////////////////////////
for (var i = 0;i < numOfQuestions; i++) {

  var qtion = data[i];
  var question = qtion.text;
  var answer = qtion.answer;
     console.log(JSON.stringify(question)); 
    

     $('.craig').append('<br><br><div class="cmp"></div>'); 
     $('.cmp:last').html(nums + ') ' + question);
     
     //console.log('\n the answer is ' + JSON.stringify(ques.answer) + '\n'); 

    nums++;
  
   
    //////////////////////////////choices displayed///////////////////////
    //////////////////////////////////////////////////////////////////////
   //$('.craig').append('<form>');
   for (var j = 0;j < 4; j++) {
   	
   	var choices = qtion.decoys[j];
   	// added this so that I could add a form tag at the beginning
   
    	 $('.craig').append(
        '<input type="radio" aria-label="..." class="rad" choicenum="Sec' + i +'" name="num'+i+'"><label id="' +count +'"class="lab"></label><br>');

        $('.lab:last').html(choices);
        console.log('    ' + JSON.stringify(qtion.decoys[j]));
    //
   count++;
   //$('form > input').each(function(){
    //$(this).next('label').andSelf().wrapAll('<div class="test"/>');
   //});

   }
   
   	 //$('#num0').wrapAll('<form class="trial"></form>');
   
  
   
   //$('.craig:last').append('</form>');
    // ends second for loop
  

} // ends first for loop
/////////////////////button displayed///////////////////////



var buttonString = '<div class="row">'
	                 + '<div class="col-xs-12 submit">'
			   + '<button type="button" class="btn btn-primary btn-block submit-btn-fillin">Submit</button>'
			 + '</div>'
		       + '</div>';
    jqueryMap.$multchoice.append(buttonString);
    //console.log(solutions.toString());
    //console.log(solutions[4][1] + " should be Alan Shepherd");
    //$('.submit-btn-choice').click({solutions:solutions},gradeChoice);

  } // end if else
} // end match_form





/*var gradeChoice = function( event ) {
  var solutions = event.data.solutions;
  //console.log("Submit Clicked " + solutions.toString());

  var ans = []; // array to store user answers
  var i = 0;    // to keep the place to store the value in ans array
  // move through all the input lists and get the selected value
  $('.choice-ans').each(function() {
    ans[i] = $(this).val();
    //console.log($(this).val());
    i++;
  });

  var wrong = 0;
  var correct = 0;
  var prev_correct = 0;

  // check are the answers correct
  // unanswered questions will be considered wrong
  for (var j = 0; j < solutions.length; ++j){
    // test for all possible solutions in second dimension
    for (var k = 0; k < solutions[j].length; ++k) {
      //console.log(solutions[j][k]);
      // found answer
      if (ans[j] == solutions[j][k]){
        prev_correct = correct;
        correct++;
      } 
      // if the answer is not last possible solution and a correct answer wasn't already found
      else if (k == solutions[j].length - 1 && ans[j] != solutions[j][k] && prev_correct == correct) {
        //console.log(k + "   " +solutions[j].length);
        //console.log("hey dude look here -> " + ans[j] + " =? " + solutions[j][k]);
        wrong++;
      } else {
        continue;
      }
    } // for k
    // set the prev_correct to be the same as correct before checking next question
    prev_correct = correct;
  } // for j

  //console.log("correct answers: " + correct + " wrong ans: " + wrong);
  $('.fillin').empty();
  $('.fillin').append(
     '<div class="row">'
      + '<div class="col-xs-12">'
        + '<label class="fillin-grade"></label>'
      + '</div>'
    + '</div>'
  );
  var str = 'Correct: ' + correct + ', wrong: ' + wrong;
  //console.log(str);
  $('.fillin-grade').html(str);
}  // end grade
*/