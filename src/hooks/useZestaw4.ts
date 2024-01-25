import { useEffect, useState } from 'react';

import { dataFile, initialLoadedData } from '../utils/data';
import { loadData } from '../utils/fetchData';
import { DataFile, DataFileSingle, InitialLoadedData } from '../utils/types';

export const useZestaw4 = () => {
  const [loadedData, setLoadedData] = useState<InitialLoadedData | DataFile>(initialLoadedData);

  const [foundInputState, setFoundInputState] = useState<DataFileSingle[]>([]);
  const [searchedValue, setSearchedValue] = useState('');
  const [showAll, setShowAll] = useState(true);

  function typeGuard(loadedData: InitialLoadedData | DataFile): loadedData is DataFile {
    return 'exec_time' in loadedData;
  }
  useEffect(() => {
    loadData(dataFile)
      .then((res) => {
        setLoadedData(res as DataFile);
      })
      .catch((err: Error) => console.error(err));
  }, []);

  const searchText = (input: string) => {
    if (typeGuard(loadedData)) {
      return loadedData.response.data.filter((item) => item.description.includes(input));
    }
  };

  const handleSearch = () => {
    setShowAll(false);
    const foundInput = searchText(searchedValue);
    setFoundInputState(foundInput ?? []);
  };

  const handleClearSearch = () => {
    setShowAll(true);
    setSearchedValue('');
    setFoundInputState([]);
  };

  return {
    foundInputState,
    handleClearSearch,
    handleSearch,
    loadedData,
    searchedValue,
    setSearchedValue,
    showAll,
  };
};
