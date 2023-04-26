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
    occupied: property.occupied ? 'Occupied' : 'Empty',
    gross_value: property.gross_value,
    upfront_capital: property.percent_upfront_proposed * property.gross_value / 100,
    investor_return: (100-property.percent_upfront_proposed) * property.gross_value / 100,
  };
};

const countPosted = (properties) => {
  let count = 0;
  for (let i = 0; i < properties.length; i++) {
    if (properties[i].is_posted === true) {
      count++;
    }
  }
  return count;
}

const getUnitTypesOfPosted = (properties, indices) => {
  if (indices.length == 0) {
    return 'None';
  }

  const type = properties[indices[0]].unit_type;
  for (const i of indices) {
    console.log(properties[i].unit_type)
    if (properties[i].unit_type != type) {
      return 'Multiple';
    }
  }
  return type;
}

const combinePropertiesBids = (properties, bids) => {
  const combinedList = [];
  
  const idToObjectMap = new Map();
  for (const bid of bids) {
    idToObjectMap.set(bid['property'], bid);
  }
  
  for (const property of properties) {
    const id = property['id'];
    if (idToObjectMap.has(id)) {
      const combinedObj = { ...property, ...idToObjectMap.get(id) };
      combinedList.push(combinedObj);
    }
  }
  
  return combinedList;
}

module.exports = {
  formatProperty: formatProperty,
  countPosted: countPosted,
  getUnitTypesOfPosted: getUnitTypesOfPosted,
  combinePropertiesBids: combinePropertiesBids,
};
