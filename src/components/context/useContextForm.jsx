import { useState } from 'react';
import autocomplete from '../../utils/autocomplete';
import countries from '../../utils/countries';

const useForm = () => {
  const formStates = {
    DEFAULT: 'DEFAULT',
    LOADING: 'LOADING',
    DONE: 'DONE',
    ERROR: 'ERROR',
  };
  const [isFormSubmited, setIsFormSubmited] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(formStates.DEFAULT);
  const [radio, setRadio] = useState('');
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

  const isFormInvalid = formInfo.departureDate.length === 0
    || formInfo.returnDate.length === 0
    || formInfo.originPlace.length === 0
    || formInfo.arrivalLocation.length === 0
    || formInfo.payment.length === 0
    || formInfo.countriesResidence.length === 0
    || formInfo.name.length === 0
    || formInfo.lastName.length === 0
    || formInfo.birthDate.length === 0
    || formInfo.cpf.length === 0
    || formInfo.email.length === 0
    || formInfo.tel.length === 0;

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
    console.log(userDTO);
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
  };
};

export default useForm;
