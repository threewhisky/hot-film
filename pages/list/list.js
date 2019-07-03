// pages/list/list.js
import {network} from "../../utils/network.js";

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
    var that = this;
    var type = options.type;
    that.setData({
      type: type
    });
    var title = '';
    wx.showLoading({
      title: '正在加载中',
    })
    if( type === 'movie') {
      // 获取电影数据渲染列表页面
      network.getMovieList({
        success: function (items) {
          that.setData({
            items: items
          });
          wx.hideLoading();
        },
        count: 1000
      });
      title = '电影';
    }else if( type === 'tv') {
      // 获取电视剧数据渲染列表页面
      network.getTvList({
        success: function (items) {
          that.setData({
            items: items
          });
          wx.hideLoading();
        },
        count: 1000
      })
      title = '电视剧';
    }else{
      // 获取综艺数据渲染列表页面
      network.getShowList({
        success: function (items) {
          that.setData({
            items: items
          });
          wx.hideLoading();
        },
        count: 1000
      })
      title = '综艺';
    }

    // 设置列表页的顶部标题
    wx.setNavigationBarTitle({
      title: title,
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