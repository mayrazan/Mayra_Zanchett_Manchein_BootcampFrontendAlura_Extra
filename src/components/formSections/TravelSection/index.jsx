import React from 'react';
import TextField from '../../forms/TextField';
import Text from '../../foundation/Text';
import Box from '../../layout/Box';
import SelectField from '../../forms/SelectField';
import { useContextForm } from '../../../context/Provider';
import { check } from '../../../utils/formValidation';

export default function TravelSection() {
  const {
    formInfo,
    handleChange,
    searchCountries,
    select,
    handleSelect,
    is18,
  } = useContextForm();

  const formValidation = (event) => {
    check(event.target, event.target.name);
  };

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
          pattern="[a-zA-Z ]*"
          onBlur={formValidation}
        />
        <TextField
          id="lastName"
          name="lastName"
          labelName="Sobrenome"
          value={formInfo.lastName}
          onChange={handleChange}
          type="text"
          width="100% !important"
          pattern="[a-zA-Z ]*"
          onBlur={formValidation}
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
          pattern="[a-zA-Z ]*"
          onBlur={formValidation}
        />
        <TextField
          id="birthDate"
          name="birthDate"
          labelName="Data de Nascimento"
          value={formInfo.birthDate}
          onChange={handleChange}
          type="date"
          onBlur={formValidation}
        />
      </Box>
      {is18().invalid && (
        <div
          style={{
            display: 'flex',
            paddingBottom: '20px',
            color: 'red',
            justifyContent: 'flex-end',
          }}
        >
          <span>{is18().message}</span>
        </div>
      )}
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
          type="text"
          width="100% !important"
          pattern="\d{3}\.?\d{3}\.?\d{3}-?\d{2}"
          maxLength="14"
          onBlur={formValidation}
          placeholder="Somente números"
        />
        <TextField
          id="email"
          name="email"
          labelName="Email"
          value={formInfo.email}
          onChange={handleChange}
          type="email"
          width="100% !important"
          onBlur={formValidation}
        />
        <TextField
          id="tel"
          name="tel"
          labelName="Telefone"
          value={formInfo.tel}
          onChange={handleChange}
          type="tel"
          width="100% !important"
          minlength="11"
          onBlur={formValidation}
          placeholder="Somente números"
          maxlength="15"
          pattern="\(\d{2}\)\s*\d{5}-\d{4}"
        />
      </Box>
    </Box>
  );
}
