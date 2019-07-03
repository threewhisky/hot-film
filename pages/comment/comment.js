// pages/comment/comment.js
import { network } from '../../utils/network.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    start: 0,
    count: 20
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var type = options.type;
    var title = options.title;
    var id = options.id;
    that.setData(options);

    // 获取评论数据
    that.getComments(0);

    // 设置评论页的顶部标题
    wx.setNavigationBarTitle({
      title: "《" + title + '》的评价'
    })
  },

  // 获取评论数据
  getComments: function(start){
    var that = this;
    var type = that.data.type;
    var id = that.data.id;
    network.getItemComments({
      type: type,
      id: id,
      start: start,
      count: 20,
      success: function (data) {
        var commentData = data.interests;
        var totalComments = data.total;
        that.setData({
          commentData: commentData,
          totalComments: totalComments,
          start: start
        })
        wx.pageScrollTo({
          scrollTop: 0,
        })
      }
    })
  },

  // 点击 上一页 按钮触发的事件
  preBtn: function(event){
    var that = this;
    var oldStart = that.data.start;
    var count = that.data.count;
    var start = oldStart - count;
    if(start >= 0){
      that.getComments(start);
    }
  },

  // 点击 下一页 按钮触发的事件
  nextBtn: function(event){
    var that = this;
    var oldStart = that.data.start;
    var count = that.data.count;
    var start = oldStart + count;
    that.getComments(start);
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

  }
})