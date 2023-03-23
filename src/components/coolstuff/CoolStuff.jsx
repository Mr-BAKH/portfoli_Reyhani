import { useEffect, useState } from 'react'
import './CoolStuff.css'
import { Box } from "@mui/material"
import pallet from "../../theme"

import Image from '../../assets/projects/Health&Beauty.jpg'
import Image1 from '../../assets/projects/canrRent.jpg'
import Image2 from '../../assets/projects/personalWebsite.jpg'
import Image3 from '../../assets/projects/car-rental_car1.jpg'
import Image4 from'../../assets/projects/homeRental.jpg'
import Image5 from '../../assets/projects/musicPlayer.jpg'

const data = [
    {
        id:0,
        img:Image,
        logo:1,
        branding:0,
        ui:0,
        webdesign:1,
    },
    {
        id:1,
        img:Image1,
        logo:1,
        branding:0,
        ui:0,
        webdesign:1,
    },
    {
        id:2,
        img:Image2,
        logo:1,
        branding:1,
        ui:1,
        webdesign:0,
    },
    {
        id:3,
        img:Image3,
        logo:1,
        branding:1,
        ui:1,
        webdesign:0,
    },
    {
        id:4,
        img:Image4,
        logo:1,
        branding:1,
        ui:1,
        webdesign:0,
    },
    {
        id:5,
        img:Image5,
        logo:1,
        branding:0,
        ui:0,
        webdesign:0,
    },
]

