import React, { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import emailjs from "@emailjs/browser";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const [form, setForm] = useState({
    fullName: "",
    organization: "",
    country: "",
    email: "",
    typeOfInterest: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const generatePrefilledMessage = () => {
    return `Hello NatioID Team,

I am ${form.fullName} from ${form.organization} in ${form.country}.

My email is ${form.email}.

I am interested in: ${form.typeOfInterest || "N/A"}

Message:
${form.message}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const prefilledMessage = generatePrefilledMessage();

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.fullName || form.organization,
          to_name: "Abdulazeez Adam.A",
          from_email: form.email,
          to_email: "abdulazeezadam09@gmail.com",
          message: prefilledMessage,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            fullName: "",
            organization: "",
            country: "",
            email: "",
            typeOfInterest: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  const handleWhatsApp = () => {
    const prefilledMessage = generatePrefilledMessage();
    const whatsappLink = `https://wa.me/+2349095707751?text=${encodeURIComponent(prefilledMessage)}`; // Replace with actual WhatsApp number
    window.open(whatsappLink, "_blank");
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Full Name</span>
            <input
              type='text'
              name='fullName'
              value={form.fullName}
              onChange={handleChange}
              placeholder="What's your full name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              required
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Organization</span>
            <input
              type='text'
              name='organization'
              value={form.organization}
              onChange={handleChange}
              placeholder="What's your organization's name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              required
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Country</span>
            <input
              type='text'
              name='country'
              value={form.country}
              onChange={handleChange}
              placeholder="Which country are you from?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              required
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              required
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Type of Interest</span>
            <select
              name='typeOfInterest'
              value={form.typeOfInterest}
              onChange={handleChange}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            >
              <option value="">Select an option</option>
              <option value="Request a Demo">Request a Demo</option>
              <option value="Sponsorship">Sponsorship</option>
              <option value="Collaboration">Collaboration</option>
              <option value="Pilot Program">Pilot Program</option>
              <option value="Other">Other</option>
            </select>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              required
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send via email"}
          </button>
          <button
            type='button'
            onClick={handleWhatsApp}
            className='bg-green-500 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary ml-4'
          >
            Send via WhatsApp
          </button>
        </form>
        <div className="mt-4 text-center">
          <a
            href="/assets/NatioID_Documentation.docx"
            download="NatioID_Documentation.docx"
            className="text-blue-400 hover:underline"
          >
            Download NatioID Documentation (DOCX)
          </a>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
