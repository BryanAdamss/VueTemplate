/**
 * @author ghchu
 * @description 常用类型判断
 */

/**
 * 判断是否为空（null、'',[],{},0）
 *
 * @export
 * @param {Any} obj 需要判断的对象
 * @returns {Boolean} 是否为空
 */
export function isEmpty(obj) {
  return (
    [Object, Array].includes((obj || {}).constructor) &&
    !Object.entries(obj || {}).length
  )
}

/**
 * 判断是否是数组
 * @param {Any} arr 需要判断的对象
 */
export function isArray(arr) {
  return Array.isArray
    ? Array.isArray(arr)
    : Object.prototype.toString.call(arr) === '[object Array]'
}

/**
 * 判断是否为函数
 * @param {Any} fn 需要判断的对象
 */
export function isFunction(fn) {
  return typeof fn === 'function'
}
