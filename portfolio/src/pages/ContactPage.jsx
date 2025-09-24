import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required.';
    if (!formData.email) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid.';
    }
    if (!formData.message) newErrors.message = 'Message is required.';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          access_key: "7a6b8a09-38f8-4c7e-b4a7-d76285eefaf2", // මෙතන ඔබේ access key එක දාන්න
          name: formData.name,
          email: formData.email,
          message: formData.message,
        })
      });

      const data = await response.json();

      if (data.success) {
        console.log("Form submitted successfully:", data);
        alert("Thank you for your message! I will get back to you soon.");
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
      } else {
        console.error("Submission failed:", data);
        alert("There was an error submitting your form. Please try again.");
        setIsSubmitted(false);
      }
    } else {
      setErrors(newErrors);
      setIsSubmitted(false);
    }
  };

  return (
    <div className="contact-page">
      <header className="contact-header">
        <h1>Let's Connect!</h1>
        <p>I am always open to new opportunities and collaborations.</p>
      </header>

      <section className="contact-form-section">
        <h2>Send me a message</h2>
        {isSubmitted && <div className="success-message">Thank you for your message! I will get back to you soon.</div>}
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? 'input-error' : ''}
            />
            {errors.name && <p className="error-text">{errors.name}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'input-error' : ''}
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? 'input-error' : ''}
            ></textarea>
            {errors.message && <p className="error-text">{errors.message}</p>}
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </section>

      <section className="contact-links-section">
        <h2>Find me on</h2>
        <div className="social-icons-container">
          <a href="https://github.com/nimalinimesha" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/nimali-nimesha-b57655327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="mailto:nimalisenanayaka@gmail.com" aria-label="Email">
            <FaEnvelope className="social-icon" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;