/** 코드의 제목으로 사용될 문자열 */
const TITLE = "JSDoc 사용하기";

/**
 * 원주율
 * @const {number}
 */
const PI = "3.14";

/**
 * @param {number} x
 * @param {number} y
 * @returns {number} 두 수의 합
 */
const add = (x, y) => x + y;

/**
 * @typedef {Object} PersonObj 사람 객체
 * @property {string} name 이름
 * @property {number} age 나이
 * @property {boolean} married 기혼여부
 */

/**
 *
 * @param {string} name 이름
 * @param {number} age 나이
 * @param {boolean} married 기혼여부
 * @returns {PersonObj}
 */
function getPersonObj(name, age, married) {
  return { name, age, married };
}
