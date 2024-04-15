const { config } = require('dotenv');
const jwt = require('jsonwebtoken');
config();

const SECRET = process.env.SECRET;


const verifyToken = async (req, res, next) => {
    const token = req.headers.authorization;
    // console.log(token);
    if (!token) {
        return res.status(401).json({
            msg: "Authorization token is missing"
        });
    }

    jwt.verify(token, SECRET, async (err, decodedToken) => {
        if (err) {
            return res.status(403).json({
                msg: "Invalid token"
            })
        }
        req.userId = decodedToken.user.id;
        next();
    })
}

module.exports = {
    verifyToken
}