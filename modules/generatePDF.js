const PDFDocument = require('pdfkit');
const fs = require('fs')

module.exports = (data, filePath) => {
    // console.log(data)

    const font = {
        regular: '.fonts/Almarai-Light.ttf',
        bold: '.fonts/Almarai-ExtraBold.ttf'
    }

    const doc = new PDFDocument({
        size: 'A4'
    });

    const margins = {
        x: doc.page.margins.left - 1,
        y: doc.page.margins.top - 1
    }
    pageWidth = Math.round(doc.page.width) - (margins.x * 2);

    doc.pipe(fs.createWriteStream('./everywhere1.pdf'))
    // doc.pipe(fs.createWriteStream(filePath));
    doc

        .image(data.img, margins.x, margins.y, { fit: [pageWidth, 200], align: 'right' })
        .image('logo.png', { width: 120 })
        .moveDown()
        .font(font.bold)
        .fontSize(35)
        .text(data.name)
        .font(font.regular)
        .fontSize(25)
        .text(data.breed)
        .moveDown()
        .image('.images/thin_line.png', { width: pageWidth })
        .font(font.bold)
        .fillColor('grey')
        .fontSize(10)
        .text('Date of Birth / Fecha de nacimiento', {
            continued: true
        })
        .text('Date entered / Fecha de ingreso', { align: 'right' })
        .font(font.regular)
        .fillColor('black')
        .fontSize(16)
        .text(data.dob, { continued: true })
        .text(data.date_entered, { align: 'right' })
        .image('.images/thin_line.png', { width: doc.page.width - (margins.x * 2) })
        .moveDown()
        .fontSize(10)
        // TODO: Put this in a list instead
        // .text('PPP (perros potencialmente peligrosas)')
        .image('.images/spanish.png', { fit: [pageWidth, 20], align: 'center' })
        .moveDown()
        .text(data.description.esp.text, { align: 'justify' })
        .moveDown()
        .image('.images/english.png', { fit: [pageWidth, 20], align: 'center' })
        .moveDown()
        .text(data.description.eng.text, { align: 'justify' })
        .moveDown()
        if(data.ppp){
            doc.image('.images/thin_line.png', { width: doc.page.width - (margins.x * 2) })
            .font(font.bold)
            .fillColor('red')
            .fontSize(10)
            .text('IMPORTANTE', {
                align: 'center'
            })
            .image('.images/thin_line.png', { width: doc.page.width - (margins.x * 2) })
            .font(font.regular)
            .fontSize(8)
            .fillColor('black')
            .text(`${data.name} está clasificado como PPP (perro pontencialmente peligroso) por la ley española debido a la raza. Necesitará una licencia para tener la propiedad. Pídanos más información sobre los requisitos.`, {align: 'center'})
            .moveDown()
            .text(`${data.name} is classfied as a PPP (perro pontencialmente peligroso) by Spanish law due to the breed. You will need a licence to have ownership. Please ask us for more information about the requirements.`, {align: 'center'})
        }else{
            doc.image('.images/thin_line.png', { width: doc.page.width - (margins.x * 2) })
            .font(font.bold)
            .fontSize(10)
            .text('MÁS INFORMACIÓN?', {
                align: 'center'
            })
            .image('.images/thin_line.png', { width: doc.page.width - (margins.x * 2) })
            .font(font.regular)
            .fontSize(8)
            .fillColor('black')
            .text(`Si desea obtener más información sobre ${data.name}, consulte a cualquiera de los voluntarios. Han pasado tiempo con ${data.name} y pueden ser abe para dar más información sobre el comportamiento del perro.`, {align: 'center'})
            .moveDown()
            .text(`If you would like more information about ${data.name}, please ask any of the volunteers. They have spent time with ${data.name} and may be abe to give more insight to the behaviour of the dog.`, {align: 'center'})
        }
        

    doc.end()

}

// Object
// data:
// breed: "German Shepherd"
// cats: false
// date_entered: "10/11/2019"
// description:
// deu: {text: "", required: false}
// eng: {text: "Testing this out", required: true}
// esp: {text: "este", required: true}
// fra: {text: "", required: false}
// ita: {text: "", required: false}
// __proto__: Object
// dob: "01/01/2018"
// dogs: false
// family: false
// img: "file:///home/david/projects/dog-factfile-generator/.cache/6kpn3b1k38k7627.jpg"
// name: "Bruno"
// ppp: true
// __proto__: Object