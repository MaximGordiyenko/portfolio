"use client";
import { useEffect, useState } from 'react';
import Image from "next/image";
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from '@emailjs/browser';
import { contactSchema } from '@/validation-form/contact';
import FlipEmailForm from '@/components/shared/FlipEmailForm';

const Contact = ({ social }) => {
  const [ isSuccess, setIsSuccess ] = useState(false);
  const { register, handleSubmit, formState: { errors, isDirty, isValid, isSubmitting }, reset } = useForm({
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

  const sendEmails = async (formData) => {
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData
      );
      setIsSuccess(true);
      reset();
    } catch (error) {
      console.error('FAILED...', error.text);
    }
  };

  return (
    <footer className="py-10 px-5">
      <h1 className="text-center text-4xl mt-14 md:mt-28 mb-3 text-gray-300">
        Get in touch
      </h1>
      <p className="text-gray-400 text-lg text-center text-gray-400">
        Feel free to communicate with me via professional network
      </p>
      <section className="flex justify-center mx-[5vw] mt-7">
        <div className="flex gap-10 flex-col w-full">
          <section className="flex text-gray-300">
            <div className="w-full">
              {!isSuccess ? (
                <form
                  onSubmit={handleSubmit(sendEmails)}
                  className="flex flex-col gap-1 w-full opacity-100 transition-opacity duration-300">
                  <label htmlFor="name">Your name *</label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    placeholder="John Doe"
                    required
                    minLength={3}
                    {...register("user_name", { required: "Please enter your first name." })}
                    className={`border rounded-md border-stone-700 hover:border-stone-500 p-2 mb-4 !outline-none w-full ${
                      isSubmitting ? 'input-loading' : ''
                    }`}
                  />
                  {errors.user_name && <span className="text-red-500">{errors.user_name.message}</span>}
                  <label htmlFor="email">Your email *</label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    placeholder="johndoe@gmail.com"
                    required
                    {...register("user_email", { required: "Please enter your email." })}
                    className={`border rounded-md border-stone-700 hover:border-stone-500 p-2 mb-4 !outline-none ${
                      isSubmitting ? 'input-loading' : ''
                    }`}
                  />
                  {errors.user_email && <span className="text-red-500">{errors.user_email.message}</span>}
                  <label htmlFor="subject">Subject *</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="I want to talk to you"
                    required
                    {...register("message", { required: "Please enter your message." })}
                    className={`border rounded-md border-stone-700 hover:border-stone-500 p-2 mb-4 !outline-none ${
                      isSubmitting ? 'input-loading' : ''
                    }`}
                  />
                  {errors.message && <span className="text-red-500">{errors.message.message}</span>}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-2 py-2 text-white rounded transition duration-600 flex justify-center items-center gap-[10px] bg-gradient-to-r from-sky-500 to-sky-700 hover:from-sky-700 hover:to-sky-500 hover:font-bold cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        Sending...
                      </div>
                    ) : (
                      'Send Email'
                    )}
                  </button>
                </form>
              ) : (
                <FlipEmailForm onClick={() => setIsSuccess(false)} />
              )}
            </div>
          </section>
          <section className="flex justify-around">
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
                <h2 className="text-gray-300 hover:text-gray-400 max-sm:hidden">{item.title}</h2>
              </a>
            ))}
          </section>
        </div>
      </section>
    </footer>
  );
};

export default Contact;
