import Image from "next/image";
import High from '../image/High.png'
import Guarantee from '../image/guarantee.png';
import Shipping from '../image/shipping.png';
import Support from '../image/customer-support.png';


export default function HighQuality(){
    return (
        <div>
             <section className='py-20 bg-[#F9F1E7] '>
        <div className="container">
          <div className='flex items-center justify-between'>
              <div className='flex items-center justify-between'>
                <Image src={High} alt="High" width={60} height={60} />
                <div className='ml-[5px]' >
                  <h2 className='font-semibold text-[25px] mb-[2px]'>High Quality</h2>
                  <p className='font-medium text-[20px] text-[#898989]'>crafted from top materials</p>
                </div>
              </div>
              <div className='flex items-center justify-between'>
                <Image src={Guarantee} alt="High" width={60} height={60} />
                <div className='ml-[5px]'  >
                  <h2 className='font-semibold text-[25px] mb-[2px]'>Warranty Protection</h2>
                  <p className='font-medium text-[20px] text-[#898989]'>Over 2 years</p>
                </div>
              </div>
              <div className='flex items-center justify-between'>
                <Image src={Shipping} alt="High" width={60} height={60} />
                <div className='ml-[5px]' >
                  <h2 className='font-semibold text-[25px] mb-[2px]'>Free Shipping</h2>
                  <p className='font-medium text-[20px] text-[#898989]'>Order over 150 $</p>
                </div>
              </div>
              <div className='flex items-center justify-between'>
                <Image src={Support} alt="High" width={60} height={60} />
                <div className='ml-[5px]' >
                  <h2 className='font-semibold text-[25px] mb-[2px]'>24 / 7 Support</h2>
                  <p className='font-medium text-[20px] text-[#898989]'>Dedicated support</p>
                </div>
              </div>
          </div>
        </div>
      </section>
        </div>
    )
}