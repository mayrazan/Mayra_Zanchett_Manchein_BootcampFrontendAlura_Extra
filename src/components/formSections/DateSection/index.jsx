import React from 'react';
import { useContextForm } from '../../../context/Provider';
import ErrorMessage from '../../commons/ErrorMessage';
import TextField from '../../forms/TextField';
import Text from '../../foundation/Text';
import Box from '../../layout/Box';

export default function DateSection() {
  const {
    handleChange, formInfo, verifyDate, formValidation, locations,
  } = useContextForm();

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
          onBlur={formValidation}
          pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
          min={new Date().toISOString().split('T')[0]}
        />
        <TextField
          id="returnDate"
          name="returnDate"
          labelName="Data de retorno"
          value={formInfo.returnDate}
          onChange={handleChange}
          type="date"
          onBlur={formValidation}
          pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
          min={new Date().toISOString().split('T')[0]}
        />
      </Box>
      {verifyDate().invalid && (
        <ErrorMessage>{verifyDate().message}</ErrorMessage>
      )}
      <Box
        display="flex"
        flexDirection={{ xs: 'column', md: 'row' }}
        gap={{ xs: '0', md: '20px' }}
      >
        <div>
          <TextField
            id="originPlace"
            name="originPlace"
            labelName="Local de origem"
            value={formInfo.originPlace}
            onChange={handleChange}
            type="text"
            pattern="[a-zA-Z ]*"
            onBlur={formValidation}
          />
          {locations.originPlace && (
            <ErrorMessage>{locations.originPlace}</ErrorMessage>
          )}
        </div>
        <div>
          <TextField
            id="arrivalLocation"
            name="arrivalLocation"
            labelName="Local de chegada"
            value={formInfo.arrivalLocation}
            onChange={handleChange}
            type="text"
            pattern="[a-zA-Z ]*"
            onBlur={formValidation}
          />
          {locations.arrivalLocation && (
            <ErrorMessage>{locations.arrivalLocation}</ErrorMessage>
          )}
        </div>
      </Box>
    </Box>
  );
}
