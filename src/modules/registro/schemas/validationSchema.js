import * as yup from 'yup';

export const schema = yup.object({
  name: yup.string().required('El nombre es obligatorio').min(3, 'El nombre debe tener al menos 3 caracteres'),
  email: yup.string().required('El email es obligatorio').email('Debe ser un email válido'),
});
