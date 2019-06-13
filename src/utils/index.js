/**
 * @author xiajing
 * @date 2019/6/12 17:57
 */
// 获取设备系统信息
const getSystem = () => {
  const sys = {}
  wx.getSystemInfo({
    success: (res) => {
      sys.pixelRatio = res.pixelRatio
      sys.ww = res.windowWidth
      sys.wh = res.windowHeight
      sys.barh = res.statusBarHeight
    }
  })
  return sys
}

// 格式化时间
const formatTime = (date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return [year, month, day].map(formatNumber).concat([hour, minute, second].map(formatNumber))
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  getSystem,
  formatTime
}
