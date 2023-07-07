import Dropzone from 'react-dropzone';
import './App.css';
import uploadImg from './assets/cloud-upload-regular-240.png';
import { enviarImagem } from './components/enviarImagem';

const acceptFiles = {
  'file/*': ['.png', '.jpg', '.jpeg', '.pdf', '.docx'],
};

function App() {
  return (
    <main className="App">
      <Dropzone
        multiple={true}
        minSize={0}
        maxSize={10485760}
        accept={acceptFiles}
        onDrop={(acceptedFiles) => {
          const reader = new FileReader();

          acceptedFiles.forEach((file) => {
            reader.onload = (event) => {
              // const buffer = event.target.result;
              console.log(file);
              //   enviarImagem(buffer, file.name, file.type)
              //     .then(() => console.log('Imagem enviada'))
              //     .catch((error) => {
              //       throw new Error(error);
              //     });
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
