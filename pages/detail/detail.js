// pages/detail/detail.js
import {network} from '../../utils/network.js'

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
    var id = options.id;

    that.setData({
      type: type,
      id: id
    })

    // 获取详情数据
    network.getItemDetail({
      type: type,
      id: id,
      
      success: function(item){

        // 设置类型，方便用 / 拼接
        var genres = item.genres;
        var genresText = genres.join(' / ');
        var actors = item.actors;
        if(actors.length > 3){
          actors = actors.slice(0, 3);
        }
        var actorNames = [];
        for(var i=0; i<3; i++){
          actorNames.push(actors[i].name);
        }
        var actorNamesText = actorNames.join(' / ');

        // 设置数据到data对象中
        that.setData({
          item: item,
          genresText: genresText,
          actorNamesText: actorNamesText
        });
      },
    });

    // 获取标签数据
    network.getItemTags({
      type: type,
      id: id,
      success: function(tags){
        that.setData({
          tags: tags
        })
      }
    })
   
    // 获取评论数据
    network.getItemComments({
      type: type,
      id: id,
      success: function(data){
        var commentData = data.interests;
        var totalComments = data.total;
        that.setData({
          commentData: commentData,
          totalComments: totalComments
        })
      }
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