//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  },
  //事件处理函数
  toList: function() {
    wx.navigateTo({
      url: '../list/list'
    })
  }
})
