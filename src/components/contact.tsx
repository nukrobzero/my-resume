"use client";

import { motion } from "framer-motion";
import { Orbit } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState<string>("");
  const [message, setMessage] = useState("");
  const [resData, setResData] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("tel", tel);
    formData.append("message", message);

    if (!name || !email || !tel) {
      alert("Input fields cannot be empty!");
      return;
    }
    try {
      const res = await fetch(`/api/lineNoti`, {
        method: "POST",
        body: formData,
      });
      const resData = await res.json();
      setResData(resData);
      setName("");
      setEmail("");
      setTel("");
      setMessage("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="relative">
      {/* <div className="absolute -left-32 -bottom-28 animate-pulse text-[#ffffff61] lg:text-white">
          <Orbit size={200}  />
        </div> */}
      <div className="p-4 h-full">
        <div className="flex flex-col justify-center md:max-w-2xl mx-auto m-4">
          {resData !== "" ? (
            <div className="flex flex-col text-center text-white">
              <h1 className="text-4xl text-center font-bold mb-8 md:mb-12 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text">
                Contacts
              </h1>
              <p className=" text-xl font-bold">
                <span className=" bg-cyan-600 text-white rounded-md p-[2px] mr-2">
                  Thanks for contacting us!
                </span>
                We will be in touch with you shortly.
              </p>
              <p className="text-xs mt-[10px]">
                Message will be send to me by Line Notify.
              </p>
              <span
                onClick={() => setResData("")}
                className="font-semibold pt-4 hover:underline hover:text-blue-300 cursor-pointer"
              >
                Return to Form
              </span>
            </div>
          ) : (
            <motion.form
              initial={{ opacity: 0, x: "-100%" }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.7,
                  type: "spring",
                  stiffness: 400,
                },
              }}
              className="bg-neutral-50 p-10 rounded-md"
              onSubmit={handleSubmit}
            >
              <h1 className="text-4xl text-center font-bold mb-8 md:mb-12 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text">
                Contacts
              </h1>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full text-black bg-white border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#0083CA] focus:border-transparent"
                  placeholder="Your name"
                  value={name}
                  required
                  onChange={({ target }) => setName(target?.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full text-black bg-white border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#0083CA] focus:border-transparent"
                  placeholder="Your email address"
                  value={email}
                  required
                  onChange={({ target }) => setEmail(target?.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Phone
                </label>

                <input
                  type="text"
                  id="phone"
                  className="w-full text-black bg-white border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#0083CA] focus:border-transparent"
                  placeholder="081-234-5678"
                  required
                  value={tel}
                  onChange={(e) =>
                    setTel(e.target?.value.replace(/[^0-9]/g, ""))
                  }
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full text-black bg-white border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#0083CA] focus:border-transparent"
                  placeholder="message..."
                  value={message}
                  onChange={({ target }) => setMessage(target?.value)}
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50"
                >
                  Submit
                </button>
              </div>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
}
