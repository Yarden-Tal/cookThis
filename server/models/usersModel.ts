import { Recipe } from '../models/recipesModel';

export class User {
  id: string;
  name: string;
  imageUrl: string;
  email: string;
  password: string;
  recipes: Recipe[];
  constructor(
    name: string,
    imageUrl: string,
    email: string,
    password: string,
    recipes: Recipe[]
  ) {
    this.id = Math.random().toString(16);
    this.name = name;
    this.imageUrl = imageUrl;
    this.email = email;
    this.password = password;
    this.recipes = recipes;
  }
}
