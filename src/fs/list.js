import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const folderPath = path.join(__dirname, 'files');

const list = async () => {
  try {
    await fs.access(folderPath);

    const files = await fs.readdir(folderPath);

    console.log("List of filemanes:", files);
  } catch {
    throw new Error('FS operation failed');
  }};

await list();
