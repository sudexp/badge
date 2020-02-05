import React from 'react';
import reactCSS from 'reactcss'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

const RangeSlider = ({ mainTextSize, onChangeMainTextSize }) => {
  const horizontalLabels = {
    0: 'Мелкий',
    50: 'Средний',
    100: 'Большой',
  }

  // const handleChangeStart = () => console.log('Change event started')
  // const handleChangeComplete = () => console.log('Change event completed')
  const handleChange = mainTextSize => onChangeMainTextSize(mainTextSize);

  const styles = reactCSS({
    'default': {
      slider: {
        width: '50%',
        margin: '0 auto',
      },
    },
  });

  return (
    <div style={styles.slider}>
      <p>Размер основного текста значка:</p>
      <Slider
        min={0}
        max={100}
        value={mainTextSize}
        labels={horizontalLabels}
        onChange={handleChange}
      // onChangeStart={handleChangeStart}
      // onChangeComplete={handleChangeComplete}
      />
    </div >
  )
}

export default RangeSlider;