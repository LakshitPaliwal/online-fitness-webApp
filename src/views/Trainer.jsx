import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import Slider from "react-slick";
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import {Typography,Chip,Container} from '@material-ui/core';
import {Home,LocationOn,Language,EmojiEvents,ArrowBack,MeetingRoom} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    chipSpacing: {
      
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0.9),
      },
      display: 'flex',
    },
  }));
export default function Trainer() {
    const classes = useStyles();

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const [slide, setSlide] = useState(settings)
    return(
        <Container className="Trainers">
            <h1 className="theme-color">Trainer's name</h1>
            <div className="col-12 d-flex justify-content-end pe-3">
                        <Link to="BookingForm" > 
                            <button  className=" btn theme-bgcolor bookNowButton text-white  my-auto px-3">BOOK NOW</button>
                        </Link>
                    </div>
            <div className="row m-0">
                <div className="col-md-5">
                    <Slider {...slide}>
                        <div>
                        <img src="https://pcvarkr.hs.llnwd.net/v1/foc/img-assets/largest_gym.jpg" alt="Girl in a jacket" width="550" height="150"/>
                        </div>
                    <div>
                        <img src="https://i.pinimg.com/564x/11/3c/7f/113c7ffc01ca5c2a7e1bb3606123ff33.jpg" alt="Girl in a jacket" width="550" height="150"/>
                        </div>
                    <div>
                        <img src="https://pcvarkr.hs.llnwd.net/v1/foc//img-assets/strength_training.jpg" alt="Girl in a jacket" width="550" height="150"/>                        </div>
                    </Slider>
                </div>
            </div>
            
            <br/>
            <hr className="solid"/>
            <Container>
                <h6><b>About me</b></h6>
                <p >
                    I am Professional Personal fitness trainer and I am here to make you wokout at home. You know that everyone is busy tehse days and no one has time for his bosy and health. That is why we have come to get you workout from your home. So please contact us.
                </p>
                <hr className="solid"/>
                <h6><b>My Expertise</b></h6>
                <div className={classes.chipSpacing}>
                    <Chip color="primary" variant="outlined" label="gym"/>
                    <Chip color="primary" variant="outlined" label="yoga"/>
                    <Chip color="primary" variant="outlined" label="boxing"/>
                    <Chip color="primary" variant="outlined" label="Sport trainer"/>
                    <Chip color="primary" variant="outlined" label="taekwando"/>
                </div>
                <hr className="solid"/>
                <h6><b>Medical Condition Expertise</b></h6>
                    Injury , Smoking, Drinking Addiction, Anxiety, Lung Desease Addiction ,
                <hr className="solid"/>
                <h6><b>My Location</b></h6>
                <LocationOn color="primary"/>
                Mumbai ,MH

                <hr className="solid"/>
                <h6><b>Mode of Training</b></h6>
                <Home color="primary"/>
                In Home
                <br/>
                <MeetingRoom color="primary"/>
                Outdoors

                <hr className="solid"/>
                <h6><b>Certifications</b></h6>
                <EmojiEvents color="secondary"/>
                GGFI - Gold Gym Fitness Institude

                <hr className="solid"/>
                <Typography color="textSecondary" >
                    <b>NOTE: </b>
                    Above charges are for in - person Training,I It odes not include group discrount. Moreover, price for online Training is 20% less than in - person training
                </Typography>
                
                <hr className="solid"/>
                <h6><b>Availability</b></h6>
                <div className={classes.chipSpacing}>
                <Chip color="primary" variant="outlined" label="6:00 AM to 7:00 AM"/>
                <Chip color="primary" variant="outlined" label="10:30 AM to 11:30 AM"/>                
                <Chip color="primary" variant="outlined" label="12:28 PM to 1:28 PM"/>                
                <Chip color="primary" variant="outlined" label="1:00 PM to 2:00 PM"/>
                </div>
                
                <hr className="solid"/>
                <h6><b>Languages</b></h6>
                <Language color="primary"/>
                Hindi
                <br/>
                <Language color="primary"/>
                English
                <br/>
                <Language color="primary"/>
                Punjabi

                <hr className="solid"/>
                <h6><b>Educational Qualification</b></h6>
                        B.Sc in Sports and Exersise Science

                <hr className="solid"/>
                <h6><b>People I love training with</b></h6>
                <div className={classes.chipSpacing}>
                <Chip color="primary" variant="outlined" label="ACTOR"/>
                <Chip color="primary" variant="outlined" label="MEN"/>                
                <Chip color="primary" variant="outlined" label="WOMEN"/>                
                <Chip color="primary" variant="outlined" label="BEGINNERS"/>                <Chip color="primary" variant="outlined" label="MEN"/>                
                <Chip color="primary" variant="outlined" label="MODEL"/>                
                <Chip color="primary" variant="outlined" label="YOUTH"/>                
                <Chip color="primary" variant="outlined" label="OVERWEIGHT/OBESE"/>                
                <Chip color="primary" variant="outlined" label="MILITARY"/>                
                <Chip color="primary" variant="outlined" label="SPECIALLY ABLE"/>                
                <Chip color="primary" variant="outlined" label="BRIDE TO BE"/>                
                <Chip color="primary" variant="outlined" label="WOMEN PRE-MENOPAUSE"/>     
                </div>
            </Container>
        </Container>
    )
}