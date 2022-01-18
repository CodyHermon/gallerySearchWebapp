import { Input, IconButton, Flex } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons';

interface Props {
    searchValue: string;
    onSearchChange: (e: any) => void;
    onSearchButtonClick: (e: any) => void;
}

const SearchBar = ({ searchValue, onSearchChange, onSearchButtonClick }: Props) => {
  return (
    <form onSubmit={onSearchButtonClick}>
      <Flex w='50%' margin='20px auto'>
          <Input variant='filled' placeholder='Keyword Search' value={searchValue} onChange={onSearchChange} />
          <IconButton aria-label='Search' icon={<SearchIcon />} onClick={onSearchButtonClick} />
      </Flex>
    </form>
  );
};

export { SearchBar };