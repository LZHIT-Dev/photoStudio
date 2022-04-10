// pages/aboutUs/map/map.js
const RADIUS = 4;
const INIT_MARKER = {
	callout: {
		content: '鸣先生的摄影工坊',
		padding: 10,
		borderRadius: 2,
		display: 'ALWAYS'
	},
	latitude: 24.365068,
	longitude: 109.530914,
	iconPath: './imgs/Marker1_Activated@3x.png',
	width: '34px',
	height: '34px',
	rotate: 0,
	alpha: 1
};
const INIT_CALLOUT = {
	content: '鸣先生的摄影工坊',
	padding: 12,
	display: 'ALWAYS',
	fontSize: 14,
	textAlign: 'center',
	borderRadius: RADIUS,
	borderWidth: 2,
	bgColor: '#ffffff'
};
const INIT_CALLOUT_MARKER = {
	callout: {
		...INIT_CALLOUT
	},
	latitude: 24.365068,
	longitude: 109.530914,
};
Page({
  navTo: function () {  
    wx.openLocation({
      latitude: 24.365068,	//维度
      longitude: 109.530914, //经度
      name: "目的地",	//目的地定位名称
      scale: 15.7,	//缩放比例
      address: "鸣先生的摄影工坊"	//导航详细地址
    })
  },

  /**
   * 页面的初始数据
   */
  data: {
    longitude: 109.530914,
    latitude: 24.365068,
    markers:[{...INIT_MARKER}],
calloutMarkers: [{
  ...INIT_CALLOUT_MARKER
}],
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.mapCtx = wx.createMapContext('myMap')
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

  }
})