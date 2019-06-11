/**
 * @author xiajing
 * @date 2019/6/11 14:16
 */
import wepy from 'wepy'
const URL_FIXER = 'https://www.shmet.com/api/rest'
const request = (url, method = 'GET', data = {}, isShowLoading = true) => {
  return new Promise((resolve, reject) => {
    wepy.request({
      method,
      data,
      url: URL_FIXER + url,
      header: { 'content-type': 'application/json' },
      success: res => {
        if (res.statusCode === 200 && res.data.code === '000000') {
          resolve(res.data.data)
        } else {
          reject(res)
        }
      },
      fail: res => {
        reject(res)
      }
    })
  })
}

module.exports = {
  request
}
