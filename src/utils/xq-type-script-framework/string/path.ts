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

  // 获得纯文件名，带后缀
  xq_lastPathComponent() : string | undefined ; 

  // 获得文件路径，不带后缀
  xq_stringByDeletingPathExtension() : string | undefined ;

  // 获得文件后缀
  xq_pathExtension() : string | undefined ;
}

/**
 * 获得纯文件名，带后缀
 */
String.prototype.xq_lastPathComponent = function () : string | undefined {
  if (this.xq_isNull()) return undefined;

  if (this.indexOf("/") > 0) {
    return this.split('/').xq_lastElement();
  } else if (this.indexOf("\\") > 0) {
    return this.split('\\').xq_lastElement();
  } else {
    return this.toString();
  }
}

/**
 * 获得文件路径，不带后缀
 */
String.prototype.xq_stringByDeletingPathExtension = function () : string | undefined {
  if (this.xq_isNull()) return undefined;

  if (this.indexOf("/") > 0) {
    return this.substring(0, this.indexOf("/"))
  } else if (this.indexOf("\\") > 0) {
    return this.substring(0, this.indexOf("\\"))
  } else {
    return this.toString();
  }
}

/**
 * 获得文件路径，不带后缀
 */
String.prototype.xq_pathExtension = function () : string | undefined {
  if (this.xq_isNull()) return undefined;

  if (this.indexOf(".") > 0) {
    return this.split('.').xq_lastElement();
  } else {
    return this.toString();
  }
}