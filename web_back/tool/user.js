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
  },
  //logout管理用户退出的功能
  logout: function(options) {
    $.ajax({
      type: 'post',
      url: USER_LOGOUT,
      success: options.callback
    })
  },

  getInfo: function(options) {
    $.ajax({
      url: USER_INFO,
      success: options.callback
    })
  },

  //获取信息的接口
  getAllInfo: function(options) {
    $.ajax({
      url: USER_INFO_GET,
      success: options.callback
    })
  },


  //编辑信息的接口
  edit: function(options) {
    $.ajax({
      type: 'post',
      url: USER_INFO_EDIT,
      data: options.data,
      contentType: false,
      processData: false,
      success: options.callback
    })
  },


}