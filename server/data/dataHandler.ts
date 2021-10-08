import { Recipe } from '.././models/recipesModel';
import { User } from '../models/usersModel';
const fs = require('fs');
const path = require('path');
const pathToUsersJson = path.resolve(__dirname, './users.json');

// Function that updates the users JSON file

const readFile = (): User[] => {
  const users = fs.readFileSync(pathToUsersJson);
  return JSON.parse(users);
};

export const usersJson = readFile();

const writeToFile = (): void => {
  process.nextTick(() => {
    fs.writeFileSync(pathToUsersJson, JSON.stringify(usersJson));
  });
};

// Functions that manipulate users data

export const addUserToJson = (user: User): void => {
  usersJson.push(user);
  writeToFile();
};

export const editUserOnJson = (user): void => {
  const editIndex: number = usersJson.findIndex((u) => u.id === user.id);
  usersJson[editIndex] = user;
  writeToFile();
};

export const delUserFromJson = (id: string): void => {
  const userToDelete: number = usersJson.findIndex((user) => user.id === id);
  usersJson.splice(userToDelete, 1);
  writeToFile();
};

// Functions that manipulate recipes for users

export const findUserOnDb = (id: string): User => {
  const userIndex: number = usersJson.findIndex((user) => user.id === id);
  console.log(usersJson[userIndex]);
  return usersJson[userIndex];
};

export const addRecipeToJson = (id: string, recipe: Recipe): void => {
  readFile();
  const user: User = findUserOnDb(id);
  user.recipes.push(recipe);

  writeToFile();
};
