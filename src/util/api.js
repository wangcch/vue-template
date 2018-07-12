import axios from 'axios'
import { stringify } from 'qs'
const urlPrefix = '/api/'

const interceptors = () => {
  axios.interceptors.request.use((config) => {
    return config
  }, function (error) {
    return Promise.reject(error)
  })

  axios.interceptors.response.use((response) => {
    return response
  }, (error) => {
    return Promise.reject(error)
  })
}

class API {
  /**
   * GET api
   * @param {String} getfix url head
   * @param {Object} data parameters
   * @param {Object} self this
   */
  getUrlData = (getfix, data, callback, self) => {
    const url = `${urlPrefix}${getfix}${(Object.keys(data).length > 0 ? `?${stringify(data)}` : '')}`
    interceptors()
    axios.get(url)
      .then(res => {
        callback(res)
      }).catch(error => {
        if (error.response) {
          callback(error.response)
        } else {
          callback(error, true)
        }
      })
  }

  /**
   * DELETE api
   * @param {String} getfix url head
   * @param {Object} data parameters
   * @param {Object} self this
   */
  deleteUrlData = (getfix, data, callback, self) => {
    const url = `${urlPrefix}${getfix}${(Object.keys(data).length > 0 ? `?${stringify(data)}` : '')}`
    interceptors()
    axios.delete(url)
      .then(res => {
        callback(res)
      }).catch(error => {
        if (error.response) {
          callback(error.response)
        } else {
          callback(error, true)
        }
      })
  }

  /**
   * POST api
   * @param {String} postfix url head
   * @param {Object} data parameters
   * @param {Object} self this
   */
  postUrlData = (postfix, data, callback, isJson, self) => {
    interceptors()
    axios.post(`${urlPrefix}${postfix}`, isJson ? data : stringify(data))
      .then(res => {
        callback(res)
      })
      .catch(error => {
        if (error.response) {
          callback(error.response)
        } else {
          callback(error, true)
        }
      })
  }

  /**
   * PUT api
   * @param {String} postfix url head
   * @param {Object} data parameters
   * @param {Object} self this
   */
  putUrlData = (postfix, data, callback, isJson, self) => {
    interceptors()
    axios.put(`${urlPrefix}${postfix}`, isJson ? data : stringify(data))
      .then(res => {
        callback(res)
      })
      .catch(error => {
        if (error.response) {
          callback(error.response)
        } else {
          callback(error, true)
        }
      })
  }

  /**
   * GET Download
   * @param {String} url download url
   */
  downloadUrl = (url) => {
    let iframe = document.createElement('iframe')
    iframe.style.display = 'none'
    iframe.src = url
    iframe.onload = function () {
      document.body.removeChild(iframe)
    }
    document.body.appendChild(iframe)
  }
}

const api = new API()

export default api
