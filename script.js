document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('appointmentForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('clientName').value.trim();
      const email = document.getElementById('clientEmail').value.trim();
      const date = document.getElementById('date').value;
      const message = document.getElementById('message').value.trim();
      const feedback = document.getElementById('formMessage');

      if (!name || !email || !date || !message) {
        feedback.textContent = "Please fill in all fields.";
        feedback.style.color = "red";
      } else {
        feedback.textContent = Thank you, ${name}! Your appointment request has been received.;
        feedback.style.color = "green";
        form.reset();
      }
    });
  }
});