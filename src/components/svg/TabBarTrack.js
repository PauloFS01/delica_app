import * as React from "react";
import { SvgCss } from "react-native-svg";

export default ({ size, color }) => (
  <SvgCss
    xml={`
      <svg width="24" height="30" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 30C11.6993 30 11.4161 29.8576 11.2381 29.6169L3.08354 18.5783C1.50224 16.4378 0.666626 13.9041 0.666626 11.25C0.666626 5.04684 5.75085 0 12 0C18.2491 0 23.3333 5.04684 23.3333 11.25C23.3333 13.9041 22.4977 16.4378 20.9168 18.5783L12.7618 29.6169C12.5838 29.8576 12.3006 30 12 30ZM12 1.875C6.79214 1.875 2.55551 6.08047 2.55551 11.25C2.55551 13.5022 3.26477 15.6532 4.60673 17.4696L12 27.4773L19.3937 17.4696C20.7351 15.6532 21.4444 13.5022 21.4444 11.25C21.4444 6.08047 17.2078 1.875 12 1.875ZM12 15.9375C9.39628 15.9375 7.27774 13.8345 7.27774 11.25C7.27774 8.66547 9.39628 6.5625 12 6.5625C14.6036 6.5625 16.7222 8.66547 16.7222 11.25C16.7222 13.8345 14.6036 15.9375 12 15.9375ZM12 8.4375C10.4376 8.4375 9.16663 9.6991 9.16663 11.25C9.16663 12.8009 10.4376 14.0625 12 14.0625C13.5624 14.0625 14.8333 12.8009 14.8333 11.25C14.8333 9.6991 13.5624 8.4375 12 8.4375Z" 
      fill=${color}/>
      </svg>
      `}
    height={size}
    width={size}
    preserveAspectRatio="xMidYMid meet"
  />
);