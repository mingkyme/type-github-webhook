import express, { Request, Response, NextFunction } from 'express';

const app = express();
app.use(express.json());
app.post('/nginx-setting', (req: Request, res: Response) => {
    console.log(req.body)
});

app.listen('5044', () => {
    console.log("ON");
});