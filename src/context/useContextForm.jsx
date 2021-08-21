/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
import { useState } from 'react';
import autocomplete from '../utils/autocomplete';
import countries from '../utils/countries';
import { check } from '../utils/formValidation';

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
  const [locations, setLocations] = useState({
    originPlace: '',
    arrivalLocation: '',
  });
  const initialFormValues = {
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
  };
  const [formInfo, setFormInfo] = useState(initialFormValues);

  const phoneMask = (value) => {
    value = value.replace(/\D/g, '');
    value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
    value = value.replace(/(\d)(\d{4})$/, '$1-$2');
    return value;
  };

  const cpfMask = (value) => {
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    return value;
  };

  const showErrorMessage = (name, valid) => {
    if (!valid) {
      setLocations({ ...locations, [name]: 'Não pode ter números' });
    } else {
      setLocations({ ...locations, [name]: '' });
    }
  };

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
    if (name === 'tel') {
      const newTel = phoneMask(value);
      setFormInfo({ ...formInfo, tel: newTel });
    }
    if (name === 'cpf') {
      const formattedCPF = cpfMask(value);
      setFormInfo({ ...formInfo, cpf: formattedCPF });
    }
    if (name === 'originPlace' || name === 'arrivalLocation') {
      showErrorMessage(name, event.target.checkValidity());
    }
  };

  const verifyDate = () => {
    const date1 = new Date(formInfo.departureDate);
    const date2 = new Date(formInfo.returnDate);

    if (date1.getTime() > date2.getTime()) {
      return {
        invalid: true,
        message: 'A data de saída não pode ser a anterior a data de retorno',
      };
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

  const formValidation = (event) => {
    check(event.target, event.target.name);
  };

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
      setSelect('');
      setTimeout(() => setFormInfo(initialFormValues), 1200);
      console.log(userDTO);
    }
    setTimeout(() => setSubmissionStatus(formStates.DEFAULT), 3000);
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
    formValidation,
    locations,
  };
};

export default useForm;
