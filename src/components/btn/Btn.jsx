import React from 'react'
import pallet from '../../theme'
import Link from '@mui/material/Link';

const Btn = ({children}) => {
  return (
    <a 
        className='btn' 
        style={{backgroundColor:pallet.yellow[500]}}
        href={""} 
        target={"_blank"}
    >
        {children}
    </a>
  )
}

export default Btn
