//
//  Array Extend
//
//  Created by IT_IOS_MAN on 2022/11/18.
//  优秀的代码千篇一律，优雅的架构万里挑一
//  Copyright © 2020 IT_IOS_MAN. All rights reserved.
//

/// <reference path="./object/ext.d.ts" /> 

/**
 * 数组扩展工具类
 */
interface Array<T> extends Object {

    /**
     * 获取第一个元素
     */
    xq_firstElement(): T | undefined;

    /**
     * 获取最后一个元素
     */
    xq_lastElement(): T | undefined;

    /**
     * 添加一个元素
     * @param obj  元素
     */
    xq_addElement(obj: T): void;

    /**
     * 添加一组元素
     * @param objs  元素
     */
    xq_addElements(objs: T[]): void;

    /**
     * 插入一个元素
     * @param obj  元素
     * @param index  添加元素的位置下标 默认数组的尾部
     */
    xq_insertElement(obj: T, index: number): void;

    /**
     * 插入一组元素
     * @param objs  元素
     * @param index  添加元素的位置下标 默认数组的尾部
     */
    xq_insertElements(objs: T[], index: number): void;

    /**
     * 删除指定元素
     * @param obj 元素
     */
    xq_removeElement(obj: T): void;

    /**
     * 获取元素下标
     * @param obj 元素
     */
    xq_indexOfElement(obj: T): number;

    /**
     * 删除指定下标元素
     * @param index 下标
     */
    xq_removeElementAtIndex(index: number): void;

    /**
     * 数组是否包含某个元素
     * @param obj 
     */
    xq_containsObject(obj: T): boolean;

    /**
     * 清除数组
     */
    xq_clean(): void;
} 