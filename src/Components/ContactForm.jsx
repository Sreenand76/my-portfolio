import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { BsGithub, BsLinkedin, BsMailbox, BsMailbox2Flag, BsMessenger } from "react-icons/bs";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    axios
      .post("https://api.emailjs.com/api/v1.0/email/send", {
        service_id: "YOUR_SERVICE_ID",
        template_id: "YOUR_TEMPLATE_ID",
        user_id: "YOUR_USER_ID",
        template_params: templateParams,
      })
      .then(() => {
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((err) => {
        toast.success(`Login successfull`);
        console.error(err);
      });
  };

  return (
    <div id="contact" className="text-center pt-5 pb-10 text-white max-w-[100vw]">
      <h2 className="text-4xl md:text-5xl mb-7 ">Stay Connected</h2>
      <p className="text-base sm:text-lg mb-7 text-gray-300">
        Feel free to reach out via email or connect with me on social media!
      </p>
      <div className="flex flex-wrap justify-center gap-4 px-7 md:px-0">
        <a
          href="mailto:sreenands93@gmail.com"
          className="flex items-center gap-2 text-white border border-gray-400 px-3 sm:px-4 py-2 rounded  transition duration-300 w-full sm:w-auto justify-center"
        >
         <BsMessenger/>
          Email Me
        </a>
        <a
          href="https://www.linkedin.com/in/sreenand-s-9b2716292/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2  text-white border border-gray-400 px-3 sm:px-4 py-2 rounded  transition duration-300 w-full sm:w-auto justify-center"
        >
          <BsLinkedin/>
          LinkedIn
        </a>
        <a
          href="https://github.com/sreenand76"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white px-3 border border-gray-400 sm:px-4 py-2 rounded  transition duration-300 w-full sm:w-auto justify-center"
        >
          <BsGithub/>
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ContactForm;

