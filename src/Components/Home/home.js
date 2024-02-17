import React from "react";
import Box from "@mui/material/Box";
import { Typography, Grid } from "@mui/material";
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import BookIcon from '@mui/icons-material/Book';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import './home.css';
import Footer from "../Services/Footer";

const gridcomp = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: '#fff',
    boxShadow: 12,
    flexDirection: 'column'
};

export default function HomePage() {
    return (
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
            <Box className='homeimg' sx={{ height: '100vh', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                <Grid container spacing={2} justifyContent="center" sx={{ backgroundColor: 'transparent', p: { xs: 0, sm: 0, md: 3, lg: 5 }, height: { lg: '100vh', md: 'auto' }, gap: { lg: 5, md: 3 } }} alignItems={"center"} >
                    <Grid item xs={12} sm={12} md={3} style={gridcomp} sx={{ '&:hover': { boxShadow: 20 }, p: { lg: 2, md: 1, sm: 'auto' }, height: { lg: '50vh', md: '50vh' }, gap: { lg: 2, md: 1 } }}>
                        <HealthAndSafetyIcon sx={{ fontSize: '40px', color: '#9fe7ef', gap: { lg: 5, md: 2 } }} />
                        <Typography variant="h5">Safety</Typography>
                        <Typography variant="b" >
                            <ul>
                                <li>Confidentiality is priority! With the practice management software, data is safe and secure</li>
                                <li>We comply with the international data norms</li>
                            </ul>
                        </Typography >
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} style={gridcomp} sx={{ '&:hover': { boxShadow: 12 }, p: { lg: 2, md: 1, sm: 'auto' }, height: { lg: '50vh', md: '50vh' }, gap: { lg: 2, md: 1 } }}>
                        <EditCalendarIcon sx={{ fontSize: '40px', color: '#9fe7ef', gap: { lg: 5, md: 2 } }} />
                        <Typography variant="h5">Appointments</Typography>
                        <Typography>
                            <ul>
                                <li>Set up timings without any hurdle</li>
                                <li>Manage patient appointments with IVR, app or online</li>
                                <li>Handle the queue in a waiting room instantly</li>
                            </ul>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} style={gridcomp} sx={{
                        '&:hover': { boxShadow: 4 },
                        p: { lg: 2, md: 1, sm: 'auto' }, height: { lg: '50vh', md: '50vh' },
                        gap: { lg: 2, md: 1 }
                    }}>
                        < BookIcon sx={{ fontSize: '40px', color: '#9fe7ef', gap: { lg: 5, md: 2 } }} />
                        <Typography variant="h5">Records</Typography>
                        <Typography sx={{ mb: { md: '0px', sm: '100px', xs: '100px' } }}>
                            <ul>
                                <li>Keep a track of your patient visits & history; easily and digitally!</li>
                                <li>Printed prescriptions for easy understanding</li>
                            </ul>
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};
