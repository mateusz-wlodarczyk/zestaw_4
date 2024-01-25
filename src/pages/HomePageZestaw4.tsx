import React from 'react';
import { Box, Button, Flex, FormControl, Input, Text } from '@chakra-ui/react';

import { SingleCart } from '../components/SingleCart';
import { useZestaw4 } from '../hooks/useZestaw4';
import { DataFile, InitialLoadedData } from '../utils/types';

export const HomePageZestaw4 = () => {
  const {
    foundInputState,
    handleClearSearch,
    handleSearch,
    loadedData,
    searchedValue,
    setSearchedValue,
    showAll,
  } = useZestaw4();

  function typeGuard(loadedData: InitialLoadedData | DataFile): loadedData is InitialLoadedData {
    return 'error' in loadedData;
  }

  if (typeGuard(loadedData)) return <Text>loading...</Text>;

  return (
    <>
      <Box>
        <Flex alignItems='center' gap='5px'>
          <FormControl isRequired>
            <Input
              placeholder='search'
              value={searchedValue}
              onChange={(e) => setSearchedValue(e.target.value)}
            />
          </FormControl>
          <Button colorScheme='teal' onClick={handleSearch}>
            search
          </Button>{' '}
          <Button colorScheme='teal' onClick={handleClearSearch}>
            clear
          </Button>
        </Flex>

        {!showAll && (
          <Box>
            <Flex gap='10px' wrap='wrap'>
              {foundInputState !== null &&
                foundInputState.map((item) => {
                  return <SingleCart key={item.work_order_id} item={item} />;
                })}
            </Flex>
          </Box>
        )}
      </Box>
      {showAll && (
        <Box>
          <Flex gap='10px' wrap='wrap'>
            {loadedData !== null &&
              loadedData.response.data.map((item) => {
                return <SingleCart key={item.work_order_id} item={item} />;
              })}
          </Flex>
        </Box>
      )}
      <Box>
        <Flex>
          <Text>execTime: {loadedData.exec_time}</Text>
          <Text>total: {loadedData.response.total}</Text>
        </Flex>
      </Box>
    </>
  );
};
export default HomePageZestaw4;
