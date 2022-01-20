import { useState, useCallback, useEffect } from 'react';

import { Input, IconButton } from '@chakra-ui/react'
import unsplashApi from '../../api/unsplashApi';
import { SearchIcon } from '@chakra-ui/icons';
import { Flex } from '@chakra-ui/react';
import { ImageList }  from '../ImageList';
import { Pagination } from '../Pagination';
import classes from './main.module.css';
import { SearchBar } from '../SearchBar';

const Main = () => {
    const [searchValue, setSearchValue] = useState('');
    const [results, setResults] = useState<any>([]);

    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    const itemsPerPage = 12;

    const onSearchChange = (e: any) => setSearchValue(e.target.value);

    const onSearchSubmit = async (term: any) => {
        const response = await unsplashApi.get('/search/photos?page=1&per_page=30', {
            params: { query: term },
        });

        setResults(response.data.results);
    };

    const onSearchButtonClick = useCallback((e: any) => {
        e.preventDefault();
        onSearchSubmit(searchValue);
    }, [searchValue]);

    const handlePageClick  = useCallback((e: any) => {
        const newOffset = (e.selected * itemsPerPage) % results.length;
        setItemOffset(newOffset);
    }, [results]);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(results.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(results.length / itemsPerPage));
    }, [results, itemOffset, searchValue]);

  return (
    <div>
        <SearchBar onSearchChange={onSearchChange} searchValue={searchValue} onSearchButtonClick={onSearchButtonClick}/>
        {results.length > 0 ?
        <div>
            <div className={classes.pagination}>
                <Pagination pageCount={pageCount} onPageChange={handlePageClick} />
            </div>
            <div>
                {currentItems && <ImageList images={currentItems} />}
            </div>
        </div>
        :
        <div className={classes.noImages}>No Images Found.</div>
        }

    </div>
  );
};

export { Main };
