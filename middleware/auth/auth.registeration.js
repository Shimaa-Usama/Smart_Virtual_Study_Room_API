const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {

    const token = req.header("token");
    try {
        if (token && token != null && token != undefined) {
            jwt.verify(token, 'secret', (err, decoded) => {
                if (err) {
                    res.json({ message: " token error" })
                } else {
                    if (decoded.isLoggedIn) {

                        req.userName = decoded.userName;
                        req.userID = decoded.user_id;
                        req.role = decoded.userRole;
                        next();

                    } else {
                        res.json({ message: "u need to login first " })

                    }
                }
            });
        } else {
            res.json({ message: "invaild token" })
        }
    } catch (error) {
        res.json({ mesaage: "catch error" })
    }
}