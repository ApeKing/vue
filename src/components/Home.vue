<template>
  <div>
    <div class="fixed-bar">
        <a href="javascript:;" class="menu">
          <img src="../images/menu.png" alt="">
        </a>
        <a href="" class="center">
          个人中心
        </a>
      </div>
    <div class="wjs-content">
      <!-- 顶部 -->
      <div class="topnav">
        <div class="container">
          <div class="qrcode">
            <a href="javascript:;">手机微金所</a>
          </div>
          <div class="service">4006-89-4006（服务时间：9:00~21:00）</div>
          <div class="extra">
            <a href="javascript:;">常见问题</a>
            <a href="javascript:;"> 财富登录</a>
          </div>
          <div class="join">
            <a class="signup" href="">免费注册</a>
            <a class="signin" href="">登录</a>
          </div>
        </div>
      </div>
      <!-- 导航 -->
      <div class="nav">
        <div class="container">
          <ul>
            <li>
              <a href="#">
                <img src="../images/logo.png" alt="">
              </a>
            </li>
            <li>
              <router-link :to="{name: 'son1'}">SonOne</router-link>
              <b></b>
            </li>
            <li>
              <router-link :to="{name: 'son2'}">SonTwo</router-link>
              <b></b>
            </li>
            <li>
              <router-link :to="{name: 'son3'}">SonThree</router-link>
              <b></b>
            </li>
            <li>
              <router-link :to="{name: 'son4'}">SonFour</router-link>
              <b></b>
            </li>
            <li>
              <a href="#">最新动态</a>
              <b></b>
            </li>
            <li>
              <a href="#">微论坛</a>
              <b></b>
            </li>
            <li>
              <a href="#">个人中心</a>
              <b></b>
            </li>
          </ul>
        </div>
      </div>
      <router-view></router-view> 
      <!-- 底部 -->
      <div class="footer">
        <div class="aboutme">
          <ul>
            <li>
              <a href="">公司介绍</a>
            </li>
            <li>
              <a href="">管理团队</a>
            </li>
            <li>
              <a href="">新手指引</a>
            </li>
            <li>
              <a href="">安全保障</a>
            </li>
            <li>
              <a href="">合作伙伴</a>
            </li>
            <li>
              <a href="">最新动态</a>
            </li>
            <li>
              <a href="">诚聘英才</a>
              <span>|</span>
            </li>
            <li>
              <a href="">会员注册</a>
              <span>|</span>
            </li>
            <li>
              <a href="">忘记密码</a>
              <span>|</span>
            </li>
            <li>
              <a href="">如何提现</a>
            </li>
          </ul>
        </div>
        <div class="copyright">
          <p>&copy;版权所有©中微（北京）信用管理有限公司 京ICP证 12013158号</p>
          <div class="company">
            <a href="">
              <img src="../images/footer_new1.jpg" alt="">
            </a>
            <a href="">
              <img src="../images/footer_new2.jpg" alt="">
            </a>
            <a href="">
              <img src="../images/footer_new3.jpg" alt="">
            </a>
            <a href="">
              <img src="../images/footer_new4.jpg" alt="">
            </a>
            <a href="">
              <img src="../images/footer_new5.jpg" alt="">
            </a>
            <a href="">
              <img src="../images/footer_new6.jpg" alt="">
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>


