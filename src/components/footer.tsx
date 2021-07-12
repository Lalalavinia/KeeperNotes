import React from "react";
import {FooterWrapper} from "./style.styles";

const Footer =()=>{
    const currentYear = new Date().getFullYear();
    return(
        <FooterWrapper>
        <p> Ⓒ {currentYear}</p>
        </FooterWrapper>
    )
}
export default Footer;