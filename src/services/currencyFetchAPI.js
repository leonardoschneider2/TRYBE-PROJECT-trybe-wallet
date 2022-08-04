const currencyURL = 'https://economia.awesomeapi.com.br/json/all';

const currencyFetchAPI = async () => {
  const response = await fetch(currencyURL);
  const json = await response.json();
  return response.ok ? Promise.resolve(json) : Promise.reject(json);
};

export default currencyFetchAPI;
