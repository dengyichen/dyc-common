export default {
  //验证正整数包含0
  positiveIntVer(num){
    return /^([1-9]\d*|[0]{1,1})$/.test(num);
  },
  //验证最少2个汉字
  Chinese2Ver(str){
    return /[\u4e00-\u9fa5]{2,}/.test(str);
  },
  //验证手机号
  mobileVer(mobile){
    return /^1[345789]\d{9}$/.test(mobile);
  },
  //验证银行卡号
  bankCardVer(bnkCard){
    return /^([1-9]{1})(\d{14}|\d{18})$/.test(bnkCard);
  },
  //验证正浮点数
  keepDecimalVer(num,digit = 2){
    let reg = new RegExp(`^\\d+(\\.\\d{1,${digit}})?$`);
    return reg.test(num);
  }
}