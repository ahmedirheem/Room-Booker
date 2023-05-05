import express from 'express';
import {} from 'dotenv/config';
import router from './router.js';

const app = express()

app.set('PORT', process.env.PORT || 3000)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(router)

app.listen(app.get('PORT'), () => {
  console.log(`Server is Running on http://localhost:${app.get('PORT')}`);
})


