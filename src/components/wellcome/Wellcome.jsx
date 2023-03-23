import { Box, Button} from "@mui/material"
import pallet from "../../theme"
import backShape from '../../assets/svg/blob.svg'
import Profile from '../../assets/photo/profile.png'
import Btn from '../../components/btn/Btn'
import './wellcome.css'

export default function App(){

return(
    <Box
        className={"wellcomeBox"}
        sx={{
            overflow:'hidden',
            padding:"5rem",
            width:'100%',
            height:'90vh',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:pallet.white[200],
        }}
    >      
        <div 
            style={{
                flex:1,
                display:'flex',
                alignItems:"center",
                justifyContent:'start',
                flexWrap:'wrap'
            }}
        >
            <span style={{ fontSize:'40px',width:'100%'}}>Graphic Designer</span>
            <span style={{ fontSize:'40px',width:"100%"}}>Mohadese Reyhani</span>
            <span style={{ fontSize:'16px',width:"100%", marginTop:'20px'}}><p>I have started my own activity in the field of design for some time and then I joined a group of my friends so that together we can provide good services to the audience.</p>
            </span>
            <span style={{width:"100%",marginTop:'30px'}} ><Btn>ReadMore</Btn></span>

        </div>
        <div style={{ display:"flex",flex:2,alignItems:"center", justifyContent:'center', overflow:"hidden", position:'relative', zIndex:'0' }}>
            <img src={backShape} style={{zIndex:'-1',position:"absolute",bottom:'-420px',right:'-360px', width: '1400px', height:'1200px'}} alt="shape"/>
            <img src={Profile} style={{objectFit:"contain", width: '600px', height:'600px'}} alt="shape"/>

        </div>
    </Box>
)
}