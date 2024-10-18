"use client";
import React, { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react';
import Image from 'next/image';
import { ButtonsCard } from './ui/tailwind-css-buttons';

const Contact = () => {
  const [state, handleSubmit] = useForm("myzyyorp");
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e: any) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value})
  }

  const handleSubmitForm = (e: any) => {
    e.preventDefault();
    handleSubmit(formData);
  }

  return (
    <div id='contact'>
      <div className='page-title'>CONTACT</div>

      <div className='container mx-auto'>
        <div className='flex flex-col items-center lg:flex-row gap-8 justify-center'>
          <div className='lg:mx-0 flex flex-col'>
            <div className='h2 mb-12 text-center lg:text-left '>Let's work together!</div>

            <form className='flex flex-col gap-6 w-full max-w-[480px]' onSubmit={handleSubmitForm}>
              <div className='flex gap-8'>
                <div className='flex-1'>
                  <label htmlFor='firstname' className='block mb-2 text-sm font-medium'>
                    First Name <span>*</span>
                  </label>
                  <input
                    onChange={handleChange}
                    type='text'
                    id='firstname'
                    name='firstname'
                    value={formData.firstname}
                    className='input'
                    placeholder='First Name'
                  />
                </div>
                <div className='flex-1'>
                  <label htmlFor='lastname' className='block mb-2 text-sm font-medium'>
                    Last Name <span>*</span>
                  </label>
                  <input
                    onChange={handleChange}
                    type='text'
                    id='lastname'
                    name='lastname'
                    value={formData.lastname}
                    className='input'
                    placeholder='Last Name'
                  />
                </div>
              </div>
              <div>
                <label htmlFor='email' className='block mb-2 text-sm font-medium'>
                  Email <span>*</span>
                </label>
                <input
                  onChange={handleChange}
                  type='text'
                  id='email'
                  name='email'
                  value={formData.email}
                  className='input w-full'
                  placeholder='yourmail@mail.com'
                />
                <ValidationError
                  prefix='Email'
                  field='email'
                  errors={state.errors}
                />
              </div>
              <div>
                <label htmlFor='phone' className='block mb-2 text-sm font-medium'>
                  Phone <span>*</span>
                </label>
                <input
                  onChange={handleChange}
                  type='text'
                  id='phone'
                  name='phone'
                  value={formData.phone}
                  className='input w-full'
                  placeholder='010-0000-0000'
                />
                <ValidationError
                  prefix='Phone'
                  field='phone'
                  errors={state.errors}
                />
              </div>
              <div>
                <label htmlFor='message' className='block mb-2 text-sm font-medium'>
                  Message <span>*</span>
                </label>
                <textarea
                  onChange={handleChange}
                  id='message'
                  name='message'
                  value={formData.message}
                  className='textarea w-full h-32 p-3'
                  placeholder='Leave a message'
                  required
                />
                <ValidationError
                  prefix='Message'
                  field='message'
                  errors={state.errors}
                />
              </div>

              <button type='submit' disabled={state.submitting} className='border border-black-100 h-12 rounded-lg flex items-center justify-center gap-2'>
                {state.submitting ? (
                  <span>Sending..</span>
                ) : (
                  <span>Send message</span>
                )}
              </button>

              
            </form>
          </div>

          <div className='hidden lg:flex relative w-[477px] h-[594px] rounded-lg overflow-hidden'>
            <Image
              src={'/contact.jpg'}
              alt=''
              fill
              quality={100}
              className='object-cover'
            />
          </div>
        </div>
      </div>
  
    </div>
  )
}

export default Contact