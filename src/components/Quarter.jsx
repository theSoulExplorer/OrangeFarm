import React from 'react'
import Arc from './icons/Arc'
import Sidearrow from './icons/Sidearrow'

export default function Quarter() {
  return (
    <div style={{padding:"0.5rem", paddingLeft:"1rem", display:"flex", flexDirection:"column", textAlign:"center", justifyContent:"space-between"}} class="col-span-2 row-span-3 col-start-7 bg-white rounded-md">
        <div style={{width:"100%", fontSize:"14px", fontWeight:"600"}}>Quarter Goal</div>
      <div style={{height:"50%", width:"100%",display:"flex", justifyContent:"center"}}>
        <Arc />
      </div>
      <div className='cta' style={{width:"100%"}}>
        <span style={{fontSize:"10px",marginRight:"5px", color:"#734A00"}}>All Goals</span>
        <div class="ctaIcon"><Sidearrow /></div>
      </div>
    </div>
  )
}
