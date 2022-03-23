import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
    /* latin */  
      @font-face {
          font-family: "DisposableDroidBB";
          src: url("/fonts/DisposableDroidBB/DisposableDroidBB_bld.ttf");
          font-style: bold;
          font-weight: 700;
          font-display: swap;
        }
      
      @font-face {
          font-family: "Invasion2000";
          src: url("/fonts/Invasion2000/INVASION2000.TTF");
          font-style: normal;
          font-weight: 400;
          font-display: swap;
        }
    `}
  />
);

export default Fonts;
