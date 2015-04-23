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
    jqueryMap.$tf.append('<p>Danilo</p>');
  }
}
