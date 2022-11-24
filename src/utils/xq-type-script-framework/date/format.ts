//
//  Array Extend
//
//  Created by IT_IOS_MAN on 2022/11/18.
//  优秀的代码千篇一律，优雅的架构万里挑一
//  Copyright © 2020 IT_IOS_MAN. All rights reserved.
//

Date.prototype.xq_format_yyyy_MM_dd_HH_mm_ss = function () : string {
  return this.xq_format("yyyy-MM-dd HH:mm:ss");
}

Date.prototype.xq_format_yyyy_MM_dd = function () : string {
  return this.xq_format("yyyy-MM-dd");
}

Date.prototype.xq_format_MM_dd_HH_mm = function () : string {
  return this.xq_format("MM-dd HH:mm");
}

Date.prototype.xq_format_HH_mm_ss = function () : string {
  return this.xq_format("HH:mm:ss");
}

Date.prototype.xq_format_HH_mm = function () : string {
  return this.xq_format("HH:mm");
}