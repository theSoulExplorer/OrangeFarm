import React from 'react'
import MenuItem from './MenuItem'

export default function Menu() {
  return (
    <div style={{marginTop:"10px"}}>
      <div>
          <MenuItem cap="Dashboard" ind="1"></MenuItem>
          <MenuItem cap="Customers" ind="2"></MenuItem>
          <MenuItem cap="All Reports" ind="3"></MenuItem>
          <MenuItem cap="Geography" ind="4"></MenuItem>
          <MenuItem cap="Conversations" ind="5"></MenuItem>
          <MenuItem cap="Deals" ind="6"></MenuItem>
          <MenuItem cap="Export" ind="7"></MenuItem>
        </div>
        <div style={{width:"100%", position:"absolute", bottom:"0"}}>
          <MenuItem cap="Settings" ind="8"></MenuItem>
          <MenuItem cap="Logout" ind="9"></MenuItem>
        </div>
    </div>
  )
}
