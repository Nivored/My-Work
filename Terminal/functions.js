//
function $(elid) {
    return document.getElementById(elid);
  }
  
var cursor;
window.onload = init;

// initelise cursor
function init() {
  cursor = $("cursor");
  cursor.style.left = "0px";
}

// inserts line breaks before all newlines in a string
function nl2br(txt) {
  return txt.replace(/\n/g, '');
}

// automatic type what the commands are going to show
function typeIt(from, e) {
  e = e || window.event;
  var w = $("typer");
  var tw = from.value;
  if (!pw){
    w.innerHTML = nl2br(tw);
  }
}

// move the cursor with the arrow key's
// keycode 37 is arrow key left and 39 is right arrow key
// keycode is the numerical code identyfing value of a key press
function moveIt(count, e) {
  e = e || window.event;
  var keycode = e.keyCode || e.which;
  if (keycode == 37 && parseInt(cursor.style.left) >= (0 - ((count - 1) * 10))) {
    cursor.style.left = parseInt(cursor.style.left) - 10 + "px";
  } else if (keycode == 39 && (parseInt(cursor.style.left) + 10) <= 0) {
    cursor.style.left = parseInt(cursor.style.left) + 10 + "px";
  }
}

// show console log text
function alert(txt) {
  console.log(txt);
}