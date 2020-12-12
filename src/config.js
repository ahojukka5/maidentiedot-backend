import dotenv from 'dotenv';
if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const MODE = process.env.NODE_ENV;
const PORT = process.env.PORT || 3003;

export default { MODE, PORT };
