const secret_key = "xciteEuduction";
const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  const { token } = req.headers;
  if (token) {
    //code
    try {
      const decoded = await jwt.verify(token, secret_key);
      req.userid = decoded.id;
      next();
    } catch (error) {
      res.status(401).json({ data: "unauthorised" });
    }
  } else {
    res.status(401).json({ data: "unauthorised" });
  }
};

module.exports = { auth };
