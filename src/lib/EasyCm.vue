<template>
  <div class="cm-container" :style="axisComputed" v-if="show">
    <svg aria-hidden="true" style="position: absolute; width: 0px; height: 0px; overflow: hidden;"><symbol id="icon-youjiantou" viewBox="0 0 1024 1024"><path d="M288.791335 65.582671l446.41733 446.417329-446.41733 446.417329z"></path></symbol></svg>
    <!--first-->
    <ul class="cm-ul cm-ul-1 easy-cm-ul"
        :class="underline?'cm-underline':''">
      <li v-for="(item, index) in list" :style="liStyle" :class="liClass(item)">
        <div v-shortkey="item.hotKey" @shortkey="callback([index],item)" @click.stop="callback([index],item)"
             :class="firstLeft?'cm-left':''" v-if="item.id!='separator'">
          <i :class="item.icon"></i>
          <span class="item-content">{{item.text}}</span>
          <span class="item-hotKey" v-if="typeof item.hotKey!='undefined'&&item.hotKey!=null&&item.hotKey.length>0">{{upperKey(item.hotKey)}}</span>
          <svg class="icon" aria-hidden="true"
               v-if="arrow && item.children && item.children.length > 0">
              <use xlink:href="#icon-youjiantou"></use>
          </svg>
        </div>
        <!--second-->
        <ul class="cm-ul cm-ul-2 easy-cm-ul"
            :style="secondBorderCheck(index, item)"
            :class="underline?'cm-underline':''"
            v-if="item.children && item.children.length > 0" >
          <li v-for="(second, si) in item.children"
              :style="liStyle" :class="liClass(second)">
            <div @click.stop="callback([index,second],second)"
                 v-shortkey="second.hotKey" @shortkey="callback([index,second],second)"
                 :class="secondLeft?'cm-left':''"  v-if="second.id!='separator'">
              <i :class="second.icon"></i>
              <span>{{second.text}}</span>
              <span class="item-hotKey" v-if="typeof second.hotKey!='undefined'&&second.hotKey!=null&&second.hotKey.length>0" >{{upperKey(second.hotKey)}}</span>
              <svg class="icon" aria-hidden="true"
                   v-if="arrow && second.children && second.children.length > 0">
                  <use xlink:href="#icon-youjiantou"></use>
              </svg>
            </div>
            <!--third-->
            <ul class="cm-ul cm-ul-3 easy-cm-ul"
                :style="thirdBorderCheck(index,si, second)"
                :class="underline?'cm-underline':''"
                v-if="second.children && second.children.length > 0">
              <li v-for="(third, ti) in second.children"
                  :style="liStyle" :class="liClass(third)">
                <div @click.stop="callback([index,si,ti],third)" v-shortkey="third.hotKey" @shortkey="callback([index,si,ti],third)" v-if="third.id!='separator'">
                  <i :class="third.icon"></i>
                  <span>{{third.text}}</span>
                  <span class="item-hotKey" v-if="typeof third.hotKey!='undefined'&&third.hotKey!=null&&third.hotKey.length>0" >{{upperKey(third.hotKey)}}</span>
                </div>
              </li>
            </ul>
        </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'EasyCm',
    data() {
      return {
        // 是否显示
        show: false,
        // 触发点坐标
        axis: {
          x: 0,
          y: 0
        }
      }
    },
    props: {
      tag: {},
      list: {
        required: true
      },
      // 是否开启下划线
      underline: {
        default: false
      },
      // 是否开启箭头
      arrow: {
        default: false
      },
      // 是否开启边界检测
      border: {
        default: true
      },
      // 列表项宽度
      itemWidth: {
        default: 140
      },
      // 列表项高度
      itemHeight: {
        default: 36
      },
      // 列表项字体
      itemSize: {
        default: 14
      },
      // 显示点偏移量
      offset: {
        default: () => {
          return {
            x: 6, y: 2
          }
        }
      },
      // 边界距离
      borderWidth: {
        default: 6
      }
    },
    mounted() {
      this.$root.$on('easyAxis', (axis) => {
        if (axis.tag == this.tag){
            this.show = true
            this.axis = axis
        }
      })
      document.addEventListener('click', () => {
          this.show = false
      }, true)
    },
    watch: {
      axis() {
        if (this.border){
          let bw = document.body.offsetWidth, bh = document.body.offsetHeight
          if (this.axis.x + this.offset.x + this.itemWidth >= bw) {
            this.axis.x = bw - this.itemWidth - this.borderWidth - this.offset.x
          }
          if (this.axis.y + this.offset.y + this.itemHeight * this.list.length >= bh) {
            this.axis.y = bh - this.itemHeight * this.list.length - this.borderWidth -this.offset.y
          }
        }
      }
    },
    computed: {
      axisComputed() {
        return {
          top: this.axis.y + this.offset.y + 'px',
          left: this.axis.x + this.offset.x + 'px'
        }
      },
      liStyle() {
        return{
          width: this.itemWidth + 'px',
          height: this.itemHeight + 'px',
          lineHeight: this.itemHeight + 'px',
          fontSize: this.itemSize + 'px'
        }
      },
      firstLeft() {
        let bw = document.body.offsetWidth
        return this.axis.x + this.itemWidth*2 >= bw
      },
      secondLeft() {
        let bw = document.body.offsetWidth
        return this.axis.x + this.itemWidth*3 >= bw
      }
    },
    methods: {
      secondBorderCheck(i, item){
        if (typeof item != 'undefined' && typeof item.disabled != 'undefined' && item.disabled) {
          return {display: 'none'}
        }
        let bw = document.body.offsetWidth, bh = document.body.offsetHeight
        let cy = this.axis.y + ( i + this.list[i].children.length )* this.itemHeight
        return {
          left: this.axis.x + this.itemWidth*2 >= bw ? '-100%' : '100%',
          top: bh >= cy ? 0 : -(this.list[i].children.length - 1)* this.itemHeight + 'px'
        }
      },
      thirdBorderCheck(i, si, item){
        if (typeof item != 'undefined' && typeof item.disabled != 'undefined' && item.disabled) {
          return {display: 'none'}
        }
        let bw = document.body.offsetWidth, bh = document.body.offsetHeight
        let cy =  this.axis.y + this.list[i].children[si].children.length * this.itemHeight + (i+si)*this.itemHeight+parseInt(this.secondBorderCheck(i).top)
        return {
          left: this.axis.x + this.itemWidth*3 >= bw ? '-100%' : '100%',
          top: cy > bh ? -(this.list[i].children[si].children.length - 1) * this.itemHeight + 'px' : 0
        }
      },
      callback (indexList, item){
        if (typeof item != 'undefined' && typeof item.disabled != 'undefined' && item.disabled) {
          this.show = true
          return
        }
        if (item.hotKey && indexList.length > 1) {
          let el = this.$el.lastChild.childNodes[indexList[0]].lastChild.childNodes[indexList[1]]
          if (indexList.length == 3) {
            el = el.lastChild.childNodes[indexList[2]]
          }
          if (window.getComputedStyle(el.parentNode).display === 'none') {
            return
          }
        }
        this.show = false
        this.$emit('ecmcb',indexList)
      },
      upperKey (hotkeys) {
        if (typeof hotkeys == 'undefined'|| hotkeys == null || hotkeys.length == 0) return
        let hotKeyLabel = ''
        for (let i = 0; i < hotkeys.length; i++) {
          hotKeyLabel += hotkeys[i].substring(0,1).toUpperCase() + hotkeys[i].substring(1, hotkeys[i].length) + '-'
        }
        hotKeyLabel = hotKeyLabel.substring(0, hotKeyLabel.length - 1)
        return hotKeyLabel
      },
      liClass (item) {
        let classStyle = ''
        classStyle += item.id=='separator'?'item-separator':''
        classStyle += item.disabled?'disabled':''
        return classStyle
      }
    }
  }
