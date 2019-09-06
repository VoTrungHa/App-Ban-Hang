var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
    const use=require('../models/models_use')
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';
 module.exports=(passport)=>{
passport.use(new JwtStrategy(opts, function(jwt_payload,done) {
    use.findById(jwt_payload._id,function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false); 
        }
    });
}));
 }