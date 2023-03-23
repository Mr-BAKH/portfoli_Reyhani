import { Box } from "@mui/material"
import pallet from "../../theme"
import Imgage1 from '../../assets/photo/Progress.jpeg'





const Progressbar = (props)=>{
    return(
        <div style={{width:"100%",display:"flex", flexWrap:'wrap',alignItems:"center"}}>
            <span style={{
                width:'100%',
                display:"flex",
                alignItems:"center",
                justifyContent:"space-between",
                fontFamily: `'Poppins', sans-serif`,
                fontWeight:"700",
                margin:"10px 0"
            }}>
                <span>{props.title}</span>
                <span>{props.prog}%</span>
            </span>
            <div style={{width:"100%",height:'12px',backgroundColor:pallet.white[700],display:"flex",alignItems:'center',justifyContent:"start"}}>
                <div style={{width:`${props.prog}%`,height:'100%',backgroundColor:pallet.yellow[500],}}></div>
            </div>
        </div>
    )
}


export default function App(){

    return(
        <Box
            sx={{
                width:"98%",
                margin:"auto",
                overflow:'hidden',
                display:'flex',
                flexWrap:"wrap",
                alignItems: 'center',
                justifyContent:'center',
                padding:'100px 10px',
                gap:'3rem',
                backgroundColor:pallet.white[200]
            }}>
                <dir
                    style={{
                        width:'400px',
                        display:'flex',
                        alignItems:'center',
                        flexWrap:'wrap',
                        padding:'10px',
                    }}>
                        <span
                            style={{
                                width:"100%",
                                fontSize:'40px',
                                fontFamily: `'Playfair Display', serif`,
                                fontWeight:"700",
                            }}
                        >I Specialize In Buidling Design</span>
                        <span
                            style={{
                                width:"100%",
                                marginTop:"10px",
                                fontsize:'14px',
                            }}
                        >
                        Some of my achievements after doing several different projects that I have done are as follows, which you can see.
                        </span>
                        <div style={{width:"90%",marginTop:'20px',display:"flex",flexWrap:"wrap",alignItems:"center",gap:'20px',}}>
                                <Progressbar title='Branding' prog={70}/>
                                <Progressbar title='Web Design' prog={60}/>
                                <Progressbar title='Photography' prog={40}/>
                        </div>

                </dir>
                <img src={Imgage1} alt='image' style={{
                    width:'450px',
                    height:'500px',
                    objectFit:"cover",
                    boxShadow: `0 0 5px ${pallet.white[700]}`
                }}/>
        </Box>
    )
}