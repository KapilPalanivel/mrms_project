import { AccountCircle } from "@mui/icons-material";
import { Box, Button, Divider, FormControlLabel, FormGroup, Grid, Switch, Typography, Paper, TextField } from "@mui/material";
import React, { useState } from "react";

export default function ProfilePage() {
    const [selected, setSelected] = useState(false);
    const [updateMessage, setUpdateMessage] = useState("");
    const [editable, setEditable] = useState(false);

    const handleToggle = () => {
        setSelected(!selected);
    };

    const handleUpdate = () => {
        // Perform update logic here
        setUpdateMessage("Profile updated successfully!");
        setEditable(false); // Set editable to false after update
    };

    const gridcomp = {
        display: "flex",
        justifyContent: "center",
        flexDirection: 'column',
        alignItems: "center",
        backgroundColor: "#f0f0f0",
        padding: "20px",
        borderRadius: "10px",
    };

    return (
        <div style={{ height: '100vh', backgroundImage: "url('https://example.com/background.jpg')", backgroundSize: "cover", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Box display={"flex"} flexDirection={"column"} alignItems="center" justifyContent="center">
                <Box height={'20vh'} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} mb={4}>
                    <AccountCircle sx={{ fontSize: "90px" }} />
                    <Typography variant="h4" fontStyle={"italic"}> Welcome Back!</Typography>
                </Box>
                <Paper sx={{ width: '800px', borderRadius: '10px', padding: '20px' }}>
                    <Grid container spacing={4}>
                        <Grid item md={6} xs={12}>
                            <Box {...gridcomp}>
                                <Typography variant="h5" sx={{ mb: 1 }}>Details</Typography>
                                <Divider sx={{ border: '1px solid #1f1f1f', mb: 1 }} />
                                <TextField
                                    label="Name"
                                    defaultValue="Kapil"
                                    variant="outlined"
                                    disabled={!editable}
                                    fullWidth
                                    sx={{ mb: 1 }}
                                />
                                <TextField
                                    label="Email"
                                    defaultValue="kapil.palanivel1@gmail.com"
                                    variant="outlined"
                                    disabled={!editable}
                                    fullWidth
                                    sx={{ mb: 1 }}
                                />
                                <TextField
                                    label="Phone Number"
                                    defaultValue="7708831167"
                                    variant="outlined"
                                    disabled={!editable}
                                    fullWidth
                                    sx={{ mb: 1 }}
                                />
                                <TextField
                                    label="DOB"
                                    defaultValue="11/01/2004"
                                    variant="outlined"
                                    disabled={!editable}
                                    fullWidth
                                    sx={{ mb: 1 }}
                                />
                                <TextField
                                    label="ID"
                                    defaultValue="IT-077"
                                    variant="outlined"
                                    disabled={!editable}
                                    fullWidth
                                    sx={{ mb: 2 }}
                                />
                                {editable ? (
                                    <Button variant="contained" onClick={handleUpdate} sx={{ color: "#ffffff", backgroundColor: "#1976d2" }}>Save</Button>
                                ) : (
                                    <Button variant="contained" onClick={() => setEditable(true)} sx={{ color: "#ffffff", backgroundColor: "#1976d2" }}>Edit</Button>
                                )}
                                {updateMessage && <Typography sx={{ mt: 1, color: "green" }}>{updateMessage}</Typography>}
                            </Box>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <Box {...gridcomp}>
                                <Typography variant="h5" sx={{ mb: 1 }}>Settings</Typography>
                                <Divider sx={{ border: '1px solid #1f1f1f', mb: 1 }} />
                                <FormGroup>
                                    <FormControlLabel control={<Switch defaultChecked />} label="Receive updates on Mail" />
                                </FormGroup>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
        </div>
    );
}
