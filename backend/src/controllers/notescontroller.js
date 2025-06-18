import Note from "../models/Note.js";


export async function getAllnotes(_, res) {
    try {
        const notes = await Note.find().sort({createdat: -1}); // Sort by createdat in descending order
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ message: "Error fetching notes in getAllnotes", error: error.message });
    }
}
export async function getbyid(req, res) {
  try {
    const { id } = req.params;
    const note = await Note.findById(id);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json(note);  // ✅ MUST return note object
  } catch (error) {
    console.error("Error fetching note by ID:", error);
    res.status(500).json({ message: "Error fetching note", error: error.message });
  }
}

export async function createnote(req, res) {
try {
    const { title, content } = req.body;
    const newNote = new Note({ title, content });
    await newNote.save();
    res.status(201).json({
        message: "Note created successfully",
        note: newNote
    });
}catch (error) {
    console.error("Error creating note:", error);
    res.status(500).json({ message: "Error creating note in createnote", error: error.message });
    }
}


export async function updatenote(req, res) {
   try {
    const{title, content} = req.body
    const updatednote =await Note.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
    if (!updatednote) {
        return res.status(404).json({ message: "Note not found" });
    }
    const { id } = req.params;
    res.status(200).json({
        message: "Note updated successfully",
        noteId: id
    });
}catch (error) {
    console.error("Error updating note:", error);
    res.status(500).json({ message: "Error updating note in updatenote", error: error.message });
    }}



export async function deleteNote(req, res) {
   try{
    const { id } = req.params;
    const deletedNote = await Note.findByIdAndDelete(id);
    if (!deletedNote) {
        return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json({
        message: "Note deleted successfully",
        noteId: id
    });
   } catch (error) {
    console.error("Error deleting note:", error);
    res.status(500).json({ message: "Error deleting note in deleteNote", error: error.message });
   }
}