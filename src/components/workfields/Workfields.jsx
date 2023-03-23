import {Box} from '@mui/material'
import WebDesignLogo from '../../assets/photo/development.png'
import LogoDesignLogo from '../../assets/photo/logo design.png'
import DigitalMarketLogo from '../../assets/photo/DigitalMarketing.png'
import pallet from '../../theme'
import './workfields.css'




const BoxCreator =(props)=>{
    return(
        <Box
        sx={{
            width:"250px",
            padding:"0 5rem",
            minWidth:"70px",
            height:'400px',
            display:"flex",
            flexWrap:"wrap",
            alignItems:"center",
            justifyContent:"start",
            boxShadow:`0 0 5px ${pallet.white[700]}`,
            padding:"20px 15px",
        }}
        >
        <img src={props.Img} alt="logo"style={{width:"50%",objectFit:'contain',marginLeft:'10px'}}/>
        <div style={{
            width:'100%',
            display:'flex',
            alignItems:"center",
            justifyContent:'start',
            flexWrap:"wrap",
        }}>
            <span style={{
                color:pallet.white[900],
                fontSize:"40px",
                fontFamily: `'Playfair Display', serif`,
                fontWeight:"500",
                wordSpacing:'40px',
                
            }}>{props.title}</span>
            <ul
                style={{
                    listStyle:'none',
                    color:pallet.white[800],
                    marginTop:'15px',
                    fontSize:'14px'
                }}
                >
                <li>Logo & Branding</li>
                <li>website Design</li>
                <li>Mobile App Design</li>
                <li>Graphic/Print Design</li>
                <li>Video Production</li>
            </ul>
        </div>
    </Box>
    )
}



export default function App(){

    return(
        <Box sx={{
            width:'100%',
            display:'flex',
            alignItems:'center',
            justifyContent:"center",
            marginTop:"70px",
        }}>
            <Box sx={{
                padding:'70px 0',
                display:'flex',
                alignItems:'center',
                boxShadow:`0 -2px 0 ${pallet.white[700]}`,
                justifyContent:"center",
                gap:'20px',
                flexWrap:'wrap'
            }}>
            <BoxCreator title="Branding Design" Img={LogoDesignLogo}/>
            <BoxCreator title="Web Design" Img={WebDesignLogo}/>
            <BoxCreator title="Digital Marketing" Img={DigitalMarketLogo}/>
        </Box>
    </Box>
    )
}