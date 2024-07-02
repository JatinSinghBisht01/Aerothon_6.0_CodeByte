const cookieSession = require('cookie-session');

module.exports = cookieSession({
  name: 'session',
  keys: [process.env.SESSION_SECRET],
  maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
});
