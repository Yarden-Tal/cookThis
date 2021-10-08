"use strict";
exports.__esModule = true;
exports.recipeSchemaAJV = void 0;
exports.recipeSchemaAJV = {
    type: 'object',
    properties: {
        name: { type: 'string' },
        prepTime: { type: 'number' },
        difficulty: { type: 'string', valid: ['easy', 'medium', 'difficult'] },
        imageUrl: { type: 'string' },
        ingredients: { type: 'array' },
        instructions: { type: 'string', maxLength: 200 }
    },
    required: [
        'name',
        'prepTime',
        'difficulty',
        'imageUrl',
        'ingredients',
        'instructions',
    ],
    additionalProperties: false
};
