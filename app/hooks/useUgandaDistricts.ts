import { ugandaDistricts } from '../data/ugandaDistricts';

const useUgandaDistricts = () => {
  const getAll = () => ugandaDistricts;

  const getByValue = (value: string) => {
    return ugandaDistricts.find((item) => item.value === value);
  };

  const getByRegion = (region: string) => {
    return ugandaDistricts.filter((item) => item.region === region);
  };

  const getBySubregion = (subregion: string) => {
    return ugandaDistricts.filter((item) => item.subregion === subregion);
  };

  return {
    getAll,
    getByValue,
    getByRegion,
    getBySubregion,
  };
};

export default useUgandaDistricts;
