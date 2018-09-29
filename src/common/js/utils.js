// utils.js用来定义通用的js操作函数
/**
 * 用来获取一个区间的随机整数
 * @param min
 * @param max
 * @returns {number}
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

/**
 * 随机打乱一个数组
 * @param arr
 * @returns {*}
 */
export function shuffle(arr) {
  let _arr = arr.slice()
  for (let i = 0; i < _arr.length; i++) {
    let j = getRandomInt(0, i)
    let t = _arr[i]
    _arr[i] = _arr[j]
    _arr[j] = t
  }
  return _arr
}

/**
 * 去抖函数
 * 连续触发某一事件时，只在最后一次事件触发时的delay时间后才真正执行处理函数
 * 场景：搜索建议（停止输入后再触发请求）
 * @param func
 * @param delay
 * @returns {Function}
 */
export function debounce(func, delay) {
  let timer
  delay = delay || 500
  return function(...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

/**
 * 节流函数
 * 连续触发某一事件时，会自动间隔interval时间去执行一次处理函数
 * interval时间内重复触发的事件会被忽略
 * 节流会稀释函数的执行频率
 * 场景：resize、scroll时并不需要如此密集的事件触发频率
 * @param func
 * @param interval
 * @returns {Function}
 */
export function throttle(fn, interval) {
  var _self = fn, //保存需要被延迟的函数
    firstTime = true, // 是否首次调用
    intervalTime = interval || 500, // 间隔调用时间，默认500毫秒
    timer // 定时器
  return function() {
    var args = arguments,
      _me = this
    if (firstTime) {
      // 如果第一次，则无需延迟，直接调用
      _self.apply(_me, args)
      return (firstTime = false)
    }
    if (timer) {
      // 如果定时器存在，说明前一次执行还没有完成
      return false
    }
    timer = setTimeout(function() {
      // 延迟intervalTime后执行
      clearTimeout(timer)
      timer = null
      _self.apply(_me, args)
    }, intervalTime)
  }
}

/**
 * 将一个数组按size拆分成多个数组的块，然后把这些块组成新的数组
 * @author cgh
 * @time   2018-04-09
 * @param  {[type]}   array [description]
 * @param  {[type]}   size  [description]
 * @return {[type]}         [返回一个新数组]
 * @example
 *
 * chunk(['a', 'b', 'c', 'd'], 2);
 * // => [['a', 'b'], ['c', 'd']]
 *
 * chunk(['a', 'b', 'c', 'd'], 3);
 * // => [['a', 'b', 'c'], ['d']]
 */
export function chunk(array, size) {
  let length = array.length ? array.length : 0
  if (!length || !size) {
    return []
  }
  let index = 0
  let resIndex = 0
  let result = new Array(Math.ceil(length / size))

  while (index < length) {
    result[resIndex++] = array.slice(index, (index += size))
  }
  return result
}

/**
 * dateFormat unix时间戳格式化
 */
export function dateFormat(timestamp, format = 'yyyy-MM-dd hh:mm:ss') {
  timestamp = timestamp.length === 13 ? timestamp : timestamp * 1000
  let date = new Date(timestamp)
  let args = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  if (/(y+)/.test(format)) {
    format = format.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length)
    )
  }
  for (var i in args) {
    let n = args[i]
    if (new RegExp('(' + i + ')').test(format)) {
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? n : ('00' + n).substr(('' + n).length)
      )
    }
  }
  return format
}

/**
 * 判断是否为类数组
 * @param {*} collection
 */
export function isArrayLike(collection) {
  const MAX_ARRAY_INDEX = Math.pow(2, 53) - 1
  // 返回参数 collection 的 length 属性值
  let length = collection.length
  return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX
}

/**
 * 判断数组或对象是否为空
 * @param {*} obj
 */
export function isEmpty(obj) {
  if (obj == null) return true
  if (Array.isArray(obj)) return obj.length === 0
  if (Object.prototype.toString.call(obj) === '[object Object]') {
    return Object.keys(obj).length === 0
  }
  return false
}
