import { Request, Response } from 'express';
import {
  usersJson,
  addUserToJson,
  editUserOnJson,
  delUserFromJson,
} from '../../data/dataHandler';
import { RecipeList } from '../../models/recipesModel';
import { User } from '../../models/usersModel';

// Show all users ** WORKS **

export const getAllUsers = (req: Request, res: Response) => {
  try {
    res.status(200).send(usersJson);
  } catch (error) {
    console.log(error.message);
  }
};

// Add user (sign up) ** WORKS **

type UserInput = {
  name: string;
  email: string;
  password: string;
  recipes: RecipeList;
  imageUrl: string;
};

export const registerUser = (req: Request, res: Response) => {
  try {
    const { name, email, password, recipes, imageUrl }: UserInput = req.body;
    if (!name || !email || !password) {
      return res.status(400).send('Invalid params');
    }
    const newUser = new User(name, email, password, recipes, imageUrl);
    addUserToJson(newUser);
    res.status(201).send({ newUser });
  } catch (error) {
    console.log(error.message);
  }
};

// Edit user (change username) ** WILL WAIT FOR F END **
export const editUser = (req: Request<{ userId: string }>, res: Response) => {
  try {
    // const { userId } = req.params;
    // if (!userId) return res.status(404).send('Id not found');
    // const data = req.body;
    // const { name, imageUrl } = data;
    // if (!name && !imageUrl) return res.status(404).send('No params found');
    // const user = { name, imageUrl };
    // editUserOnJson(user);
    // res.status(200);
  } catch (error) {
    console.log(error.message);
  }
};

// Delete user (close account) ** WORKS **
export const deleteUser = (req: Request<{ userId: string }>, res: Response) => {
  try {
    const { userId } = req.params;
    if (!userId) return res.status(404).send('Id not found');
    delUserFromJson(userId);
    res.status(204).send({ ok: true });
  } catch (error) {
    console.log(error.message);
  }
};
