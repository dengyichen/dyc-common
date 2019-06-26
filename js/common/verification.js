export default {
  //判断正整数包含0
  positiveIntVer(num){
    return /^([1-9]\d*|[0]{1,1})$/.test(num);
  },
  //判断最少2个汉字
  Chinese2Ver(str){
    return /[\u4e00-\u9fa5]{2,}/.test(str);
  },
  //验证手机号
  mobileVer(mobile){
    return /^1[345789]\d{9}$/.test(mobile);
  },
}