const { v4: uuidv4 } = require('uuid');

export enum Difficulty {
  easy = 'easy',
  medium = 'medium',
  hard = 'hard',
}

export interface Ingredients {
  ingredients: (string | number)[];
}

export class Recipe {
  id: string;
  name: string;
  prepTime: number;
  difficulty: Difficulty;
  imageUrl: string;
  ingredients: Ingredients;
  instructions: string;

  constructor(
    name: string,
    prepTime: number,
    difficulty: Difficulty,
    imageUrl: string,
    ingredients: Ingredients,
    instructions: string
  ) {
    this.id = uuidv4();
    this.name = name;
    this.prepTime = prepTime;
    this.difficulty = difficulty;
    this.imageUrl = imageUrl;
    this.ingredients = ingredients;
    this.instructions = instructions;
  }
}

export type Recipes = Recipe[];
