const jwt = require('jsonwebtoken');

let checkAuth = (req, res, next) => {
    let token = req.get('token');
    jwt.verify(token, 'colapp', (err, decoded) => {
        if (err) {
            return res.json({
                success: false,
                err
            })
        }
        req.user = decoded.usuario
        next();
    })
};

module.exports = { checkAuth };
