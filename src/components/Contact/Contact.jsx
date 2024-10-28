import React, { useRef, useState } from "react";
import { LuSend } from "react-icons/lu";
import emailjs from "@emailjs/browser";
import Modal from "../Modal/Modal";
import EmailSent from "../EmailSent/EmailSent";
import Heading from "../CommonHeading/Heading";

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_jr3nb7f", "template_dy5oaub", form.current, {
        publicKey: "sRYqUxWRS7ub01dtG",
      })
      .then(
        () => {
          setIsModalOpen(true);
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="container mx-auto py-12 px-4 md:px-16 lg:px-24"
      >
        <div className="mb-20">
          <Heading title="Let's Talk" />
          <p className="mt-4 text-center text-2xl text-white">
            Let's start the conversation! Share a bit about yourself, and
            <br /> I'll get back to you as soon as possible.
          </p>
        </div>

        <div>
          <div className="flex flex-col md:justify-between md:flex-row mb-4">
            <div className="w-full md:w-1/2 mr-2">
              <label
                htmlFor="firstName"
                className="block text-white font-semibold mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter First Name"
                className="border p-2 w-full rounded focus:outline-none text-black font-medium focus:border-gray-600"
                required
              />
            </div>
            <div className="w-full md:w-1/2 mt-10 md:ml-2 md:mt-0">
              <label
                htmlFor="lastName"
                className="block text-white font-semibold mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter Last Name"
                className="border p-2 w-full rounded focus:outline-none text-black font-medium focus:border-gray-600"
                required
              />
            </div>
          </div>
        </div>

        <div>
          <div className="w-full mt-10">
            <label
              htmlFor="email"
              className="block text-white font-semibold mb-2"
            >
              Work Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
              className="border p-2 w-full rounded focus:outline-none text-black font-medium focus:border-gray-600"
              required
            />
          </div>
        </div>

        <div>
          <div className="w-full mt-10">
            <label
              htmlFor="message"
              className="block text-white font-semibold mb-2"
            >
              Ask Something
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your Question Here..."
              rows={4}
              className="border p-2 w-full rounded focus:outline-none text-black font-medium focus:border-gray-600"
              required
            />
          </div>
        </div>

        <div className="mt-10 flex justify-center items-center mx-auto ">
          <button
            type="submit"
            className="bg-salmonPink text-white py-3 px-8 bg-orange-400 hover:bg-gray-800 font-bold text-lg rounded-md flex justify-center items-center gap-2"
          >
            Send
          </button>
        </div>

        <div className="mt-5">
          <p className="text-center text-lg font-semibold text-white">
            You may also call us at:{"  "}
            <span className="text-gray-400 ml-2"> +923216447958</span>
          </p>
        </div>
      </form>

      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <EmailSent setIsModalOpen={setIsModalOpen} />
      </Modal>
    </>
  );
};

export default Contact;
