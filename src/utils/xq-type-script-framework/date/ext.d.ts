//
//  Array Extend
//
//  Created by IT_IOS_MAN on 2022/11/18.
//  优秀的代码千篇一律，优雅的架构万里挑一
//  Copyright © 2020 IT_IOS_MAN. All rights reserved.
//


/**
 * 日期扩展工具类
 */
interface Date {
    /**
     * 时间格式化
     * @param fmt 时间格式化格式
     */
    xq_format(fmt: string): string;
}


/**
 * 日期扩展工具类
 */
interface Date {

    /**
     * 时间格式化 yyyy-MM-dd HH:mm:ss
     */
    xq_format_yyyy_MM_dd_HH_mm_ss(): string;

    /**
     * 时间格式化 yyyy-MM-dd
     */
    xq_format_yyyy_MM_dd(): string;

    /**
     * 时间格式化 MM-dd HH:mm
     */
    xq_format_MM_dd_HH_mm(): string;

    /**
     * 时间格式化 HH:mm:ss
     */
    xq_format_HH_mm_ss(): string;

    /**
     * 时间格式化 HH:mm
     */
    xq_format_HH_mm(): string;

}