// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgName: '',
    imgInfo:{'imgSrc':'','title':'这是关于这个女人的故事，她是90后心中的偶像','author':'播放量','playNum':'42342','opinion':'4242','uploadTime':'2019-08-08'},
    otherVideo: [{ 'videoSrc': '', 'title': '年轻一代的新女性，这是女性的光辉', 'playNum': '42342', 'transNum': '4242' },
     { 'videoSrc': '', 'title': '年轻一代的新女性，这是女性的光辉', 'playNum': '42342', 'transNum': '4242' },
     { 'videoSrc': '', 'title': '年轻一代的新女性，这是女性的光辉', 'playNum': '42342', 'transNum': '4242' }],
    opList: [{ 'picture': '../../images/nav2.jpg', 'name': '小萝莉', 'opTime': '2019-1-1', 'info': '这是我的偶像，是追梦的力量' }, { 'picture': '../../images/nav1.jpg', 'name': '懂你的我', 'opTime': '2019-1-1', 'info': '她的每一首歌我都会唱,她是我们心目中永远的天后，超级喜欢她，要一直唱下去，我们永远是你的歌迷，只要你不离我们便不弃，只要你不离我们便不弃，只要你不离我们便不弃' }, { 'picture': '../../images/nav3.jpg', 'name': '叫我帅哥', 'opTime': '2019-1-1', 'info': '越来越厉害，加油' }]
  },
    

  getImgInfo: function(imgId){
      let that = this
      wx.request({
        url: 'http://10.194.186.212:8803/files/'+imgId,
        method: 'get',
        success(res){
            if(res.statusCode===200){
              that.setData({
                imgName: res.data.filename,
              })
            }
        }
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let imgId = options.id;
    this.getImgInfo(imgId)

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