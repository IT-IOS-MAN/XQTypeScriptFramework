/**
 * 类 扩展工具类
 */
// eslint-disable-next-line
interface Object {

  // 是否为空
  xq_isNull() : boolean;

  // 是否不为空
  xq_isNotNull() : boolean;
}


/**
 * 对象是否为空
 * @param obj 
 */
Object.prototype.xq_isNull = function () : boolean {
  if (typeof this == 'boolean') {
    return false;
  }
  if (typeof this == 'number') {
    return false;
  }
  if (this instanceof Array) {
    if (this.length == 0) return true;
  } else if (this instanceof Object) {
    if (JSON.stringify(this) === '{}') return true;
  } else {
    if (this == 'null' || this == null || this == 'undefined' || this == undefined || this == '') return true;
    return false;
  }
  return false;

}

/**
 * 对象是否为空
 * @param obj 
 */
Object.prototype.xq_isNotNull = function() : boolean {
  return !this.xq_isNull();
}
