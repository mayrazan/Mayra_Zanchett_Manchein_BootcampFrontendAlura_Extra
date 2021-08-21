export const errorMessages = {
  email: {
    valueMissing: 'O e-mail é necessário',
    typeMismatch: 'Este não é um e-mail válido',
    customError: 'Este não é um e-mail válido',
  },
  departureDate: {
    valueMissing: 'A data de saída é necessária',
    rangeUnderflow: 'A data de saída não pode ser a anterior a data de retorno',
    rangeOverflow: 'A data de saída não pode ser a anterior a data de retorno',
    typeMismatch: 'Esta não é uma data válida',
    patternMismatch: 'Data inválida',
  },
  cpf: {
    valueMissing: 'O CPF é necessário',
    tooShort: 'CPF faltando numeros',
    customError: 'Este não é um CPF válido',
    patternMismatch: 'Este não é um CPF válido',
    tooLong: 'CPF muito longo',
  },
  returnDate: {
    valueMissing: 'A data de retorno é necessária',
    rangeUnderflow: 'A data de saída não pode ser a anterior a data de retorno',
    rangeOverflow: 'A data de saída não pode ser a anterior a data de retorno',
    typeMismatch: 'Esta não é uma data válida',
    patternMismatch: 'Data inválida',
  },
  originPlace: {
    valueMissing: 'O Local de origem é necessário',
    typeMismatch: 'Não pode ter número',
    patternMismatch: 'Não pode ter número',
    customError: 'Não pode ter número',
  },
  arrivalLocation: {
    valueMissing: 'O Local de chegada é necessário',
    typeMismatch: 'Não pode ter número',
    patternMismatch: 'Não pode ter número',
    customError: 'Não pode ter número',
  },
  countriesResidence: {
    valueMissing: 'O país é necessário',
    typeMismatch: 'Não pode ter número',
    patternMismatch: 'Não pode ter número',
  },
  birthDate: {
    valueMissing: 'Esta não é uma data válida',
    customError: 'A idade mínima é de 18 anos',
    typeMismatch: 'Esta não é uma data válida',
    patternMismatch: 'Data inválida',
  },
  name: {
    valueMissing: 'O nome é necessário',
    typeMismatch: 'Não pode ter número',
    patternMismatch: 'Não pode ter número',
  },
  lastName: {
    valueMissing: 'O sobrenome é necessário',
    typeMismatch: 'Não pode ter número',
    patternMismatch: 'Não pode ter número',
  },
  tel: {
    valueMissing: 'O telefone é necessário',
    customError: 'Este não é um telefone válido',
    typeMismatch: 'Este não é um telefone válido',
    tooShort: 'Telefone faltando numeros',
    patternMismatch: 'Este não é um telefone válido',
  },
};

export const validityTypes = [
  'valueMissing',
  'customError',
  'typeMismatch',
  'patternMismatch',
  'rangeUnderflow',
  'rangeOverflow',
  'tooShort',
  'badInput',
  'stepMismatch',
  'tooLong',
];

let isValid = false;

export const check = (input, name) => {
  const message = errorMessages[name];
  let msg = '';
  validityTypes.forEach((item) => {
    if (input.validity[item]) {
      msg = message[item];
    }
    input.setCustomValidity(msg);
  });
  isValid = msg !== undefined && msg.length === 0;
  return { msg, isValid, name };
};
