import {useState, useRef} from 'react';
import {motion} from 'framer-motion';
import emailjs from '@emailjs/browser';

import {styles} from '../styles';
import {EarthCanvas} from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef=useRef();
  const [form, setForm]= useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {}
  const handleSubmit =(e) => {}
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div
                variants={slideIn('left', "between", 0.2, 1)}
                className="flex-[0.75 bg-black-100 p-8 rounded-2xl">
                  <p className={styles.sectionSubText}>Get in touch</p>
                  <h3 className={styles.sectionHeadText}>Contact</h3>

                  <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="mt-12 flex flex-col gap-8">
                          <lable className="flex flex-col">
                            <span className="text-white font-medium mb-4">Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Your full name"
                                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium" />
                          </lable>
                          
                          <lable className="flex flex-col">
                            <span className="text-white font-medium mb-4">E-mail</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Your email"
                                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium" />
                          </lable>

                          <lable className="flex flex-col">
                            <span className="text-white font-medium mb-4">Message</span>
                            <textarea
                                rows="5"
                                type="text"
                                name="message"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Please type your message here"
                                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium" />
                          </lable>
                        </form>
                </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")