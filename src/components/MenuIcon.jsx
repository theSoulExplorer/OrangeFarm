import React from 'react'
import DashboardIcon from './icons/DashboardIcon'
import CustomersIcon from './icons/CustomersIcon'
import AllReports from './icons/AllReports'
import Geography from './icons/Geography'
import Conversations from './icons/Conversations'
import Deals from './icons/Deals'
import ExportIcon from './icons/ExportIcon'
import Settings from './icons/Settings'
import Logout from './icons/Logout'

export default function MenuIcon(props) {
  const ind = props.ind;
  if(ind == 1){
    return <DashboardIcon />;
  }
  else if(ind == 2){
    return <CustomersIcon />
  }
  else if(ind == 3){
    return <AllReports />
  }
  else if(ind == 4){
    return <Geography />
  }
  else if(ind == 5){
    return <Conversations />
  }
  else if(ind == 6){
    return <Deals />
  }
  else if(ind == 7){
    return <ExportIcon />
  }
  else if(ind == 8){
    return <Settings />
  }
  else if(ind == 9){
    return <Logout />
  }
  return (
    <div>
      
    </div>
  )
}
