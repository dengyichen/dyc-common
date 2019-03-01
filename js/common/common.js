export default {
  //获取当前日期
  getCurDate(){
    let curDate = new Date();
    let year = curDate.getFullYear();
    let month = curDate.getMonth() + 1;
    let day = curDate.getDate();     
    return `${year}-${month < 10 ? "0" + month : month}-${day < 10 ? "0" + day : day}`
  },
  //下载elx
  downloadXls (data, name) {
    if (data) {
      if('msSaveOrOpenBlob' in window.navigator){
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