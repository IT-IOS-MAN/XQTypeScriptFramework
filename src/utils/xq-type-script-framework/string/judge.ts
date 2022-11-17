/**
 * 字符串 扩展工具类
 */
interface String {

  // 是否是电话号码
  xq_isPhone() : boolean;

  // 是否是数字
  xq_isNumber() : boolean;

}

/**
 * 是否是电话号码
 */
String.prototype.xq_isPhone = function () : boolean {
  if (this.xq_isNull()) return false;

  const reg =/^0?1[3|4|5|6|7|8][0-9]\d{8}$/;
  return reg.test(this.toString());
}

/**
 * 是否是数字
 */
String.prototype.xq_isNumber = function () : boolean {
  if (this.xq_isNull()) return false;

  try {
    return Number(this).toString() == this;
  } catch {
    return false;
  }
}