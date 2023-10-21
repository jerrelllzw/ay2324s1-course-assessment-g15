import express from 'express';

import { getAllQuestions, getQuestion, addQuestion, updateQuestion, deleteQuestion, getQuestionCount } from '../controllers/questions';

export default (router: express.Router) => {
    router.get('/questions', getAllQuestions);
    router.get('/questions/random', getQuestion);
    router.get('/questions/count', getQuestionCount);
    router.post('/questions', addQuestion);
    router.patch('/questions/:id', updateQuestion);
    router.delete('/questions/:id', deleteQuestion);
}