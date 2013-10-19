// moment.js language configuration
// language : Vietnamese
// author : Hanh Pho : https://github.com/guhelouis

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory(window.moment); // Browser global
    }
}(function (moment) {
    return moment.lang('vi', {
        months : "tháng một_tháng hai_tháng ba_tháng tư_tháng năm_tháng sáu_tháng bảy_tháng tám_tháng chín_tháng mười_tháng mười một_tháng mười hai".split("_"),
        monthsShort : "thg 1_thg 2_thg 3_thg 4_thg 5_thg 6_thg 7_thg 8_thg 9_thg 10_thg 11_thg 12".split("_"),
        weekdays : "Chủ nhật_Thứ hai_Thứ ba_Thứ tư_Thứ năm_Thứ sáu_Thứ bảy".split("_"),
        weekdaysShort : "CN_T2_T3_T4_T5_T6_T7".split("_"),
        longDateFormat : {
            LT : "HH:mm",
            L : "DD/MM/YYYY",
            LL : "DD-MM-YYYY",
            LLL : "LT Ngày D MMMM năm YYYY",
            LLLL : " LT dddd, ngày D MMMM năm YYYY"
        },
        calendar : {
            sameDay : 'LT [hôm nay]',
            nextDay : 'LT [ngày mai]',
            nextWeek : 'LT dddd tuần sau',
            lastDay : 'LT [hôm qua]',
            lastWeek : 'LT dddd tuần trước',
            sameElse : 'L'
        },
        relativeTime : {
            future : "%s tới",
            past : "%s trước",
            s : "vài giây",
            m : "1 phút",
            mm : "%d phút",
            h : "1 giờ",
            hh : "%d giờ",
            d : "1 ngày",
            dd : "%d ngày",
            M : "1 tháng",
            MM : "%d months",
            y : "1 năm",
            yy : "%d năm"
        },
        ordinal : function (number) {
            return number === 1 ? "đầu tiên" : "thứ " + number;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });
}));
