//用来管理用户进行的所有操作
var user = {
  //用户登录接口的操作方式
  //将功能提取过来之后需要区分哪部分是接口，哪部分是文档操作的
  login: function(options) {
    $.ajax({
      type: 'post',
      url: USER_LOGIN,
      data: options.data,
      success: options.callback
    })
  }
}