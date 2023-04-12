const extractCityAndState = (address) => {
  const regex = /\b([A-Za-z\s]+),\s*([A-Za-z]{2})\b/;
  const match = address.match(regex);
  if (match && match.length === 3) {
    const city = match[1];
    const state = match[2];
    return `${city}, ${state}`;
  } else {
    return null;
  }
}

const extractStreetAddress = (address) => {
  const regex = /^([\s\w.,&]+?)(?:\s*,\s*)?([A-Za-z\s]+),\s*([A-Za-z]{2})\b/;
  const match = address.match(regex);
  if (match && match.length === 4) {
    const components = match[1].trim();
    return components;
  } else {
    // Return null or throw an error if no match is found
    return null;
  }
}

const formatProperty = (property) => {
  const temp = property.address;
  return {
    ...property,
    address: extractStreetAddress(temp),
    location: extractCityAndState(temp),
    occupied: property.occupied ? 'Occupied' : 'Empty'
  };
};

module.exports = {
  formatProperty: formatProperty,
};
