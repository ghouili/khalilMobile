import React from 'react'
import { RadialSlider } from "react-native-radial-slider";


const RadiasSliderController = ({ data }) => {
  const {brightness, min, max, setBrightness }= data
  
    return (
    <RadialSlider
        value={brightness}
        min={min}
        max={max}
        unit="%"
        step={1}
        isHideSubtitle
        isHideButtons
        onChange={setBrightness}
        // lineColor='#ECECEC'
        // markerValueColor="#ECECEC"
      />
  )
}

export default RadiasSliderController

