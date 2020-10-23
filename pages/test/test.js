// pages/test/test.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 1,
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
    correct:0,
    error:0,
    list: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    listABCD : ['A','B','C','D'],
    answer: ['','B','A','B','A','B','B','B','C','B','B'],
    // answer_right:[1,1,1,1,1,1,1,1,1,1,1]
  },

  // randSort: function () {
  //   return Math.random() > 0.5 ? 1 : -1;
  // },

  // setList: function () {
  //   var newList = this.data.list.sort(this.randSort);
  //   this.setData({
  //     list: newList,
  //   });
  // },

  // setABCD : function(){
  //   var abcd = this.data.listABCD.sort(this.randSort);
  //   this.setData({
  //     listABCD: abcd,
  //   });
  // },

  setOption: function(){

  },



  answerClickA: function () {
    // this.setData({A:this.data.A+1})
    if(this.data.answer[this.data.index]=='A'){
      this.setData({
        correct:this.data.correct+1,
        // answer_right:this.data.answer_right[this.data.index]=0
      })
    }else{
      this.setData({error:this.data.error+1})
    }
    if (this.data.index == 10) {
      wx.redirectTo({
        url: '/pages/result/result?correct=' + this.data.correct + '&error=' + this.data.error ,
      })
    }
   
    if(this.data.index<10){
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
    }
   

  },

  answerClickB: function () {
    // this.setData({B:this.data.B+1})
    if(this.data.answer[this.data.index]=='B'){
      this.setData({
        correct:this.data.correct+1,
        // answer_right:this.data.answer_right[this.data.index]=0
      })
    }else{
      this.setData({error:this.data.error+1})
    }

    if (this.data.index == 10) {
      wx.redirectTo({
        url: '/pages/result/result?correct=' + this.data.correct + '&error=' + this.data.error ,
      })
    }
    if(this.data.index<10){
      this.setData({
      index: this.data.index + 1,
      realIndex: this.data.list[this.data.index]
    })
      this.setData({
        questionDetail: app.globalData_mathtest.question[this.data.realIndex].question,
        answerA: app.globalData_mathtest.question[this.data.realIndex].option[this.data.listABCD[0]],
        answerB: app.globalData_mathtest.question[this.data.realIndex].option[this.data.listABCD[1]],
        answerC: app.globalData_mathtest.question[this.data.realIndex].option[this.data.listABCD[2]],
        answerD: app.globalData_mathtest.question[this.data.realIndex].option[this.data.listABCD[3]],
      })
  
    }
    
  },

  answerClickC: function () {
    // this.setData({C:this.data.C+1})
    if(this.data.answer[this.data.index]=='C'){
      this.setData({
        correct:this.data.correct+1,
        // answer_right:this.data.answer_right[this.data.index]=0
      })
    }else{
      this.setData({error:this.data.error+1})
    }
    if (this.data.index == 10) {
      wx.redirectTo({
        url: '/pages/result/result?correct=' + this.data.correct + '&error=' + this.data.error ,
      })
    }
    if(this.data.index<10){
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
    }
    
 
  },
  answerClickD: function () {
    // this.setData({D:this.data.D+1})
    if(this.data.answer[this.data.index]=='D'){
      this.setData({
        correct:this.data.correct+1,
        // answer_right:this.data.answer_right[this.data.index]=0
      })
    }else{
      this.setData({error:this.data.error+1})
    }
    if (this.data.index == 10) {
      wx.redirectTo({
        url: '/pages/result/result?correct=' + this.data.correct + '&error=' + this.data.error ,
      })
    }
    if(this.data.index<10){
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
    }
    
   
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.setList();
    // this.setABCD();
    
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