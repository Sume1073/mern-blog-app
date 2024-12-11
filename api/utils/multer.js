import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from './cloudinary.js';

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'mern-blog', // Cloudinary folder name where images will be stored
    allowed_formats: ['jpeg', 'png', 'jpg'], // Restrict to image formats
  },
});

const upload = multer({ storage });

export default upload;