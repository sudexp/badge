import React from 'react';
import reactCSS from 'reactcss'

const Circle = ({ bgColor, mainTextSize }) => {
  const styles = reactCSS({
    'default': {
      circle: {
        background: `rgba(${bgColor.r}, ${bgColor.g}, ${bgColor.b}, ${bgColor.a})`,
        borderRadius: '50%',
        width: 300,
        height: 300,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      mainText: {
        fontSize: mainTextSize,
      },
    },
  });

  return (
    <div style={styles.circle}>
      <p style={styles.mainText}>Текст</p>
    </div>
  );
}

export default Circle;