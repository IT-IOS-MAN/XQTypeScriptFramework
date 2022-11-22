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
interface String extends Object {

  /**
   * 去掉多余空格
   */
  xq_removeSpace() : string | undefined ; 

  /**
   * 强转string(包含空字符串),并去掉多余空格
   */
  xq_removeSpaceWithEmpty() : string | undefined ;

}

String.prototype.xq_removeSpace = function () : string | undefined {
  if (this.xq_isNull()) return undefined;

  return this.replace(" ", "")
}

String.prototype.xq_removeSpaceWithEmpty = function () : string | undefined {
  if (this.xq_isNull()) return undefined;

  return this.toString().replace(" ", "")
}