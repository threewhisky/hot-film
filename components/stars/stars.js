
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    rate: {
      type: Number,
      value: 0,
      observer: function (newVal, oldVal){
        this.updateRate();
      }
    },
    starsize: {
      type: Number,
      value: 20 //rpx
    },
    fontsize: {
      type: Number,
      value: 20 //rpx
    },
    fontcolor: {
      type: String,
      value: "ccc"
    },
    istext: {
      type: Boolean,
      value: true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    updateRate: function () {
      // 评分转换为星星图标的方法，并用于在页面渲染完成时更新评分
      var that = this;
      var rate = that.properties.rate;
      var light = parseInt(rate / 2);
      var half = parseInt(rate % 2);
      var gray = 5 - light - half;
      var lights = [];
      var halfs = [];
      var grays = [];
      var ratetext = rate && rate > 0 && rate <= 10 ? rate.toFixed(1) : "暂无评分";
      for (var i = 1; i <= light; i++) {
        lights.push(i);
      }
      for (var i = 1; i <= half; i++) {
        halfs.push(i);
      }
      for (var i = 1; i <= gray; i++) {
        grays.push(i);
      }
      this.setData({
        rate: rate,
        lights: lights,
        halfs: halfs,
        grays: grays,
        ratetext: ratetext
      })

    }
  },

  attached: function () {
    this.updateRate();
  }
})
