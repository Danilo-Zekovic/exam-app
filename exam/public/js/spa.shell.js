/* 
 * spa.shell.js
 * Danilo Zekovic
 * Makes the logic of the app going
 * app is meant to represent the online version of the exam
 */

/*jslint         browser : true, continue : true,
  devel  : true, indent  : 2,    maxerr   : 50,
  newcap : true, nomen   : true, plusplus : true,
  regexp : true, sloppy  : true, vars     : false,
  white  : true
 */

  spa.shell = (function () {
  //------------------BEGIN MODULE SCOPE VAR--------------
  
  var
    configMap = {
      main_html : String()
	+ '<nav class="navbar navbar-inverse navbar-fixed-top">'
	  + '<div class="container-fluid">'
	    + '<div class="navbar-header">'
	      + '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">'
	        + '<span class="sr-only">Toggle navigation</span>'
	        + '<span class="icon-bar"></span>'
	        + '<span class="icon-bar"></span>'
	        + '<span class="icon-bar"></span>'
	        + '<span class="icon-bar"></span>'
	      + '</button>'
	      + '<a class="navbar-brand" href="#">ExamApp</a>'
	    + '</div>'
	    + '<div id="navbar" class="navbar-collapse collapse" aria-expanded="false" styleheight: 1px;">'
	      + '<ul class="nav navbar-nav">'
	        + '<li class="active"><a href="#">Home</a></li>'
	        + '<li class="matchbtn" ><a href="#/match">Match</a></li>'
	        + '<li><a class="page2" href="#/page2">Nathan</a></li>'
	        + '<li><a class="page3" href="#/page3">Craig</a></li>'
		+ '<li><a class="page4" href="#/page4">Ryan</a></li>'
	      + '</ul>'
	    + '</div>'
	  + '</div>'
	+ '</nav>'
	+ '<div class="container main-container">'
	  + '<div class="container match"></div>'
	  + '<div class="container short-ans"></div>'
	  + '<div class="container multiple-choice"></div>'
	  + '<div class="container true-false"></div>'
	+ '</div>'
    },
    stateMap = { $container : null },
    jqueryMap = {},
    // to keep track of visited pages
    visited = {
      home  : false,
      match : false,
      page2 : false,
      page3 : false,
      page4 : false
    },
    onTapList, hideDiv,
    setJqueryMap, initModule;
  //------------------END MODULE SCOPE VAR----------------

  //------------------BEGIN UTILITY METHODS---------------
  
  // hide any div in $main
  hideDiv = function () {
    jqueryMap.$match.hide();
    jqueryMap.$multiC.hide();
    jqueryMap.$fillin.hide();
    jqueryMap.$tf.hide();
  }

  //------------------END UTILITY METHODS-----------------

  //------------------BEGIN DOM METHODS-------------------

  setJqueryMap = function () {
    var $container = stateMap.$container;
    jqueryMap = {
      $container     : $container,
      $menu          : $container.find('.cem-shell-list-menu'),
      $mbt           : $container.find('.matchbtn'),
      $p2bt          : $container.find('.page2'),
      $p3bt          : $container.find('.page3'),
      $p4bt          : $container.find('.page4'),
      $main          : $container.find('.main-container'),
      $match         : $container.find('.match'),
      $fillin        : $container.find('.short-ans'),
      $multiC        : $container.find('.multiple-choice'),
      $tf            : $container.find('.true-false'),
      $nav           : $container.find('.nav-navbar')
    }
  };  // end setJqueryMap

  //------------------END DOM METHODS---------------------
  
  //------------------BEGIN EVENT HANDLERS----------------
  
  // switch to page1
  pageOne = function( event ) {
    console.log("Match clicked");
    console.log(document.location.hash);
   
    hideDiv();

    jqueryMap.$main.append(match_form( jqueryMap, visited.match ));

    visited.match = true; // when page visited change it to true
  }

  pageTwo = function ( event ) {
    console.log("Page2 clicked " + visited.page2);
    console.log(document.location.hash);
    
    hideDiv();

    visited.page2 = true;
  }

  pageThree = function ( event ) {
    console.log("Page3 clicked " + visited.page3);
    console.log(document.location.hash);
    hideDiv();   // hide any div thet is showing in $main
    visited.page3 = true;
  }

  pageFour = function ( event ) {
    console.log("Page4 clicked " + visited.page4);
    console.log(document.location.hash);
    hideDiv();
    visited.page4 = true;
  }

  onTapList = function ( event ) {
    // React to taps on menu in nav div
    var menu_item  = $(this).data("id");
    console.log('Tapped on ' + menu_item);
    console.log("click");
    switch(menu_item) {

      case 'match':
        console.log("match clicked");
	break;
      case 'page1': 
	console.log("page1");
	break;
      case 'page2':
	console.log("page2");
	break;
      case 'page3':
	console.log("page3");
	break;
      case 'page4':
	console.log("page4");
	break;
    }
    return false;
  }; // end onTapList
  //------------------END EVENT HANDLERS------------------
  
  //------------------BEGIN PUBLIC METHODS----------------
  
  initModule = function ( $container ) {
    stateMap.$container = $container;
    $container.html( configMap.main_html );
    setJqueryMap();
    
    jqueryMap.$nav.bind( 'click', onTapList   ); 
    jqueryMap.$mbt.click(pageOne);
    jqueryMap.$p2bt.click(pageTwo);
    jqueryMap.$p3bt.click(pageThree);
    jqueryMap.$p4bt.click(pageFour);


    // trying to make routing work
    //jqueryMap.$menu.bind( 'click', onTapList );
  };
  

  return { initModule : initModule };
  //------------------END PUBLIC METHODS------------------

}());
