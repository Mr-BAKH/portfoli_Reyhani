import {Box} from '@mui/material'
import bakh from '../../assets/photo/imgBAKH.png'
import hayyat from '../../assets/photo/amirPhoto.jpg'
import Javad from '../../assets/photo/3.jpg'
import pallet from '../../theme'

export default function App(){
    return(
        <Box width='100%' p='50px 0' display='flex' flexWrap='wrap' textAlign="center" justifyContent='center'>
            <span style={{fontSize:"40px", fontWeight:"700", fontFamily:`'Playfair Display', serif`}}>Our Team</span>
            <Box 
                width="100%"
                minHeight='500px' 
                display="flex" 
                flexWrap='wrap'
                alignItems="center" 
                justifyContent="center" 
                gap= '100px' 
                padding='50px 0'
                >
                <Box sx={{ backgroundImage:`url(${bakh})`, backgroundPosition:'center', backgroundSize:"cover", cursor:"pointer"}} boxShadow='0 0 5px black' display="flex" justifyContent="center" width='200px' height='300px' backgroundColor='red' position='relative'>
                    <Box display='flex' alignItems="center" justifyContent='center' boxShadow='0 0 5px black' width='220px' height='100px' position='absolute' bottom= '-50px' backgroundColor={pallet.white[100]}>
                        <span style={{width:"100%", display:"flex", flexWrap:'wrap', justifyContent:"center"}}>
                            <span style={{fontSize:"22px", width:"100%",fontWeight:"700", fontFamily:`'Playfair Display', serif`}}>Mr.BAKH</span>
                            <span style={{color:`${pallet.yellow[600]}`,fontSize:"16px", width:"100%",fontWeight:"400"}}>Web Designer</span>
                        </span>
                    </Box>
                </Box>
                <Box sx={{ backgroundImage:`url(${hayyat})`, backgroundPosition:'center', backgroundSize:"cover", cursor:"pointer"}}  boxShadow='0 0 5px black' display="flex" justifyContent="center" width='200px' height='300px' backgroundColor='red' position='relative'>
                    <Box display='flex' alignItems="center" justifyContent='center' boxShadow='0 0 5px black' width='220px' height='100px' position='absolute' bottom= '-50px' backgroundColor={pallet.white[100]}>
                        <span style={{width:"100%", display:"flex", flexWrap:'wrap', justifyContent:"center"}}>
                            <span style={{fontSize:"22px", width:"100%",fontWeight:"700", fontFamily:`'Playfair Display', serif`}}>Mr.HAYATI</span>
                            <span style={{color:`${pallet.yellow[600]}`,fontSize:"16px", width:"100%",fontWeight:"400"}}>Web Designer</span>
                        </span>
                    </Box>
                </Box>
                <Box sx={{ backgroundImage:`url(${Javad})`, backgroundPosition:'center', backgroundSize:"cover", cursor:"pointer"}} boxShadow='0 0 5px black' display="flex" justifyContent="center" width='200px' height='300px' backgroundColor='red' position='relative'>
                    <Box display='flex' alignItems="center" justifyContent='center' boxShadow='0 0 5px black' width='220px' height='100px' position='absolute' bottom= '-50px' backgroundColor={pallet.white[100]}>
                        <span style={{width:"100%", display:"flex", flexWrap:'wrap', justifyContent:"center"}}>
                            <span style={{fontSize:"22px", width:"100%",fontWeight:"700", fontFamily:`'Playfair Display', serif`}}>Mr.SHEKARIYAN</span>
                            <span style={{color:`${pallet.yellow[600]}`,fontSize:"16px", width:"100%",fontWeight:"400"}}>Web Designer</span>
                        </span>
                    </Box>
                </Box>
            </Box>
        </Box>
   )
}