import express from 'express';
import upload from '../utils/multer.js';
import User from '../models/user.model.js'; // Adjust path if needed

const router = express.Router();

// Endpoint to handle file uploads
router.post('/', upload.single('file'), async (req, res) => {
  try {
    const { userId } = req.body; // Frontend should send userId
    const fileUrl = req.file.path; // Cloudinary URL

    // Save the URL to the user's profile in the database
    if (userId) {
      await User.findByIdAndUpdate(userId, { profilePicture: fileUrl });
    }

    res.status(200).json({ success: true, url: fileUrl });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

export default router;
