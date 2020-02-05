import React, { useState } from 'react'
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color'

const ColorPicker = ({ bgColor, onChangeBgColor }) => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const handleClick = () => setDisplayColorPicker((prevState) => !prevState);

  const handleClose = () => setDisplayColorPicker(false);

  const handleChange = bgColor => onChangeBgColor(bgColor);

  const styles = reactCSS({
    'default': {
      bgColor: {
        width: '36px',
        height: '14px',
        borderRadius: '2px',
        background: `rgba(${bgColor.r}, ${bgColor.g}, ${bgColor.b}, ${bgColor.a})`,
      },
      swatch: {
        padding: '5px',
        background: '#ffffff',
        borderRadius: '1px',
        boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
        display: 'inline-block',
        cursor: 'pointer',
      },
      popover: {
        position: 'absolute',
        zIndex: '2',
      },
      cover: {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
      },
    },
  });

  return (
    <div>
      <div style={styles.swatch} onClick={handleClick}>
        <div style={styles.bgColor} />
      </div>
      {displayColorPicker ? <div style={styles.popover}>
        <div style={styles.cover} onClick={handleClose} />
        <SketchPicker color={bgColor} onChange={handleChange} />
      </div> : null}

    </div>
  )
}

export default ColorPicker;