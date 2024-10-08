import Image from "next/image";
import Link from "next/link";

async function getData(){
    const res = await fetch("https://fakestoreapi.com/products");

    if(!res.ok){
         throw new Error("Failed to fetch data");
    }

    return res.json();

}

interface IProducts{
    id:string;
    title:string;
    image:string;
    subtitle:string;
    price:number;
}

export default async function Products(){
    const data:IProducts[]=await getData();
    return (
        <div className="text-center pt-[56px] ">

         <div className="grid grid-cols-4 gap-4" >
         {data.map((p)=>(
                <Link href={`/`}  
                className="h-96 flex flex-col p-3 gap-4 rounded-lg group hover:scale-105 transition-transform
                ease-out duration-200 border"  key={p.id}>
                   <div className="relative max-h-80 flex-1">
                      <Image src={p.image} alt={p.title} fill/>
                   </div>
                   <div className="ml-[10px] mt-[16px] mb-[30px]">
                        <p className="font-semibold text-[24px] text-black"> {p.title}</p>
                        <p className="font-medium text-[16px] text-[#898989]">{p.subtitle}</p>
                       <p className="font-semibold text-[20px] text-[#3A3A3A]">Rp {p.price}</p>
                   </div>
                </Link>
            ))}
         </div>
        </div>
    );
}