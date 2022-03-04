import * as React from "react";
import { SvgCss } from "react-native-svg";

export default ({ size = 20, color = "#2C2C2C" }) => (
  <SvgCss
    xml={`
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24.0966 19H8.86941C7.84973 19 7 19.6818 7 20.5C7 21.3182 7.84973 22 8.86941 22H24.1306C25.1503 22 26 21.3182 26 20.5C25.966 19.6545 25.1503 19 24.0966 19Z" 
    fill=${color}/>
    <path d="M31.0163 28H8.94823C7.88556 28 7 28.6818 7 29.5C7 30.3182 7.88556 31 8.94823 31H31.0518C32.1144 31 33 30.3182 33 29.5C32.9646 28.6818 32.1144 28 31.0163 28Z" 
    fill=${color}/>
    <path d="M31.0163 10H8.94823C7.88556 10 7 10.6818 7 11.5C7 12.3182 7.88556 13 8.94823 13H31.0518C32.1144 13 33 12.3182 33 11.5C32.9646 10.6818 32.1144 10 31.0163 10Z" 
    fill=${color}/>
    </svg>
      `}
    height={size}
    width={size}
    preserveAspectRatio="xMidYMid meet"
  />
);
