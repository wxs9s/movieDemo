// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeNo:0,
    // 首页导航数据
    navList:["首页","动画","喜剧","小品","国创","音乐","鬼片","综艺"],
    swiperList: ["../../images/nav1.jpg", "../../images/nav2.jpg", "../../images/nav3.jpg", "../../images/nav4.jpg"],
    testList:[],
    total: 0,    //总数
    pagesize:10,         //一页多少条
    currentpage:1,   //当前页数
    totalpage:0,     //总页数
    newsList: []    //数据
  },

  getTestList(){
    let that=this;
    wx.request({
      url: 'http://119.36.213.207:8086/hbjg/law?mark=page',
      data:{
        page: that.data.currentpage,
        size: that.data.pagesize
      },
      method:'GET',
      success(res){
        
        console.log(res)
        
        if(res.statusCode==200){
          var testList = that.data.testList;
          var currentpage = that.data.currentpage;
          var num = res.data.data.total / res.data.data.size
          var totalpage = parseInt(num)
          if (num - totalpage > 0) {
            totalpage = totalpage + 1
          }
          if (res.data.data.page==0){ 
            testList = res.data.data.rows; //重置数据列表
            currentpage = 1;
            wx.stopPullDownRefresh();
          }
          else{
            testList = that.data.testList.concat(res.data.data.rows);
            // currentpage = currentpage+1;
          }
          that.setData({
            currentpage:currentpage,
            pagesize: res.data.data.size,
            totalpage:totalpage,
            testList: res.data.data.rows,
          })
        }
        // else{
        //   util.showModel("网络出错");
        // }
      }
    })
    
  },

  // 点击导航栏事件
  activeNav(e){
    console.log(e);
    this.setData({
      activeNo:e.target.dataset.index,
    })
  },

  // 获取导航栏数据
  getNavList: function(){
     let that=this;
      wx.request({
        url: '',
        success(res){
          //console.log(res);
          if(res.data.code===0){
            this.setData({
              navList:res.data.data.navList
            })
          }
        }
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      //调用导航栏方法
      this.getNavList();
      //调用分页数据
      this.getTestList();
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
    this.data.currentpage =1;
    this.getTestList();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if(this.data.currentpage<this.data.totalpage){
      this.data.currentpage++;
      this.getTestList();
    }
    // else{
    //   util.showSuccess("没有更多数据了")
    // }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  


  

})