/**
 *  扩展工具类
 */
interface String {

  // 唯一标识
  xq_GUID() : string; 
  
}

/**
 * guid
 */
String.prototype.xq_GUID = function () : string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = Math.random() * 16 | 0,
      v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  }).toUpperCase();
}

