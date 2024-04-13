"use client";
import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import toast from "react-hot-toast";
import { sendContactForm } from "./../lib/api";
import { Button } from "@chakra-ui/react";
const initValues = { name: "", email: "", subject: "", message: "" };
const initState = { isLoading: false, error: "", values: initValues };

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const [state, setState] = useState(initState);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await sendContactForm(state.values);
      setState(initState);
      toast.success("Message sent successfully!");
    } catch (error) {
      setState((prev) => ({
        ...prev,
        error: (error as Error).message || "Failed to send message",
      }));
      toast.error((error as Error).message || "Failed to send message");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [name]: value,
      },
    }));
  };


  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:fozanjavaid111@gmail.com">
          fozanjavaid111@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        onSubmit={handleSubmit}
      >
        <input
          className="m-4 border text-blue-100  border-white border-opacity-50 h-14 my-3 rounded-lg p-4 bg-transparent dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:bg-transparent dark:outline-none hover:border-blue-300 caret-white"
          name="name"
          type="text"
          value={state.values.name}
          onChange={handleChange}
          placeholder="Your name"
          required
        />
        <input
          className="m-4 border text-blue-100  border-white border-opacity-50 h-14 my-3 rounded-lg p-4 bg-transparent dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:bg-transparent dark:outline-none hover:border-blue-300 caret-white"
          name="email"
          type="email"
          value={state.values.email}
          onChange={handleChange}
          placeholder="Your email"
          required
        />
        <input
          className="m-4 border text-blue-100  border-white border-opacity-50 h-14 my-3 rounded-lg p-4 bg-transparent dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:bg-transparent dark:outline-none hover:border-blue-300 caret-white"
          name="subject"
          type="text"
          value={state.values.subject}
          onChange={handleChange}
          placeholder="Subject"
          required
        />
        <textarea
          className="m-4 border border-white text-blue-100 border-opacity-50 h-52 my-3 rounded-lg p-4 bg-transparent dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:bg-transparent dark:outline-none hover:border-blue-300 caret-white"
          name="message"
          value={state.values.message}
          onChange={handleChange}
          placeholder="Your message"
          required
        />

        <div className="flex justify-center">
          <button
            className="m-4 h-14 px-6 bg-transparent border border-white text-blue-300 rounded-lg transition-all w-1/2 hover:bg-opacity-10 hover:bg-blue-300 hover:text-seagreen"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </motion.section>
  );
}
