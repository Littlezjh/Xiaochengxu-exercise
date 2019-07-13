// pages/weekly/weekly.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    thisWeekMovie: {
      name: "教父",
      comment: "最精彩的剧本，最真实的黑帮电影",
      imagePath: "/Images/aaa.jpg",
      isHighlyRecommended: true,
      id:77,
    },
    weeklyMovieList: [{
        name: "泰坦尼克号",
        comment: "失去的才是永恒",
        imagePath: "/Images/aaa.jpg",
        isHighlyRecommended: false,
         id: 11925,
      },
      {
        name: "这个杀手不太冷",
        comment: "小萝莉U与怪蜀黍纯真灿烂的爱情故事",
        imagePath: "/Images/aaa.jpg",
        isHighlyRecommended: false,
        id:12599,
      },
      {
        name: "教父",
        comment: "最精彩的剧本，最真实的黑帮电影",
        imagePath: "/Images/aaa.jpg",
        isHighlyRecommended: true,
        id:10968,
      }
    ],
    count: 0,
    score: 59,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      currentIndex:this.data.weeklyMovieList.length-1
    })
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
    this.setData({
      currentIndex: this.data.currentIndex - 1
    })
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

  },

  f0:function(event){
    this.setData({
      count:this.data.count+1,
      currentIndex:this.data.weeklyMovieList.length-1
    })
  },

  f1:function(event){
    var movieID=  event.currentTarget.dataset.movieId;
    wx.navigateTo({
      url: '/pages/detail/detail?id='+movieID,
    })
  }

  
})