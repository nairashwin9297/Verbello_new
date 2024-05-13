// middleware/authenticateUser.js
const authenticateUser = (req, res, next) => {
  console.log('Checking')
  console.log(req.session,'SESSION')
  console.log(req?.session?._id,'USERRR')
  console.log(req?.session?.fullName,'Name')
    if (req.session && req.session._id) {
      // User is authenticated
      console.log('valid user')
      // console.log(req.sesssion.user)
      next();
    } else {
      // User is not authenticated
      console.log('Unauthorized')
      res.status(401).json({ error: 'Unauthorized' });
    }
  };
  
  module.exports = authenticateUser;