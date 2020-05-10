import {Component, Vue} from 'vue-property-decorator';
const $ = require('jquery');

@Component
export default class App extends Vue {
}

$(document).ready(function(){
  let windowWidth = $(window).width();
  let windowHeight = $(window).height();

  //初始裁剪一部分
  $(".teacher").css("width",windowWidth+"px");
  $(".teacher").css("left","0px");
  $(".continer").css("width","95%");
  $(".continer").css("left","-30%");

//小狗的定位
function changeSite(){
  //重新计算页面宽高
  let windowWidth = $(window).width();
  let windowHeight = $(window).height();
  //计算位置
  let studentSite  = $(".student-character").offset().left;
  let dogWidth = $(".student-dog").css("width");
      dogWidth = dogWidth.replace("px"," ");
  let newRight = (windowWidth - studentSite -50) + "px";
  $(".student-dog").css("right",newRight);
}
//初始计算学生界面小狗的位置
  changeSite();

  $(window).resize(function(){
    changeSite();
  })




  $(document).mousemove(function(e){
    let mouseX = e.clientX;
    let x = mouseX/windowWidth;
    let newRight = ((1-x)*100).toFixed(2).toString()+"%";
    // console.log(newLeft);
    if(x>0.7&&x<0.95){
      $(".teacher").css("position","absolute");
      $(".teacher").css("left","0");
      $(".continer").css("right",newRight);
      $(".continer").css("left","");
      $(".continer").css("width","100%");
    }
    if(x>0.95){
      $(".teacher").css("position","absolute");
      $(".teacher").css("left","0");
      $(".continer").css("right","5%");
      $(".continer").css("left","");
      $(".continer").css("width","100%");
    }
    if(x<0.7&&x>0.05){
      $(".teacher").css("width",windowWidth+"px");
      $(".continer").css("left","-30%");
      $(".continer").css("right","");
      $(".teacher").css("left","0px");
      //计算鼠标移动的距离，百分比，用于容器的缩短距离
      let newWidth = ((0.3+x)*100).toFixed(2).toString()+"%";
      $(".continer").css("width",newWidth);
    }
    if(x<0.05){
      $(".teacher").css("width",windowWidth+"px");
      $(".continer").css("left","-30%");
      $(".continer").css("right","");
      $(".teacher").css("left","0px");
      //计算鼠标移动的距离，百分比，用于容器的缩短距离
      $(".continer").css("width","35%");
    }
  })
})