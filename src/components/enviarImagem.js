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
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXF1ZXN0ZXIiOiJjcmlzdGlhbm8ubGVtb3NAc29tbWEtaXQuY29tIiwiZXhwIjoxNjg4NzEyMDg3LCJzdWIiOiI4ZDZmOWNhOS04NjY4LTQ0MmEtOTQ1ZC1kZWQ3NWFkMzE5NTgifQ.b1yXXfQydLI-40uhL4IHfAsBKmJoVhb2_vC_59kV6J0',
      'Content-Type': 'multipart/form-data',
    },
  };

  return axios.post('http://0.0.0.0:3000/user/attachment', formData, config);
};
