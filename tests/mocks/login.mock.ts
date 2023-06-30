import { expression } from "joi";

const validPassword = 'terrível';
const validUsername = 'Hagar';
const invalidUsername = 'Juma Maruaba';

const noUsernameLoginBody = {
  password: validPassword,
};

const noPasswordLoginBody = {
  username: validUsername,
};

const wrongUsernameLoginBody = {
  username: invalidUsername,
  password: validPassword,
}

const validLoginBody = {
  username: validUsername,
  password: validPassword,
}

const userFoundReturned = {
  id: 1,
  username: 'Hagar',
  vocation: 'Guerreiro',
  level: 10,
  password: '$2a$10$iPGk0HhhF0msK.Yz94CwIe8aTH5Od7zNGglPtdh2kEsNrWi80ZfBW'
}

export default {
  noUsernameLoginBody,
  noPasswordLoginBody,
  wrongUsernameLoginBody,
  validLoginBody,
  userFoundReturned,
};