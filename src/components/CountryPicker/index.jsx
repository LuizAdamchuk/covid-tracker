import React, { useState, useEffect, useCallback } from 'react';
import { FormControl, NativeSelect } from '@material-ui/core';

import { Container } from './style';
import { fetchCountries } from '../../services/api';

export const CountryPicker = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const responseApi = async () => {
      setCountries(await fetchCountries());
    };

    responseApi();
  }, [setCountries]);

  return (
    <Container>
      <FormControl className="form-control">
        <NativeSelect onChange={handleCountryChange} className="formControl">
          <option value="">Escolha o país</option>
          {countries.map((country, i) => (
            <option key={i} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </Container>
  );
};
