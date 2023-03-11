import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

	emailjs.sendForm('service_6bwrf9o', 'template_4rdye58', form.current, '0p2qA0FakMQnG4i0O')

      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
	  e.target.reset()
  };
	  
	  return(
		  <form class="bg-white dark:bg-gray-900 mt-20" ref={form}onSubmit={sendEmail}>
				<div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
					<h2 class="text-3xl lg:text-4xl text-center mb-6 tracking-wider">Contact Me</h2>
						<div>
							<label for="email" class="block mb-2 text-sm ">Your email</label>
							<input type="email" name='user_email' class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" required/>
						</div>
						<div>
							<label for="subject" class="block mb-2 text-sm  text-gray-900 dark:text-gray-300">Subject</label>
							<input type="text" name="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" required/>
						</div>
						<div class="sm:col-span-2">
							<label for="message" class="block mb-2 text-sm  text-gray-900 dark:text-gray-400">Your message</label>
							<textarea name="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" ></textarea>
						</div>
						<button class="py-3 px-5 mt-5 text-sm text-center text-white bg-black rounded-lg  sm:w-fit hover:border-gray-300 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
				</div>
			  </form>
			  
			  )
			  
			}


		
		  