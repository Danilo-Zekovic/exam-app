

/* match.js
 * Nathan Samano
 * created 4/18/2015
 * contains the logic for fillin page
 */

multchoice_form = function( jqueryMap, visited ) {
  //console.log("multiple_choice" + visited);
  
  var data = JSON.parse(multiple);

  var numOfQuestions = 7;
  var nums = 1;
  var count =0;
  var answers = [];
  var userAns = [];
  
  // if the page was visited just show it again
  // else create the content of the page
  if (visited){
    jqueryMap.$multchoice.show();
  }else {
    jqueryMap.$multchoice.show();

    jqueryMap.$multchoice.append('<div class="row"></div>'); // had to move this outside of for loop to work, not sure why yet, I will look into it more
 
 //////////////////////////////questions displayed//////////////////////////////
 //////////////////////////////////////////////////////////////////////////////
    for (var i = 0;i < numOfQuestions; i++) {
      var qtion = data[i];
      var question = qtion.text;
      answers[i] = qtion.answer;
      //console.log('answer for: '+ answers[i]);
      //console.log(JSON.stringify(question)); 
    

      $('.row:last').append('<br><br><div class="col-xs-12 col-md-10"></div>'); 
      $('.col-md-10:last').append('<label class="label"></label>'); //append it to collumn
      $('.label:last').html(nums + ') ' + question);
     
      nums++;
    //////////////////////////////choices displayed///////////////////////
    //////////////////////////////////////////////////////////////////////
        for (var j = 0;j < 4; j++) {
   	
   	      var choices = qtion.decoys[j];
   	      $('.row:last').append('<div class="col-xs-12 col-md-10"></div>');
          $('.col-md-10:last').append('<input type="radio" aria-label="..." class="rad" id="' +count +'" name="'+ i+ '" value="'+choices+'" ><label class="lab"></label><br>');
          $('.lab:last').html(choices);
   
          count++;
    
        } // end of second for loop
 
    } // ends first for loop

  
    $(function() {
      $('input:radio').change(function () {
        var temp = $(this).attr('name');
        if($(this).prop('checked') == true) {
          //console.log($(this).val());
          userAns[temp] = $(this).val();
          //console.log(userAns); 
        }
      });
    });

  /////////////////////button displayed///////////////////////
///////////////////////////////////////////////////////////
    var buttonString = '<div class="row">'
	     + '<div class="col-xs-12 submit">'
			 + '<button type="button" class="btn btn-primary btn-block submit-btn-choice">Submit</button>'
			 + '</div>'
		   + '</div>';

    var correct = 0;
    var wrong = 0;
    jqueryMap.$multchoice.append(buttonString);
    //console.log(answers.toString());
     //ends else

    
    ////////////////////////////////////////////
    //////Once button is clicked///////////////
    $('.submit-btn-choice').click(function() {
      var answeredAll = true;
      for( var i =0; i < numOfQuestions; i++) {
        if(userAns[i] === answers[i]) {
          correct++;
        }
        else if(userAns[i] == null) {
           answeredAll = false;
           alert('You did not answer every question');
           correct = 0;
           wrong = 0;
          
         
        }
        else {
          wrong++;
      }
    }
    

    //console.log('You got ' + correct + ' correct and ' + wrong + ' wrong');
      if(answeredAll === true) {
        $('.multiple-choice').empty();
        $('.multiple-choice').append(
         '<div class="row">'
          + '<div class="col-xs-12">'
          + '<label class="choice"></label>'
          + '</div>'
          + '</div>'
        );
        var str1 = 'Correct: ' + correct + ', wrong: ' + wrong;
        //console.log(str);
        $('.choice:last').html(str1);
      }
    }); 
  
}
} // ends form
     // end of else statement

   // end of choice form



