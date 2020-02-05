import React, { useState } from 'react';
import reactCSS from 'reactcss'

import Circle from './components/Circle';
import ColorPicker from './components/ColorPicker';
import RangeSlider from './components/RangeSlider';

const App = () => {
  const [mainTextSize, setMainTextSize] = useState(50);

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
        <Circle bgColor={bgColor} mainTextSize={mainTextSize} />
        <br />
        <ColorPicker onChangeBgColor={handleChangeBgColor} bgColor={bgColor} />
        <br />
      </div>
      <RangeSlider onChangeMainTextSize={handleChangeMainTextSize} mainTextSize={mainTextSize} />
    </>
  )
}

export default App;
