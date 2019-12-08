const validator = require('validator')
const moment = require('moment')

module.exports = (data) => {
    if (!validator.isLength(data.name, {
        min: 2,
        max: 18
    })) {
        return {
            type: 'error',
            field: 'name',
            message: 'The name should be between 2 and 18 characters'
        }
    }
    if (!validator.isLength(data.breed, {
        min: 2,
        max: 25
    })) {
        return {
            type: 'error',
            field: 'breed',
            message: 'The breed should be between 2 and 25 characters'
        }
    }
    let date = moment(data.dob, "DD/MM/YYYY")
    if (!date.isValid()) {
        return {
            type: 'error',
            field: 'dob',
            message: 'The date of birth should be a valid date in the format DD/MM/YYYY'
        }
    }
    date = moment(data.date_entered, "DD/MM/YYYY")
    if ((!date.isValid()) || date.isAfter()){
        return {
            type: 'error',
            field: 'date_entered',
            message: 'The date entered should be a valid date in the format DD/MM/YYYY and before today'
        }
    }
        if (data.img === "https://via.placeholder.com/100") {
            return {
                type: 'error',
                field: 'pic',
                message: 'Please select an image'
            }
        }
    for (let description in data.description) {
        console.log(description)
        if (validator.isEmpty(data.description[description].text) && data.description[description].required) {
            return {
                type: 'error',
                field: 'edit-language',
                message: 'Please check you have entered a description for English and Spanish languages'
            }
        }
    }
    return {
        type: 'success',
        data: {
            data
        }

    }
}