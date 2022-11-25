const {mongoose} = require("./model");
const Joi = require("joi");

const schema = new mongoose.Schema({
    surname: {
        type: String,
        required: true
    },
    givenname: {
        type: String,
        required: true
    },
    title: {
        type: String,
    },
    photo: {
        type: String,
    },
    gender: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    por: {
        type: String,
        required: true
    },
    nationality: {
        type: String,
        require: true
    }

});

exports.validation = (data) => {
    const schema = Joi.object({
        surname: Joi.string().required(),
        givenname: Joi.string().required(),
        title: Joi.string(),
        photo: Joi.string(),
        gender: Joi.string().required(),
        dob: Joi.date().required(),
        country: Joi.string().required(),
        por: Joi.string().required(),
        nationality: Joi.string().required()
    });
    return schema.validate(data);
};

exports.StudentRegisterModel = mongoose.model("Register", schema);