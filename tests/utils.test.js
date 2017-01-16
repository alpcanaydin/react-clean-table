import expect from 'expect';

import {
  stringToObject,
  cellDataGenerator,
  classNameMerge
} from '../src/utils';

describe('Utils', () => {
  describe('stringToObject', () => {
    it('returns data from single dimension object', () => {
      const data = {
        key1: 'value1'
      };

      const result = stringToObject(data, 'key1');
      expect(result).toEqual('value1');
    });

    it('returns data from multi dimension object', () => {
      const data = {
        key1: {
          key2: {
            key3: 'value'
          }
        },
        key4: ['value2', 'value3']
      };

      const result = stringToObject(data, 'key1.key2.key3');
      expect(result).toEqual('value');

      const result2 = stringToObject(data, 'key4.1');
      expect(result2).toEqual('value3');
    });

    it('returns undefined if given notation could not be found', () => {
      const result = stringToObject({ key1: 'value1' }, 'key2');
      expect(result).toBe(undefined);
    });
  });

  describe('cellDataGenerator', () => {
    it('returns undefined if field is undefined', () => {
      const result = cellDataGenerator({ key1: 'value1' }, undefined);
      expect(result).toBe(undefined);
    });

    it('returns exact value from object if field is string', () => {
      const data = {
        key1: {
          key2: {
            key3: 'value1',
            key4: 'value2'
          }
        }
      };

      const result = cellDataGenerator(data, 'key1.key2.key3');
      expect(result).toEqual('value1');
    });

    it('returns array of values from objet if field is array', () => {
      const data = {
        key1: {
          key2: {
            key3: 'value1',
            key4: 'value2'
          }
        },
        key5: {
          key6: 'value3'
        }
      };

      const result = cellDataGenerator(data, ['key1.key2.key3', 'key5.key6']);
      expect(result).toEqual(['value1', 'value3']);
    });
  });

  describe('classNameMerge', () => {
    it('returns undefined if args are undefined.', () => {
      const merge = classNameMerge();
      expect(merge).toBe(undefined);
    });

    it('ignores undefined values on merge', () => {
      const merge = classNameMerge(undefined, 'class1', undefined);
      expect(merge).toEqual('class1');
    });

    it('returns merged string for classes', () => {
      const merge = classNameMerge('class1', 'class2', 'class3 class4');
      expect(merge).toEqual('class1 class2 class3 class4');
    });
  });
});
