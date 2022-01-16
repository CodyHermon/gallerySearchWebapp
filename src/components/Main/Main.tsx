import { useState } from 'react';
import { Input, IconButton } from '@chakra-ui/react'
import unsplashApi from '../../api/unsplashApi';
import { SearchIcon } from '@chakra-ui/icons';
import { Flex } from '@chakra-ui/react';
import { ImageList }  from './ImageList';

const Main = () => {
    const [searchValue, setSearchValue] = useState('');
    const [results, setResults] = useState([]);

    const onSearchChange = (e: any) => setSearchValue(e.target.value);

    const onSearchSubmit = async (term: any) => {
        const response = await unsplashApi.get('/search/photos?page=3&per_page=30', {
            params: { query: term },
        });

        setResults(response.data.results);
    };

    const onSearchButtonClick = (e: any) => {
        e.preventDefault();
        onSearchSubmit(searchValue);
    };

  return (
    <>
        <div>
            <form onSubmit={onSearchButtonClick}>
                <Flex w='50%' margin='20px auto'>
                    <Input placeholder='Keyword Search' value={searchValue} onChange={onSearchChange} />
                    <IconButton aria-label='Search' icon={<SearchIcon />} onClick={onSearchButtonClick} />
                </Flex>
            </form>
            <div>
                <ImageList images={results} />
            </div>
        </div>
    </>
  );
};

export { Main };
