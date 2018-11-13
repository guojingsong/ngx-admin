import {
  hasValue, inArray, isArray, isDefined, isObject, isEmpty, isMap, isSet,
  isString, PlainObject
} from './validator.functions';

/**
 * Utility function library:
 * 用函数库
 * addClasses, copy, forEach, forEachCopy, hasOwn, mergeFilteredObject,
 * uniqueItems, commonItems, fixTitle, toTitleCase
*/

/**
 * 'addClasses' function
 *
 * Merges two space-delimited lists of CSS classes and removes duplicates.
 * 合并两个空间分隔的CSS类列表并移除重复项。
 *
 * @param {string | string[] | Set<string>} oldClasses
 * @param {string | string[] | Set<string>} newClasses
 * @return {string | string[] | Set<string>} - Combined classes
 */
export function addClasses(
  oldClasses: string | string[] | Set<string>,
  newClasses: string | string[] | Set<string>
): string | string[] | Set<string> {
  const badType = i => !isSet(i) && !isArray(i) && !isString(i);
  if (badType(newClasses)) { return oldClasses; }
  if (badType(oldClasses)) { oldClasses = ''; }
  const toSet = i => isSet(i) ? i : isArray(i) ? new Set(i) : new Set(i.split(' '));
  let combinedSet: Set<any> = toSet(oldClasses);
  let newSet: Set<any> = toSet(newClasses);
  newSet.forEach(c => combinedSet.add(c));
  if (isSet(oldClasses)) { return combinedSet; }
  if (isArray(oldClasses)) { return Array.from(combinedSet); }
  return Array.from(combinedSet).join(' ');
}

/**
 * 'copy' function
 *
 * Makes a shallow copy of a JavaScript object, array, Map, or Set.
 * If passed a JavaScript primitive value (string, number, boolean, or null),
 * it returns the value.
 * 制作一个JavaScript对象、数组、映射或集合的浅拷贝。
 * 如果传递了JavaScript原始值（字符串、数字、布尔或null），它返回值。
 *
 * @param {Object|Array|string|number|boolean|null} object - The object to copy
 * @param {boolean = false} errors - Show errors?
 * @return {Object|Array|string|number|boolean|null} - The copied object
 */
export function copy(object: any, errors = false): any {
  if (typeof object !== 'object' || object === null) { return object; }
  if (isMap(object))    { return new Map(object); }
  if (isSet(object))    { return new Set(object); }
  if (isArray(object))  { return [ ...object ];   }
  if (isObject(object)) { return { ...object };   }
  if (errors) {
    console.error('copy error: Object to copy must be a JavaScript object or value.');
  }
  return object;
}

/**
 * 'forEach' function
 *
 * Iterates over all items in the first level of an object or array
 * and calls an iterator funciton on each item.
 * 
 * The iterator function is called with four values:
 * 1. The current item's value
 * 2. The current item's key
 * 3. The parent object, which contains the current item
 * 4. The root object
 *
 * Setting the optional third parameter to 'top-down' or 'bottom-up' will cause
 * it to also recursively iterate over items in sub-objects or sub-arrays in the
 * specified direction.
 
 * Iterates over all items in the first level of an object or array
 * and calls an iterator funciton on each item.
 * 
 * The iterator function is called with four values:
 * 1. The current item's value
 * 2. The current item's key
 * 3. The parent object, which contains the current item
 * 4. The root object
 *
 * Setting the optional third parameter to 'top-down' or 'bottom-up' will cause
 * it to also recursively iterate over items in sub-objects or sub-arrays in the
 * specified direction.
 * 遍历对象或数组的第一级中的所有项并在每个项上调用迭代器函数。
 *
 * 迭代器函数用四个值调用：
 * 1。当前项目的价值
 * 2。当前项目的关键
 * 3。包含当前项的父对象
 * 4。根对象
 *
 * 将可选的第三参数设置为“自上而下”或“自下而上”将导致它还递归地遍历子对象或子数组中的项。
 * 指定的方向

 *
 * @param {Object|Array} object - The object or array to iterate over
 * @param {function} fn - the iterator funciton to call on each item
 * @param {boolean = false} errors - Show errors?
 * @return {void}
 */
