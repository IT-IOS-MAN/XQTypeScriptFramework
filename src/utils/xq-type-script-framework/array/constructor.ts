//
//  Array Extend
//
//  Created by IT_IOS_MAN on 2022/11/18.
//  优秀的代码千篇一律，优雅的架构万里挑一
//  Copyright © 2020 IT_IOS_MAN. All rights reserved.
//

/**
 * 数组扩展工具类
 */
interface Array< T > {

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
  xq_addElement(obj: T, index: number): void;

  /**
   * 添加一组元素
   * @param objs  元素
   */ 
  xq_addElements(objs: T[], index: number): void;

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
  xq_removeElement(obj: T) : void;

  /**
   * 获取元素下标
   * @param obj 元素
   */
  xq_indexOfElement(obj: T): number;

  /**
   * 删除指定下标元素
   * @param index 下标
   */
  xq_removeElementAtIndex(index: number) : void;

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

Array.prototype.xq_firstElement = function<T extends Array<T>> () : T | undefined {
  if (this.xq_isNull()) return undefined;
  return this[0];
}

Array.prototype.xq_lastElement = function<T extends Array<T>> () : T | undefined {
  if (this.xq_isNull()) return undefined;
  return this[this.length - 1];
}

Array.prototype.xq_addElement = function<T extends Array<T>> (obj: T ) : void {
  if (this.xq_isNull() || obj.xq_isNull()) return;
  this.push(obj);
}

Array.prototype.xq_addElements = function<T extends Array<T>> (objs: T[]) : void {
  if (this.xq_isNull() || objs.xq_isNull()) return;
  this.push(objs);
}

Array.prototype.xq_insertElement = function<T extends Array<T>> (obj: T, index : number) : void{
  if (this.xq_isNull() || obj.xq_isNull()) return;
  this.splice(index, 0, obj);
}

Array.prototype.xq_insertElements = function<T extends Array<T>> (objs: T[], index : number) : void {
  if (this.xq_isNull() || objs.xq_isNull()) return;
  this.splice(index, 0, objs);
}

Array.prototype.xq_removeElement = function<T extends Array<T>> (obj : T) : void {
  if (this.xq_isNull() || obj.xq_isNull()) return;
  this.splice(this.xq_indexOfElement(obj), 1);
}

Array.prototype.xq_removeElementAtIndex = function (index : number) : void {
  if (this.xq_isNull()) return;
  this.splice(index, 1);
}

Array.prototype.xq_indexOfElement = function<T extends Array<T>> (obj: T) : number {
  if (this.xq_isNull() || obj.xq_isNull()) return -1;
  return this.indexOf(obj);
}

Array.prototype.xq_containsObject = function<T extends Array<T>> (obj: T): boolean {
  if (this.xq_isNull() || obj.xq_isNull()) return false;
  return this.indexOf(obj) >= 0;
}

Array.prototype.xq_clean = function() : void {
  if (this.xq_isNull()) return;
  this.length = 0;
}