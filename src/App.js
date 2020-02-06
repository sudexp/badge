import React, { useState } from 'react';
import reactCSS from 'reactcss'

import Circle from './components/Circle';
import ColorPicker from './components/ColorPicker';
import FontFamilyPicker from './components/FontFamilyPicker';
import RangeSlider from './components/RangeSlider';
import RotationSlider from './components/RotationSlider';

const App = () => {
  const [mainTextSize, setMainTextSize] = useState(50);

  const [mainTextAngle, setMainTextAngle] = useState(0);

  const [mainTextFont, setMainTextFont] = useState('Open Sans');

  const initialBgColor = {
    r: '74',
    g: '144',
    b: '226',
    a: '1',
  };
  const [bgColor, setBgColor] = useState(initialBgColor);

  const handleChangeMainTextSize = mainTextSize => {
    setMainTextSize(mainTextSize)
  }

  const handleChangeMainTextAngle = mainTextAngle => {
    setMainTextAngle(mainTextAngle)
  }

  const handleChangeMainTextFont = mainTextFont => {
    setMainTextFont(mainTextFont)
  }

  const handleChangeBgColor = bgColor => {
    setBgColor(bgColor.rgb);
  };

  const styles = reactCSS({
    'default': {
      center: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
  });

  return (
    <>
      <div style={styles.center}>
        <Circle bgColor={bgColor} mainTextSize={mainTextSize} mainTextAngle={mainTextAngle} mainTextFont={mainTextFont} />
        <br />
        <ColorPicker onChangeBgColor={handleChangeBgColor} bgColor={bgColor} />
        <br />
        <FontFamilyPicker onChangeMainTextFont={handleChangeMainTextFont} mainTextFont={mainTextFont} />
        <br />
        <RotationSlider onChangeMainTextAngle={handleChangeMainTextAngle} mainTextAngle={mainTextAngle} />
        <br />
      </div>
      <RangeSlider onChangeMainTextSize={handleChangeMainTextSize} mainTextSize={mainTextSize} />
    </>
  )
}

export default App;
