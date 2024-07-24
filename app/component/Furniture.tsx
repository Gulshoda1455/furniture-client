import one from '../image/one.png';
import two from '../image/two.png';
import three from '../image/three.png'
import four from '../image/four.png';
import five from '../image/five.png';
import six from '../image/sixth.png';
import seven from '../image/seven.png';
import eight from '../image/eight.png';
import nine from '../image/nine.png';
import Image from 'next/image';

export default function Furniture(){
    return (
        <div>
          <div className='text-center mb-4'>   
          <p className='font-semibold text-[20px]'>Share your setup with</p>
          <h2 className='font-bold text-[40px]'>#FuniroFurniture</h2>
          </div>
          
    
          <div className='flex items-center justify-center gap-4'>
                <div>
                <div className='flex items-end gap-2 mb-2'>
                  <Image src={one} alt="1" />
                  <Image src={two} alt="2" width={400} height={312}/>
                </div>
                <div className='flex items-start gap-2'>
                  <Image src={four} alt="4" width={200} height={242}/>
                  <Image src={three} alt="3" width={300}/>
                </div>
                </div>
                <div>
                  <Image src={five} alt="5" width={255} height={392}/>
                </div>
                <div>
                <div className='flex items-end gap-2 mb-2'>
                  <Image src={six} alt="6" width={270} height={348}/>
                  <Image src={seven} alt="7" width={190} height={548}/>
                </div>
                <div className='flex items-start gap-2'>
                  <Image src={eight} alt="8" width={158} height={242}/>
                  <Image src={nine} alt="9"  width={258} height={196}/>
                </div>
                </div>
    
    
          </div>
        </div>
      )
}