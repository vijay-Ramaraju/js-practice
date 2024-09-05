import React from "react";

const Circle = React.forwardRef((props,ref) => {
  return (
    <div
      ref={ref}
      style = {{
        width: "40px",
        height: "40px",
        backgroundColor: "yellow",
        borderRadius: "50%",
        position:'absolute'
      }}
    >
    </div>
  );
})

export default Circle;
// import React from 'react';

// const Circle = React.forwardRef((props, ref) => {
//   return (
//     <div
//       ref={ref}
//       style={{
//         width: '40px',
//         height: '40px',
//         backgroundColor: 'yellow',
//         borderRadius: '50%',
//         border: '1px solid #000',
//         position: 'absolute', // Important for positioning
//         // left: 0, // Default position
//         // top: 0,  // Default position
//       }}
//     >
//       Circle
//     </div>
//   );
// });

// export default Circle;
