import Products from "@/app/component/Products";


export default function Shop(){
    return (
        <div>
             <section className='py-20 bg-[url(./image/CartBg.png)] bg-no-repeat bg-center '>
        <div className="container">
            <div className='text-center mx-auto '>
                 <div className=' font-bold text-[45px]'>
                    Shop
                 </div>
                 <p>Checkout - Cart</p>
            </div>
        </div>

      </section>
      <section>
        <div className="container">
           <Products/>
        </div>
      </section>
      
        </div>
    )
}