/* @flow */

export const stringToObject = (object: Object, notation: string): any => {
  const reducer = (accumulator: any, currentValue: any): any => accumulator[currentValue];
  return notation.split('.').reduce(reducer, object);
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

export const classNameMerge = (...args: any): typeof undefined | string => {
  if (!args) {
    return undefined;
  }

  const classNames = args.filter((arg: typeof undefined | string): any => arg !== undefined);

  if (!classNames.length) {
    return undefined;
  }

  return classNames.join(' ');
};
