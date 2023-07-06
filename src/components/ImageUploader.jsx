import React, { useCallback } from 'react';

const ImageUploader = () => {
  const handleDrop = useCallback((event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];

    const reader = new FileReader();
    reader.onload = (event) => {
      const buffer = event.target.result;
      // Faça o que desejar com o buffer da imagem
      console.log(buffer);
    };
    reader.readAsArrayBuffer(file);
  }, []);

  const handleDragOver = useCallback((event) => {
    event.preventDefault();
  }, []);

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      style={{ width: '300px', height: '300px', border: '2px dashed #ccc' }}
    >
      Arraste e solte uma imagem aqui
    </div>
  );
};

export default ImageUploader;
