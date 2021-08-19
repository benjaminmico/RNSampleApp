import { API_RANDOM_DATA_PREFIX } from './../utils/urls';
import rest from '../utils/rest';
import { ICar } from './../types/car';

/** Get car from API random data */
const getCar = async (): Promise<
  | {
      data: ICar | null;
      error: boolean | string;
    }
  | undefined
> => {
  try {
    const res = await rest({
      method: 'GET',
      url: `${API_RANDOM_DATA_PREFIX()}/vehicle/random_vehicle`,
    });

    return { data: res.data, error: false };
  } catch (e) {
    return { data: null, error: JSON.stringify(e) };
  }
};

export default getCar;
