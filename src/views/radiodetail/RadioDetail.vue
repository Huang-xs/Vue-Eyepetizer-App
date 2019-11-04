<template>
  <div class="detail" ref="detailScroll">
    <div class="detail-page">
      <div class="back-icon" @click="backindex">
        <img :src="`${publicPath}img/player_close.png`" class="auto-img" />
      </div>
      <div class="video-content">
        <!-- 视频 -->
        <video-player
          class="video-player vjs-custom-skin needsclick"
          ref="videoPlayer"
          :playsinline="true"
          :options="playerOptions"
          @play="playVideo()"
          @pause="pauseVideo()"
        ></video-player>
        <div class="flow-tip" v-show="!isPlay">本次播放将使用22.6M流量</div>
      </div>
      <!-- 视频描述 -->
      <div
        class="video-direction"
        :style="`background: url(${$route.params.val.data.cover.blurred}) no-repeat center;background-size: 100% 100%;`"
      >
        <div class="background">
          <!-- 视频标题 -->
          <div class="item video-title">{{$route.params.val.data.title}}</div>
          <!-- 视频的类型 -->
          <div class="item video-type"
          >#{{$route.params.val.data.category}} / {{$route.params.val.data.author.name}}</div>
          <div class="item video-desc">{{$route.params.val.data.description}}</div>
          <!-- 视频的收藏等操作 -->
          <div class="item video-icon">
            <div>
              <span class="icon">
                <img :src="`${publicPath}img/favorite.png`" class="auto-img" />
              </span>
              {{$route.params.val.data.consumption.collectionCount}}
            </div>
            <div>
              <span class="icon">
                <img :src="`${publicPath}img/detail_share.png`" class="auto-img" />
              </span>
              {{$route.params.val.data.consumption.shareCount}}
            </div>
            <div>
              <span class="icon">
                <img :src="`${publicPath}img/detail_reply.png`" class="auto-img" />
              </span>
              {{$route.params.val.data.consumption.replyCount}}
            </div>
            <div>
              <span class="icon">
                <img :src="`${publicPath}img/download_cut.png`" class="auto-img" />
              </span> 缓存
            </div>
          </div>
        </div>
        <!-- 关注栏目与相关推荐 -->
        <div class="correlation">
          <div class="attention-column">
            <div class="attention attention-author">
              <img class="auto-img" :src="`${$route.params.val.data.author.icon}`" alt />
            </div>
            <div class="attention attention-title">
              <div class="title-text">{{$route.params.val.data.author.name}}</div>
              <div class="title-description">{{$route.params.val.data.author.description}}</div>
            </div>
            <div class="attention attention-icon">+关注</div>
          </div>
          <div class="recommend-column">
            <div>相关推荐</div>
            <div class="content" v-for="(val,index) in recommendArr" :key="index">
              <div class="recommend-img">
                <img
                  class="auto-img"
                  src="http://img.kaiyanapp.com/3de748e11693c0371932a8a57b7c7757.png?imageMogr2/quality/60/format/jpg/thumbnail/300x/interlace/1"
                />
                <div class="time">08:30</div>
              </div>
              <div class="recommend-desc">
                <div class="recommend-title">北方人烙大饼，真的很有门道！</div>
                <div class="recommend-type">
                  <span>#开胃</span>
                  <span class="recommend-icon">
                    <img :src="`${publicPath}img/detail_share.png`" class="auto-img" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 开眼图标 -->
        <BottomIcon></BottomIcon>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import BottomIcon from "../../components/BottomIcon";

