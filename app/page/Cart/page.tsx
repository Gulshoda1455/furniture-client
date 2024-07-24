
import Image from 'next/image';
import cartLogo from '../../image/cartLogo.svg';
import HighQuality from '@/app/component/HighQuality';

export default function Cart(){
    return (
        <div>
             <section className='p-20 bg-[url(./image/CartBg.png)] bg-no-repeat bg-center '>
        <div className="container">
            <div className='text-center mx-auto '>
                 <div className='ml-[640px]' >
                 <Image src={cartLogo} alt="cartLogo"/>
                 </div>
                 <p>Home - Cart</p>
            </div>
        </div>
      </section>
       <HighQuality/>
        </div>
    )
}