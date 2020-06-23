import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import { GlobalStyle } from './styles';
import { fetchData } from './services/api';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  };

  async componentDidMount() {
    const data = await fetchData();
    console.log(data);
    this.setState({ data });
  }
  handleCountryChange = async country => {
    const fetchedData = await fetchData(country.target.value);

    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className="container">
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />

        <Chart data={data} country={country} />
        <GlobalStyle />
      </div>
    );
  }
}

export default App;
