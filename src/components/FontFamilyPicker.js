import React from "react";
import FontPicker from "font-picker-react";

import { apiKey } from '../config/api_key'

const FontFamilyPicker = ({ mainTextFont, onChangeMainTextFont }) => {
  const handleChange = nextFont => onChangeMainTextFont(nextFont.family);

  return (
    <FontPicker
      apiKey={apiKey}
      activeFontFamily={mainTextFont}
      onChange={handleChange}
    />
  );
}

export default FontFamilyPicker;