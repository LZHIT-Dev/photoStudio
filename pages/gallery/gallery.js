// pages/gallery/gallery.js
Page({
  buttonTap(){
    wx.showModal({
      confirmText: '立刻联系',
      title: '查看原图',
      content: '受限于微信小程序限制，若您需要高清原图，我们更推荐您直接联系我们的摄影师以获得高清原图。',
      success (res) {
        if (res.confirm) {
          console.log('用户点击确定')
          wx.navigateTo({
            url: '/pages/ChatCheck/chatcheck',
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showShareMenu({
      withShareTicket:true,
      menus:['shareAppMessage','shareTimeline']
      
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      // 分享的标题如果没有则自定义为小程序名称全写
      title: "欢迎造访鸣先生的摄影工坊",
      //分享之后的路径如果没有则自定义为首页可以用模板字符串语法加入变量
      path:`pages/gallery/gallery`,
      //分享图片的本地地址如果不写则为默认当前屏幕截图可以是网络地址
      // imageUrl:'/public/0cfd76ccdd6034da9d04a2d176871bd.jpg'
      imageUrl:'cloud://lmsy-0gb76yek10147265.6c6d-lmsy-0gb76yek10147265-1310910818/res/shareImg.jpg'
    }
  }
})