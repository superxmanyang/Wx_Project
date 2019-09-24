
Page({
 data:{
   //   轮播图数组
   swiperList: [],
   // 导航数组
   catitemList:[],
   // 楼层数组
   floorList:[]
 },

onLoad(){
this.getSwiperData();
this.getCatitemList();
this.getfloorList();

},


 // 获取轮播图 数据
 getSwiperData() {
    wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/home/swiperdata',
      success: (result) => {
        // console.table(result.data.message);
        this.setData({
          swiperList:result.data.message
        })
      }
    });
  },
  getCatitemList(){
    wx.request({
     url: 'https://api.zbztb.cn/api/public/v1/home/catitems',
     success:(e)=>{
      //  console.log(e);
      this.setData({
        catitemList:e.data.message
      })
     }
    })
  },
  getfloorList(){
    wx.request({
      url:'https://api.zbztb.cn/api/public/v1/home/floordata',
      success:(e)=>{
         console.log(e);
        this.setData({
          floorList:e.data.message
        })
      }
    })
  }


})
