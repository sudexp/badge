import React from "react";
import { CircleSlider } from "react-circle-slider";

const RotationSlider = ({ mainTextAngle, onChangeMainTextAngle }) => {
  const handleChange = mainTextAngle => onChangeMainTextAngle(mainTextAngle);

  return (
    <>
      <p>Угол поворота основного текста (в градусах):</p>
      <CircleSlider
        value={mainTextAngle}
        onChange={handleChange}
        size={280}
        knobRadius={15}
        progressWidth={10}
        circleWidth={25}
        showTooltip={true}
        // showPercentage={true}
        max={360}
        progressColor="#DC143C" />
    </>
  )
}

export default RotationSlider;