export default function App(){

    const [activeMenu, setActiveMenu] = useState("Logo")
    const [newArray, SetnewArray] = useState([])

    useEffect(()=>{
        SetnewArray(data.filter((data)=>{
            return(
             data.logo===1
            )
        }))
    },[])

    const handlerNewArray = (param) => {

        setActiveMenu(param)

        switch (param) {
            case "Logo":
                SetnewArray(data.filter((data)=>{
                    return(
                     data.logo===1
                    )
                })
                )
                break;

            case "Branding":
                SetnewArray(data.filter((data)=>{
                    return(
                     data.branding===1
                    )
                })
                )
                break;

            case "Ui":
                SetnewArray(data.filter((data)=>{
                    return(
                        data.ui===1
                    )
                })
                )
                break;

            case "WebDesign":
                SetnewArray(data.filter((data)=>{
                    return(
                        data.webdesign===1
                    )
                })
                )
                break;

            default:
                SetnewArray(data.filter((data)=>{
                    return(
                     data.logo===1
                    )
                })
                )
                break;
        }
    }
    
    return(
        <section id={"coolStuff"}>
            <div className="cSHeader">
                <h1>Cool Stuffs</h1>
                <Box
                    className="cSHeaderbtns centerRow"
                    sx={{
                        '&>a':{
                            padding:'0.6rem',
                            paddingBottom:'1rem',
                            cursor:"pointer",
                            fontWeight:"600",
                            fontSize: '.8rem',
                        },
                        '&>:hover':{
                            boxShadow:`0 3px ${pallet.yellow[500]}`,
                            color :pallet.yellow[500],
                            paddingBottom: '1rem',
                        },
                    }}
                >
                    <a 
                        onClick={()=>handlerNewArray("Logo")} 
                        style={activeMenu==="Logo"?{boxShadow:`0 3px ${pallet.yellow[500]}`}:null}
                    >
                        Logo
                    </a>
                    <a 
                        onClick={()=>handlerNewArray("Branding")} 
                        style={activeMenu==="Branding"?{boxShadow:`0 3px ${pallet.yellow[500]}`}:null}
                    >
                        Branding
                    </a>
                    <a 
                        onClick={()=>handlerNewArray("UI")} 
                        style={activeMenu==="UI"?{boxShadow:`0 3px ${pallet.yellow[500]}`}:null}
                    >
                        UI/UX
                    </a>
                    <a 
                        onClick={()=>handlerNewArray("WebDesign")} 
                        style={activeMenu==="WebDesign"?{boxShadow:`0 3px ${pallet.yellow[500]}`}:null}
                    >
                        Web Design
                    </a>
                </Box>
            </div>

            <div className="cSContent">
                {
                    newArray.map((item,key)=>
                        item.id >=1 ?
                            <div key={item.id} className="cSContentSmallBox">
                                <img src={item.img} width='100%' height='100%' style={{objectFit:'cover'}} alt={item.img}/>
                            </div>
                        :
                            <div key={item.id[0]} className="cSContentBigBox">
                                <img src={item.img} width='100%' height='100%' style={{objectFit:'cover'}} alt={item.img}/>
                            </div>
                    )
                }
            </div>
        </section>
        // <div id="mainStuffBox" 
        //     style={{
        //         width:"60vw",
        //         margin:"auto"
        //     }}  
        // >
        //     <div style={{
        //         margin:'auto',
        //         width:"30%",
        //         height:"30px",
        //         display:'flex',
        //         alignItems:"center",
        //         justifyContent:"space-between",
        //         margin:"20px 0 50px 0",
        //     }}>
        //         <span
        //             style={{
        //                 fontSize:"40px",
        //                 fontFamily: `'Playfair Display', serif`,
        //                 fontWeight:"700",
        //             }}
        //         >Cool Stuffs</span>
        //         <Box
        //             sx={{
        //                 display:'flex',
        //                 alignItems:'center',
        //                 justifyContent:"center",
        //                 '&>span':{
        //                     padding:'10px',
        //                     fontSize:"14px",
        //                     cursor:"pointer",
        //                     fontWeight:"600",
        //                 },
        //                 '&>:hover':{
        //                     boxShadow:`0 2px 0 ${pallet.yellow[500]}`,
        //                     color :pallet.yellow[500],
        //                 },
        //                 boxShadow:`0 2px 0px ${pallet.white[500]}`,
        //             }}
        //         >
        //             <span>Logo</span>
        //             <span>Branding</span>
        //             <span>UI/UX</span>
        //             <span>Web Design</span>
        //         </Box>
        //     </div>
        //     <Box
        //         display="grid"
        //         m='auto'
        //         width="900px"
        //         height= '900px'
        //         gridTemplateColumns='repeat(6,1fr)'
        //         gridTemplateRows='repeat(6,1fr)'
        //         gap='20px'
        //     >
        //       <Box boxShadow={`0 0 5px ${pallet.white[900]}`} gridColumn='span 4' gridRow='span 4' backgroundColor='gray'>
        //         <img src={Image} width='100%' height='100%' style={{objectFit:'cover'}}/>
        //       </Box>
        //       <Box boxShadow={`0 0 5px ${pallet.white[900]}`}gridColumn='span 2' gridRow='span 2' backgroundColor='red' >
        //         <img src={Image5} width='100%' height='100%' style={{objectFit:'cover'}}/>
        //       </Box>
        //       <Box boxShadow={`0 0 5px ${pallet.white[900]}`}gridColumn='span 2' gridRow='span 2' backgroundColor='red' >
        //         <img src={Image4} width='100%' height='100%' style={{objectFit:'cover'}}/>
        //       </Box>
        //       <Box boxShadow={`0 0 5px ${pallet.white[900]}`}gridColumn='span 2' gridRow='span 2' backgroundColor='red' >
        //         <img src={Image3} width='100%' height='100%' style={{objectFit:'cover'}}/>
        //       </Box>
        //       <Box boxShadow={`0 0 5px ${pallet.white[900]}`}gridColumn='span 2' gridRow='span 2' backgroundColor='red' >
        //         <img src={Image2} width='100%' height='100%' style={{objectFit:'cover'}}/>
        //       </Box>
        //       <Box boxShadow={`0 0 5px ${pallet.white[900]}`}gridColumn='span 2' gridRow='span 2' backgroundColor='red' >
        //         <img src={Image1} width='100%' height='100%' style={{objectFit:'cover'}}/>
        //       </Box>
        //     </Box>
        // </div>
    )
}