//result.js
Page({
  data: {
    score:0,
    assessment:""
  },
  //事件处理函数
  onShow:function(){
    this.setData({
      score:98,
      assessment: "安全感强度普通孩子在生活中的能力感、独立性、对陌生人的接受程度是需要提升的。当孩子在生活中出现做事畏首畏尾、害羞、黏着大人、遇到小朋友欺负不敢反抗的情况，家长需要对孩子进行治在培养就解决问题的能力的引导，而不是对孩子进行批评等教育行为。"
    })
  },
  toList: function() {
    wx.navigateTo({
      url: '../index/index'
    })
  },
  shareResult:function(){

  },
  getQRcode: function () {
    
  }
})
