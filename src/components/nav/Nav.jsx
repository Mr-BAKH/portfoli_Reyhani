import {useState} from 'react'
import pallet from '../../theme'
// import { Link } from 'react-router-dom';
import { Box, AppBar, Toolbar, Typography, CssBaseline, Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import Btn from '../btn/Btn'
import './nav.css'

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Portfolio', 'Contact', 'Blog'];

const App =(props)=>{  

    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Portfolio
            </Typography>
            <Divider />
            <List>
                <Box
                    className={"navItemMobile"}
                    sx={{
                        '& li':{
                        width:'80%'
                        },
                        '& a':{
                            color: pallet.white[900],
                            width:'100%'
                        },
                        '&>:hover': {
                            color: pallet.yellow[500],
                            cursor: 'pointer',
                            boxShadow: `0 2px 0 ${pallet.yellow[500]}`,
                        }
                    }}
                >
                    <li className='header_link'>Home</li>
                    <li className='header_link'>About</li>
                    <li className='header_link'>Portfolio</li>
                    <li className='header_link'>Contact</li>
                    <li className='header_link'>Blog</li>
                </Box>
            </List>
            <Btn>Download CV</Btn>
        </Box>
    );
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box>

            {/* ------ header content ------ */}
            <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex' }}} id={"nav"}> 
                <h2>Portfolio</h2>
                <Box
                    className={"navItem"}
                    sx={{
                        '& a':{
                            color: pallet.white[900],
                        },
                        '&>:hover': {
                            color: pallet.yellow[500],
                            cursor: 'pointer',
                            boxShadow: `0 2px 0 ${pallet.yellow[500]}`,
                        }
                    }}
                >
                    {/* <li className='header_link'><Link to={"/"} >Home</Link></li> */}
                    <li className='header_link'>Home</li>
                    <li className='header_link'>About</li>
                    <li className='header_link'>Portfolio</li>
                    <li className='header_link'>Contact</li>
                    <li className='header_link'>Blog</li>
                </Box>
                <Btn>Download CV</Btn>
            </Box>

             {/* ------ drawer btn ------ */}
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ position: 'absolute',right: 0,margin: '1rem', display: { md: 'none' } }}
            >
                <MenuIcon />
            </IconButton> 
            
            {/* ------ on drawer btn open ------ */}
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { sm: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
    </Box>
        
  );
}

export default App;