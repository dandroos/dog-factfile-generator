// const Jimp = require('jimp');

// Jimp.read('logo.png').then(logo=>{
//     const sizes = {
//         x: logo.bitmap.width,
//         y: logo.bitmap.height
//     }
//     const borderWidth = 40;
//     new Jimp(sizes.x + (borderWidth / 2), sizes.y + (borderWidth / 2), '#f8f8f8', (err, img)=>{
//         img.composite(logo, ((borderWidth / 2) / 2), ((borderWidth / 2) / 2), ()=>{
//             img.write('testi.jpg')
//         })
//     })
// })
const dataToValidate = {
    name: 'Cambao',
    breed: 'Bardino',
    dob: '01/01/2017',
    date_entered: '01/02/2018',
    ppp: true,
    family: true,
    dogs: false,
    cats: true,
    img: './preview.jpg',
    description: {
      eng: { text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint corrupti asperiores, ullam cupiditate omnis consequuntur excepturi laboriosam hic architecto qui repellat ex sapiente. Nihil quae repellat aliquid non in et nostrum aperiam maiores doloribus aut cumque expedita, ut minima ipsum harum iure tenetur. Cupiditate nesciunt quibusdam deleniti fuga nihil voluptate nam vero! Repellat aut nemo, sed iste modi, ipsa sit consequuntur possimus illum hic nulla, deserunt voluptatibus debitis nisi. Aspernatur, repellendus atque quos sequi error rem veritatis dolores harum nostrum doloremque, sint consectetur molestiae unde necessitatibus optio id ut magnam ea facilis, aut in voluptates provident vel est. Sequi ad nemo repudiandae, dolore libero natus et sed dolorum inventore iure omnis, pariatur magnam ullam quibusdam molestiae cumque cupiditate ipsum corporis autem tenetur quos aliquam. Modi illo repellendus quibusdam sed asperiores voluptatem fugit, delectus ipsa aliquid neque, atque aliquam. Ut voluptatem, corrupti aspernatur voluptate totam aliquid mollitia optio doloremque. In, dolorum.', required: true},
      esp: { text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint corrupti asperiores, ullam cupiditate omnis consequuntur excepturi laboriosam hic architecto qui repellat ex sapiente. Nihil quae repellat aliquid non in et nostrum aperiam maiores doloribus aut cumque expedita, ut minima ipsum harum iure tenetur. Cupiditate nesciunt quibusdam deleniti fuga nihil voluptate nam vero! Repellat aut nemo, sed iste modi, ipsa sit consequuntur possimus illum hic nulla, deserunt voluptatibus debitis nisi. Aspernatur, repellendus atque quos sequi error rem veritatis dolores harum nostrum doloremque, sint consectetur molestiae unde necessitatibus optio id ut magnam ea facilis, aut in voluptates provident vel est. Sequi ad nemo repudiandae, dolore libero natus et sed dolorum inventore iure omnis, pariatur magnam ullam quibusdam molestiae cumque cupiditate ipsum corporis autem tenetur quos aliquam. Modi illo repellendus quibusdam sed asperiores voluptatem fugit, delectus ipsa aliquid neque, atque aliquam. Ut voluptatem, corrupti aspernatur voluptate totam aliquid mollitia optio doloremque. In, dolorum.', required: true},
      deu: { text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint corrupti asperiores, ullam cupiditate omnis consequuntur excepturi laboriosam hic architecto qui repellat ex sapiente. Nihil quae repellat aliquid non in et nostrum aperiam maiores doloribus aut cumque expedita, ut minima ipsum harum iure tenetur. Cupiditate nesciunt quibusdam deleniti fuga nihil voluptate nam vero! Repellat aut nemo, sed iste modi, ipsa sit consequuntur possimus illum hic nulla, deserunt voluptatibus debitis nisi. Aspernatur, repellendus atque quos sequi error rem veritatis dolores harum nostrum doloremque, sint consectetur molestiae unde necessitatibus optio id ut magnam ea facilis, aut in voluptates provident vel est. Sequi ad nemo repudiandae, dolore libero natus et sed dolorum inventore iure omnis, pariatur magnam ullam quibusdam molestiae cumque cupiditate ipsum corporis autem tenetur quos aliquam. Modi illo repellendus quibusdam sed asperiores voluptatem fugit, delectus ipsa aliquid neque, atque aliquam. Ut voluptatem, corrupti aspernatur voluptate totam aliquid mollitia optio doloremque. In, dolorum.', required: false},
      fra: { text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint corrupti asperiores, ullam cupiditate omnis consequuntur excepturi laboriosam hic architecto qui repellat ex sapiente. Nihil quae repellat aliquid non in et nostrum aperiam maiores doloribus aut cumque expedita, ut minima ipsum harum iure tenetur. Cupiditate nesciunt quibusdam deleniti fuga nihil voluptate nam vero! Repellat aut nemo, sed iste modi, ipsa sit consequuntur possimus illum hic nulla, deserunt voluptatibus debitis nisi. Aspernatur, repellendus atque quos sequi error rem veritatis dolores harum nostrum doloremque, sint consectetur molestiae unde necessitatibus optio id ut magnam ea facilis, aut in voluptates provident vel est. Sequi ad nemo repudiandae, dolore libero natus et sed dolorum inventore iure omnis, pariatur magnam ullam quibusdam molestiae cumque cupiditate ipsum corporis autem tenetur quos aliquam. Modi illo repellendus quibusdam sed asperiores voluptatem fugit, delectus ipsa aliquid neque, atque aliquam. Ut voluptatem, corrupti aspernatur voluptate totam aliquid mollitia optio doloremque. In, dolorum.', required: false},
      ita: { text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint corrupti asperiores, ullam cupiditate omnis consequuntur excepturi laboriosam hic architecto qui repellat ex sapiente. Nihil quae repellat aliquid non in et nostrum aperiam maiores doloribus aut cumque expedita, ut minima ipsum harum iure tenetur. Cupiditate nesciunt quibusdam deleniti fuga nihil voluptate nam vero! Repellat aut nemo, sed iste modi, ipsa sit consequuntur possimus illum hic nulla, deserunt voluptatibus debitis nisi. Aspernatur, repellendus atque quos sequi error rem veritatis dolores harum nostrum doloremque, sint consectetur molestiae unde necessitatibus optio id ut magnam ea facilis, aut in voluptates provident vel est. Sequi ad nemo repudiandae, dolore libero natus et sed dolorum inventore iure omnis, pariatur magnam ullam quibusdam molestiae cumque cupiditate ipsum corporis autem tenetur quos aliquam. Modi illo repellendus quibusdam sed asperiores voluptatem fugit, delectus ipsa aliquid neque, atque aliquam. Ut voluptatem, corrupti aspernatur voluptate totam aliquid mollitia optio doloremque. In, dolorum.', required: false}
    }
  }

require('./modules/generatePDF')(dataToValidate, null)