const later = require('later')

const handlerUpdate = require('./update')

// node app.js 设置自动更新
later.date.localTime()
later.setInterval(handlerUpdate, {
  schedules: [
    { h: [00], m: [00] },
    { h: [00], m: [30] },
    { h: [01], m: [00] },
    { h: [01], m: [30] },
    { h: [02], m: [00] },
    { h: [02], m: [30] },
    { h: [03], m: [00] },
    { h: [03], m: [30] },
    { h: [04], m: [00] },
    { h: [04], m: [30] },
    { h: [05], m: [00] },
    { h: [05], m: [30] },
    { h: [06], m: [00] },
    { h: [06], m: [30] },
    { h: [07], m: [00] },
    { h: [07], m: [30] },
    { h: [08], m: [00] },
    { h: [08], m: [30] },
    { h: [09], m: [00] },
    { h: [09], m: [30] },
    { h: [10], m: [00] },
    { h: [10], m: [30] },
    { h: [11], m: [00] },
    { h: [11], m: [30] },
    { h: [12], m: [00] },
    { h: [12], m: [30] },
    { h: [13], m: [00] },
    { h: [13], m: [30] },
    { h: [14], m: [00] },
    { h: [14], m: [30] },
    { h: [15], m: [00] },
    { h: [15], m: [30] },
    { h: [16], m: [00] },
    { h: [16], m: [30] },
    { h: [17], m: [00] },
    { h: [17], m: [30] },
    { h: [18], m: [00] },
    { h: [18], m: [30] },
    { h: [19], m: [00] },
    { h: [19], m: [30] },
    { h: [20], m: [00] },
    { h: [20], m: [30] },
    { h: [21], m: [00] },
    { h: [21], m: [30] },
    { h: [22], m: [00] },
    { h: [22], m: [30] },
    { h: [23], m: [00] },
    { h: [23], m: [30] }
  ]
})
