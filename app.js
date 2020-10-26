


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



// var handlers = {
//   setUpEventListeners: function() {
//     // create even listener for click, and save element clicked to var
//     addressesUl.addEventListener('click', function(event) {
//       var elementClicked = event.target;

//       // if delete button click, delete current item
//       if (elementClicked.id === 'deleteButton') {
//         handlers.deleteAddress(parseInt(elementClicked.parentNode.id));
//       }

//       //if contact button click, launch phone app and call number
//       if (elementClicked.id === 'contactButton') {
//         location.href = "tel:"+elementClicked.parentNode.phone;
//       }
//     })
//   }
// };
// // run even listener function
// handlers.setUpEventListeners();


//i might just need to convert column-holder to an ID?



// const button = document.getElementById('projects');

// button.onclick = function () {
//   var current = document.getElementsByClassName('column-holder')
//   console.log(current);
//   current.scrollLeft = 200;
// };


// $(function() {
//   $(".column-holder").mousewheel(function(event, delta) {
//     event.preventDefault();
//   this.scrollLeft -= (delta * 30);
//   });
// })

	// $(document).on("scroll", function () {
	// 	var pixels = $(document).scrollTop()

	// 	$(".column-holder").css("left", -1 * pixels)

	// })



// var fieldsName = document.getElementById('fields-name');
// var fieldsSurname = document.getElementById('fields-surname');
// var fieldsPhone = document.getElementById('fields-phone');
// var fieldsAddress = document.getElementById('fields-address'); 

// var addressBook = {
//   // create array to store all addresses
//   addresses: [],
//   // create array to store any search results
//   searchResults: [],
//   addAddress: function(nameText, surnameText, phoneText, addressText) {
//       // create new object with address information, push to array
//     this.addresses.push({
//       // capitalize only first letter of each name
//       name: nameText[0].toUpperCase() + nameText.slice(1, nameText.length).toLowerCase(),
//       surname: surnameText[0].toUpperCase() + surnameText.slice(1, surnameText.length).toLowerCase(),
//       phone: phoneText,
//       address: addressText,
//       surnameFl: surnameText[0].toUpperCase() 
//     });
//   },
//   deleteAddress: function(position) {
//     this.addresses.splice(position, 1);
//   },
//   searchAddress: function(searchName, searchSurname, searchPhone, searchAddress) {
//     // Clear search results
//     this.searchResults = [];
    
//     // if searchCriteria is blank, return all addresses
//     if (searchName === '' && searchSurname === '' && searchPhone === '' && searchAddress === '') {
//       this.searchResults = this.addresses
//       return this.searchResults; 
//     };
    
//     // iterate through all addresses
//     for (i = 0; i < this.addresses.length; i++) {
//       // declare current variables
//       var currentName = this.addresses[i].name;
//       var currentSurname = this.addresses[i].surname;
//       var currentPhone = this.addresses[i].phone;
//       var currentAddress = this.addresses[i].address;

//       if (
//         // ignore blank && if index of search criteria exists in any field, push to results.
//         (searchSurname !== '' && currentSurname.indexOf(searchSurname) > -1) || 
//         (searchName !== '' && currentName.indexOf(searchName) > -1) || 
//         (searchPhone !== '' && currentPhone.indexOf(searchPhone) > -1) || 
//         (searchAddress !== '' && currentAddress.indexOf(searchAddress) > -1)
//         ) {
//         this.searchResults.push(this.addresses[i]);   
//       };

//     };  
//     // return temp array results
//     return this.searchResults;
//   }
// };

// var handlers = {
//   addAddress: function(){
//     // refresh variables
//     this.refreshFields();
//     // if any field is blank, pop up that all fields are required
//     if (
//       fieldsName.value === '' ||
//       fieldsSurname.value === '' ||
//       fieldsPhone.value === '' ||
//       fieldsAddress.value === ''
//       ) {
//         window.alert("You need to complete all fields!");
//         return;
//     };

//     // define first intial variable
//     var fieldsSurnameFl = fieldsSurname.value[0];

//     // run add address function
//     addressBook.addAddress(fieldsName.value, fieldsSurname.value, fieldsPhone.value, fieldsAddress.value, fieldsSurnameFl);

//     // clear fields
//     this.clearFields();
//   },
//   deleteAddress: function(position) {
//     // run delete address function
//     addressBook.deleteAddress(position);
//     // refresh current display addresses
//     view.displayAddresses();
//   },
//   searchAddress: function() {
//     // refresh variables
//     this.refreshFields();
//     // run search address function
//     addressBook.searchAddress(fieldsName.value, fieldsSurname.value, fieldsPhone.value, fieldsAddress.value);
//     // display search address results
//     view.displaySearch();
//   },
//   refreshFields: function(){
//     fieldsName = document.getElementById('fields-name');
//     fieldsSurname = document.getElementById('fields-surname');
//     fieldsPhone = document.getElementById('fields-phone');
//     fieldsAddress = document.getElementById('fields-address');   
//   },
//   clearFields: function() {
//     view.displayAddresses();
//     this.refreshFields();
//     fieldsName.value = ''; 
//     fieldsSurname.value = ''; 
//     fieldsPhone.value = ''; 
//     fieldsAddress.value = '';
//   }
// };

// var view = {
//   displayAddresses: function() {
//     // select list, assign to var
//     var addressesUl = document.querySelector('ul');
//     // clear cache
//     addressesUl.innerHTML = '';

