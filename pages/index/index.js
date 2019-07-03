import {network} from "../../utils/network.js";


//获取应用实例
const app = getApp()

Page({
  data: {
  },

  // 生命周期函数，监听页面加载
  onLoad: function (options) {
    var that = this;

    //调用请求电影数据
    network.getMovieList({
      success: function(movies){
        that.setData({
          movies: movies
        })
      }
    });

    //调用请求电视剧数据
    network.getTvList({
      success: function (tvs) {
        that.setData({
          tvs: tvs
        })
      }
    });
    
    //调用请求综艺数据
    network.getShowList({
      success: function (shows) {
        that.setData({
          shows: shows
        })
      }
    });
    
  }
})
