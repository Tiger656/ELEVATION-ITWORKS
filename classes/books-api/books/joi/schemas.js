import Joi from 'joi';
import { getAuthorById } from '../../authors/service.js';
import { getBookById } from '../service.js';

// Custom validation for authorId
async function validateAuthorId(value, helpers) {
  const author = await getAuthorById(value);

  if (!author?.id) {
    // Corrected error reporting
    return helpers.error('any.invalid', { message: 'Author ID is not valid or does not exist' });
  }
  return value; // Return the validated value
}

// Custom validation for bookId
async function validateBookId(value, helpers) {
  const book = await getBookById(value);

  if (!book?.id) {
    // Corrected error reporting
    return helpers.error('any.invalid', { message: 'Book ID is not valid or does not exist' });
  }
  return value; // Return the validated value
}

// Schema to create a new book
export const createBookSchema = Joi.object({
  authorId: Joi.string().required().external(validateAuthorId, 'Author ID validation'),
  price: Joi.number().integer().min(0).required(),
  title: Joi.string().required(),
  description: Joi.string().required(),
});

// Schema to update an existing book
export const updateBookSchema = Joi.object({
  id: Joi.string().required().external(validateBookId, 'Book ID validation'),
  authorId: Joi.string().external(validateAuthorId, 'Author ID validation').optional(),
  price: Joi.number().precision(2).min(0).optional(),
  title: Joi.string().min(3).max(100).optional(),
  description: Joi.string().min(50).max(1000).optional(),
}).min(2); // Ensure at least one optional field is provided



////////////////////////////////////////////////////////

export const createActorSchema = Joi.object({
  //authorId: Joi.string().required().external(validateAuthorId, 'Author ID validation'),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
});

export const createMovieSchema = Joi.object({
  //authorId: Joi.string().required().external(validateAuthorId, 'Author ID validation'),
  title: Joi.string().required(),
  genre: Joi.string().required(),
  year: Joi.string().required(),
  actors: Joi.array().items(Joi.string().external(validateActorId, 'Actor ID validation for in updateMovieSchema')),
});

// Schema to update an existing book
export const updateActorSchema = Joi.object({
  id: Joi.string().required().external(validateActorId, 'Actor ID validation'),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
}); // Ensure at least one optional field is provided

async function validateActorId(value, helpers) {
  const author = await getActorById(value);

  if (!author?.id) {
    // Corrected error reporting
    return helpers.error('any.invalid', { message: 'Author ID is not valid or does not exist' });
  }
  return value; // Return the validated value
}

export const updateMovieSchema = Joi.object({
  id: Joi.string().required().external(validateMovieId, 'Actor ID validation'),
  title: Joi.string().required(),
  genre: Joi.string().required(),
  year: Joi.string().required(),
  actors: Joi.array().items(Joi.string().external(validateActorId, 'Actor ID validation for in updateMovieSchema')),
});

async function validateMovieId(value, helpers) {
  const author = await getMovieById(value);

  if (!author?.id) {
    // Corrected error reporting
    return helpers.error('any.invalid', { message: 'Movie ID is not valid or does not exist' });
  }
  return value; // Return the validated value
}