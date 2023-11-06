import express from 'express';
import { getAllQuestions, getQuestion, addQuestion, updateQuestion, deleteQuestion, getQuestionCount, getFilteredQuestion, getAllFilteredQuestions } from '../controllers/questions';
import { requireAdmin, requireAuth } from '../utils/middleware';

export default (router: express.Router) => {
    router.get('/questions', requireAuth, getAllQuestions);
    router.get('/questions/filtered', getFilteredQuestion);
    router.get('/questions/randomfiltered', getQuestion);
    router.get('/questions/allfiltered', getAllFilteredQuestions);
    router.get('/questions/count', requireAuth, getQuestionCount);
    router.post('/questions', requireAuth, requireAdmin, addQuestion);
    router.patch('/questions/:id', requireAuth, requireAdmin, updateQuestion);
    router.delete('/questions/:id', requireAuth, requireAdmin, deleteQuestion);
}