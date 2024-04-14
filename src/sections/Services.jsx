import React from 'react'
import {services} from '../constants'
import ServiceCard from '../components/ServiceCard'
import ScrollAnimation from 'react-animate-on-scroll';

const Services = () => {
  return (
    <ScrollAnimation animateIn="fadeIn">
    <section className='max-container flex justify-center flex-wrap gap-9'>
      
        {services.map((service) => (
          <ServiceCard key={service.label} {...service}/>
        ))}
 
    </section>
    </ScrollAnimation>
  )
}

export default Services