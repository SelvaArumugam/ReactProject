import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';

export default function FFooter()
{
    return(
<div style={{color:'black'}}>
            <footer>
            <center>
              <h2>&copy;Book My Flight</h2><br></br>
              Get connected with us on social networks:
              <div>
                <a href='https://instagram.com/sports_emporium_official?igshid=MTNiYzNiMzkwZA=='>
                  <InstagramIcon sx={{fontSize:"50px",color:""}}></InstagramIcon>&nbsp;&nbsp;
                </a>
                <a href='https://www.flipkart.com/'>
                  <FacebookIcon sx={{fontSize:"50px",color:""}}></FacebookIcon>&nbsp;&nbsp;
                  </a>
                  <a href='https://shop.teamsg.in/'>
                    <TwitterIcon sx={{fontSize:"50px",color:""}}></TwitterIcon>&nbsp;&nbsp;
                  </a>
                  <a href='https://anime-world.in/'>
                    <GoogleIcon sx={{fontSize:"50px",color:""}}></GoogleIcon>
                  </a>
              </div>
            </center>
            </footer>
           </div>
           );}