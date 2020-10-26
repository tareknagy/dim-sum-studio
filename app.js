


// Event Listener to scroll viewport
const projectsButton = document.getElementById('projects');
projectsButton.onclick = function () {
  var current = document.getElementById('holder')
	current.scrollLeft += window.innerWidth;

	// change buttons
		$("#nav1").hide();
		$("#nav2").show();
};

// Event Listener scroll back
const backButton = document.getElementById('button-back');
backButton.onclick = function () {
	var current = document.getElementById('holder')
	current.scrollLeft -= window.innerWidth;

	// check buttons
	if (current.scrollLeft === 0) {
		$("#nav1").show();
		$("#nav2").hide();
	};
};

// Event Listener scroll forward
const moreButton = document.getElementById('button-more');
moreButton.onclick = function () {
	var current = document.getElementById('holder')
	current.scrollLeft += window.innerWidth;

	// // check buttons
	// if (current.scrollLeft === 0) {
	// 	$("#nav1").show();
	// 	$("#nav2").hide();
	// };
};

// Event Listener for Intro Text
const introButton = document.getElementById('intro-click');
introButton.onclick = function () {
	introButton.parentNode.style.display = 'none';
	$("#intro-text").show();
};

// Event Listener for One
const oneButton = document.getElementById('one-click');
oneButton.onclick = function () {
	oneButton.parentNode.style.display = 'none';
	$("#p-cure").show();
};

// Event Listener for Two
const twoButton = document.getElementById('two-click');
twoButton.onclick = function () {
	twoButton.parentNode.style.display = 'none';
	$("#p-poly").show();
};

// Event Listener for Three
const threeButton = document.getElementById('three-click');
threeButton.onclick = function () {
	threeButton.parentNode.style.display = 'none';
	$("#p-spark").show();
};

// Event Listener for Four
const fourButton = document.getElementById('four-click');
fourButton.onclick = function () {
	fourButton.parentNode.style.display = 'none';
	$("#p-klm").show();
};



// // disable mouse scrolling
// window.onwheel = function(){ return false; }

