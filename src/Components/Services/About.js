import { Paper } from "@mui/material";
import * as React from 'react';
import './AboutUs.css'; 

function AboutUs() {
    return (
        <div className="about-content">
            <div className="about-container">
                <Paper elevation={3} className="paper-content">
                    <header className="py-6 bg-white shadow-md">
                        <div className="container flex justify-between items-center">
                            <h1 className="text-2xl font-bold text-gray-800">About Us</h1>
                        </div>
                    </header>

                    <main className="container py-10">
                        <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/2">
                                <img
                                    src="path-to-your-image.jpg"
                                    alt="About Us"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="md:w-1/2 mt-6 md:mt-0 md:pl-10 content-container">
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                    Our Mission
                                </h2>
                                <p className="text-gray-700 mb-6">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Vestibulum ac iaculis lorem, non blandit diam. Pellentesque
                                    habitant morbi tristique senectus et netus et malesuada fames ac
                                    turpis egestas. Proin a porta lorem. Aliquam erat volutpat.
                                    Aliquam ornare orci hendrerit, ullamcorper arcu id, rhoncus diam.
                                    Nunc sit amet sollicitudin ligula, non facilisis lorem.
                                </p>
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                    Our Vision
                                </h2>
                                <p className="text-gray-700">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Vestibulum ac iaculis lorem, non blandit diam. Pellentesque
                                    habitant morbi tristique senectus et netus et malesuada fames ac
                                    turpis egestas. Proin a porta lorem. Aliquam erat volutpat.
                                    Aliquam ornare orci hendrerit, ullamcorper arcu id, rhoncus diam.
                                    Nunc sit amet sollicitudin ligula, non facilisis lorem.
                                </p>
                            </div>
                        </div>
                    </main>
                </Paper>
            </div>
        </div>
    );
}

export default AboutUs;
