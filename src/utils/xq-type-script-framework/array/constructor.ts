//
//  Array Extend
//
//  Created by IT_IOS_MAN on 2022/11/18.
//  优秀的代码千篇一律，优雅的架构万里挑一
//  Copyright © 2020 IT_IOS_MAN. All rights reserved.
//

Array.prototype.xq_firstElement = function<T>() : T | undefined {
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