import { useState } from 'react';

// const CreateRaffle = () => {
//   const [buffer, setBuffer] = useState({ buffer: null });

//   const handleFileCapture = (e: any) => {
//     e.preventDefault();
//     const file = e.target.files[0];
//     const reader = new window.FileReader();
//     reader.readAsArrayBuffer(file);
//     reader.onloadend = () => {
//       setBuffer({ buffer: reader.result });
//       // console.log(reader.result);
//     };
//     // console.log(reader);
//   };

//   return (
//     <form>
//       <input type="file" onChange={handleFileCapture} />
//       <input type="submit" />
//     </form>
//   );
// };

// export default CreateRaffle;
