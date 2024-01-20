// fucntion to submit form

function submitForm(form, scriptURL, successRedirectURL) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => response.json())
      .then((data) => {
        if (data.result === "success") {
          window.location.href = successRedirectURL;
        } else {
          alert("Form submission failed. Please try again.");
        }
      })
      .catch((error) => console.error("Error!", error.message));
  });
}

//  api endpoint

const Apiurl =
  "https://api.propacity.in/api/v1/webhooks/integration/61cf0d44-1ede-4dfa-b3ce-9834102082/insertLead";

// Post request to the API endpoint function
function postToApi(form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Move this line inside the event listener

    // Collecting the form data
    const formData = new FormData(document.forms["contact-form"]);

    // Converting FormData to JSON
    const jsonData = {};
    formData.forEach((value, key) => {
      jsonData[key] = value;
    });

    // Sending data to the server using Fetch API
    fetch(Apiurl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Data:", data);
        // Handle the response data here
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle errors
      });
  });
}

///declaring the constants for redirecting

const successRedirectURL = "registerSucces.html";
const homePage = "index.html";

//apis of google spreadsheet to post the data
const contactScriptURL =
  "https://script.google.com/macros/s/AKfycbzQFUhk73NiwSrXj8TRNi2WJcXDViTNUUQsXpMbIA_qIjbWfMyLkTAX5BdoshRKMFAJ/exec";
const registerScriptURL =
  "https://script.google.com/macros/s/AKfycbx-86nId591PvNFQBKY5XUB5u7tudRwIegv_We0mtTBQ61C7WivfKBhc87H2zqKmuRO/exec";

//   logic for registration form

document.addEventListener("DOMContentLoaded", function () {
  var registrationForm = document.forms["registration-form"];

  if (!registrationForm) {
    console.error("Form not found!");
    return;
  }

  registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var fullName = registrationForm.elements["Name"].value;
    var emailAddress = registrationForm.elements["Email"].value;
    var contactNumber = registrationForm.elements["Mobile"].value;

    if (fullName === "" || contactNumber === "" || emailAddress === "") {
      alert("Please fill in all fields.");
    } else {
      submitForm(registrationForm, registerScriptURL, successRedirectURL);
      postToApi(registrationForm);
    }
  });
});

// logic for contact form
document.addEventListener("DOMContentLoaded", function () {
  var contactForm = document.forms["contact-form"];

  if (!contactForm) {
    console.error("Form not found!");
    return;
  }

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var fullName = contactForm.elements["Full Name"].value;
    var contactNumber = contactForm.elements["Contact Number"].value;
    var emailAddress = contactForm.elements["Email Address"].value;

    if (fullName === "" || contactNumber === "" || emailAddress === "") {
      alert("Please fill in all fields.");
    } else {
      submitForm(contactForm, contactScriptURL, homePage);
      postToApi(contactForm);
    }
  });
});
