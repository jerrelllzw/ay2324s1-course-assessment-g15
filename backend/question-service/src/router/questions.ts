import express from 'express';

import { getAllQuestions, getQuestion, addQuestion, getMatchingFields, updateQuestion, deleteQuestion } from '../controllers/questions';
import { requireAdmin, requireAuth } from '../utils/middleware';

export default (router: express.Router) => {
    router.get('/questions', getAllQuestions);
    router.get('/questions/random', getQuestion);
    router.get('/fields', requireAuth, getMatchingFields);
    router.post('/questions', requireAuth, requireAdmin, addQuestion);
    router.patch('/questions/:id', requireAuth, requireAdmin, updateQuestion);
    router.delete('/questions/:id', requireAuth, requireAdmin, deleteQuestion);
}