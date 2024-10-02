import { Avatar, Box, List, ListItem, Stack, SxProps, Typography } from '@mui/material';
import cn from 'classnames';
import * as React from 'react';

import { Search } from '..';
import { StyledSuggestionsCard } from './SuggestionSearch.styles';

interface ISearchProps {
  placeholder?: string;
  shortcutKey?: string;
  sx?: SxProps;
}

const SuggestionSearch: React.FC<ISearchProps> = ({ placeholder = 'Search', sx, shortcutKey }) => {
  const [value, setValue] = React.useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Box position='relative' width={360} sx={sx}>
      <Search
        size='medium'
        placeholder={placeholder}
        onChange={handleInputChange}
        shortcutKey={shortcutKey}
      />

      <StyledSuggestionsCard className={cn({ active: value })}>
        <Typography variant='caption1' color='grey.400' sx={{ pl: 1.5 }}>
          Result
        </Typography>

        <List>
          {['Result 1', 'Result 2', 'Result 3'].map((result) => (
            <ListItem component={Stack} key={result} direction='row' gap={2} sx={{ px: 1.5 }}>
              <Avatar variant='rounded' sx={{ width: 48, height: 48 }} />
              <Typography key={result} variant='body2Semibold'>
                {result}
              </Typography>
            </ListItem>
          ))}
        </List>
      </StyledSuggestionsCard>
    </Box>
  );
};

export default SuggestionSearch;
