import { Box } from "@mui/material";
import pallet from "../../theme";
import './footer.css'

export default function Footer(){
    return(
        <div
            id={"footer"}
            style={{
                width:'100%',
                minHeight:"300px",
                display:"flex",
                flexWrap:"wrap",
                alignItems:"start",
                gap:'70px',
                paddingTop:"2%",
                justifyContent:"center",
                color:pallet.white[600],
                backgroundColor: pallet.white[800]
            }}
        >
            <span style={{ fontSize:'40px', fontWeight:"700", fontFamily:`'Playfair Display', serif`, color:pallet.white[100]}}>.Reyhani</span>
            <div style={{width:"50%", padding:'10px', display:"flex", alignItems:"center", justifyContent:"center", flexWrap:"wrap"}}>
                <p style={{fontSize:"20px",fontFamily:`'Playfair Display', serif`,fontWeight:"900", color:pallet.white[100]}}>In our team, we seek to provide a complete service to the audience. We hope to have a good cooperation together.</p>
                <Box className={"footerComm"} sx={{ width:"100%",marginTop:"30px", display:'flex', alignItems:"start",justifyContent:"space-between",flexWrap:'wrap'}}>
                    <div style={{ display:'flex',flexDirection:"column", alignItems:'start', justifyContent:"center", gap:"5px"}}>
                        <span style={{fontWeight:"900"}}>Mail</span>
                        <span style={{fontFamily:`'Playfair Display'`}}>Reyhani@gamil.com</span>
                    </div>
                    <div style={{ display:'flex',flexDirection:"column", alignItems:'start', justifyContent:"center", gap:"5px"}}>
                        <span style={{fontWeight:"900"}} >Call</span>
                        <span>+989124443585</span>
                    </div>
                    <div style={{ display:'flex',flexDirection:"column", alignItems:'start', justifyContent:"center", gap:"5px"}}>
                        <span style={{fontWeight:"900", fontSize:"12px"}} >Get IN Touch</span>
                        <span style={{fontFamily:`'Playfair Display'`}}>Birjand, South Khorasan Province, Iran</span>
                    </div>
                </Box>
            </div>

        </div>
    )
}