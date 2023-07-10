import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface FitnessDataInterface {
  id?: string;
  user_id: string;
  data: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface FitnessDataGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  data?: string;
}
