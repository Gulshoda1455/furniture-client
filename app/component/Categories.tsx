import Image from "next/image";

async function getData(){
    const res = await fetch("https://ecommerce-backend-fawn-eight.vercel.app/api/categories");

    if(!res.ok){
         throw new Error("Failed to fetch data");
    }

    return res.json();

}

interface ICategory{
    id:string;
    name:string;
    image:string;
}

export default async function Categories(){
    const data:ICategory[]=await getData();
    return (
        <div className="text-center pt-[56px] pb-[52px]">
             <h2 className="font-bold text-[32px] font-[#333333] ">Browse The Range</h2>
             <p className="mb-[62px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
         <div className="grid grid-cols-3" >
         {data.map((c)=>(
                <div className="w-[381px] bg-white mb-2 p-4 rounded-md"  key={c.id}>
                    <Image src={c.image} alt={c.name} width={381} height={480}/>
                    <p className="font-semibold text-[24px] text-[#333333] mt-[30px]"> {c.name}</p>
                </div>
            ))}
         </div>
        </div>
    );
}