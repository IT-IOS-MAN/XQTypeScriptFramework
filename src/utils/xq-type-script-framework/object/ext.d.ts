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

    /**
     * 是否为空
     */
    xq_isNull(): boolean;

    /**
     * 是否不为空
     */
    xq_isNotNull(): boolean;
}

/**
* 类 扩展工具类
*/
interface Object {
    /**
     * 模拟深拷贝
     * @param obj 拷贝对象
     */
    xq_deepClone(obj: any): any;
}