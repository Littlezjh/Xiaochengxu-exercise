// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options.id)
    this.setData({
      mid: options.id
    })
    var that = this
    wx.request({
        url: 'https://ticket-api-m.mtime.cn/movie/detail.api?locationId=290&movieId=' + options.id,
        header: {
          "Content-Type": "json",
        },
        success: function(res) {
          console.log(res)
          if (res.statusCode == 200) {
            that.setData({
              movie: res.data.data.basic
            })
            wx.setNavigationBarTitle({
              title: res.data.data.basic.name,
            })
            wx.hideNavigationBarLoading()
          }
        },
      }),
      wx.showNavigationBarLoading()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    return{
      title:"向你推荐"+this.data.movie.name,
    }
  }
})