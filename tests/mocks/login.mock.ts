const hashedPassword = '$2a$10$4/0V9SwEV3PXpwqMcf/tt.Jjfjfl6nv6QpItJnUd7u4/VRv7wVF3a';

const validLoginBody = {
  username: 'Eddie',
  password: 'sortudo'
};

const invalidKeyUsernameBody = {
  usernam: 'Eddie',
  password: 'sortudo'
};

const invalidKeyPasswordBody = {
  username: 'Eddie',
  passwor: 'sortudo'
};

const invalidUsernameBody = {
  username: 'Ed',
  password: 'sortudo'
};

const invalidPasswordBody = {
  username: 'Eddie',
  password: 'sortu'
};

const existingUser = { 
  id: 2,
  username: 'Eddie',
  vocation: 'Guerreiro',
  level: 8,
  password: hashedPassword
};

const messageNotExist = { message: 'Username or password invalid' }

const messageKeyNotExist = { message: '"username" and "password" are required' }

export default {
  validLoginBody,
  existingUser,
  invalidKeyUsernameBody,
  invalidKeyPasswordBody,
  invalidUsernameBody,
  invalidPasswordBody,
  messageNotExist,
  messageKeyNotExist
}
