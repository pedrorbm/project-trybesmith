import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';
import { Response } from '../types/Response';
import { UserParameter } from '../types/User';
import jwtUtil from '../utils/jwt.util';
import { Token, Message } from '../types/Token';

const findUser = async (object: UserParameter)
: Promise<Response<Token | Message>> => {
  const user = await UserModel.findOne(
    { where: { username: object.username } },
  );

  if (!user || !bcrypt.compareSync(object.password, user.dataValues.password)) {
    return { status: 401, data: { message: 'Username or password invalid' } };
  }

  const { id, username } = user.dataValues;

  const token = jwtUtil.sign({ id, username });

  return {
    status: 200,
    data: { token },
  };
};

export default {
  findUser,
};