export default {
  data: () => ({
    publicPath: process.env.BASE_URL,
    playerOptions: {},
    recommendArr: [1, 2, 3, 4, 5, 6, 7],
    isPlay: false
  }),
  components: {
    BottomIcon
  },
  methods: {
    // 返回首页
    backindex(){
      this.$router.go(-1);
    },
    // 视频播放事件
    _onPlay(videoUrl, videoPic) {
      console.log("545")
      this.playerOptions = {
        //播放速度
        playbackRates: [0.5, 1.0, 1.5, 2.0],
        //如果true,浏览器准备好时开始回放。
        autoplay: false,
        // 默认情况下将会消除任何音频。
        muted: false,
        // 导致视频一结束就重新开始。
        loop: false,
        // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        preload: "auto",
        language: "zh-CN",
        // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        aspectRatio: "16:9",
        // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        fluid: true,
        sources: [
          {
            //类型
            type: "video/mp4",
            //url地址
            src: videoUrl
            // "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
          }
        ],
        //你的封面地址
        poster: videoPic,
        //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        notSupportedMessage: "此视频暂无法播放，请稍后再试",
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          //全屏按钮
          fullscreenToggle: true
        }
      };
    },
    // 开始视频播放
    playVideo() {
      this.isPlay = true;
    },
    // 暂停视频播放
    pauseVideo() {
      this.isPlay = false;
    },
    //   屏幕滑动
    _initScroll() {
      this.$nextTick(() => {
        new BScroll(this.$refs.detailScroll, {
          scrollY: true,
          click:true//添加这个会导致音乐无法播放
        });
      });
    }
  },
  mounted() {
    
    let playUrl = this.$route.params.val.data.playUrl;
    let playPic = this.$route.params.val.data.cover.detail;
    this._onPlay(playUrl, playPic);
    this._initScroll();
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/mixin";
  .back-icon{
    position: fixed;
    left: 5px;
    top: 5px;
    width: 1rem;
    height: 1rem;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 1000;
    border-radius: 100%;
  }
.detail {
  position: fixed;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  background-color: #fff;
  .video-content {
    position: relative;
    .flow-tip {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 50px;
      margin: 0 auto;
      color: #fff;
    }
  }
  .video-direction {
    text-align: left;
    color: #fff;
    background-size: 100% 100%;
    .background {
      padding: 0.3rem;
      background-color: rgba(0, 0, 0, 0.2);
    }
    .item {
      padding: 0.2rem 0;
    }
    .video-title {
      font-size: 20px;
    }
    .video-desc {
      line-height: 20px;
    }
    .video-icon {
      display: flex;
      height: 0.7rem;
      & > div {
        flex: 1;
        line-height: 0.7rem;
      }
    }
    .video-type{
      @include scale-border-bottom(#b2b2b2);
    }
    .icon {
      display: inline-block;
      width: 0.7rem;
      height: 0.7rem;
      vertical-align: middle;
    }
    .correlation {
      width: 100%;
      background-color: rgba(113, 106, 107, 0.3);
    }
    .attention-column {
      height: 1rem;
      padding: 0.3rem;
      overflow: hidden;
      @include scale-border-bottom(#b2b2b2);
      & > .attention {
        float: left;
      }
    }
    .attention-author {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      overflow: hidden;
    }
    .attention-title {
      width: calc(100% - 2.8rem);
      padding: 0 0.2rem;
      flex-direction: column;
      & > div {
        padding: 0.08rem 0;
      }
      .title-description {
        font-size: 12px;
        color: #d3ccd0;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }

    .attention-icon {
      width: 1rem;
      padding: 0.1rem;
      border: 1px solid #fff;
      border-radius: 2px;
      font-size: 12px;
      margin: calc((0.8rem - 16px) / 2) 0;
    }

    .recommend-column {
      padding: 0.3rem;
    }
    .content {
      width: 100%;
      display: flex;
      & > div {
        flex: 1;
      }
    }
    .recommend-img {
      margin: 0.3rem 0;
      border-radius: 10px;
      overflow: hidden;
      position: relative;
    }
    .time {
      position: absolute;
      bottom: 5px;
      right: 5px;
      font-size: 12px;
      color: #fff;
      background-color: rgba(0, 0, 0, 1);
      padding: 0.1rem;
    }
    .recommend-title {
      font-size: 18px;
      padding: 0.2rem;
    }
    .recommend-type {
      padding: 0.2rem;
      overflow: hidden;
      & > span {
        display: inline-block;
      }
    }
    .recommend-icon {
      float: right;
      width: 0.5rem;
      height: 0.5rem;
    }
    .recommend-desc {
      margin: 0.3rem;
    }
  }
}
</style>