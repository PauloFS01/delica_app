import * as React from "react";
import { SvgCss } from "react-native-svg";

const xml = `
<svg width="602" height="1176" viewBox="0 0 602 1176" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="602" height="1176" fill="url(#pattern0)" fill-opacity="0.3" style="mix-blend-mode:soft-light"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_0_1" transform="scale(0.000937374 0.000479846)"/>
</pattern>
</defs>
</svg>
`;
export default ({ width = 200 }) => (
  <SvgCss
    xml={xml}
    // height={200}
    width={width}
    preserveAspectRatio="xMidYMid meet"
  />
);