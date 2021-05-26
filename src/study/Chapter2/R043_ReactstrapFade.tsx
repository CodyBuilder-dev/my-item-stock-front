import React, {useState} from "react";
import { Button,Fade } from "reactstrap";


function R041_ReactstrapCarousel() {
    const [fadeInOut, setFadeInOut] = useState(true);

    const toggle = () => {
        setFadeInOut(!fadeInOut);
    }
    return (
        <div>
            <Button color={"success"} onClick={toggle}>Fade In/Out</Button>
            <Fade in={fadeInOut} tag={"h1"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Fade>
        </div>

    );
}


export default R041_ReactstrapCarousel;
