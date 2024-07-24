'use client'

import { useState } from "react"
import { redirect } from 'next/navigation'

export default function ContactForm(){

   


  
    
    return (
        <div >
        <div className='gap-[24px] w-[600px] p-5'>
                    <strong className='mb-[22px] font-medium text-[16px]'>Your name</strong>
                   <label className='mt-[22px] text-sm font-medium text-gray-900 dark:text-white'>
                      <input
                       type="text" 
                       
                       placeholder='Abc'
                       
                       className='bg-gray-50 w-[500px] border border-gray-300 text-gray-900 text-sm rounded-lg   p-5 dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                   </label>
                   
         </div>
         <div className='gap-[24px] w-[600px] p-5'>
                    <strong className='mb-[22px] font-medium text-[16px]'>Email address</strong>
                   <label className='mt-[22px] text-sm font-medium text-gray-900 dark:text-white'>
                      <input
                       type="text" 
                       placeholder='Abc@def.com'
                       
                       className='bg-gray-50 w-[500px] border border-gray-300 text-gray-900 text-sm rounded-lg   p-5 dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                   </label>
                   
         </div>
         <div className='gap-[24px] w-[600px] p-5 items-start'>
                    <strong className='mb-[22px] font-medium text-[16px]'>Subject</strong><br />
                   <label className='mt-[22px] text-sm font-medium text-gray-900 dark:text-white'>
                      <input 
                      type="text" 
                      placeholder='This is an optional'
                      
                      className='bg-gray-50 w-[500px] border border-gray-300 text-gray-900 text-sm rounded-lg   p-5 dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                   </label>
                   
         </div>
         <div className='gap-[24px] w-[600px] p-5'>
                    <strong className='mb-[22px] font-medium text-[16px]'>Message</strong>
                   <label className='mt-[22px] text-sm font-medium text-gray-900 dark:text-white'>
                      <textarea 
                      rows={5}
                      
                       
                      placeholder='Hi! i’d like to ask about'
                       className='bg-gray-50 w-[500px] border border-gray-300 text-gray-900 text-sm rounded-lg   p-10 dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                   </label>
                   
         </div>
         <button  className='w-[237px] font-normal text-[16px] bg-[#B88E2F] py-[13px] text-white rounded-md mt-[49px]'>Submit</button>
                    
        </div>
    )
}