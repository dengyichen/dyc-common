export default {
    //验证正整数包含0
    positiveIntVer(num, start = 1) {
        let reg = new RegExp(`^([${start}-9]\\d*|[0]{1,1})$`);
        return reg.test(num);
    },
    //验证最少2个汉字
    Chinese2Ver(str) {
        return /[\u4e00-\u9fa5]{2,}/.test(str);
    },
    //验证手机号
    mobileVer(mobile) {
        return /^1[345789]\d{9}$/.test(mobile);
    },
    //验证银行卡号
    bankCardVer(bnkCard) {
        return /^(\d{16}|\d{17}|\d{19})$/.test(bnkCard);
    },
    //验证正浮点数
    keepDecimalVer(num, digit = 2) {
        let reg = new RegExp(`^\\d+(\\.\\d{1,${digit}})?$`);
        return reg.test(num);
    },
    //验证只包含字母和数字
    letterNumberVer(str) {
        return /^[a-zA-Z0-9]+$/.test(str);
    }
}