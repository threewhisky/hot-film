const globalUrls = {

  // 列表项url
  movieList: 'https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items',
  tvList: 'https://m.douban.com/rexxar/api/v2/subject_collection/tv_hot/items',
  showList: 'https://m.douban.com/rexxar/api/v2/subject_collection/tv_variety_show/items',

  // 详情url
  movieDetail: "https://m.douban.com/rexxar/api/v2/movie/",
  tvDetail: "https://m.douban.com/rexxar/api/v2/tv/",
  showDetail: "https://m.douban.com/rexxar/api/v2/tv/",

  // 标签的url
  movieTags: function(id){
    return "https://m.douban.com/rexxar/api/v2/movie/" + id + "/tags?count=8";
  },
  tvTags: function (id) {
    return "https://m.douban.com/rexxar/api/v2/tv/" + id + "/tags?count=8";
  },
  showTags: function (id) {
    return "https://m.douban.com/rexxar/api/v2/tv/" + id + "/tags?count=8";
  },

  // 评论的url
  movieComments: function (id, start = 0, count = 3) {
    return 'https://m.douban.com/rexxar/api/v2/movie/' + id + '/interests?count=' + count + '&start=' + start;
  },
  tvComments: function (id, start = 0, count = 3) {
    return 'https://m.douban.com/rexxar/api/v2/tv/' + id + '/interests?count=' + count + '&start=' + start;
  },
  showComments: function (id, start = 0, count = 3) {
    return 'https://m.douban.com/rexxar/api/v2/tv/' + id + '/interests?count=' + count + '&start=' + start;
  },

  //  搜索结果的url（只有电影）
  searchUrl: function(q){
    return "https://m.douban.com/rexxar/api/v2/search?q=" + q;
  } 
}

export {globalUrls} 