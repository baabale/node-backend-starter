exports.allowedRoles = (...roles) => {
    return (req, res, next) => {
        if(!req.user) return res.status(401).json({ message: 'Unauthorized' });

        if (!roles.includes(req.user.role)) {
            console.log('You must be an admin', req.user.role, roles);
            return res.status(403).json({ message: 'Unauthorized' })
        }

        next();
    }
}