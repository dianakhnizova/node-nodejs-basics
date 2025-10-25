import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcFolder = path.join(__dirname, "files");
const destFolder = path.join(__dirname, "files_copy");

const copy = async () => {
  try {
    await fs.access(srcFolder);

    try {
      await fs.access(destFolder);

      throw new Error("FS operation failed");
    } catch (error) {
      if (error.code !== "ENOENT") throw new Error("FS operation failed");
    }

    await fs.mkdir(destFolder);

    const files = await fs.readdir(srcFolder);

    for (const file of files) {
      const srcPath = path.join(srcFolder, file);
      const destPath = path.join(destFolder, file);

      await fs.copyFile(srcPath, destPath);
    }
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await copy();
