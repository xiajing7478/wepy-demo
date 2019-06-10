/**
 * @author xiajing
 * @date 2019/6/10 16:42
 */
import wepy from 'wepy'
export default class MixinTest extends wepy.mixin {
  data = {
    msg: 'this is mixin msg'
  }
  methods= {
    tapMixin() {
      console.log('this is tap mixin...........')
    }
  }
  onShow() {
    console.log('mixin onshow')
  }
}
