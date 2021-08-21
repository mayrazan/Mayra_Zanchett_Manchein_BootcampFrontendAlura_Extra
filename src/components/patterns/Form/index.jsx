import React from 'react';
import Button from '../../commons/Button';
import Box from '../../layout/Box';
import DateSection from '../../formSections/DateSection';
import PaymentSection from '../../formSections/PaymentSection';
import TravelSection from '../../formSections/TravelSection';
import { useContextForm } from '../../../context/Provider';

export default function Form() {
  const {
    handleSubmit,
    isFormInvalid,
    isFormSubmited,
    submissionStatus,
    formStates,
  } = useContextForm();

  return (
    <form onSubmit={handleSubmit}>
      <DateSection />
      <PaymentSection />
      <TravelSection />
      <Box padding={{ xs: '16px', md: '0' }} />
      <Button type="submit" disabled={isFormInvalid}>
        Comprar
      </Button>
      {isFormSubmited && submissionStatus === formStates.LOADING && (
        <span
          style={{
            display: 'flex',
            paddingTop: '20px',
            color: 'orange',
            textTransform: 'uppercase',
            fontWeight: 'bold',
          }}
        >
          carregando
        </span>
      )}

      {isFormSubmited && submissionStatus === formStates.DONE && (
        <span
          style={{
            display: 'flex',
            paddingTop: '20px',
            color: 'green',
            textTransform: 'uppercase',
            fontWeight: 'bold',
          }}
        >
          Dados enviados com sucesso!
        </span>
      )}

      {isFormSubmited && submissionStatus === formStates.ERROR && (
        <span
          style={{
            display: 'flex',
            paddingTop: '20px',
            color: 'red',
            textTransform: 'uppercase',
            fontWeight: 'bold',
          }}
        >
          Erro no cadastro, tente novamente!
        </span>
      )}
    </form>
  );
}
