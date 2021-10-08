import { Request, Response } from 'express';
import {
  usersJson,
  findUserOnDb,
  addRecipeToJson,
} from '../../data/dataHandler';
import { User } from '../../models/usersModel';
import { Recipe } from '../../models/recipesModel';

// Get recipes for a user ** WORKS **

export const getUserRecipes = (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const user: User = findUserOnDb(userId);
    res.status(200).send(user.recipes);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Add recipe

export const postRecipe = (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const user: User = findUserOnDb(userId);
    const data = req.body;
    const { name, prepTime, difficulty, imageUrl, ingredients, instructions } =
      data;
    if (
      !name ||
      !prepTime ||
      !difficulty ||
      !imageUrl ||
      !ingredients ||
      !instructions
    ) {
      return res.status(400).send('Invalid params');
    }
    const newRecipe = new Recipe(
      name,
      prepTime,
      difficulty,
      imageUrl,
      ingredients,
      instructions
    );
    addRecipeToJson(userId, newRecipe);
    res.status(201).send(newRecipe);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Edit recipe

export const putRecipe = (req, res) => {
  try {
    const { truckId } = req.params;
    if (!truckId) return res.status(404).send('Id not found');
    const data = req.body;
    const { type, price, image } = data;

    if (!type || !price || !image)
      return res.status(400).send('Invalid params');
    console.log('Data for PUT:', type, price, image);
    const truck: Truck = { type, price, image, id: truckId };
    const trucksAfterEdit = editTruck(truck);
    res.status(200).send(trucksAfterEdit);
    console.log('After edit:', trucksAfterEdit);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Delete recipe

export const deleteRecipe = (req, res) => {
  try {
    const { truckId } = req.params;
    if (!truckId) return res.status(404).send('Id not found');
    const trucksAfterDelete = deleteTruck(truckId);
    if (trucksAfterDelete === false)
      return res.status(404).send('Not deleted!');
    res.status(204).send(readAllTrucks());
  } catch (error) {
    res.status(500).send(error.message);
  }
};
