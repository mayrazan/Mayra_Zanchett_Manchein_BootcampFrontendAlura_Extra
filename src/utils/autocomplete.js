import countries from './countries';

const autocomplete = (country) => countries.filter((item) => {
  const lowerValue = item.text.toLowerCase();
  const lowerCountry = country.toLowerCase();

  return lowerValue.includes(lowerCountry);
});

export default autocomplete;
