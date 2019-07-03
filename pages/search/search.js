// pages/search/search.js
import { network } from '../../utils/network.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  // 接收searchbar组件传递的搜索输入框内相关的事件数据
  onSearchInputEvent: function(event){
    var that = this;
    var value = event.detail.value;
    if(!value){
      that.setData({
        subjects: null
      })
      return;
    }else{
      network.getSearch({
        value: value,
        success: function (subjects) {
          if (subjects) {
            that.setData({
              subjects: subjects
            })
          }
        }
      })
    }
  },

  // 跳转到详情页的事件
  onItemTapEvent: function(event){
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../detail/detail?type=movie&id=' + id
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

  }
})