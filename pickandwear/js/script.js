// Buy button functionality
// Handle form submission (login)
document.querySelector('.auth form').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.querySelector('input[type="email"]').value;
  const password = document.querySelector('input[type="password"]').value;
  
  if (!email || !password) {
    alert('Please fill out both fields!');
  } else {
    alert(`Logging in with email: ${email}`);
    // You can integrate with actual authentication API here
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const buyButtons = document.querySelectorAll(".btn");

  buyButtons.forEach(function (btn) {
    if (btn.textContent.includes("Buy")) {
      btn.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent link jump
        alert("Thank you for your interest! We'll redirect you to purchase soon.");
      });
    }
  });

  // Contact form submission
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you for contacting Pick & Wear. We will get back to you soon.");
      form.reset(); // Optional: clears the form
    });
  }
});
