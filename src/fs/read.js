import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
try {
    await fs.access(filePath);

    const content = await fs.readFile(filePath, 'utf8');

    console.log(content);
  } catch {
    throw new Error('FS operation failed');
  }};

await read();
