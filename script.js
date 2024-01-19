const scriptURL =
  "https://script.google.com/macros/s/AKfycbzQFUhk73NiwSrXj8TRNi2WJcXDViTNUUQsXpMbIA_qIjbWfMyLkTAX5BdoshRKMFAJ/exec";

const registerUrl =
  "https://script.google.com/macros/s/AKfycbx-86nId591PvNFQBKY5XUB5u7tudRwIegv_We0mtTBQ61C7WivfKBhc87H2zqKmuRO/exec";

const form = document.forms["contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      alert("Thank you! your form is submitted successfully.")
    )
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});

const registrationForm = document.forms["registration-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(registerUrl, { method: "POST", body: new FormData(form) })
    .then((response) =>
      alert("Thank you! your form is submitted successfully.")
    )
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});
