
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