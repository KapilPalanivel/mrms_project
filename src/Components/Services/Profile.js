import { AccountCircle } from "@mui/icons-material";
import { Box, Button, Divider, FormControlLabel, FormGroup, Grid, Switch, ToggleButton, Typography,Paper } from "@mui/material";
import React from "react";
export default function () {
    const [selected, setSelected] = React.useState(false);

    const handleToggle = () => {
        setSelected(!selected);
    };
    const gridcomp = {
        display: "flex",
        justifyContent: "center",
        // alignItems : 'center' , 
        flexdirection: 'column',
        // height: { lg: "30vh", md: "26vh", sx: "auto" },
        // width: { lg: "80%", md: "70%", sm: "auto" }
    }
    return (
        <Box display={"flex"} flexDirection={"column"}>
            <Box height={'20vh'} display={"flex"} flexDirection={"column"}justifyContent={"center"} alignItems={"center"} sx={{mb:'50px'  , mt:'60px'}}>
                <AccountCircle sx={{ fontSize: "90px" }} />
                <Typography fontStyle={"italic"} fontSize={50}> Welcome Back !</Typography>
            </Box>
            <Grid container spacing={5} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} gap={8} sx={{}}>
            <Paper sx={{width:'800px',borderRadius:'10px'}}>
                <Grid item display={"flex"} flexDirection={"row "} gap={20}>
                    <Grid md={4} sm={12} style={gridcomp} flexDirection={"column"} gap={4}>

                        {/* <Divider sx={{ border: '1px solid #1f1f1f' }} /> */}
                        <Typography variant="h5">Details</Typography>
                        <Divider sx={{ border: '1px solid #1f1f1f' }} />
                        <Typography>Name</Typography>
                        <Typography>Mail</Typography>
                        <Typography>Phone Number</Typography>
                        <Typography>DOB</Typography>
                        <Typography>Id</Typography>
                        <Button variant="filled" sx={{color:"#1976d2"}}>Update</Button>
                    </Grid>

                    <Grid item md={4} sm={12} style={gridcomp} flexDirection={"column"} gap={4} sx={{ mt: { lg: '5px'  , md:'40px' , sm:'40px' , xs:'20px'} }}>

                        {/* <Divider sx={{ border: '1px solid #1f1f1f' }} /> */}
                        {/* <Typography variant="h5">Details</Typography> */}
                        {/* <Divider sx={{ border: '1px solid #1f1f1f' }} /> */}
                        <Typography>Kapil</Typography>
                        <Typography>kapil.palanivel1@gmail.com</Typography>
                        <Typography>7708831167</Typography>
                        <Typography>11 / 01 / 2004</Typography>
                        <Typography>IT - 077</Typography>
                    </Grid>

                </Grid>
            </Paper>
                <Grid item display={"flex"} flexDirection={"row "} gap={20}>
                    <Grid md={4} sm={12} style={gridcomp} flexDirection={"column"} gap={4} mb   ={10}>

                        {/* <Divider sx={{ border: '1px solid #1f1f1f' }} /> */}
                        <Typography variant="h5">Settings</Typography>
                        <Divider sx={{ border: '1px solid #1f1f1f' }} />
                        {/* <Typography>Theme</Typography> */}
                        <Typography>Receive updates on Mail</Typography>
                        {/* <Typography>Phone Number</Typography>
                        <Typography>DOB</Typography>
                        <Typography>Id</Typography> */}
                    </Grid>

                    <Grid item md={4} sm={12} style={gridcomp} flexDirection={"column"} gap={4} mb={8} sx={{ mt: { lg: '80px'  , md:'100px' , sm:'100px' , xs:'90px'} } }>

                        {/* <Box sx={{gap:1, display:'flex'}}>
                            <input type="radio" id="option1" name="option" value="1" />
                            <label for="option1">Dark&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                <input type="radio" id="option2" name="option" value="2" checked/>
                                <label for="option2">Light</label>
                        </Box> */}

                        <FormGroup>
  <FormControlLabel control={<Switch defaultChecked />} label="" />
  {/* <FormControlLabel required control={<Switch />} label="Required" />
  <FormControlLabel disabled control={<Switch />} label="Disabled" /> */}
</FormGroup>

                        {/* <Typography>9850051585</Typography>
                        <Typography>06 / 10 / 2003</Typography>
                        <Typography>IT 078</Typography> */}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}