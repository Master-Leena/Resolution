//Example -1

// const inputRef = useRef(null)
  // const btnRef = useRef(null)
  // const handleInput = () =>{
    //   console.log("Faizzy Here");
    //   // inputRef.current.value ="350000"
    //   // inputRef.current.focus();
    //   inputRef.current.style.color="Blue"
    //   inputRef.current.style.display ="none"
    // }
    // const handleBtn = () =>{
      //   console.log("Button Clicked");
      //   btnRef.current.style.color="Red"
      
      // }
      // return (
        //   <div className='App'>
        //     <h1>usedRef in React</h1>
        //     < input type="text" ref={inputRef} />
        //     <button onClick={handleBtn}  ref={btnRef}>View Input</button>
        //   </div>
        // )
        
        //Example-2
        
//         import React, {useEffect, useRef, useState} from 'react'
//         import './App.css'


//         const App = () => {

//         const [dimensions, setDimentions] = useState({
//     width: window.innerWidth,
//     height: window.innerHeight,
//   });
//   const updateDimention = () => {
//     setDimentions({
//       width: window.innerWidth,
//       height: window.innerHeight,
//     });
//   };
//   console.log("mounted");
//   useEffect(() => {
//     window.addEventListener("resize", updateDimention);
//     console.log("Updated ");
//     // clean up function
//     return () => {
//       window.removeEventListener("resize", updateDimention);
//       console.log("unmounted");
//     };
//   }, [dimensions]);
//   return (
//     <div>
//       <h1>
//         {dimensions.width} X {dimensions.height}
//       </h1>
//     </div>
//   );
// }

// export default App




// import React, { useEffect, useState } from 'react';
// import './App.css';
// import tabletImage from './tablet.png.jpg'; // Tablet image import karein
// import computerImage from './computer.png.webp'; // Computer image import karein
// import phoneImage from './phone.png.webp'; // Phone image import karein

// const App = () => {
//   const [dimensions, setDimensions] = useState({
//     width: window.innerWidth,
//     height: window.innerHeight,
//   });

//   const updateDimension = () => {
//     setDimensions({
//       width: window.innerWidth,
//       height: window.innerHeight,
//     });
//   };

//   useEffect(() => {
//     window.addEventListener('resize', updateDimension);
    
//     return () => {
//       window.removeEventListener('resize', updateDimension);
//     };
//   }, []);

//   const isPhone = dimensions.width <= 480; // Phone size threshold
//   const isTablet = dimensions.width <= 768; // Tablet size threshold

//   let imageSrc = computerImage; // Default to computer image

//   if (isPhone) {
//     imageSrc = phoneImage; // Phone image
//   } else if (isTablet) {
//     imageSrc = tabletImage; // Tablet image
//   }

//   return (
//     <div style={{ textAlign: 'center', padding: '20px' }}>
//       <h1>
//         {dimensions.width} X {dimensions.height}
//       </h1>
//       <div style={{
//         border: '5px solid black',
//         padding: '10px',
//         display: 'inline-block',
//       }}>
//         <img 
//           src={imageSrc} 
//           alt={isPhone ? 'Phone' : isTablet ? 'Tablet' : 'Computer'} 
//           style={{ width: '100%', height: 'auto' }} 
//         />
//       </div>
//     </div>
//   );
// }

// export default App;







import React, { useEffect, useState } from 'react';
import './App.css';
import tabletImage from './tablet.png.jpg';
import computerImage from './computer.png.webp';
import phoneImage from './phone.png.webp';
import icon from './coloriCone.png'; // Icon image import karein

const App = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [isRed, setIsRed] = useState(true); // State to track background color

  const updateDimension = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', updateDimension);
    
    return () => {
      window.removeEventListener('resize', updateDimension);
    };
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = isRed ? 'Grey' : 'lightblue'; // Change body background color
  }, [isRed]);

  const isPhone = dimensions.width <= 480;
  const isTablet = dimensions.width <= 768;

  let imageSrc = computerImage;
  if (isPhone) {
    imageSrc = phoneImage;
  } else if (isTablet) {
    imageSrc = tabletImage;
  }

  const toggleBackgroundColor = () => {
    setIsRed(prev => !prev); // Toggle the background color state
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>
        {dimensions.width} X {dimensions.height}
      </h1>
      <div style={{
        border: '5px solid black',
        padding: '10px',
        display: 'inline-block',
      }}>
        <img 
          src={imageSrc} 
          alt={isPhone ? 'Phone' : isTablet ? 'Tablet' : 'Computer'} 
          style={{ width: '100%', height: 'auto' }} 
        />
      </div>
      <div>
        <img 
          src={icon} 
          alt="Icon" 
          onClick={toggleBackgroundColor} 
          style={{ width: '50px', height: '50px', cursor: 'pointer', marginTop: '20px' }} 
        />
      </div>
    </div>
  );
}

export default App;


