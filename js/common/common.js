export default {
    //获取当前日期
    getCurDate(days) {
        let curDateTime = new Date().getTime() + 1000 * 60 * 60 * 24 * (+days || 0); // days 前(-)或后(+)的天数
        let curDate = new Date(curDateTime);
        let year = curDate.getFullYear();
        let month = curDate.getMonth() + 1;
        let day = curDate.getDate();
        return `${year}-${month < 10 ? "0" + month : month}-${day < 10 ? "0" + day : day}`
    },
    //对象清除空格
    objClearSpace(parameter, exclude) {
        for (var key in parameter) {
            if (!key.includes(exclude)) {
                parameter[key] = `${parameter[key]} `.trim();
            }
        }
        return parameter;
    },
    //获取url参数
    getUrlParam(param) {
        let reg = new RegExp("(^|&)" + param + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        let r = window.location.search.substr(1).match(reg); //匹配目标参数
        if (r != null) return unescape(r[2]); return ""; //返回参数值
    },
    //下载elx
    downloadXls(data, name) {
        if (data) {
            if ('msSaveOrOpenBlob' in window.navigator) {
                // window.URL.createObjectURL Blob URL无法在Microsoft IE和Edge中打开 
                window.navigator.msSaveOrOpenBlob(new Blob([data]), name);
            } else {
                let url = window.URL.createObjectURL(new Blob([data], { type: 'application/vnd.ms-excel' }))
                let link = document.createElement('a')
                link.style.display = 'none'
                link.href = url
                link.setAttribute('download', name)
                document.body.appendChild(link)
                link.click()
            }
        }
    }
}