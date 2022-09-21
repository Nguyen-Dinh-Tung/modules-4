import jwt from "jsonwebtoken";
export const auth = async (req, res, next) => {
  try {
    let accessToken = req.cookies.access_token;
    if (accessToken) {
      jwt.verify(accessToken, "123456789", (err, decoded) => {
        if (err) {
          return res.redirect('/user/login');
        } else {
          req.decoded = decoded;
          next();
        }
      });
    } else {
      return res.redirect('/user/login');
    }
  } catch (err) {
    return res.status(401).json({
      message: err.message,
      status: 401,
    });
  }
};
