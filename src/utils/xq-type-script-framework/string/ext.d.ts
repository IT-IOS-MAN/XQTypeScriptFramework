//
//  Array Extend
//
//  Created by IT_IOS_MAN on 2022/11/18.
//  优秀的代码千篇一律，优雅的架构万里挑一
//  Copyright © 2020 IT_IOS_MAN. All rights reserved.
//

/// <reference path="../object/ext.d.ts" /> 


/**
* 字符串 扩展工具类 (基础工具类)
*/
interface String {
    /**
     * 字符串是否为空 null | []
     * @param obj 
     */
    xq_isEmpty(): boolean;

    /**
    * 字符串是否不为空 null | []
    * @param obj 
    */
    xq_isNotEmpty(): boolean;
}

/**
 *  字符串 扩展工具类 (唯一标识工具类)
 */
interface String extends Object {

    /**
     * 唯一标识
     */
    xq_GUID(): string;

}

/**
* 字符串 扩展工具类 (判断工具类)
*/
interface String extends Object {

    /**
     * 是否是电话号码
     */
    xq_isPhone(): boolean;

    /**
     * 是否是数字
     */
    xq_isNumber(): boolean;

}

/**
* 字符串 扩展工具类 (路径工具类)
*/
interface String {

    /** 
     * 获得纯文件名，带后缀
     */
    xq_lastPathComponent(): string | undefined;

    /**
     * 获得文件路径，不带后缀
     */
    xq_stringByDeletingPathExtension(): string | undefined;

    /**
     * 获得文件后缀
     */
    xq_pathExtension(): string | undefined;
}

/**
* 字符串 扩展工具类 (空格工具类)
*/
interface String {

    /**
     * 去掉多余空格
     */
    xq_removeSpace(): string | undefined;

    /**
     * 强转string(包含空字符串),并去掉多余空格
     */
    xq_removeSpaceWithEmpty(): string | undefined;

}




