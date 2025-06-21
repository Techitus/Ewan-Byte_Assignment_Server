import { Request, Response } from "express";
import { sendResponse } from "../utils/send.response";
import noteSchema from "../database/schemas/notes.schema";

class noteController {
    public static async createNote(req:Request,res:Response):Promise<void>{
        const { title, content } = req.body;
        try{
            if (!title) {
                sendResponse(res, 400, "Title is required 😒");
                return;
            }
         await noteSchema.create({ title,content})
            sendResponse(res, 201, "Note created successfully 😍");
            

        }catch(error){
            sendResponse(res, 500, "Internal Server Error 😩", error);
        }

    }

    public static async getNotes(req:Request,res:Response):Promise<void>{
        try{
            const notes = await noteSchema.find();
            sendResponse(res, 200, "Notes fetched successfully 😍", notes);
        }catch(error){
            sendResponse(res, 500, "Internal Server Error 😩", error);
        }
    }
    public static async updateNote(req:Request,res:Response):Promise<void>{
        const { id } = req.params;
        const { title, content } = req.body;
        try {
            const note = await noteSchema.findByIdAndUpdate(id, { title, content }, { new: true });
            if (!note) {
                sendResponse(res, 404, "Note not found 😢");
                return;
            }
            sendResponse(res, 200, "Note updated successfully 😍", note);
        } catch (error) {
            sendResponse(res, 500, "Internal Server Error 😩", error);
        }   
    }
    public static async deleteNote(req:Request,res:Response):Promise<void>{
        const { id } = req.params;
        try {
            const note = await noteSchema.findByIdAndDelete(id);
            if (!note) {
                sendResponse(res, 404, "Note not found 😢");
                return;
            }
            sendResponse(res, 200, "Note deleted successfully 😍");
        } catch (error) {
            sendResponse(res, 500, "Internal Server Error 😩", error);
        }
    }
}

export default noteController;