import {Grid, Paper} from "@mui/material";
import * as React from 'react';
function AboutUs()
{
    const paperStyle={padding:20,height:'18vh',width:1000,margin:"20px auto"}
    const paperStyle2={padding:20,height:'60vh',width:1000,margin:"20px auto"}
    const paperStyle1={padding:20,height:'50vh',width:1000,margin:"20px auto"}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle} className="a">
            <div>
                <h1>About Us</h1>
                <h4>know more about us, we are more than a hospital...</h4>
            </div>
            </Paper>
            <Paper style={paperStyle2}>
                <div className="bb">
                    <img src="http://floridasmedicalmarijuana.com/wp-content/uploads/2016/07/o-DOCTOR-facebook.jpg"  style={{maxWidth: 1100,maxHeight: 500}}/>
                </div>
            </Paper>
            <Paper elevation={10} style={paperStyle1} className="c">
            <div>
                <p>Sekkar Hospital is a subsidiary of Apollo Hospitals, a highly regarded pharmacy chain in India. It is the largest and first-ever Omni-Channel Pharmacy network in Asia, with
                     a vast network of over 5500 outlets strategically located in key locations across the country. The delivery service covers over 19000+ pin codes, making it highly accessibl
                     e to people throughout India.</p>
                     <p>
                     The hospital is accredited with an International Quality Certification, which speaks to its commitment to providing authentic and reasonably priced medication round the clock. The 24-hour pharmacies and home delivery network are
                      designed to ensure customers' convenience, while the customer care is available at any time of the day.
                     </p>
                     <p>
                     Quality is the foundation of Sekkar Hospital's operations. Over the last two decades, the pharmacy has
                      gained extensive experience in pharmacy operations management, and it is dedicated to offering the best services in the industry. The pharmacy is adequately stocked with a comprehensive range of medicines, over-the-counter (OTC),
                      and fast-moving consumer goods (FMCG) products. The qualified and experienced staff are available to address all your needs.
                     </p>
                     <p>
                     Sekkarhospital.in is a one-stop online destination with a vast range of over 70,000 products in various 
                     categories such as vitamins and supplements, baby care, personal care, health, and nutritional foods, and OTC. In addition, the pharmacy has over 400 Apollo Branded products
                      available in categories like vitamins and supplements, health food, oral care, skincare, among others.
                     </p>
            </div>
            </Paper>
        </Grid>
    );
}   
export default AboutUs;