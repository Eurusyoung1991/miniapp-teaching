// pages/test/test.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    realIndex: 0,
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    a:0,
    b:0,
    c:0,
    d:0,
    optionA: "A",
    optionB: "B",
    optionC: "C",
    optionD: "D",
    questionDetail: app.globalData_mathtest.question[0].question,
    answerA: app.globalData_mathtest.question[0].option.A,
    answerB: app.globalData_mathtest.question[0].option.B,
    answerC: app.globalData_mathtest.question[0].option.C,
    answerD: app.globalData_mathtest.question[0].option.D,
    correctAnswer:0,
    list: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    listABCD : ['A','B','C','D']
  },

  randSort: function () {
    return Math.random() > 0.5 ? 1 : -1;
  },

  setList: function () {
    var newList = this.data.list.sort(this.randSort);
    this.setData({
      list: newList,
    });
  },

  setABCD : function(){
    var abcd = this.data.listABCD.sort(this.randSort);
    this.setData({
      listABCD: abcd,
    });
  },

  setOption: function(){

  },



  answerClickA: function () {
    if (this.data.listABCD[0] == 'A') {
      this.setData({
        A: this.data.A + 1
      })
    }
    else if (this.data.listABCD[0] == 'B') {
      this.setData({
        B: this.data.B + 1
      })
    }
    if (this.data.listABCD[0] == 'C') {
      this.setData({
        C: this.data.C + 1
      })
    }
    if (this.data.listABCD[0] == 'D') {
      this.setData({
        C: this.data.D + 1
      })
    }
    this.setData({
      index: this.data.index + 1,
      realIndex: this.data.list[this.data.index],
    })
   
    this.setData({
      questionDetail: app.globalData_mathtest.question[this.data.realIndex].question,
     
      answerA: app.globalData_mathtest.question[this.data.realIndex].option[this.data.listABCD[0]],
      answerB: app.globalData_mathtest.question[this.data.realIndex].option[this.data.listABCD[1]],
      answerC: app.globalData_mathtest.question[this.data.realIndex].option[this.data.listABCD[2]],
      answerD: app.globalData_mathtest.question[this.data.realIndex].option[this.data.listABCD[3]]
    })
    if (this.data.index == 10) {
      wx.redirectTo({
        url: '/pages/result/result?A=' + this.data.A + '&B=' + this.data.B + '&C=' + this.data.C + '&D=' + this.data.D,
      })
    }
  },

  answerClickB: function () {
    if(this.data.listABCD[1] == 'A'){
      this.setData({
        A:this.data.A + 1
      })
    }
    else if (this.data.listABCD[1] == 'B') {
      this.setData({
        B: this.data.B + 1
      })
    }
    if (this.data.listABCD[1] == 'C') {
      this.setData({
        C: this.data.C + 1
      })
    }
    if (this.data.listABCD[1] == 'D') {
      this.setData({
        D: this.data.D + 1
      })
    }
    this.setData({
      index: this.data.index + 1,
      realIndex: this.data.list[this.data.index]
    })
    this.setData({
      questionDetail: app.globalData_mathtest.question[this.data.realIndex].question,
      answerA: app.globalData_mathtest.question[this.data.realIndex].option[this.data.listABC[0]],
      answerB: app.globalData_mathtest.question[this.data.realIndex].option[this.data.listABC[1]],
      answerC: app.globalData_mathtest.question[this.data.realIndex].option[this.data.listABC[2]],
      answerD: app.globalData_mathtest.question[this.data.realIndex].option[this.data.listABC[3]],
    })
    if (this.data.index == 10) {
      wx.redirectTo({
        url: '/pages/result/result?A=' + this.data.A + '&B=' + this.data.B + '&C=' + this.data.C + '&D=' + this.data.D,
      })
    }
  },

  answerClickC: function () {
    if (this.data.listABCD[2] == 'A') {
      this.setData({
        A: this.data.A + 1
      })
    }
    else if (this.data.listABCD[2] == 'B') {
      this.setData({
        B: this.data.B + 1
      })
    }
    if (this.data.listABCD[2] == 'C') {
      this.setData({
        C: this.data.C + 1
      })
    }
    if (this.data.listABCD[2] == 'D') {
      this.setData({
        D: this.data.D + 1
      })
    }
    this.setData({
      index: this.data.index + 1,
      realIndex: this.data.list[this.data.index],
      
    })
    this.setData({
      questionDetail: app.globalData_mathtest.question[this.data.realIndex].question,
      answerA: app.globalData_mathtest.question[this.data.realIndex].option[this.data.listABCD[0]],
      answerB: app.globalData_mathtest.question[this.data.realIndex].option[this.data.listABCD[1]],
      answerC: app.globalData_mathtest.question[this.data.realIndex].option[this.data.listABCD[2]],
      answerD: app.globalData_mathtest.question[this.data.realIndex].option[this.data.listABCD[3]]
    })
    if (this.data.index == 10) {
      wx.redirectTo({
        url: '/pages/result/result?A=' + this.data.A + '&B=' + this.data.B + '&C=' + this.data.C + '&D=' + this.data.D,
      })
    }
  },
  answerClickD: function () {
    if (this.data.listABCD[3] == 'A') {
      this.setData({
        A: this.data.A + 1
      })
    }
    else if (this.data.listABCD[3] == 'B') {
      this.setData({
        B: this.data.B + 1
      })
    }
    if (this.data.listABCD[3] == 'C') {
      this.setData({
        C: this.data.C + 1
      })
    }
    if (this.data.listABCD[3] == 'D') {
      this.setData({
        D: this.data.D + 1
      })
    }
    this.setData({
      index: this.data.index + 1,
      realIndex: this.data.list[this.data.index],
      
    })
    this.setData({
      questionDetail: app.globalData_mathtest.question[this.data.realIndex].question,
      answerA: app.globalData_mathtest.question[this.data.realIndex].option[this.data.listABCD[0]],
      answerB: app.globalData_mathtest.question[this.data.realIndex].option[this.data.listABCD[1]],
      answerC: app.globalData_mathtest.question[this.data.realIndex].option[this.data.listABCD[2]],
      answerD: app.globalData_mathtest.question[this.data.realIndex].option[this.data.listABCD[3]]
    })
    if (this.data.index == 10) {
      wx.redirectTo({
        url: '/pages/result/result?A=' + this.data.A + '&B=' + this.data.B + '&C=' + this.data.C + '&D=' + this.data.D,
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setList();
    this.setABCD();
    
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