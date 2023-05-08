import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full my-32'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='text-center'>
          <h2 className='text-5xl font-bold'>
          The secure choice for developers worldwide
          </h2>
          <p className='text-3xl py-6 text-gray-500'>Don't leave your sensitive data at risk. Choose Janssen Enterprise's trusted encryption services for unbeatable security and peace of mind.</p>
        </div>

        <div className='grod md:grod-cols-3 gap-1 px-2 text-center'>
          <div className='border py-8 rounded-xl shadow-xl'>
            <p className='text-6xl font-bold text-indigo-600'>100%</p>
            <p className='text-gray-400 mt-2'>Completion Rate</p>
          </div>
          <div className='border py-8 rounded-xl shadow-xl'>
            <p className='text-6xl font-bold text-indigo-600'>24/7</p>
            <p className='text-gray-400 mt-2'>Delivery and Support</p>
          </div>
          <div className='border py-8 rounded-xl shadow-xl'>
            <p className='text-6xl font-bold text-indigo-600'>100k+</p>
            <p className='text-gray-400 mt-2'>Transactions Handled</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
