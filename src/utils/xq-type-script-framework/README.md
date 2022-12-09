### 说明

XQTypeScriptFramework 隶属于 XQFramework 下 JS 基础性框架部分

XQFramework 励志将开发将常用开发语音 基础性框架 统一汇总，为全站开发使用到的基础语法进行统一，拜托不同语言间基础语法不一致的痛点，让全站开发门更加的便捷，若XQFramework有不足之处，诚心聆听大佬们的宝贵意见对 XQFramework 进行升级改造

### 安装
```
npm install xq-type-script-framework
```

### 使用
全部引入
一般在入口文件中：
```
import "xq-type-script-framework"
```
### 扩展汇总
---
- **Array**
- **Date**
- **Object**
- **String**
---

### 扩展部分使用示例
注：整个 xq-type-script-framework 处理 NULL 指针，开发过程中无需为 NULL 指针做处理
```
// 判断是否为空
["iOS", "Android"].xq_isNull(); // false
// 判断是否为空
"XQFramework".xq_isNull(); // false
// 获取第一个对象
["iOS", "Android"].xq_firstElement; // "iOS"
// 获得纯文件名，带后缀
"https://avatars.githubusercontent.com/u/22712251.png".xq_lastPathComponent(); // 22712251.png
```

### 扩展明细
- **Array 扩展方法**
```
/**
 * 数组扩展工具类
 */
interface Array< T > {

  /**
    * 获取第一个元素
    */
  readonly xq_firstElement: T | undefined;

  /**
    * 获取最后一个元素
    */
  readonly xq_lastElement: T | undefined;

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

  /**
    * 数组是否为空 null | []
    * @param obj 
    */
    xq_isEmpty(): boolean;

    /**
    * 数组是否不为空 null | []
    * @param obj 
    */
    xq_isNotEmpty(): boolean;
}
```

- **日期扩展方法**
```
/**
 * Date 扩展工具类
 */
interface Date {

  /**
   * 时间格式化 yyyy-MM-dd HH:mm:ss
   */
  xq_format_yyyy_MM_dd_HH_mm_ss() : string;

  /**
   * 时间格式化 yyyy-MM-dd
   */
  xq_format_yyyy_MM_dd() : string;

  /**
   * 时间格式化 MM-dd HH:mm
   */
  xq_format_MM_dd_HH_mm() : string;

  /**
   * 时间格式化 HH:mm:ss
   */
  xq_format_HH_mm_ss() : string;

  /**
   * 时间格式化 HH:mm
   */
  xq_format_HH_mm() : string;

  /**
   * 时间格式化
   * @param fmt 时间格式化格式
   */
  xq_format(fmt : string) : string;
}
```

- **Object扩展方法**
```
/**
 * 类 扩展工具类
 */
interface Object {

  // 是否为空
  xq_isNull() : boolean;

  // 是否不为空
  xq_isNotNull() : boolean;
}
```

```
/**
 * 类 扩展工具类
 */
interface Object {
  /**
   * 模拟深拷贝
   * @param obj 拷贝对象
   */
  xq_deepClone(obj: any) : any;
}
```
- String 扩展方法

```
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
```

```
/**
 *  扩展工具类
 */
interface String {

  /**
   * 唯一标识
   */
  xq_GUID() : string;

}
```
```
/**
 *  扩展工具类
 */
interface String {

  /**
   * 是否是电话号码
   */
  xq_isPhone() : boolean;

  /**
   * 是否是数字
   */
  xq_isNumber() : boolean;

}
```
```
/**
 * 字符串 扩展工具类
 */
interface String {

  /** 
   * 获得纯文件名，带后缀
   */
  xq_lastPathComponent() : string | undefined ; 

  /**
   * 获得文件路径，不带后缀
   */
  xq_stringByDeletingPathExtension() : string | undefined ;

  /**
   * 获得文件后缀
   */
  xq_pathExtension() : string | undefined ;
}
```
```
/**
 * 字符串 扩展工具类
 */
interface String {

  /**
   * 去掉多余空格
   */
  xq_removeSpace() : string | undefined ; 

  /**
   * 强转string(包含空字符串),并去掉多余空格
   */
  xq_removeSpaceWithEmpty() : string | undefined ;

}
```