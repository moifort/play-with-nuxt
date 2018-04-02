import Vue from 'vue'

const digitsRE = /(\d{3})(?=\d)/g

const number = function (value, decimals, suffix, prefix) {
    value = parseFloat(value)
    if (!isFinite(value) || (!value && value !== 0)) return ''
    decimals = decimals !== null ? decimals : 2
    let before = suffix || ''
    let after = prefix || ''
    let stringified = Math.abs(value).toFixed(decimals)
    let _int = decimals
        ? stringified.slice(0, -1 - decimals)
        : stringified
    let i = _int.length % 3
    let head = i > 0
        ? (_int.slice(0, i) + (_int.length > 3 ? ' ' : ''))
        : ''
    let _float = decimals
        ? stringified.slice(-1 - decimals)
        : ''
    let sign = value < 0 ? '-' : ''
    return before + sign + head +
        _int.slice(i).replace(digitsRE, '$1 ') +
        _float +
        after
}

Vue.filter('number', number)
