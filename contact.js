// Initialize EmailJS
(function () {
  emailjs.init('Q717TZEyA1pW9zjjm'); // Replaced user ID with public key
})();

function sendEmail(e) {
  e.preventDefault(); // Prevent default form submission

  emailjs.sendForm('service_iolgwlb', 'template_fq7layg', e.target)
    .then((result) => {
      console.log('Email sent successfully:', result.text);
      alert("Email sent successfully!");
    }, (error) => {
      console.error('Error sending email:', error.text);
      alert("Error sending email.");
    });
}
