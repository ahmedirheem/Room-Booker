import path from 'path';

import { dirname } from 'path';
import { fileURLToPath } from 'url'

const adminDashboard = (req, res) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'room', 'index.html'))
};
export default adminDashboard