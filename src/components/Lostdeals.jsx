import React from 'react'
import Sidearrow from './icons/Sidearrow'

export default function Lostdeals() {
  return (
    <div style={{padding:"0.5rem", paddingLeft:"1rem", display:"flex", flexDirection:"column", justifyContent:"space-between"}} class="col-span-2 row-span-3 col-start-5 bg-white rounded-md">
      <div style={{width:"100%", fontSize:"14px", fontWeight:"600"}}>Lost Deals</div>
      <div style={{width:"100%", fontWeight:"500", display:"flex", flexDirection:"column"}}>
        <div style={{width:"100%", fontWeight:"500", display:"flex", flexDirection:"row", alignItems:"center"}}>
            <span style={{fontSize:"34px",marginRight:"5px"}}>4%</span>
        </div>
        <div style={{fontSize:"8px", color:"#454545"}}>
        You closed 96 out of 100 deals
        </div>
      </div>
      <div className='cta' style={{width:"100%"}}>
        <span style={{fontSize:"10px",marginRight:"5px", color:"#734A00"}}>All deals</span>
        <div class="ctaIcon"><Sidearrow /></div>
      </div>
    </div>
  )
}
