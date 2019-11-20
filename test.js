const Jimp = require('jimp');

Jimp.read('logo.png').then(logo=>{
    const sizes = {
        x: logo.bitmap.width,
        y: logo.bitmap.height
    }
    const borderWidth = 40;
    new Jimp(sizes.x + (borderWidth / 2), sizes.y + (borderWidth / 2), '#f8f8f8', (err, img)=>{
        img.composite(logo, ((borderWidth / 2) / 2), ((borderWidth / 2) / 2), ()=>{
            img.write('testi.jpg')
        })
    })
})
