//
//  Array Extend
//
//  Created by IT_IOS_MAN on 2022/11/18.
//  优秀的代码千篇一律，优雅的架构万里挑一
//  Copyright © 2020 IT_IOS_MAN. All rights reserved.
//

/**
 * 字符串 扩展工具类
 */
interface String {

  /**
   * 是否是电话号码
   */
  xq_isPhone() : boolean;

  /**
   * 是否是数字
   */
  xq_isNumber() : boolean;

}

String.prototype.xq_isPhone = function () : boolean {
  if (this.xq_isNull()) return false;

  const reg =/^0?1[3|4|5|6|7|8][0-9]\d{8}$/;
  return reg.test(this.toString());
}

String.prototype.xq_isNumber = function () : boolean {
  if (this.xq_isNull()) return false;

  try {
    return Number(this).toString() == this;
  } catch {
    return false;
  }
}