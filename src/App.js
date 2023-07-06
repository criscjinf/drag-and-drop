import Dropzone from 'react-dropzone';
import './App.css';
import uploadImg from './assets/cloud-upload-regular-240.png';
import { enviarImagem } from './components/enviarImagem';

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
          const reader = new FileReader();

          acceptedFiles.forEach((file) => {
            reader.onload = (event) => {
              const buffer = event.target.result;
              enviarImagem(buffer, file.name, file.type)
                .then(() => console.log('Imagem enviada'))
                .catch((error) => {
                  throw new Error(error);
                });
            };
            reader.readAsArrayBuffer(file);
          });
          // console.log(acceptedFiles);
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
