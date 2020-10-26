

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
	$("#p-no").show();
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


// pCure img carousel
var pCureCounter = 0;
const pCure = document.getElementById('p-cure-img')
pCure.onclick = function () {
	if (pCureCounter === 0) {
		pCure.src = "images/cure-2.jpg";
		pCureCounter++;
	}
	else if (pCureCounter === 1) {
		pCure.src = "images/cure-3.jpg";
		pCureCounter++;		
	}
	else if (pCureCounter === 2) {
		pCure.src = "images/cure-4.jpg";
		pCureCounter++;		
	}
	else if (pCureCounter === 3) {
		pCure.src = "images/cure-1.jpg";
		pCureCounter = 0;		
	}	
};


// pSpark img carousel
var pSparkCounter = 0;
const pSpark = document.getElementById('p-spark-img');
pSpark.onclick = function () {
	if (pSparkCounter === 0) {
		pSpark.src = "images/spark-2.jpg";
		pSparkCounter++;
	}
	else if (pSparkCounter === 1) {
		pSpark.src = "images/spark-3.jpg";
		pSparkCounter++;		
	}
	else if (pSparkCounter === 2) {
		pSpark.src = "images/spark-4.jpg";
		pSparkCounter++;		
	}
	else if (pSparkCounter === 3) {
		pSpark.src = "images/spark-1.jpg";
		pSparkCounter = 0;		
	}	
}

// pNo img carousel
var pNoCounter = 0;
const pNo = document.getElementById('p-no-img')
pNo.onclick = function () {
	if (pNoCounter === 0) {
		pNo.src = "images/no-2.jpg";
		pNoCounter++;
	}
	else if (pNoCounter === 1) {
		pNo.src = "images/no-3.jpg";
		pNoCounter++;		
	}
	else if (pNoCounter === 2) {
		pNo.src = "images/no-4.jpg";
		pNoCounter++;		
	}
	else if (pNoCounter === 3) {
		pNo.src = "images/no-1.jpg";
		pNoCounter = 0;		
	}
};

	// pKlm img carousel
var pKlmCounter = 0;
const pKlm = document.getElementById('p-klm-img');
pKlm.onclick = function () {
	if (pKlmCounter === 0) {
		pKlm.src = "images/klm-2.jpg";
		pKlmCounter++;
	}
	else if (pKlmCounter === 1) {
		pKlm.src = "images/klm-3.jpg";
		pKlmCounter++;		
	}
	else if (pKlmCounter === 2) {
		pKlm.src = "images/klm-4.jpg";
		pKlmCounter++;		
	}
	else if (pKlmCounter === 3) {
		pKlm.src = "images/klm-1.jpg";
		pKlmCounter = 0;		
	}	
};

// // disable mouse scrolling
// window.onwheel = function(){ return false; }

