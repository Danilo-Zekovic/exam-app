

/* match.js
 * Nathan Samano
 * created 4/18/2015
 * contains the logic for fillin page
 */

multchoice_form = function( jqueryMap, visited ) {
  console.log("multiple_choice" + visited);
  
  //var data = multiple; // set data to JSON data
  
   var data = JSON.parse(multiple);

   var numOfQuestions = 7;
   var nums = 1;
   var count =0;
   var answers = [];
  // array to keep the corect answers
  //var solutions = [];


  // if the page was visited just show it again
  // else create the content of the page
  if (visited){
    jqueryMap.$multchoice.show();
  }else{
    jqueryMap.$multchoice.show();

 jqueryMap.$multchoice.append('<div class="row"></div>'); // had to move this outside of for loop to work, not sure why yet, I will look into it more
 //jqueryMap.$choice.append('<div class="num " id="work"></div>');
 //////////////////////////////questions displayed//////////////////////////////
 //////////////////////////////////////////////////////////////////////////////
for (var i = 0;i < numOfQuestions; i++) {
//jqueryMap.$multchoice.append('<div class="craig"></div>');
  var qtion = data[i];
  var question = qtion.text;
  answers[i] = qtion.answer;
  console.log('answer for: '+ answers[i] );
     console.log(JSON.stringify(question)); 
    

     $('.row:last').append('<br><br><div class="col-xs-12 col-md-10"></div>'); 
     $('.col-md-10:last').append('<label class="label"></label>'); //append it to collumn
     $('.label:last').html(nums + ') ' + question);
     
     //console.log('\n the answer is ' + JSON.stringify(ques.answer) + '\n'); 

    nums++;
  
   
    //////////////////////////////choices displayed///////////////////////
    //////////////////////////////////////////////////////////////////////
   //$('.craig').append('<form>');
   for (var j = 0;j < 4; j++) {
   	
   	var choices = qtion.decoys[j];
   	$('.row:last').append('<div class="col-xs-12 col-md-10"></div>');
      $('.col-md-10:last').append('<input type="radio" aria-label="..." class="rad" id="' +count +'" name="'+ i+ '" value="'+choices+'" ><label class="lab"></label><br>');
       $('.lab:last').html(choices);
   
        count++;
    
   }
 
} // ends first for loop
/////////////////////button displayed///////////////////////
  //console.log('selected: ' + )
  /*$('.rad').on('change', function() {
    alert($("input[name='num0']:checked", '.rad').());
  });
*/
var userAns = [];
$(function() {

  $('input:radio').change(function () {
    var temp = $(this).attr('name');
    if($(this).prop('checked') == true) {
    console.log($(this).val());
    userAns[temp] = $(this).val();
    console.log(userAns); 
    }
  });
});



  
var buttonString = '<div class="row">'
	                 + '<div class="col-xs-12 submit">'
			   + '<button type="button" class="btn btn-primary btn-block submit-btn-choice">Submit</button>'
			 + '</div>'
		       + '</div>';

var correct = 0;
var wrong = 0;
    jqueryMap.$multchoice.append(buttonString);
    console.log(answers.toString());
    
    $('.submit-btn-choice').click(function() {
      
          for( var i =0; i < numOfQuestions; i++) {
    if(userAns[i] === answers[i]) {
      correct++;
    }
    else {
      wrong++;
    }
}
console.log('You got ' + correct + ' correct and ' + wrong + ' wrong');

    $('.row').empty();
  $('.row').append(
     '<div class="row">'
      + '<div class="col-xs-12">'
        + '<label class="choice"></label>'
      + '</div>'
    + '</div>'
  );
  var str = 'Correct: ' + correct + ', wrong: ' + wrong;
  console.log(str);
  $('.choice:last').html(str);
    }); 
  // end if else
} // end match_form
}



