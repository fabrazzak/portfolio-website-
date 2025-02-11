import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import emailjs from "emailjs-com";
import Lottie from "react-lottie";
import animationData from "../../../assets/Animation-738895128717.json";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_5ijc6xb",
        "template_2y62zgf",
        formData,
        "dyl-jB27h7SABJ_RX"
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        () => {
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section id="contact" className="bg-[#1F1F1F] text-white py-20 px-6 md:px-12">
      <h2 className="text-5xl md:text-6xl font-bold text-[#FFCB2F] text-center mb-16 tracking-wider">
        Contact Information
      </h2>
      <p className="text-center text-xl text-[#A29BFE] mb-10">
        Feel free to get in touch with me.
      </p>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col  gap-8">
          <div className="w-full max-w-xs mx-auto">
            
            <Lottie options={lottieOptions} height={200} width={200} />
            <h3 className="text-2xl  font-semibold text-[#A29BFE] mb-4">
              Direct Contact
            </h3>
            <div className="text-start text-xl">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3 hover:text-[#00A8E8] transition-all duration-300">
                <FaEnvelope className="text-[#A29BFE] text-3xl " />              
                  <p className="font-semibold text-[#A29BFE]">Email:</p>
                  <a href="mailto:your.email@example.com" className="text-blue-400 hover:text-blue-500">
                    abrazzak6980@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-3 hover:text-[#00A8E8] transition-all duration-300">
                  <FaPhoneAlt className="text-[#A29BFE] text-3xl" />
                  <p className="font-semibold text-[#A29BFE]">Phone:</p>
                  <a href="tel:+1234567890" className="text-blue-400 hover:text-blue-500">
                  +0880 170 390 6980
                  </a>
                </div>

                <div className="flex items-center gap-3 hover:text-[#00A8E8] transition-all duration-300">
                  <FaWhatsapp className="text-[#A29BFE] text-3xl" />
                  <p className="font-semibold text-[#A29BFE]">WhatsApp:</p>
                  <a
                    href="https://wa.me/11234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-500"
                  >
                    +08801703906980
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-6">
          <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-lg">
            <div className="flex flex-col gap-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-4 bg-[#0F3460] text-white border border-gray-600 rounded-lg 
                focus:border-[#A29BFE] focus:ring-2 focus:ring-[#A29BFE] transition-all duration-300"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-4 bg-[#0F3460] text-white border border-gray-600 rounded-lg 
                focus:border-[#A29BFE] focus:ring-2 focus:ring-[#A29BFE] transition-all duration-300"
                required
              />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone Number"
                className="w-full p-4 bg-[#0F3460] text-white border border-gray-600 rounded-lg 
                focus:border-[#A29BFE] focus:ring-2 focus:ring-[#A29BFE] transition-all duration-300"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="6"
                className="w-full p-4 bg-[#0F3460] text-white border border-gray-600 rounded-lg 
                focus:border-[#A29BFE] focus:ring-2 focus:ring-[#A29BFE] transition-all duration-300"
                required
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-[#FFCB2F] text-black font-bold text-lg rounded-lg 
                hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out"
              >
                Send Message
              </button>
            </div>
          </form>

          {status && (
            <div className="text-center text-lg mt-4">
              <p className={status.includes("successfully") ? "text-green-400" : "text-red-400"}>
                {status}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
