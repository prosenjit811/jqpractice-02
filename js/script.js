/*============jQ=========*/ 
$(document).ready(function(){
	// ex-01
	$( "#draggable" ).draggable();

	// ex-02
	$( "#sortable" ).sortable({
      revert: true
    });
    $( "#drag" ).draggable({
      connectToSortable: "#sortable",
      helper: "clone",
      revert: "invalid"
    });
    $( "ul, li" ).disableSelection();

    // ex-03
    $( "#resize" ).resizable({
    	animate: true,
    	maxHeight: 250,
      	maxWidth: 350,
      	minHeight: 150,
      	minWidth: 200
    });

    // ex-04
    $( "#textara" ).resizable({
      handles: "se"
    });

    // ex-05
    $( "#selectable" ).selectable();

    // ex-06
    $( "#sort" ).sortable();
    $( "#sort" ).disableSelection();

    // ex-07
    $( "#accordion" ).accordion({
    	collapsible: true
    });

    // ex-08 Autocomplete
    var skillsname = [

    	"Webdesign",
      	"Graphic design",
      	"Bootstrap",
      	"HTML",
      	"C",
      	"C++",
      	"CSS",
      	"Digital Marketing",
      	];
    var skillslavel = [
    	"Basic",
      	"Midlavel",
      	"Top Lavel",
      	];
    $( "#sillks" ).autocomplete({
      source: skillsname
    });
    $( "#skilllevel" ).autocomplete({
      source: skillslavel
    });

    // ex-09
    $( "input" ).checkboxradio({
    	icon: false
    });

    // ex-10
    $( ".controlgroup-vertical" ).controlgroup({
      "direction": "vertical"
    });

    // ex-11
    $( "#dateP" ).datePicker();

    // ex-12
    $( "#dilg" ).dialog();

    // ex-13
     $( "#progressbar" ).progressbar({
      value: 37
    });

})