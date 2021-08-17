import React from 'react';
import Box from '../src/components/layout/Box';
import Title from '../src/components/commons/Title';

export default function Home() {
  return (
    <Box
      backgroundColor="white"
      height="100vh"
      width={{ xs: 'initial', md: '70%' }}
      margin={{ xs: '0 12px', md: 'auto' }}
      display="flex"
      flexDirection="column"
      flex="1"
      flexWrap="wrap"
      boxShadow="0px 0px 20px 5px rgba(0, 0, 0, 0.3)"
    >
      <Title text="Alura Viagens" color="title" />
    </Box>
  );
}
