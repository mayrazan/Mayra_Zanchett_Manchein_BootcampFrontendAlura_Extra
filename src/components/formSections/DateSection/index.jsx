import React, { useState } from 'react';
import TextField from '../../forms/TextField';
import Text from '../../foundation/Text';
import Box from '../../layout/Box';

export default function DateSection() {
  const [formInfo, setFormInfo] = useState({
    departureDate: '',
    returnDate: '',
    originPlace: '',
    arrivalLocation: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormInfo({ ...formInfo, [name]: value });
  };

  return (
    <Box
      gap="18px"
      display="flex"
      flexDirection="column"
      margin={{ xs: '16px 0 0 0', md: '24px 0 0 0' }}
    >
      <Text variant="subtitle" tag="h5" margin="0">
        Quando será a viagem?
      </Text>
      <Box
        display="flex"
        flexDirection={{ xs: 'column', md: 'row' }}
        gap={{ xs: '0', md: '20px' }}
      >
        <TextField
          id="departureDate"
          name="departureDate"
          labelName="Data de saída"
          value={formInfo.departureDate}
          onChange={handleChange}
          type="date"
        />
        <TextField
          id="returnDate"
          name="returnDate"
          labelName="Data de retorno"
          value={formInfo.returnDate}
          onChange={handleChange}
          type="date"
        />
      </Box>
      <Box
        display="flex"
        flexDirection={{ xs: 'column', md: 'row' }}
        gap={{ xs: '0', md: '20px' }}
      >
        <TextField
          id="originPlace"
          name="originPlace"
          labelName="Local de origem"
          value={formInfo.originPlace}
          onChange={handleChange}
          type="text"
        />
        <TextField
          id="arrivalLocation"
          name="arrivalLocation"
          labelName="Local de chegada"
          value={formInfo.arrivalLocation}
          onChange={handleChange}
          type="text"
        />
      </Box>
    </Box>
  );
}
