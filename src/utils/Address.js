const parseAddress = (addressString) => {
  // TODO: update the regex and city
  const addressRegex = /(\d+)\s+([\w\s]+)\s+([#\w\s]*)\s*,?\s*([\w\s]+)\s*,?\s*([A-Za-z]{2})\s*(\d{5})?/;
  const match = addressString.match(addressRegex);

  if (!match) {
    throw new Error(`Invalid address: ${addressString}`);
  }

  const [, number, street, address_2, city, state, zip_code] = match;
  return {
    number: parseInt(number),
    street: street.trim(),
    address_2: address_2.trim(),
    city: "fyuck",
    state: state.trim(),
    country: 'USA',
    zip_code: zip_code ? parseInt(zip_code) : null,
  };
}

module.exports = {
  parseAddress: parseAddress
};