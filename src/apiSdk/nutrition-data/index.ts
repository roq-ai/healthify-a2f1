import axios from 'axios';
import queryString from 'query-string';
import { NutritionDataInterface, NutritionDataGetQueryInterface } from 'interfaces/nutrition-data';
import { GetQueryInterface } from '../../interfaces';

export const getNutritionData = async (query?: NutritionDataGetQueryInterface) => {
  const response = await axios.get(`/api/nutrition-data${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createNutritionData = async (nutritionData: NutritionDataInterface) => {
  const response = await axios.post('/api/nutrition-data', nutritionData);
  return response.data;
};

export const updateNutritionDataById = async (id: string, nutritionData: NutritionDataInterface) => {
  const response = await axios.put(`/api/nutrition-data/${id}`, nutritionData);
  return response.data;
};

export const getNutritionDataById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/nutrition-data/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteNutritionDataById = async (id: string) => {
  const response = await axios.delete(`/api/nutrition-data/${id}`);
  return response.data;
};
