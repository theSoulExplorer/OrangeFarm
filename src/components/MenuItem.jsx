import React from 'react'
import MenuIcon from './MenuIcon';

export default function MenuItem(props) {
  return (
    <div className='flex w-full menuItem'>
    <div style={{width:"10px", display:"inline-block"}}><MenuIcon ind={props.ind} /></div>
     <span style={{marginLeft:"12px", fontWeight:"400"}}> {props.cap}</span>
    </div>
  )
}