</script>

<style scoped>
  .icon {
    width: 0.9em; height: 0.9em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    position: absolute;
    right: 0%;
    top: 50%;
    transform: translateY(-50%);
  }
  .cm-container {
    position: fixed;
    user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    z-index: 9999;
  }
  .cm-ul {
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    box-shadow: 0 0 1px #666;
    background-color: #ffffff;
    color: #2e2e2e;
  }

  .cm-ul li {
    width: 100%;
    box-sizing: border-box;
    text-align: left;
    position: relative;
    cursor: pointer;
  }
  .cm-ul li:hover>ul{
    display: block;
  }
  .cm-ul li div{
    display: inline-block;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 0 0.8em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    position: relative;
  }
  .cm-ul li i {
    display: inline-block;
    width: 1em;
    font-size: 1.3em;
    text-align: center;
  }
  .cm-ul-2,.cm-ul-3 {
    position: absolute;
    top: 0;
    display: none;
    z-index: 10000;
  }
  .cm-left svg{
    transform: translateY(-50%) rotate(180deg) ;
    left: 0;
  }
  .cm-underline li div:after{
    content: '';
    width: 90%;
    position: absolute;
    left: 5%;
    top: 0;
    height: 1px;
    background-color: #cccccc;
    z-index: 10001;
  }
  .cm-underline li div:hover:after,.cm-underline>li:first-child>div:after{
    display: none;
  }
  .cm-ul li:not(.disabled):hover {
    background-color: #58c0dd;
    color: #fff;
  }
  .cm-ul li.disabled {
    cursor: not-allowed;
    color: #aaa;
  }
  .item-content {

  }
  .item-hotKey{
    float: right;
    color: #aaa;
    font-size: 12px;
  }
  .item-separator {
    padding: 0;
    height: 0!important;
    border-bottom: 1px solid #eee;
    margin: 4px 1px;
  }
</style>
