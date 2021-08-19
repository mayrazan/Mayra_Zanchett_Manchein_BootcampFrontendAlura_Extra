import React from 'react';
// import loadingAnimation from '../animations/loading.json';
// import successAnimation from '../animations/success.json';
// import errorAnimation from '../animations/error.json';
// import FormAnimation from '../FormAnimation';
import Button from '../../commons/Button';
import Box from '../../layout/Box';
import DateSection from '../../formSections/DateSection';
import PaymentSection from '../../formSections/PaymentSection';
import TravelSection from '../../formSections/TravelSection';
import { useContextForm } from '../../context/Provider';

export default function Form() {
  const { handleSubmit, isFormInvalid } = useContextForm();

  return (
    <form onSubmit={handleSubmit}>
      <DateSection />
      <PaymentSection />
      <TravelSection />
      <Box padding={{ xs: '16px', md: '0' }} />
      <Button type="submit" disabled={isFormInvalid}>
        Comprar
      </Button>
      {/* {isFormSubmited && submissionStatus === formStates.LOADING && (
        <FormAnimation animation={loadingAnimation} />
      )}

      {isFormSubmited && submissionStatus === formStates.DONE && (
        <FormAnimation animation={successAnimation} />
      )}

      {isFormSubmited && submissionStatus === formStates.ERROR && (
        <FormAnimation animation={errorAnimation} />
      )} */}
    </form>
  );
}
