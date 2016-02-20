"use strict"
var axios = require("axios")
var url = "https://raw.githubusercontent.com/inuscript/dogtag/master/tags.txt"

module.exports = function tags(){
  return axios(url).then(res => {
    return res.data.split("\n").filter( t => {
      return t.length > 0
    })
  })
}

module.exports.primary = [ "dog", "norfolkterrier" ]
