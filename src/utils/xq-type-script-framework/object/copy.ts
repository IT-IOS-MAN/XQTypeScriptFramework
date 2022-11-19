//
//  Array Extend
//
//  Created by IT_IOS_MAN on 2022/11/18.
//  优秀的代码千篇一律，优雅的架构万里挑一
//  Copyright © 2020 IT_IOS_MAN. All rights reserved.
//

/**
 * 类 扩展工具类
 */
interface Object {
  // 模拟深拷贝
  xq_deepClone(obj: any) : any;
}

/*
* 模拟深拷贝
*/
Object.prototype.xq_deepClone = function(obj: any) : any {
  const _obj = JSON.stringify(obj);
  const objClone = JSON.parse(_obj);
  return objClone;
}