import axios from 'axios'
const qs = require('qs')
const urlPrefix = '/api/'
let api = {}

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

/**
 * GET api
 * @param {String} getfix url head
 * @param {Object} data parameters
 * @param {Object} self this
 */
api.getUrlData = (getfix, data, callback, self) => {
  const url = urlPrefix + getfix + (Object.keys(data).length > 0 ? `?${qs.stringify(data)}` : '')
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
api.deleteUrlData = (getfix, data, callback, self) => {
  const url = urlPrefix + getfix + (Object.keys(data).length > 0 ? `?${qs.stringify(data)}` : '')
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
api.postUrlData = (postfix, data, callback, isJson, self) => {
  interceptors()
  axios.post(urlPrefix + postfix, isJson ? data : qs.stringify(data))
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
api.putUrlData = (postfix, data, callback, isJson, self) => {
  interceptors()
  axios.put(urlPrefix + postfix, isJson ? data : qs.stringify(data))
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
api.downloadUrl = (url) => {
  let iframe = document.createElement('iframe')
  iframe.style.display = 'none'
  iframe.src = url
  iframe.onload = function () {
    document.body.removeChild(iframe)
  }
  document.body.appendChild(iframe)
}

export default api
