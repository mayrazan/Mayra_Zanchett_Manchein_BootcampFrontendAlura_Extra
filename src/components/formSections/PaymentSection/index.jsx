import React from 'react';
import { useContextForm } from '../../context/Provider';
import RadioField from '../../forms/RadioField';
import Text from '../../foundation/Text';
import Box from '../../layout/Box';

export default function PaymentSection() {
  const { handleChangeRadio, radio } = useContextForm();

  return (
    <Box gap={{ xs: '18px', md: '11px' }} display="flex" flexDirection="column">
      <Text variant="subtitle" tag="h5" margin="0">
        Como será o pagamento?
      </Text>
      <div style={{ display: 'flex' }}>
        <RadioField
          name="money"
          labelName="Transferência"
          id="money"
          value="money"
          className="money"
          onChange={handleChangeRadio}
          checked={radio === 'money'}
          borderRadius="10px 0px 0px 10px"
        />
        <RadioField
          name="card"
          labelName="Cartão"
          id="card"
          value="card"
          className="card"
          onChange={handleChangeRadio}
          checked={radio === 'card'}
        />
        <RadioField
          name="paypal"
          labelName="PayPal"
          id="paypal"
          value="paypal"
          className="paypal"
          onChange={handleChangeRadio}
          checked={radio === 'paypal'}
          borderRadius="0px 10px 10px 0px"
        />
      </div>
    </Box>
  );
}
