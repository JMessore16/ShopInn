import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import {deepPurple} from '@mui/material/colors';

export default function LetterAvatars() {
  return (
    <Stack className='avatar' direction="row">
      <Avatar sx={{ bgcolor: deepPurple[500]}}>JM</Avatar>
    </Stack>
  );
}