import express from 'express';
import { createnote, getAllnotes, updatenote,deleteNote,getbyid } from '../controllers/notescontroller.js';
const router = express.Router();

router.get('/', getAllnotes);
router.get('/:id', getbyid);
router.post('/', createnote);
router.put('/:id',updatenote);
router.delete("/:id",deleteNote); 

export default router;
