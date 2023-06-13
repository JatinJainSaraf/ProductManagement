export const isAdmin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
      // User is an admin, allow access to the next middleware or route handler
      next();
    } else {
      // User is not an admin, return an error response
      res.status(403).json({ error: 'Access denied' });
    }
  };
  