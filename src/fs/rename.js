import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const folderPath = path.join(__dirname, 'files');
const oldFilePath = path.join(folderPath, 'wrongFilename.txt');
const newFilePath = path.join(folderPath, 'properFilename.md');

const rename = async () => {
 try {
    await fs.access(oldFilePath);

    try {
      await fs.access(newFilePath);
      
      throw new Error('FS operation failed');
    } catch (error) {
      if (error.code !== 'ENOENT') throw new Error('FS operation failed');
    }

    await fs.rename(oldFilePath, newFilePath);

  } catch {
    throw new Error('FS operation failed');
  }};

await rename();
