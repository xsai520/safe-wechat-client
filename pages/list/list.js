Page({
  data: {
    imgs:[,,,,],
    currentQuestion:1,
    totalQuestion:0,
    currentIndex:0,
    key:'-1',
    topicList: [
      {
        "selectType": "SINGLE", //MULTIPLE
        "testType":"IMAGE",
        "problem": "请根据图片缺失部分选出正确答案",
        "topics": [
          {
            "option": "A",
            "content": "1",
            "selected": false
          },
          {
            "option": "B",
            "content": "1",
            "selected": false
          },
          {
            "option": "C",
            "content": "有时",
            "selected": false
          },
          {
            "option": "D",
            "content": "有时",
            "selected": false
          },
          {
            "option": "E",
            "content": "有时",
            "selected": false
          },
      ]
      },
      {
        "selectType": "MULTIPLE", //MULTIPLE
        "testType": "TEXT",
        "problem": "请根据图片缺失部分选出正确答案",
        "topics": [
          {
            "option": "A",
            "content": "2",
            "selected": false
          },
          {
            "option": "B",
            "content": "2",
            "selected": false
          },
          {
            "option": "C",
            "content": "有时",
            "selected": false
          },
          {
            "option": "D",
            "content": "有时",
            "selected": false
          },
          {
            "option": "E",
            "content": "有时",
            "selected": false
          },
        ]
      },
      {
        "selectType": "SINGLE", //MULTIPLE
        "testType": "TEXT",
        "problem": "请根据图片缺失部分选出正确答案",
        "topics": [
          {
            "option": "A",
            "content": "3",
            "selected": false
          },
          {
            "option": "B",
            "content": "3",
            "selected": false
          },
          {
            "option": "C",
            "content": "有时",
            "selected": false
          },
          {
            "option": "D",
            "content": "有时",
            "selected": false
          },
          {
            "option": "E",
            "content": "有时",
            "selected": false
          },
        ]
      },
      {
        "selectType": "SINGLE", 
        "testType": "IMAGE",
        "problem": "请根据图片缺失部分选出正确答案",
        "topics": [
          {
            "option": "A",
            "content": "4",
            "selected": false
          },
          {
            "option": "B",
            "content": "4",
            "selected": false
          },
          {
            "option": "C",
            "content": "4",
            "selected": false
          },
          {
            "option": "D",
            "content": "有时",
            "selected": false
          },
          {
            "option": "E",
            "content": "有时",
            "selected": false
          },
        ]
      },
      {
        "selectType": "MULTIPLE",
        "testType": "IMAGE",
        "problem": "请根据图片缺失部分选出正确答案",
        "topics": [
          {
            "option": "A",
            "content": "有时",
            "selected": false
          },
          {
            "option": "B",
            "content": "有时",
            "selected": false
          },
          {
            "option": "C",
            "content": "有时",
            "selected": false
          },
          {
            "option": "D",
            "content": "有时",
            "selected": false
          },
          {
            "option": "E",
            "content": "有时",
            "selected": false
          },
        ]
      },
      {
        "selectType": "MULTIPLE",
        "testType": "IMAGE",
        "problem": "请根据图片缺失部分选出正确答案",
        "topics": [
          {
            "option": "A",
            "content": "有时",
            "selected": false
          },
          {
            "option": "B",
            "content": "有时",
            "selected": false
          },
          {
            "option": "C",
            "content": "有时",
            "selected": false
          },
          {
            "option": "D",
            "content": "有时",
            "selected": false
          },
          {
            "option": "E",
            "content": "有时",
            "selected": false
          },
        ]
      }
      ]},
    onLoad: function () {
    this.setData({
      totalQuestion:this.data.topicList.length
    })
  },
  selectItem:function(event){
    //改变select的值
    var selectType = event.currentTarget.dataset.option.selectType;
    var topic = event.currentTarget.dataset.topic;
    var list = this.data.topicList;
    //如果是单选 则需要重置 selected 为false
    if (selectType =="SINGLE"){
      list[this.data.currentQuestion - 1].topics.forEach(function (value, i) {
        if (value.option == topic.option) {
          value.selected = !value.selected;
        }else{
          value.selected=false;
        }
      })
    }else{
      list[this.data.currentQuestion - 1].topics.forEach(function (value, i) {
        if (value.option == topic.option) {
          value.selected = !value.selected;
        }
      })
    }
    this.setData({
      key: event.currentTarget.dataset.index,
      topicList: list
    })
  },
  preProblem:function(event){
    var len = this.data.topicList.length;
    var index = this.data.currentIndex-1;
    var currentQuestion = this.data.currentQuestion-1;
    this.setData({
      currentIndex: index,
      currentQuestion: currentQuestion
    })
    console.log(this.data.topicList)
  },
  nextProblem:function(event){
    var topics = event.currentTarget.dataset.topics;
    var count=0;
    topics.forEach(function(val,i){
      if (val.selected){
        count++;
       }
    })
    if (count==0){
      wx.showModal({
        title: "提示",
        content: "未选择项目",
        showCancel: false
      })
    }else{
      console.log(topics)
      var len = this.data.topicList.length;
      var index = this.data.currentIndex + 1;
      var currentQuestion = this.data.currentQuestion + 1;
      if (this.data.currentQuestion == len) {
        //调用保存接口 将this.data.topicList 传过去

        wx.navigateTo({
          url: '../result/result'
        })
      } else {
        this.setData({
          currentIndex: index,
          currentQuestion: currentQuestion,
          key: "-1"
        })
      }



    }
    
  }
})
