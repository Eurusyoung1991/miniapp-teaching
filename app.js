//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData_mathtest: {
    userInfo: "hello",
    question: [{ "question": "和80相邻的两个数是（  ）。", "option": { "A": "81和82", "B": "79和81", "C": "78和79" ,"D": "以上都不对"}, "answer": "B" }
      , { "question": "76到82中间有（　）个数。", "option": { "A": "5", "B": "6", "C": "7","D": "以上都不对" }, "answer": "A" }
      , { "question": "下面的数中，比20大得多是数是（  ）。", "option": { "A": "10", "B": "89", "C": "30" ,"D": "以上都不对"}, "answer": "B" }
      , { "question": "与55相邻的数是（  ）。", "option": { "A": "56和54", "B": "56和57", "C": "55和56" ,"D": "以上都不对"}, "answer": "A" }
      , { "question": "83后面的第5个数是（  ）。", "option": { "A": "87", "B": "88", "C": "89","D": "以上都不对" }, "answer": "B" }
      , { "question": "88读作（  ）。", "option": { "A": "八十加八", "B": "八十八", "C": "八八" ,"D": "以上都不对"}, "answer": "B" }
      , { "question": "45是由（　）组成的。", "option": { "A": "4个五", "B": "4个十和5个一", "C": "4加5","D": "以上都不对" }, "answer": "B" }
      , { "question": "9+6 =（  ）。", "option": { "A": "13", "B": "14", "C": "15","D": "以上都不对" }, "answer": "C" }
      , { "question": "7-2 ＝（  ）。", "option": { "A": "4", "B": "5", "C": "6" ,"D": "以上都不对"}, "answer": "B" }
      , { "question": "至少需要（ ）个小正方形才能拼成一个大正方形。", "option": { "A": "2", "B": "4", "C": "6" }, "answer": "B" }]
  }
})