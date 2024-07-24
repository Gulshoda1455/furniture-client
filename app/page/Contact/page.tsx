import Image from 'next/image'
import contactLogo from '../../image/contactImg.png'
import HighQuality from '@/app/component/HighQuality'
import ContactForm from '@/app/component/ContentForm'



export default function Cantact(){
    return (
        <div>
             <section className='p-20 bg-[url(./image/CartBg.png)] bg-no-repeat bg-center '>
        <div className="container">
            <div className='text-center '>
                 <div className='ml-[600px]'>
                 <Image src={contactLogo} alt="cartLogo" width={196} height={72} />
                 </div>
                 <p>Contact - Cart</p>
            </div>
        </div>
      </section>
      <section className='p-10'>
        <div className="container">
          <div >
          <div className='text-center w-[644px]  m-auto'>
          <h2 className='font-semibold text-[36px] mb-[7px]'>Get In Touch With Us</h2>
            <p className='font-normal tetx-[16px] mb-[133px] text-[#9F9F9F]'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
          </div>
          <div className='flex items-start justify-between'>
            <div>
              <div className='w-[212px] mb-[42px]'>
                <h2 className='font-medium text-[24px] '>Address</h2>
                <p className='font-normal text-[16px] '>236 5th SE Avenue, New York NY10000, United States</p>
              </div>
              <div className='w-[212px] mb-[42px]'>
                <h2 className='font-medium text-[24px] ' >Phone</h2>
                <p className='font-normal text-[16px] ' >Mobile: +(84) 546-6789</p>
                <p className='font-normal text-[16px] '>Hotline: +(84) 456-6789</p>
              </div>
              <div className='w-[180px] mb-[42px]'>
                <h2 className='font-medium text-[24px] '>Working Time</h2>
                <p className='font-normal text-[16px] ' >Monday-Friday: 9:00 - 22:00</p>
                <p className='font-normal text-[16px] ' >Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
           <ContactForm/>
          </div>
          </div>
        </div>
      </section>
      <HighQuality/>
        </div>
    )
}