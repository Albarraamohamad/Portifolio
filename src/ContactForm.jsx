import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v45xf79",     // ← Replace
        "template_t0cx9t9",    // ← Replace
        form.current,
        "XDvD1cvE9tabSBXqu"      // ← Replace
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Error: " + error.text);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="bg-[#1c1c1c] p-6 rounded-md w-full max-w-2xl mx-auto text-white"
    >
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="user_name"
            placeholder="Enter Your Name"
            className="w-full mt-1 p-2 rounded-md bg-transparent border border-gray-600"
            required
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="text"
            name="user_phone"
            placeholder="Your Phone"
            className="w-full mt-1 p-2 rounded-md bg-transparent border border-gray-600"
          />
        </div>
      </div>

      <div className="mb-4">
        <label>Email:</label>
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          className="w-full mt-1 p-2 rounded-md bg-transparent border border-gray-600"
          required
        />
      </div>

      <div className="mb-6">
        <label>Message:</label>
        <textarea
          name="message"
          rows="5"
          placeholder="Write What You Need, And Add Any Link You Want Me To Check."
          className="w-full mt-1 p-2 rounded-md bg-transparent border border-gray-600"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-sky-500 hover:bg-sky-600 w-full text-white font-semibold py-2 rounded-md transition duration-300"
      >
        Send
      </button>
    </form>
  );
}
