import React, { useEffect } from 'react'
import {services} from '../constants'
import ServiceCard from '../components/ServiceCard'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Services = () => {
useEffect(() => {
  AOS.init();
}, [])


  return (

    <section className='max-container flex justify-center flex-wrap gap-9' data-aos="zoom-in">
      
        {services.map((service) => (
          <ServiceCard key={service.label} {...service}/>
        ))}
 
    </section>

  )
}

export default Services