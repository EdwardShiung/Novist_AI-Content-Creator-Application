const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    identity:{
        type: String,
        required: true
    },
    date:{
        type: String,
        default: Date.now
    },
}, { toJSON: { virtuals: true } });

UserSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

module.exports = mongoose.model('User', UserSchema);