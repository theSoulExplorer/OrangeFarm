import { Search } from '@mui/icons-material'
import { InputAdornment, OutlinedInput } from '@mui/material'
import React, { useEffect } from 'react'
import Menu from './Menu'
import MeraSearch from './icons/MeraSearch'

export default function Navigation() {
  return (
    <div class="col-span-2 row-span-10 bg-white rounded-md p-4">
        <div style={{height:"20%"}} class='w-full m-2 bg-blue-300'>
            <MeraSearch />
            <OutlinedInput
            id='srch'
            style={{height:"40px", borderRadius:"20px", marginTop:"1rem"}}
            className='rounded w-4/5'
            placeholder='Search'
            startAdornment={
              <InputAdornment position="start">
                <Search style={{transform:"scale(0.8"}} />
              </InputAdornment>
            }
            ></OutlinedInput>
        </div>
        <div style={{height:"80%", position:"relative"}} class='w-full mt-6 bg-red-300'>
            {/* <OutlinedInput
            id='srch'
            style={{height:"40px", borderRadius:"20px", marginTop:"1rem"}}
            className='rounded w-4/5'
            placeholder='Search'
            startAdornment={
              <InputAdornment position="start">
                <Search style={{transform:"scale(0.8"}} />
              </InputAdornment>
            }
            ></OutlinedInput> */}
            <Menu />
        </div>
        <div class='w-full m-2 bg-red-300'></div>
    </div>
  )
}
