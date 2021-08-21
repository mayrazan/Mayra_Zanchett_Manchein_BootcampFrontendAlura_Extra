/* eslint-disable no-console */
import { useState } from 'react';
import autocomplete from '../utils/autocomplete';
import countries from '../utils/countries';

const useForm = () => {
  const formStates = {
    DEFAULT: 'DEFAULT',
    LOADING: 'LOADING',
    DONE: 'DONE',
    ERROR: 'ERROR',
  };
  const [isFormSubmited, setIsFormSubmited] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(formStates.DEFAULT);
  const [radio, setRadio] = useState('money');
  const [select, setSelect] = useState('');
  const [formInfo, setFormInfo] = useState({
    departureDate: '',
    returnDate: '',
    originPlace: '',
    arrivalLocation: '',
    payment: radio,
    countriesResidence: select,
    name: '',
    lastName: '',
    birthDate: '',
    cpf: '',
    email: '',
    tel: '',
  });

  const handleSelect = (event) => {
    const { value } = event.target;
    setSelect(value);
    setFormInfo({ ...formInfo, countriesResidence: value });
  };

  const searchCountries = select === '' ? countries : autocomplete(select);

  const handleChangeRadio = (event) => {
    const { value } = event.target;
    setRadio(value);
    setFormInfo({ ...formInfo, payment: value });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormInfo({ ...formInfo, [name]: value });
  };

  const verifyDate = () => {
    const date1 = new Date(formInfo.departureDate);
    const date2 = new Date(formInfo.returnDate);

    if (date1.getTime() > date2.getTime()) {
      return { invalid: true, message: 'A data de saída não pode ser a anterior a data de retorno' };
    }
    return { invalid: false, message: '' };
  };

  const is18 = () => {
    const today = new Date();
    const birthday = new Date(formInfo.birthDate);

    const isMinAge = new Date(
      birthday.getUTCFullYear() + 18,
      birthday.getUTCMonth(),
      birthday.getUTCDate(),
    );

    if (isMinAge > today) {
      return { invalid: true, message: 'A idade mínima é 18 anos.' };
    }
    return { invalid: false, message: '' };
  };

  const isEmpty = Object.keys(formInfo).map(
    (item) => formInfo[item].length === 0,
  );
  const isFormInvalid = isEmpty.filter((i) => i).length > 0;

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsFormSubmited(true);
    setSubmissionStatus(formStates.LOADING);

    const userDTO = {
      departureDate: formInfo.departureDate,
      returnDate: formInfo.returnDate,
      originPlace: formInfo.originPlace,
      arrivalLocation: formInfo.arrivalLocation,
      payment: formInfo.payment,
      countriesResidence: formInfo.countriesResidence,
      name: formInfo.name,
      lastName: formInfo.lastName,
      birthDate: formInfo.birthDate,
      cpf: formInfo.cpf,
      email: formInfo.email,
      tel: formInfo.tel,
    };
    if (is18().invalid || verifyDate().invalid) {
      setSubmissionStatus(formStates.ERROR);
      console.log('erro');
    } else {
      setSubmissionStatus(formStates.DONE);
      console.log(userDTO);
    }
  };

  return {
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
  };
};

export default useForm;
