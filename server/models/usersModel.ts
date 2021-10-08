const { v4: uuidv4 } = require('uuid');
import { Recipes } from '../models/recipesModel';

export class User {
  id: string;
  name: string;
  email: string;
  password: string;
  recipes: Recipes;
  imageUrl?: string;
  constructor(
    name: string,
    email: string,
    password: string,
    recipes: Recipes,
    imageUrl?: string
  ) {
    this.id = uuidv4();
    this.name = name;
    this.email = email;
    this.password = password;
    this.recipes = recipes;
    this.imageUrl = imageUrl;
  }
}

export class Users {
  users: User[];
  constructor() {
    this.users = [];
  }
}
