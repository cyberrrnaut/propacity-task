function submitForm(form, scriptURL) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        if (response.ok) {
          alert("Thank you! Your form is submitted successfully.");
          window.location.reload();
        } else {
          throw new Error("Form submission failed");
        }
      })
      .catch((error) => console.error("Error!", error.message));
  });
}



const contactForm = document.forms["contact-form"];
const registrationForm = document.forms["registration-form"];

const contactScriptURL =
  "https://script.google.com/macros/s/AKfycbzQFUhk73NiwSrXj8TRNi2WJcXDViTNUUQsXpMbIA_qIjbWfMyLkTAX5BdoshRKMFAJ/exec";
const registerScriptURL =
  "https://script.google.com/macros/s/AKfycbx-86nId591PvNFQBKY5XUB5u7tudRwIegv_We0mtTBQ61C7WivfKBhc87H2zqKmuRO/exec";
  document.addEventListener("DOMContentLoaded", function () {
    document.forms["registration-form"].addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents the default form submission behavior

        // Add your validation logic here
        var fullName = document.forms["registration-form"]["Name"].value;
        var emailAddress = document.forms["registration-form"]["Email"].value;
        var contactNumber = document.forms["registration-form"]["Mobile"].value;

        if (fullName === "" || contactNumber === "" || emailAddress === "") {
            alert("Please fill in all fields.");
            return false;
        }

        // If the form is valid, you can redirect to the desired URL
        window.location.href = "registerSucces.html";
    });
});
