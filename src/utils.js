/* @flow */

export const stringToObject = (object: Object, notation: string): any => {
  const arr = notation.split('.');
  let result = object;

  while (arr.length) {
    result = result[arr.shift()];
  }

  return result;
};

export const cellDataGenerator = (data: Object, fields?: string | Array<string>): any => {
  if (!fields) {
    return undefined;
  }

  if (typeof fields === 'string') {
    return stringToObject(data, fields);
  }

  const result = [];

  for (const field of fields) {
    result.push(stringToObject(data, field));
  }

  return result;
};
