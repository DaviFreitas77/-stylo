import React from "react";
import { Autoplay } from "swiper/modules";
import loading from '../../../src/assets/lottie/loading.json'
import Lottie from 'react-lottie';
export default function Loading(){
    const defaultOptions = {
        loop:true,
        Autoplay:true,
        animationData:loading
    }
    return(
        <Lottie options={defaultOptions} width={400} height={400}
        
        />
    )    
}