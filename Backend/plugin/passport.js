module.exports = passport =>{

    const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
    const mongoose = require('mongoose');
    require('../models/User');
    const User = mongoose.model('User');
    const JWTKEY = require('./config/jwtkey');
    const opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = JWTKEY.KEY;

    passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
        console.log(jwt_payload);
        try {
          const user = await User.findById(jwt_payload.id);
          if (user) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        } catch (error) {
          console.error(error.message);
          return done(error, false);
        }
      }));

}