"use client";
import { useEffect } from 'react';
import Image from "next/image";
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from '@emailjs/browser';
import { contactSchema } from '@/validation-form/contact';

const Contact = ({ social }) => {
  const { register, handleSubmit, formState: { errors, isDirty, isValid }, reset } = useForm({
    defaultValues: {
      user_name: '',
      user_email: '',
      message: '',
    },
    resolver: yupResolver(contactSchema),
  });
  
  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_API_KEY);
  }, []);
  
  const sendEmails = (formData) => {
    emailjs
      .send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, formData)
      .then(result => {
        console.log('SUCCESS!', result.text);
        alert('Your message was sent successfully!');
        reset();
      })
      .catch(error => {
        console.error('FAILED...', error.text);
        alert('Failed to send the message. Please try again later.');
      });
  };
  
  return (
    <div className="pb-20">
      <h1 className="text-center text-4xl mt-14 md:mt-28 mb-3 text-gray-300">
        Get in touch
      </h1>
      <p className="text-gray-400 text-lg text-center text-gray-400">
        Feel free to communicate with me via professional network
      </p>
      <div
        className="flex justify-center mx-[5vw] mt-7">
        <div className="w-full max-w-[1100px] flex gap-10 flex-col md:flex-row">
          <div className="flex-1 text-gray-300">
            <form
              onSubmit={handleSubmit(sendEmails)}
              className="flex flex-col gap-1">
              <label htmlFor="name">Your name</label>
              <input
                type="text"
                id="name"
                name="user_name"
                placeholder="John Doe"
                required
                minLength={3}
                {...register("user_name", { required: "Please enter your first name." })}
                className="border rounded-md border-stone-700 hover:border-stone-500 p-2 mb-4 !outline-none"
              />
              {errors.user_name && <span className="text-red-500">{errors.user_name.message}</span>}
              <label htmlFor="email">Your email</label>
              <input
                type="email"
                id="email"
                name="user_email"
                placeholder="johndoe@gmail.com"
                required
                {...register("user_email", { required: "Please enter your email." })}
                className="border rounded-md border-stone-700 hover:border-stone-500 p-2 mb-4 !outline-none"
              />
              {errors.user_email && <span className="text-red-500">{errors.user_email.message}</span>}
              <label htmlFor="subject">Subject</label>
              <textarea
                id="message"
                name="message"
                placeholder="I want to talk to you"
                required
                {...register("message", { required: "Please enter your message." })}
                className="border rounded-md border-stone-700 hover:border-stone-500 p-2 mb-4 !outline-none"
              />
              {errors.message && <span className="text-red-500">{errors.message.message}</span>}
              <button
                type="submit"
                className="mt-2 py-2 text-white rounded transition duration-600 flex justify-center items-center gap-[10px] bg-gradient-to-r from-sky-500 to-sky-700 hover:from-sky-700 hover:to-sky-500 hover:font-bold cursor-pointer">
                Send
              </button>
            </form>
          </div>
          <div className="">
            <h1 className="text-xl mb-3 text-gray-400">Social</h1>
            {social.map((item) => (
              <a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 items-center hover:bg-stone-900 pb-6 transition duration-300">
                <Image
                  className="w-[30px] h-[30px] rounded-full"
                  src={item.icon}
                  alt={item.icon}
                  width={29}
                  height={29}
                />
                <h1 className="text-sky-600 hover:text-sky-400">{item.title}</h1>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
