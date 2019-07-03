import { globalUrls } from 'urls.js'

const network = {

  // 请求电影数据
  getMovieList: function (params) {
    params.type = 'movie';
    this.getItemList(params);
  },

  // 请求电视剧数据
  getTvList: function (params) {
    params.type = 'tv';
    this.getItemList(params);
  },

  // 请求综艺数据
  getShowList: function (params) {
    params.type = 'show';
    this.getItemList(params);
  },

  // 请求数据
  getItemList: function (params) {
    var type = params.type;
    var url = '';
    if (type === 'movie') {
      url = globalUrls.movieList;
    } else if (type === 'tv') {
      url = globalUrls.tvList;
    } else {
      url = globalUrls.showList;
    }
    var count = params.count ? params.count : 7;

    wx.request({
      url: url,
      data: {
        count: count
      },
      success: function (res) {
        var items = res.data.subject_collection_items;
        var itemscount = items.length;
        var left = itemscount%3;
        if (left == 2) {
          items.push(null);
        }
        if (params && params.success) {
          params.success(items);
        }

      }
      
    })
  },


  // 请求详情页数据
  getItemDetail: function(params){
    var type = params.type;
    var id = params.id;
    var url = '';
    if ( type === 'movie' ){
      url = globalUrls.movieDetail + id;
    }else if( type === 'tv' ){
      url = globalUrls.tvDetail + id;
    }else{
      url = globalUrls.showDetail + id;
    }

    wx.request({
      url: url,
      success: function(res){
        var item = res.data;
        if(params.success){
          params.success(item);
        }
      }
    })
  },

  // 请求标签数据
  getItemTags: function(params){
    var type = params.type;
    var id = params.id;
    var url = '';

    if (type === 'movie') {
      url = globalUrls.movieTags(id);
    } else if (type === 'tv') {
      url = globalUrls.tvTags(id);
    } else {
      url = globalUrls.showTags(id);
    }

    wx.request({
      url: url,
      success: function (res) {
        var tags = res.data.tags;
        if(params.success){
          params.success(tags);
        }
      }
    })
  },

  // 请求评论数据
  getItemComments: function (params) {
    var type = params.type;
    var id = params.id;
    var start = params.start || 0;
    var count = params.count || 3;
    var url = '';

    if (type === 'movie') {
      url = globalUrls.movieComments(id, start, count);
    } else if (type === 'tv') {
      url = globalUrls.tvComments(id, start, count);
    } else {
      url = globalUrls.showComments(id, start, count);
    }

    wx.request({
      url: url,
      success: function(res){
        var data = res.data;
        if(params.success){
          params.success(data);
        }
      }
    })
  },

  
  // 请求搜索结果数据
  getSearch: function(params){
    var value = params.value;
    var url = globalUrls.searchUrl(value);
    if(value){
      wx.request({
        url: url,
        success: function(res){
          var subjects = res.data.subjects;
          if(params.success){
            params.success(subjects);
          }
        }
      })
    }
  }

}
export { network }