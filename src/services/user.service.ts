import UserModel, { UserSequelizeModel } from '../database/models/user.model';

async function findOne(id: number): Promise<UserSequelizeModel | null> {
  const user = await UserModel.findOne({
    where: { id },
  });

  return user;
}

export default {
  findOne,
};