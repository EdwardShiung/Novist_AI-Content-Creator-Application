module.exports = async app => {
    const mongoose = require('mongoose');
    try {
        await mongoose.connect('mongodb://localhost:27017/Novist');
        console.log('MongoDB Connected.')
    } catch (error) {
        console.log(error);
    }
}