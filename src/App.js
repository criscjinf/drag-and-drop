import Dropzone from 'react-dropzone';
import './App.css';
import uploadImg from './assets/cloud-upload-regular-240.png';
// import { DndProvider } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';
// import TouchBackend from 'react-dnd-touch-backend';
// import update from 'immutability-helper';
// import ImageList from './components/Image';
// import Dropzone from 'react-dropzone';
// import { Box } from './box';

// const isTouchDevice = () => {
//   if ('ontouchstart' in window) {
//     return true;
//   }
//   return false;
// };

// const backendForDND = isTouchDevice() ? TouchBackend : HTML5Backend;
// const images = [
//   { id: 1, src: '~/cris/projects/drag-and-drop/src/assets/file-css-solid-240.png' },
//   { id: 2, src: '~/cris/projects/drag-and-drop/src/assets/file-pdf-solid-240.png' },
// ];
// const moveImage = (dragIndex, hoverIndex) => {
//   // Get the dragged element
//   const draggedImage = images[dragIndex];
//   /*
//       - copy the dragged image before hovered element (i.e., [hoverIndex, 0, draggedImage])
//       - remove the previous reference of dragged element (i.e., [dragIndex, 1])
//       - here we are using this update helper method from immutability-helper package
//     */
//   const setImages = () => {
//     update(images, {
//       $splice: [
//         [dragIndex, 1],
//         [hoverIndex, 0, draggedImage],
//       ],
//     });
//   };
//   return setImages();
// };

function App() {
  return (
    <main className="App">
      <div>TESTE</div>
      {/* <DndProvider backend={HTML5Backend}>
        <ImageList images={images} moveImage={moveImage} />
      </DndProvider> */}
      <Dropzone
        multiple={true}
        minSize={0}
        maxSize={10485760}
        accept="image/png,image/jpg,image/jpeg"
        onDrop={(acceptedFiles) => {
          console.log(URL.createObjectURL(acceptedFiles[0]));
        }}
      >
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps()}>
              <div className="drop-file-input__label">
                <img src={uploadImg} alt="" />
                <p>Drag & Drop your files here, or click to select files</p>
              </div>
              <input {...getInputProps()} />
            </div>
          </section>
        )}
      </Dropzone>
    </main>
  );
}

export default App;
