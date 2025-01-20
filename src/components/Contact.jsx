import { useEffect } from 'react'
import '../styles/contact.css'

function Contact() {
  // Validation function
  function validateForm(formId, fieldsConfig) {
    const form = document.getElementById(formId);
    let valid = true;

    // Clear previous error messages
    const errorMessages = form.querySelectorAll('.error-message');
    errorMessages.forEach(error => {
      error.textContent = '';
      error.classList.remove('show');
    });

    // Validate each field
    fieldsConfig.forEach(({ id, minLength, pattern, message, required }) => {
      const field = form.querySelector(`#${id}`);
      const errorMessage = form.querySelector(`#${id}Error`);
      const value = field.type === 'checkbox' ? field.checked : field.value.trim();

      // Validating the field
      if (
        (required && !value) ||
        (minLength && value.length < minLength) ||
        (pattern && !pattern.test(value))
      ) {
        errorMessage.textContent = message;
        errorMessage.classList.add('show');
        field.classList.add('invalid');
        valid = false;
      }

      // Clear error message on focus
      field.addEventListener('focus', () => {
        errorMessage.textContent = '';
        errorMessage.classList.remove('show');
        field.classList.remove('invalid');
      });
    });

    return valid;
  }
  // Form Fields Configuration
  useEffect(() => {
    // Contact Form Fields
    const contactFieldsConfig = [
      { id: 'firstName', minLength: 3, message: 'First Name must be at least 3 characters.', required: true },
      { id: 'lastName', minLength: 3, message: 'Last Name must be at least 3 characters.', required: true },
      { id: 'email', pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
        message: 'Please enter a valid email address.', required: true },
      { id: 'message', minLength: 10, message: 'Message must be at least 10 characters.', required: true },
    ];

    // Mailing List Fields Configuration
    const mailingListFieldsConfig = [
      { id: 'mailingListEmail', pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
        message: 'Please enter a valid email address.', required: true },
      { id: 'subscribe', message: 'You must agree to subscribe to the newsletter.', required: true },
    ];

    const contactForm = document.getElementById('contactForm');
    const mailingListForm = document.getElementById('mailingListForm');

    // Form Submission
    const handleContactSubmit = (event) => {
      event.preventDefault();
      if (validateForm('contactForm', contactFieldsConfig)) {
        alert('Thank you for your message!');
        contactForm.reset();
      }
    };

    // Mailing List Submission
    const handleMailingListSubmit = (event) => {
      event.preventDefault();
      if (validateForm('mailingListForm', mailingListFieldsConfig)) {
        alert('Thank you for subscribing to our mailing list!');
        mailingListForm.reset();
      }
    };

    contactForm.addEventListener('submit', handleContactSubmit);
    mailingListForm.addEventListener('submit', handleMailingListSubmit);

    // Cleanup
    return () => {
      contactForm.removeEventListener('submit', handleContactSubmit);
      mailingListForm.removeEventListener('submit', handleMailingListSubmit);
    };
  }, []);

  return (
    <div>
      <section className="section contact" id="contact">
        <h1>CONTACT</h1>
        <div className="contact-container">
          <div className="contact-form">
            <h2>We&apos;d Love to Hear From You</h2>
            <form id="contactForm">
              <div className="form-row">
                <input type="text" id="firstName" placeholder="First Name *"/>
                <span id="firstNameError" className="error-message"></span>

                <input type="text" id="lastName" placeholder="Last Name *"/>
                <span id="lastNameError" className="error-message"></span>

                <input type="email" id="email" placeholder="Email *"/>
                <span id="emailError" className="error-message"></span>

                <input type="text" id="subject" placeholder="Subject"/>
                <span id="subjectError" className="error-message"></span>

                <textarea id="message" placeholder="Leave us a message..."></textarea>
                <span id="messageError" className="error-message"></span>
              </div>
              <button className="button-form-black" type="submit">Submit</button>
            </form>
          </div>
          <div className="mailing-list">
            <address>
              500 Bookworm Blvd,<br/>
              Library Town, LT 12345<br/>
              info@mindflowbooks.com<br/>
              123-456-7890
            </address>
            <h2>JOIN OUR MAILING LIST</h2>
            <form id="mailingListForm">
              <input type="email" id="mailingListEmail" placeholder="Enter your email here *"/>
              <span id="mailingListEmailError" className="error-message"></span>
              <div className="checkbox-container">
                <div className="checkbox-row">
                  <input type="checkbox" id="subscribe" />
                  <label htmlFor="subscribe">Yes, subscribe me to your newsletter.</label>
                </div>
                <span id="subscribeError" className="error-message">Please accept the terms to continue.</span>
              </div>
              <button className="button-form-black" type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