export function forEach(
  object: any, fn: (v: any, k?: string | number, c?: any, rc?: any) => any,
  recurse: boolean | string = false, rootObject: any = object, errors = false
): void {
  if (isEmpty(object)) { return; }
  if ((isObject(object) || isArray(object)) && typeof fn === 'function') {
    for (let key of Object.keys(object)) {
      const value = object[key];
      if (recurse === 'bottom-up' && (isObject(value) || isArray(value))) {
        forEach(value, fn, recurse, rootObject);
      }
      fn(value, key, object, rootObject);
      if (recurse === 'top-down' && (isObject(value) || isArray(value))) {
        forEach(value, fn, recurse, rootObject);
      }
    }
  }
  if (errors) {
    if (typeof fn !== 'function') {
      console.error('forEach error: Iterator must be a function.');
      console.error('function', fn);
    }
    if (!isObject(object) && !isArray(object)) {
      console.error('forEach error: Input object must be an object or array.');
      console.error('object', object);
    }
  }
}

/**
 * 'forEachCopy' function
 *
 * Iterates over all items in the first level of an object or array
 * and calls an iterator function on each item. Returns a new object or array
 * with the same keys or indexes as the original, and values set to the results
 * of the iterator function.
 *
 * Does NOT recursively iterate over items in sub-objects or sub-arrays.
 * 遍历对象或数组的第一级中的所有项并在每个项上调用迭代器函数。返回新的对象或数组
 * 具有与原始相同的键或索引，以及设置到结果的值迭代器函数。
 * 不递归地遍历子对象或子数组中的项。
 *
 * @param {Object | Array} object - The object or array to iterate over
 * @param {function} fn - The iterator funciton to call on each item
 * @param {boolean = false} errors - Show errors?
 * @return {Object | Array} - The resulting object or array
 */
export function forEachCopy(
  object: any, fn: (v: any, k?: string | number, o?: any, p?: string) => any,
  errors = false
): any {
  if (!hasValue(object)) { return; }
  if ((isObject(object) || isArray(object)) && typeof object !== 'function') {
    let newObject: any = isArray(object) ? [] : {};
    for (let key of Object.keys(object)) {
      newObject[key] = fn(object[key], key, object);
    }
    return newObject;
  }
  if (errors) {
    if (typeof fn !== 'function') {
      console.error('forEachCopy error: Iterator must be a function.');
      console.error('function', fn);
    }
    if (!isObject(object) && !isArray(object)) {
      console.error('forEachCopy error: Input object must be an object or array.');
      console.error('object', object);
    }
  }
}

/**
 * 'hasOwn' utility function
 *
 * Checks whether an object or array has a particular property.
 * 检查对象或数组是否具有特定属性。
 *
 * @param {any} object - the object to check
 * @param {string} property - the property to look for
 * @return {boolean} - true if object has property, false if not
 */
export function hasOwn(object: any, property: string): boolean {
  if (!object || !['number', 'string', 'symbol'].includes(typeof property) ||
    (!isObject(object) && !isArray(object) && !isMap(object) && !isSet(object))
  ) { return false; }
  if (isMap(object) || isSet(object)) { return object.has(property); }
  if (typeof property === 'number') {
    if (isArray(object)) { return object[<number>property]; }
    property = property + '';
  }
  return object.hasOwnProperty(property);
}

/**
 * 'mergeFilteredObject' utility function
 *
 * Shallowly merges two objects, setting key and values from source object
 * in target object, excluding specified keys.
 *
 * Optionally, it can also use functions to transform the key names and/or
 * the values of the merging object.
 *
 * MyGeFrimeDead对象的效用函数
 * 合并两个对象，从源对象设置关键字和值在目标对象中，排除指定的键。
 * 可选地，它还可以使用函数来转换密钥名称和/或*合并对象的值。
 * 
 * @param {PlainObject} targetObject - Target object to add keys and values to
 * @param {PlainObject} sourceObject - Source object to copy keys and values from
 * @param {string[]} excludeKeys - Array of keys to exclude
 * @param {(string: string) => string = (k) => k} keyFn - Function to apply to keys
 * @param {(any: any) => any = (v) => v} valueFn - Function to apply to values
 * @return {PlainObject} - Returns targetObject
 */
export function mergeFilteredObject(
  targetObject: PlainObject,
  sourceObject: PlainObject,
  excludeKeys = <string[]>[],
  keyFn = (key: string): string => key,
  valFn = (val: any): any => val
): PlainObject {
  if (!isObject(sourceObject)) { return targetObject; }
  if (!isObject(targetObject)) { targetObject = {}; }
  for (let key of Object.keys(sourceObject)) {
    if (!inArray(key, excludeKeys) && isDefined(sourceObject[key])) {
      targetObject[keyFn(key)] = valFn(sourceObject[key]);
    }
  }
  return targetObject;
}

