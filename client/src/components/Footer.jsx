import React from 'react'
// import {AiOutlineMail} from 'react-icons/ai'
export default function Footer() {
  return (
    <>
    <div className='bg-black w-fit h-fit mt-20 text-gray-500 p-10 md:p-32'>
      <div className='grid md:grid-cols-2 gap-4'>
        <div>
          <h4 className='text-sky-400 font-bold text-xl mb-2 md:text-2xl md:mb-5'>FLYDETECTOR.</h4>
          <p>
          Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
           Praesent sapien massa, <br /> convallis a pellentesque nec, egestas non nisi. Mauris blandit aliquet elit,
            eget tincidunt nibh pulvinar a.<br/> Nulla porttitor accumsan tincidunt. Nulla porttitor accumsan tincidunt.
             Quaerat voluptas autem <br/> necessitatibus vitae aut. </p>
             </div>
        <div>
          <h4 className='text-white font-bold mb-5'>
          GET NOTIFIED
          </h4>
          <p>Quia quo qui sed odit. Quaerat voluptas autem necessitatibus vitae aut non alias sed quia.<br/> Ut itaque enim optio ut excepturi deserunt <br/> iusto porro.</p>
          <div className='flex gap-2 p-5'>
              {/* <AiOutlineMail className='text-white text-2xl mt-1'/> */}
              <input className=' placeholder:text-gray-500  bg-black pl-3  md:text-lg font-thin text-white  focus:outline-none ' placeholder='Email Address' type='email' name='email'></input>
              <button  className='bg-sky-600 hover:bg-sky-500 text-white font-semibold py-2.5  px-5 md:px-10'>SUBSCRIBE</button>
          </div>
          </div>

      </div>
      <div className='text-gray-500 text-center mt-5 md:mt-20'>@Copyright Flydetector 2024</div>
    </div>
    </>
  )
}
