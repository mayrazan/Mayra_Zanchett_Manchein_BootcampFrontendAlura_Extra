import React from 'react';
import Box from '../src/components/layout/Box';
import Title from '../src/components/commons/Title';
import Button from '../src/components/commons/Button';
import PaymentSection from '../src/components/formSections/PaymentSection';
import DateSection from '../src/components/formSections/DateSection';
import TravelSection from '../src/components/formSections/TravelSection';

export default function Home() {
  return (
    <Box
      backgroundColor="white"
      minHeight="100vh"
      width={{ xs: 'initial', md: '70%' }}
      margin={{ xs: '0 12px', md: 'auto' }}
      display="flex"
      flexDirection="column"
      flex="1"
      flexWrap="wrap"
      boxShadow="0px 0px 20px 5px rgba(0, 0, 0, 0.3)"
      alignContent="center"
      padding={{ xs: '18px 16px 32px', md: '11px 0 54px' }}
    >
      <Title text="Alura Viagens" color="title" />
      <DateSection />
      <PaymentSection />
      <TravelSection />
      <Box padding={{ xs: '16px', md: '0' }} />
      <Button>Comprar</Button>
    </Box>
  );
}
