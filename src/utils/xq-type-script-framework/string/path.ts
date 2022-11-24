//
//  Array Extend
//
//  Created by IT_IOS_MAN on 2022/11/18.
//  优秀的代码千篇一律，优雅的架构万里挑一
//  Copyright © 2020 IT_IOS_MAN. All rights reserved.
//

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

String.prototype.xq_pathExtension = function () : string | undefined {
  if (this.xq_isNull()) return undefined;

  if (this.indexOf(".") > 0) {
    return this.split('.').xq_lastElement();
  } else {
    return this.toString();
  }
}