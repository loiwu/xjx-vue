<template>
  <div class="whale">
    <div class="header">
      <div class="header-left">
        <img src="/static/images/xuprise.png" alt="" class="wechat-logo" />
      </div>
      <div class="header-right">
        <div class="find_nav">
          <div class="find_nav_left">
            <div class="find_nav_list">
              <div class="test">
                <ul class="ul1">
                  <li class="find_nav_cur">
                    <a href="#page1" id="home_page" @click="switchNav(0)">首页</a>
                  </li>
                  <li>
                    <a href="#page2" id="about_us" @click="switchNav(1)">关于我们</a>
                  </li>
                  <span class="bottomLine bottomLeft"></span>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="QR_code">
        <a>
          <img src="/static/images/wechat.png" alt=""  class="wechat-icon"/>
        </a>
      </div>
      <div class="arrow" id="arrow">
        <div>
          <img src="/static/images/QRcode.png" alt="" class="wechat-QRcode" />
        </div>
        <div class="wechat-QRcode-text">
          扫码了解更多
        </div>
      </div>
    </div>
    <div class="bodyer">
      <ul id="menu">
        <li data-menuanchor="page1" class="active">
          <a href="#page1">0</a>
        </li>
        <li data-menuanchor="page2">
          <a href="#page2">1</a>
        </li>
      </ul>
      <div class="section">
        <div class="content-mess">
          <div class="content-mess-text">
            <span>小鲸喜</span>
            <span>，给生活一点惊喜。</span>
          </div>
          <div>
            <img src="/static/images/QRcode.png" alt="" class="wechat-QRcode" />
          </div>
          <div class="wechat-QRcode-know">
            扫码了解更多
          </div>
        </div>
        <div>
          <img src="/static/images/iphone.png" alt="" class="wechat-iphone" />
        </div>
        <div class="wave">
          <svg class="editorial" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28"
            preserveAspectRatio="none">
            <defs>
              <path id="gentle-wave" d="M-160 44c30 0
                        58-18 88-18s
                        58 18 88 18
                        58-18 88-18
                        58 18 88 18
                        v44h-352z" />
            </defs>
            <g class="parallax">
              <use xlink:href="#gentle-wave" x="50" y="0" fill="#ff328c" />
              <use xlink:href="#gentle-wave" x="50" y="2" fill="#00c8dc" />
              <use xlink:href="#gentle-wave" x="50" y="4" fill="#005aa0" />
              <use xlink:href="#gentle-wave" x="50" y="-2" fill="#77328c" />
            </g>
          </svg>
        </div>
      </div>
      <div class="section">
        <div class="section-content">关于我们</div>
        <div class="about-content">
          <span>小鲸喜，</span>
          <span>专注为年轻白领提供有趣 / 有品质的生活，提供商品覆盖日用百货 / 文具 / 服饰 / 箱包 / 小家电等多个品类。围绕年轻白领对新鲜又有趣的生活追求，产品色系明亮活泼，适用多个生活场景，如办公、上下班、差旅、居家等。</span>
        </div>
        <div>
          <img src="/static/images/photo.png" alt="" class="aboutUs-one" />
        </div>
        <div class="footer">
          <div>
            <a href="http://www.miitbeian.gov.cn/state/outPortal/loginPortal.action;jsessionid=dF265pq4slTsYxHDkoihhV2Ox5YKIv1DaxGLJtDAQF38Sh2b5ZYV!360102457">©上海萌店科技有限公司  沪ICP备15014922号-2</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Home',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      switchNav: function (index) {
        console.log(11111111111);
      }
    }
  }
</script>

<style scoped>
</style>
