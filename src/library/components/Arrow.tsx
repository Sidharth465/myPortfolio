import React from 'react'

const Arrow = ({height=100,width=100}) => {
  return (
    <div className='hidden lg:flex  flex-col relative  '> 
    <div style={{height:height}} className=' w-[5px] bg-linear2'/>
    <div style={{width:width}} className='h-[5px]  bg-linear2'/>

    <div className='absolute -bottom-[10px] -right-1 h-[25px] w-[25px] rounded-full bg-linear2'/>

    
    </div>
  )
}

export default Arrow