import React from 'react'
import './home.css'

import bubble1 from '../assets/bubble3.png'
import bubble2 from '../assets/bubble.png'
import bubble3 from '../assets/bubble1.png'
import Img from '../assets/img.png'
import Crousel from './pages/Crousel'



const Hero = () => {
  return (
    <div className=' pt-16'>
      <div className='Container  flex flex-col items-center'>
      <div className='bg-gradient-to-b from-red-500 via-orange-300 to-amber-200 relative flex  justify-center w-full h-screen '>
               <div className='top-24 homecard relative flex w-3/4 rounded-xl bg-cover'
               style={{backgroundImage:`url(${Img})`,backgroundPosition:`center`}}>

              <div className='homedata'>
                       <div className='heading text-4xl font-medium  tracking-wide font-serif w-80'>Samarpit<br></br>
                       Media <br></br>
                       Society
                       </div><br></br> 
                       
                       <div className='w-80 italic'>Samarpit Media Society (SMS) has been working in Uttarakhand since 2012
                       </div><div className='w-80 italic'>Samarpit Media Society (SMS) has been working in Uttarakhand since 2012
                       </div>
                       <br></br>
                       <button className='btn-pin'>Join Us</button>
            </div>
            
       </div> 
</div>
            {/* <=======About us======> */}
        


         <div className='relative flex  justify-center w-full h-screen bg-gradient-to-b from-amber-200 via-sky-300 to-blue-200'>
          <div className='h-4/5 w-11/12 top-20 rounded-xl bg-white relative'>
          <div className='absolute top-24 bg-gray-500 rounded-xl w-2/5 h-4/6 left-2/4 z-30 shadow '>
          <Crousel/>
          </div>
          <div className='absolute h-20  w-auto text-center text-8xl font-serif  -top-12 left-20'>
            About Us
          </div>
          <div className='absolute top-24 left-20 bg-gray-400 w-2/5 z-10 h-4/6 bg-transparent text-center'>
          hsjghdsaghdhsgdsadhgsdghhsagdhsagdhjshsjghdsaghdhsgdsadhgs<br></br>
            djsgdjsaghdj,adghhj,sdggsadgsahdghsadedffasdfsadsasadfsg<br></br>
            hsjghdsaghdhsgdsadhgsdghhsagdhsagdhjssdsadsadasda<br></br>
            djsgdjsaghdj,adghhj,sdggsadgsahdghssdsadsadsadsadasdadg<br></br>
            hsjghdsaghdhsgdsadhgsdghhsagdhsagdhsadsadsadasdsadjsa<br></br>
            djsgdjsaghdj,adghhj,sdggsadgsahdghsasadasdsadasdsadasdg<br></br>
            hsjghdsaghdhsgdsadhgsdghhsagdhsagdhjsadsadasdsadsa<br></br>
            djsgdjsaghdj,adghhj,sdggsadgsahdghsadsadasdsadasdsadg<br></br>
            hsjghdsaghdhsgdsadhgsdghhsagdhsagdhjshsjghdsaghdhsgdsadhgs<br></br>
            djsgdjsaghdj,adghhj,sdggsadgsahdghsadedffasdfsadsasadfsg<br></br>
            hsjghdsaghdhsgdsadhgsdghhsagdhsagdhjssdsadsadasda<br></br>
            djsgdjsaghdj,adghhj,sdggsadgsahdghssdsadsadsadsadasdadg<br></br>
            hsjghdsaghdhsgdsadhgsdghhsagdhsagdhsadsadsadasdsadjsa<br></br>
            djsgdjsaghdj,adghhj,sdggsadgsahdghsasadasdsadasdsadasdg<br></br>
            hsjghdsaghdhsgdsadhgsdghhsagdhsagdhjsadsadasdsadsa<br></br>
            djsgdjsaghdj,adghhj,sdggsadgsahdghsadsadasdsadasdsadg<br></br>
          </div>
          <div className='absolute w-44 rounded-full top-1/3  left-36'>
              <img src={bubble2} className='rounded-full w-full animate-bounce '></img>
             </div>
             <div className='absolute  w-28 bg-transparent rounded-full   animate-bounce top-2/4 left-80'>
              <img src={bubble3} className='rounded-full w-full '></img>
             </div>
            
             <div className='absolute  w-32 rounded-full  animate-bounce left-72 top-36'>
             <img src={bubble1}  className='rounded-full  w-full'></img>
             </div>
             <button className='absolute bottom-6 h-14 w-40  text-center text-3xl
             left-64 font-serif rounded-xl btn-pin2'>Know More</button>
             </div>
            </div> 
          </div>
        






       
         <div className='relative flex  justify-center w-full h-fit bg-gradient-to-b from-blue-200 via-cyan-300 to-purple-400'>
          <div className='h-fit w-11/12 flex justify-center top-20 rounded-xl bg-white '>
           <div className='homecard2 w-full rounded-xl h-fit z-40'> 
           <div className='absolute h-20  w-auto text-center text-8xl font-serif  -top-12 right-32'>Projects</div>
           <div className='mt-56 grid grid-rows-3 grid-cols-2  gap-y-24 px-24 '>
            <div className='h-80 z-10 px-9'><Crousel/></div>
            <div  className='second text-center yoga z-10 px-9 '>2
            jjdjjdjdwjdjwdjwdjwjdj
            dlidjlk;djljdlwjjl;kqjd
            ddlkjhlkdjl;kjdkjld;kjwl;
            hdgkhsgfjghshfgdhdjgfdgjhgf
            wldjdjkljddfdsfdsfdsfdffd
            kldjkljdlkjlwjlkwjqdjddjld
            jjdjjdjdwjdjwdjwdjwjdj
            dlidjlk;djljdlwjjl;kqjd
            ddlkjhlkdjl;kjdkjld;kjwl;
            hdgkhsgfjghshfgdhdjgfdgjhgf
            wldjdjkljddfdsfdsfdsfdffd
            jjdjjdjdwjdjwdjwdjwjdj
            dlidjlk;djljdlwjjl;kqjd
            
            
            <div className='text-5xl slide-left'>yoga se hoga</div></div> 
            
            <div className='h-80 text-center defence third z-10 px-9'>3
            jjdjjdjdwjdjwdjwdjwjdj
            dlidjlk;djljdlwjjl;kqjd
            ddlkjhlkdjl;kjdkjld;kjwl;
            hdgkhsgfjghshfgdhdjgfdgjhgf
            wldjdjkljddfdsfdsfdsfdffd
            kldjkljdlkjlwjlkwjqdjddjldj
            jdjjdjdwjdjwdjwdjwjdj
            dlidjlk;djljdlwjjl;kqjd
            ddlkjhlkdjl;kjdkjld;kjwl;
            hdgkhsgfjghshfgdhdjgfdgjhgf
            wldjdjkljddfdsfdsfdsfdffd
            kldjkljdlkjlwjlkwjqdjddjld
            <div className='text-5xl slide-right1'>selfdefence lodey pe</div>
            </div> 
            <div className='h-80 z-10 px-9'><Crousel/></div> 
            <div className='h-80 z-10 px-9'>5<Crousel/></div> 
            <div className='second  text-center h-80 z-10 px-9 dance'>0
            jjdjjdjdwjdjwdjwdjwjdj
            dlidjlk;djljdlwjjl;kqjd
            ddlkjhlkdjl;kjdkjld;kjwl;
            hdgkhsgfjghshfgdhdjgfdgjhgf
            wldjdjkljddfdsfdsfdsfdffd
            kldjkljdlkjlwjlkwjqdjddjld
            jjdjjdjdwjdjwdjwdjwjdj
            dlidjlk;djljdlwjjl;kqjd
            ddlkjhlkdjl;kjdkjld;kjwl;
            hdgkhsgfjghshfgdhdjgfdgjhgf
            wldjdjkljddfdsfdsfdsfdffd
            kldjkljdlkjlwjlkwjqdjddjld
            <div className='text-5xl slide-left'>nacbaliye</div>
            </div>
           </div>
           <div className='w-full mt-20 mb-10 flex justify-center'> <button className='
           h-14 w-40  text-center text-3xl font-serif rounded-xl  btn-pin3'>Know More</button></div>
         
           </div>
          </div>
        
</div>
        </div>
     
   
  )
}

export default Hero





