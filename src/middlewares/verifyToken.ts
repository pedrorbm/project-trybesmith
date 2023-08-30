import { Request, Response, NextFunction } from 'express';
import jwt from '../utils/jwt.util';

const extractToken = (bearerToken: string) => bearerToken.split(' ')[1];

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  const bearerToken = req.header('Authorization');

  if (!bearerToken) return res.status(401).json({ message: 'Token not found' });

  const token = extractToken(bearerToken);

  try {
    jwt.verify(token);
    
    next();
  } catch (e) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default verifyToken;
