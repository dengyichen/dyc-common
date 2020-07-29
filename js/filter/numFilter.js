export default {
    //数字千分位
    numThousandth(num) {
        if (!num) return num;
        return num.toString().replace(/\d+/, function (n) { // 先提取整数部分
            return n.replace(/(\d)(?=(\d{3})+$)/g, function ($1) { // 对整数部分添加分隔符
                return $1 + ",";
            });
        });
    },
    //数字保留N位小数，默认2位
    numToFixed2(num, digit = 2) {
        if (isNaN(+num)) return num;
        return (+num).toFixed(digit);
    },
}