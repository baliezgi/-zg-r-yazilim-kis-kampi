// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.getElementById("myUL")
list &&
  list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  }, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

/* snowflow affect */
window.onload = function () {
  function snowFlow(left, height, src) {
    var container = document.createElement('div');
    var pic = document.createElement('img');
    var snowFlow = document.getElementById('snowFlow');
    pic.className = 'pic';
    container.className = 'container';
    snowFlow.appendChild(container);
    container.appendChild(pic);
    container.style.left = left + 'px';
    container.style.height = height + 'px';
    pic.src = src;
    setTimeout(function () {
      snowFlow.removeChild(container);
    }, 5000);
  }
  setInterval(function () {
    var left = Math.random() * window.innerWidth;
    var height = Math.random() * window.innerHeight;
    var src = 'https://purepng.com/public/uploads/large/purepng.com-snowflakessnowflakesicecrystalssnow-1411527100538jchz3.png';
    snowFlow(left, height, src);
  }, 500)
}