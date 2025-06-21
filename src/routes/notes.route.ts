import express, { Router } from "express";
import catchAsyncError from "../utils/catchAsync";
import noteController from "../controllers/notes.controller";
const router: Router = express.Router();
router.route('/notes')
.post(catchAsyncError(noteController.createNote))
.get(catchAsyncError(noteController.getNotes));
router.route('/notes/:id')
.patch(catchAsyncError(noteController.updateNote)).
delete(catchAsyncError(noteController.deleteNote));

export default router;