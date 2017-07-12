// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the
  //contents of this first object
  {
    "type": "text", // [0]
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
( function(){
  // Select the first element from the array
  let first = formData[ 0 ];
  // Log the first object
  console.log( first );
  // Log the string "First Name"
  console.log( first.label );
} )();


// -------- Your Code Goes Below this Line --------


/* Loop through the form Data
  create the HTML (command)
  add to the DOM (command) */

  let _fields = document.getElementById('fields');
  // HTML selector
  // This variable will cut down on us typing document.querySelector("#fields")
  // every time we need it

  for (var i = 0; i < formData.length; i++) {
    // I do this so I don't have to type formData[i] a lot
    let _data = formData[i];

    console.log(`creating HTML for ${_data.label}`);


    // only for the comment box
    if (_data.type === 'textarea') {
      // TODO: create and append textarea
      // Create a new element that is a textarea
      // Why? Because the type of the input is 'textarea'
      let textarea = document.createElement('textarea');
      textarea.placeholder = _data.label;
      textarea.id = _data.id;

      _fields.appendChild(textarea);

    } else if (_data.type === "select") { // create a dropdown
      // create select elements
      let select = document.createElement('select');
      select.id = _data.id;

      // create our placeholder for 'Select language...'

      let placeHolder = document.createElement('option');
      placeHolder.value = 0;
      placeHolder.innerHTML = _data.label;

       select.appendChild(placeHolder);

      for (var j = 0; j < _data.options.length; j++) { // need to choose index different than "i"
        let _opt = _data.options[j]
        let option = document.createElement('option');
        option.value = _opt.value;
        option.innerHTML = _opt.label; //set content of an HTML
        select.appendChild(option);
      }

      // loop over the options and create an element for each options
      // append to the select

      _fields.appendChild(select);



    } else { // this is our base case
      let element = document.createElement('input');
      // Create variable here so I can reuse and modify that new element
      // I called this variable 'element' because the name is logical and
      // has semantic meaning
      element.type = _data.type;
      // to set HTML attributes on a newly created or queried DOM element,
      // the formula is element.attribute = value
      element.placeholder = _data.label;
      element.id = _data.id;

      _fields.appendChild(element);
      // select the ID in HTML where you want to add element
      // Set properties first, then appendChild to DOM
    }


  }




































//
