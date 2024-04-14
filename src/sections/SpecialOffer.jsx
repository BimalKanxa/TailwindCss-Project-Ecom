import React from 'react'
import offer from '../assets/images/offer.svg'
import Button from '../components/Button'
import arrowRight from '../assets/icons/arrow-right.svg'
const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
       <div className="flex1">
        <img src={offer} alt="" width={773} height={687} className='object-contain w-full' />
       </div>

       <div className='flex flex-1 flex-col'>

        
<h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
  Special
  {/* <span className='text-coral-red '> Special </span> */}
  <span className='text-coral-red '> Offer </span>
   
</h2>
<p className='mt-4 lg:max-w-lg info-text'>Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>

<p className='mt-6 lg:max-w-lg info-text'>Our dedication to detail and excellence ensures your satisfaction.</p>
<div className='mt-11 flex flex-wrap gap-4'>
<Button label="Shop now!" iconURL={arrowRight} />
<Button
label="Learn More"
backgroundColor="bg-white"
borderColor="border-slate-gray"
textColor="text-slate-gray"
>

</Button>

</div>
</div>

    </section>
  )
}

export default SpecialOffer