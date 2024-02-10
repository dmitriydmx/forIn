export function orderByProps(obj, sortOrder) {
  const result = [];
  
  for (let property of sortOrder) {
    if (property in obj) {
      result.push({key: property, value: obj[property]});
    }
  }
  
  for (let key in obj) {
    if (!sortOrder.includes(key)) {
      result.push({key: key, value: obj[key]});
    }
  }
  
  result.sort((a, b) => a.key.localeCompare(b.key));
  
  return result;
}
