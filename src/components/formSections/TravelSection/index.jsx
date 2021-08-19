import React from 'react';
import TextField from '../../forms/TextField';
import Text from '../../foundation/Text';
import Box from '../../layout/Box';
import SelectField from '../../forms/SelectField';
import { useContextForm } from '../../context/Provider';

export default function TravelSection() {
  const {
    formInfo, handleChange, searchCountries, select, handleSelect,
  } = useContextForm();

  return (
    <Box
      gap="18px"
      display="flex"
      flexDirection="column"
      margin={{ xs: '16px 0 0 0', md: '24px 0 0 0' }}
    >
      <Text variant="subtitle" tag="h5" margin="0">
        Quem vai viajar?
      </Text>
      <Box
        display="flex"
        flexDirection={{ xs: 'column', md: 'column' }}
        gap={{ xs: '0', md: '20px' }}
      >
        <TextField
          id="name"
          name="name"
          labelName="Nome"
          value={formInfo.name}
          onChange={handleChange}
          type="text"
          width="100% !important"
        />
        <TextField
          id="lastName"
          name="lastName"
          labelName="Sobrenome"
          value={formInfo.lastName}
          onChange={handleChange}
          type="text"
          width="100% !important"
        />
      </Box>
      <Box
        display="flex"
        flexDirection={{ xs: 'column', md: 'row' }}
        gap={{ xs: '0', md: '20px' }}
        justifyContent="space-between"
      >
        <SelectField
          id="country"
          name="country"
          options={searchCountries}
          value={select}
          labelName="País de residência"
          onChange={handleSelect}
          list="countries"
        />
        <TextField
          id="birthDate"
          name="birthDate"
          labelName="Data de Nascimento"
          value={formInfo.birthDate}
          onChange={handleChange}
          type="date"
        />
      </Box>

      <Box
        display="flex"
        flexDirection={{ xs: 'column', md: 'column' }}
        gap={{ xs: '0', md: '20px' }}
      >
        <TextField
          id="cpf"
          name="cpf"
          labelName="CPF"
          value={formInfo.cpf}
          onChange={handleChange}
          type="number"
          width="100% !important"
        />
        <TextField
          id="email"
          name="email"
          labelName="Email"
          value={formInfo.email}
          onChange={handleChange}
          type="email"
          width="100% !important"
        />
        <TextField
          id="tel"
          name="tel"
          labelName="Telefone"
          value={formInfo.tel}
          onChange={handleChange}
          type="tel"
          width="100% !important"
        />
      </Box>
    </Box>
  );
}
