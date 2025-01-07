import { Router } from 'express';
const router = Router();

// root Route
router.get('/', (req, res) => {
    res.render('index', { title: 'Snake Game' });
});

// favicon requests
router.get('/favicon.ico', (req, res) => res.sendStatus(204));

export default router;