/**
 * 'uniqueItems' function
 *
 * Accepts any number of string value inputs,
 * and returns an array of all input vaues, excluding duplicates.
 * 接受任何字符串值输入，
 * 并返回所有输入VAUES的数组，不包括重复项。
 *
 * @param {...string} ...items -
 * @return {string[]} -
 */
export function uniqueItems(...items): string[] {
  const returnItems = [];
  for (const item of items) {
    if (!returnItems.includes(item)) { returnItems.push(item); }
  }
  return returnItems;
}

/**
 * 'commonItems' function
 *
 * Accepts any number of strings or arrays of string values,
 * and returns a single array containing only values present in all inputs.
 * 接受任何字符串或数组的字符串值，
 * 并返回仅包含所有输入中的值的单个数组。
 *
 * @param {...string|string[]} ...arrays -
 * @return {string[]} -
 */
export function commonItems(...arrays): string[] {
  let returnItems = null;
  for (let array of arrays) {
    if (isString(array)) { array = [array]; }
    returnItems = returnItems === null ? [ ...array ] :
      returnItems.filter(item => array.includes(item));
    if (!returnItems.length) { return []; }
  }
  return returnItems;
}

/**
 * 'fixTitle' function
 *
 *
 * @param {string} input -
 * @return {string} -
 */
export function fixTitle(name: string): string {
  return name && toTitleCase(name.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/_/g, ' '));
}

/**
 * 'toTitleCase' function
 *
 * Intelligently converts an input string to Title Case.
 *
 * Accepts an optional second parameter with a list of additional
 * words and abbreviations to force into a particular case.
 *
 * This function is built on prior work by John Gruber and David Gouch:
 * 
 * 智能地将输入字符串转换为标题实例。
 * 接受一个可选的第二个参数和一个附加的列表
 * 单词和缩略语以强迫进入特定的情况。
 * 这个函数建立在John Gruber和David Gouch的前期工作上：
 * http://daringfireball.net/2008/08/title_case_update
 * https://github.com/gouch/to-title-case
 *
 * @param {string} input -
 * @param {string|string[]} forceWords? -
 * @return {string} -
 */
export function toTitleCase(input: string, forceWords?: string|string[]): string {
  if (!isString(input)) { return input; }
  let forceArray: string[] = ['a', 'an', 'and', 'as', 'at', 'but', 'by', 'en',
   'for', 'if', 'in', 'nor', 'of', 'on', 'or', 'per', 'the', 'to', 'v', 'v.',
   'vs', 'vs.', 'via'];
  if (isString(forceWords)) { forceWords = (<string>forceWords).split('|'); }
  if (isArray(forceWords)) { forceArray = forceArray.concat(forceWords); }
  const forceArrayLower: string[] = forceArray.map(w => w.toLowerCase());
  const noInitialCase: boolean =
    input === input.toUpperCase() || input === input.toLowerCase();
  let prevLastChar = '';
  input = input.trim();
  return input.replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, (word, idx) => {
    if (!noInitialCase && word.slice(1).search(/[A-Z]|\../) !== -1) {
      return word;
    } else {
      let newWord: string;
      const forceWord: string =
        forceArray[forceArrayLower.indexOf(word.toLowerCase())];
      if (!forceWord) {
        if (noInitialCase) {
          if (word.slice(1).search(/\../) !== -1) {
            newWord = word.toLowerCase();
          } else {
            newWord = word[0].toUpperCase() + word.slice(1).toLowerCase();
          }
        } else {
          newWord = word[0].toUpperCase() + word.slice(1);
        }
      } else if (
        forceWord === forceWord.toLowerCase() && (
          idx === 0 || idx + word.length === input.length ||
          prevLastChar === ':' || input[idx - 1].search(/[^\s-]/) !== -1 ||
          (input[idx - 1] !== '-' && input[idx + word.length] === '-')
        )
      ) {
        newWord = forceWord[0].toUpperCase() + forceWord.slice(1);
      } else {
        newWord = forceWord;
      }
      prevLastChar = word.slice(-1);
      return newWord;
    }
  });
};
