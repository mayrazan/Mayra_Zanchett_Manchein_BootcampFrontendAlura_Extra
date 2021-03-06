import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import useForm from './useContextForm';

const Context = createContext({});

function FormProvider({ children }) {
  const {
    isFormSubmited,
    submissionStatus,
    formInfo,
    handleSubmit,
    isFormInvalid,
    formStates,
    handleChange,
    handleChangeRadio,
    handleSelect,
    searchCountries,
    select,
    radio,
    is18,
    verifyDate,
    formValidation,
    locations,
  } = useForm();

  return (
    <Context.Provider
      value={{
        isFormSubmited,
        submissionStatus,
        formInfo,
        handleSubmit,
        isFormInvalid,
        formStates,
        handleChange,
        handleChangeRadio,
        handleSelect,
        searchCountries,
        select,
        radio,
        is18,
        verifyDate,
        formValidation,
        locations,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export const useContextForm = () => useContext(Context);
export { FormProvider };

FormProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
