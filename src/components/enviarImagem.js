import axios from 'axios';

export const enviarImagem = async (imagem, name, type) => {
  const formData = new FormData();
  formData.append('file', new Blob([imagem]));
  formData.append('sourceId', name);
  formData.append('fileName', name);
  formData.append('type', 'SUPPLIER');
  formData.append('contentType', `application/${type}`);
  const config = {
    headers: {
      Authorization: 'Bearer YOUR_TOKEN',
      'Content-Type': 'multipart/form-data',
    },
  };

  return axios.post('http://0.0.0.0:3000/user/attachment', formData, config);
};
