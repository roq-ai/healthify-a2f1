import * as yup from 'yup';

export const nutritionDataValidationSchema = yup.object().shape({
  data: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
