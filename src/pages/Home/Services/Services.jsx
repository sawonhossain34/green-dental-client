import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";


const Services = () => {
    const [services,setServices] =useState([]);

    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }  ,[])
   
    return (
        <div className="mt-5">
            <div className="text-center">
                <h2 className="text-2xl font-bold text-orange-500">service</h2>
                <h2 className="text-5xl ">Our Service Area</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, reiciendis dolores.<br /> Exercitationem  unde dolor corporis architecto.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServicesCard
                     key={service._id}
                     service={service}
                    >

                    </ServicesCard>)
                }
            </div>
            
        </div>
    );
};

export default Services;