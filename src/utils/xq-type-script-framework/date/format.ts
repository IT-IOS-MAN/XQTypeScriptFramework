
/**
 * 日期扩展工具类
 */
interface Date {

  // 时间格式化 yyyy-MM-dd HH:mm:ss
  xq_format_yyyy_MM_dd_HH_mm_ss() : string;

  // 时间格式化 yyyy-MM-dd
  xq_format_yyyy_MM_dd() : string;

  // 时间格式化 MM-dd HH:mm
  xq_format_MM_dd_HH_mm() : string;

  // 时间格式化 HH:mm:ss
  xq_format_HH_mm_ss() : string;

  // 时间格式化 HH:mm
  xq_format_HH_mm() : string;

  // 时间格式化
  xq_format(fmt : string) : string;
}

/**
 * 时间格式化 yyyy-MM-dd HH:mm:ss
 */
Date.prototype.xq_format_yyyy_MM_dd_HH_mm_ss = function () : string {
  return this.xq_format("yyyy-MM-dd HH:mm:ss");
}

/**
 * 时间格式化 yyyy-MM-dd
 */
Date.prototype.xq_format_yyyy_MM_dd = function () : string {
  return this.xq_format("yyyy-MM-dd");
}

/**
 * 时间格式化 yyyy-MM-dd HH:mm:ss
 */
Date.prototype.xq_format_MM_dd_HH_mm = function () : string {
  return this.xq_format("MM-dd HH:mm");
}

/**
 * 时间格式化 HH:mm:ss
 */
Date.prototype.xq_format_HH_mm_ss = function () : string {
  return this.xq_format("HH:mm:ss");
}

/**
 * 时间格式化 HH:mm:ss
 */
Date.prototype.xq_format_HH_mm = function () : string {
  return this.xq_format("HH:mm");
}

/**
 * 时间格式化
 * @param fmt 格式化文本
 */
Date.prototype.xq_format = function(fmt: string) : string { //author: meizz   

  if (this.getFullYear() < 10) {
    return '-'
  }
  const o = {
    "M+": this.getMonth() + 1,                 //月份   
    "d+": this.getDate(),                    //日   
    "h+": this.getHours(),                   //小时   
    "m+": this.getMinutes(),                 //分   
    "s+": this.getSeconds(),                 //秒   
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度   
    "S": this.getMilliseconds()             //毫秒   
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (const k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      //@ts-ignore
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substring(("" + o[k]).length)));
  return fmt;
}