import { Request, Response, NextFunction } from 'express';

const verifyLogin = async (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;

  if (!username || !password || username.length < 1 || password.length < 1) {
    return res.status(400).json({ message: '"username" and "password" are required' });
  }

  next();
};

export default verifyLogin;
