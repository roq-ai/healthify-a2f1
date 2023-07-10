import * as yup from 'yup';

export const fitnessDataValidationSchema = yup.object().shape({
  data: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
