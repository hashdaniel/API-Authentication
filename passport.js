const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy,
      ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('./models/user');
const { JWT_SECRET } = require('./config');

passport.use(new JwtStrategy({
JwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretorKey: JWT_SECRET
},async (payload, done)=>{
     try{
       const user = await User.findByid(payload.sub);
       if(!user){
       return done(null, false);
     }
     done(error,false);
   } catch(error){
     done(error, false);
   }

  }));
