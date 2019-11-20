const validator = require('validator')

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
    const date = moment(data.dob, "DD/MM/YYYY")
    if (!date.isValid()) {
        return {
            type: 'error',
            field: 'dob',
            message: 'The date of birth should be a valid date in the format DD/MM/YYYY'
        }
    }
    if (data.img === "https://via.placeholder.com/100") {
        return {
            type: 'error',
            field: 'image',
            message: 'Please select an image'
        }
    }
    for(let description in data.descriptions){
        console.log(description)
        if(validator.isEmpty(data.descriptions[description])){
            return {
                type: 'error',
                field: 'description',
                message: 'Please check you have entered a description for both languages'
            }
        }
    }
    return {
        type: 'success',
        payload: {
            data: {
                data
            }
        }
        
    }
}