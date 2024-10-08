

async function getData(){
    const res = await fetch("https://fakestoreapi.com/users");

    if(!res.ok){
         throw new Error("Failed to fetch data");
    }

    return res.json();

}

interface IProducts{
    id:string;
    address:{
        city:string;
        street:string;
        zipcode:string;
    };
    email:string;
    username:string;
    password:string;
    
}

export default async function Admin(){
    const data:IProducts[]=await getData();
    return (
        <div className="text-center pt-[56px] ">

         <div className="grid grid-cols-4 gap-4" >
         {data.map((p)=>(
                <div  
                className="h-56 flex flex-col p-3 gap-4 rounded-lg group hover:scale-105 transition-transform
                ease-out duration-200 border"  key={p.id}>
                  
                   <div className="ml-[10px] mt-[16px] ">
                        
                        <p className="font-medium text-[16px] text-[#898989]">Email:{p.email}</p>
                       <p className="font-semibold text-[20px] text-[#3A3A3A]">Username: {p.username}</p>
                       <p className="font-semibold text-[20px] text-[#3A3A3A]">Password: {p.password}</p>
                       <p className="font-semibold text-[24px] text-black"> City:{p.address.city}</p>
                       <p className="font-semibold text-[24px] text-black"> Street:{p.address.street}</p>
                       <p className="font-semibold text-[24px] text-black"> ZipCode:{p.address.zipcode}</p>
                   </div>
                </div>
            ))}
         </div>
        </div>
    );
}