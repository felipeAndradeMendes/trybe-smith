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

export default {
  noUsernameLoginBody,
  noPasswordLoginBody,
  wrongUsernameLoginBody,
};