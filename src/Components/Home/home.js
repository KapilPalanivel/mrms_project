import React, { useState } from "react";
import Box from "@mui/material/Box";
import ShieldIcon from '@mui/icons-material/Shield';
import { Chip, Container, Divider, Typography, Grid } from "@mui/material";
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import BookIcon from '@mui/icons-material/Book';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import './home.css';
const cardcomp = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: '#fff',
    boxShadow: 12,
    flexDirection: 'row' // Changed from 'column' to 'row'
}
const grid2comp = {
    p:{lg:5 , md:3 , sm:'auto'} ,
    gap:{lg:3 , md:3 , sm:'auto'} , 
    height :{lg : '35vh' , md : '35vh' , sm:'auto'} ,
    borderRadius : 4 ,
    display:'flex' , 
    flexDirection:'column' , 
    justifyContent:'center' , 
    alignItems : "center" , 

}
const gridcomp = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: '#fff',
    boxShadow: 12,
    flexDirection: 'column' // Changed from 'column' to 'row'
}

export default function HomePage() {
    return (
        <div>
            {/* <DrawerAppBar/> */}
        <Box sx={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' , backgroundColor:'#fff'}}>
            <Box className='homeimg' sx={{ height: '100vh', alignItems: "center", alignItems: 'center', justifyContent: 'center', width:'100%'}}>
            <Grid container spacing={2} justifyContent="center" sx={{backgroundColor: 'transparent' , p:{xs:0 , sm:0 , md:3 , lg:5} , height:{lg:'100vh' , md:'auto'} , gap:{lg:5 , md:3}}} alignItems={"center"} >
                <Grid item xs={12} sm={12} md={3} style={gridcomp} sx={{ '&:hover':{boxShadow: 20},  p : {lg:2 , md:1 ,sm :'auto'} , height:{lg:'50vh' , md:'50vh'} , gap : {lg:2 , md:1}}}>
                    <HealthAndSafetyIcon sx={{ fontSize: '40px', color: '#9fe7ef' , gap:{lg:5 , md:2}}} />
                    <Typography variant="h5">Safety</Typography>
                    <Typography variant="b" >
                        <ul>
                            <li>Confidentiality is priority! With the practice management software, data is safe and secure</li>
                            <li>We comply with the international data norms</li>
                        </ul>
                    </Typography >
                </Grid>
                <Grid item xs={12} sm={12} md={3} style={gridcomp} sx={{'&:hover':{boxShadow: 12} , p : {lg:2 , md:1 ,sm :'auto'} , height:{lg:'50vh' , md:'50vh'} , gap : {lg:2 , md:1}}}>
                    <EditCalendarIcon sx={{ fontSize: '40px', color: '#9fe7ef' , gap:{lg:5 , md:2}}} />
                    <Typography variant="h5">Appointments</Typography>
                    <Typography>
                        <ul>
                            <li>Set up timings without any hurdle</li>
                            <li>Manage patient appointments with IVR, app or online</li>

                            <li>Handle the queue in a waiting room instantly</li>
                        </ul>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={3} style={gridcomp} sx={{'&:hover': {boxShadow: 4},
                     p : {lg:2 , md:1 ,sm :'auto'} , height:{lg:'50vh' , md:'50vh'} ,
                      gap : {lg:2 , md:1} }}>
                    < BookIcon sx={{ fontSize: '40px', color: '#9fe7ef' , gap:{lg:5 , md:2}}} />
                    <Typography variant="h5">Records</Typography>
                    <Typography sx={{mb:{md:'0px' , sm:'100px' , xs:'100px'}}}>
                       <ul>
                        <li>Keep a track of your patient visits & history; easily and digitally!</li>
                        <li>Printed prescriptions for easy understanding</li>
                       </ul>
                    </Typography>
                </Grid>
            </Grid>
            </Box>
            <Grid container spacing={2} justifyContent={"center"} alignItems={"center"} sx={{border:'2px solid #5b9ab9' ,
        width:{lg:'80%' , md:'90%' , sm:'auto'} , borderRadius :10 , height:{lg:'65vh' , md:'auto'} , mt:{lg:'25px' ,md:'10px'} ,
         mb:{lg:'70px' , md:'60px' , sm:'50px' , xs:'40px'} , backgroundColor:'#fff', pb:{lg:'40px' , md:'40px' , sm:'30px' , xs:'25px'} , gap:4}}>
                <Grid item sm={12} md={3} style={grid2comp} sx={{gap:{lg:4 , md:2}}}>
                < BookIcon sx={{ fontSize: '40px', color: '#9fe7ef' , }} />
                    <Typography variant="h5">Consitency</Typography>
                    <Divider variant="inset"/>
                    <Typography >
                        For commercial purposes, they simply
                        want an attribution, but they are free to
                        use. Pixabay is a website where you 
                        can find free stock photos and videos.
                        All of the content on Pixabay is license
                    </Typography>
                </Grid>
                <Grid item sm={12} md={3} style={grid2comp} sx={{gap:{lg:4 , md:2}}}>
                < BookIcon sx={{ fontSize: '40px', color: '#9fe7ef' , }} />
                    <Typography variant="h5">Improved Quality</Typography>
                    <Typography >
                        For commercial purposes, they simply
                        want an attribution, but they are free to
                        use. Pixabay is a website where you 
                        can find free stock photos and videos.
                        All of the content on Pixabay is license
                    </Typography>
                </Grid>
                <Grid item sm={12} md={3} style={grid2comp} sx={{gap:{lg:4 , md:2}}}>
                < BookIcon sx={{ fontSize: '40px', color: '#9fe7ef' , }} />
                    <Typography variant="h5">Easy Access</Typography>
                    <Typography >
                        For commercial purposes, they simply
                        want an attribution, but they are free to
                        use. Pixabay is a website where you 
                        can find free stock photos and videos.
                        All of the content on Pixabay is licenses
                    </Typography>
                </Grid>
            </Grid>
        </Box>
        </div>
    );
};