//     // iterate through addresses
//     addressBook.addresses.forEach(function(address, position) {
//       // create list item
//       var addressLi = document.createElement('li');

//       // create address element
//       var addressText = document.createElement("entries-address");
//       addressText.className = 'entries-address';
//       addressText.textContent = address.address;

//       // create name element
//       var nameTextElement = document.createElement("entries-fullname");
//       nameTextElement.className = "entries-fullname";
//         // loop to repeat name 12 times
//         var nameText = '';
//         for (i = 0; i < 12; i++) {
//           nameText += address.name + ' ' + address.surname + "\r\n";
//         };
//       nameTextElement.textContent = nameText;

//       // create phone number element
//       var phoneText = document.createElement("entries-phone");
//       phoneText.className = "entries-phone";
//       phoneText.textContent = address.phone;

//       // create index letter element
//       var letterText = document.createElement("entries-letter");
//       letterText.className = "entries-letter";
//       letterText.textContent = address.surnameFl;

//       // create roledex cirlces element
//       var roladexCirclesLeft = document.createElement("entries-circles-left");
//       var roladexCirclesRight = document.createElement("entries-circles-right");
//       roladexCirclesLeft.className = 'entries-circles-left';
//       roladexCirclesRight.className = 'entries-circles-right';

//       // i should fix this so that the name element is it's own child to the list item.
//       addressLi.id = position;
//       addressLi.className = 'entries-fullname'; 

//       // append all children
//       addressLi.appendChild(nameTextElement);
//       addressLi.appendChild(addressText);
//       addressLi.appendChild(letterText);
//       addressLi.appendChild(document.createElement("br"));
//       addressLi.appendChild(phoneText);
//       addressLi.appendChild(roladexCirclesLeft);
//       addressLi.appendChild(roladexCirclesRight);
//       addressLi.appendChild(this.createDeleteButtons());
//       addressLi.appendChild(this.createContactButtons());
//       addressesUl.appendChild(addressLi);
//     }, this);
//   },

//   displaySearch: function() {
//     // select list, assign to var
//     var addressesUl = document.querySelector('ul');
//     // clear cache
//     addressesUl.innerHTML = '';

//     addressBook.searchResults.forEach(function(address, position) {
//       // create list item
//       var addressLi = document.createElement('li');

//       // create address element
//       var addressText = document.createElement("entries-address");
//       addressText.className = 'entries-address';
//       addressText.textContent = address.address;

//       // create name element
//       var nameTextElement = document.createElement("entries-fullname");
//       nameTextElement.className = "entries-fullname";
//         // loop to repeat name 12 times
//         var nameText = '';
//         for (i = 0; i < 12; i++) {
//           nameText += address.name + ' ' + address.surname + "\r\n";
//         };
//       nameTextElement.textContent = nameText;

//       // create phone number element
//       var phoneText = document.createElement("entries-phone");
//       phoneText.className = "entries-phone";
//       phoneText.textContent = address.phone;

//       // create index letter element
//       var letterText = document.createElement("entries-letter");
//       letterText.className = "entries-letter";
//       letterText.textContent = address.surnameFl;

//       // create roledex cirlces element
//       var roladexCirclesLeft = document.createElement("entries-circles-left");
//       var roladexCirclesRight = document.createElement("entries-circles-right");
//       roladexCirclesLeft.className = 'entries-circles-left';
//       roladexCirclesRight.className = 'entries-circles-right';

//       // i should fix this so that the name element is it's own child to the list item.
//       addressLi.id = position;
//       addressLi.className = 'entries-fullname'; 

//       // append all children
//       addressLi.appendChild(nameTextElement);
//       addressLi.appendChild(addressText);
//       addressLi.appendChild(letterText);
//       addressLi.appendChild(phoneText);
//       addressLi.appendChild(roladexCirclesLeft);
//       addressLi.appendChild(roladexCirclesRight);
//       addressLi.appendChild(this.createDeleteButtons());
//       addressLi.appendChild(this.createContactButtons());
//       addressesUl.appendChild(addressLi);
//     }, this);
//   },

//   createDeleteButtons: function() {
//     var deleteButton = document.createElement('entries-delete-button');
//     deleteButton.textContent = 'Delete';
//     deleteButton.className = 'entries-buttons-delete';
//     deleteButton.id = 'deleteButton';
//     return deleteButton;
//   },

//   createContactButtons: function() {
//     var contactButton = document.createElement('entries-contact-button');
//     contactButton.textContent = 'Contact';
//     contactButton.className = 'entries-buttons-contact';
//     contactButton.id = 'contactButton';
//     return contactButton;
//   },

//   // make deleter and contact buttons functional
//   setUpEventListeners: function() {
//     // select list, assign to var
//     var addressesUl = document.querySelector('ul');

//     // create even listener for click, and save element clicked to var
//     addressesUl.addEventListener('click', function(event) {
//       var elementClicked = event.target;

//       // if delete button click, delete current item
//       if (elementClicked.id === 'deleteButton') {
//         handlers.deleteAddress(parseInt(elementClicked.parentNode.id));
//       }

//       //if contact button click, launch phone app and call number
//       if (elementClicked.id === 'contactButton') {
//         location.href = "tel:"+elementClicked.parentNode.phone;
//       }
//     })
//   }
// };

// // run even listener function
// view.setUpEventListeners();

