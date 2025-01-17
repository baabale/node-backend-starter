const jwt = require('jsonwebtoken');

exports.guard = (req, res, next) => {
    if (req.headers?.authorization) {
        const token = req.headers.authorization.split(' ')[1];

        if (!token) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        if (!process.env.JWT_SECRET) {
            return res.status(500).json({ message: 'Server error' });
        }

        const decoded = jwt.decode(token);
        if (!decoded) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        req.user = decoded;
        console.log(req.user);
        next();

    } else {
        res.status(401).json({ message: 'Unauthorized' })
    }
}