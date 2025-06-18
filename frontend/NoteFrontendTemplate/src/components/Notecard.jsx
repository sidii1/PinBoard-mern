import React from 'react';
import { Link } from 'react-router-dom';
import { PenSquareIcon, Trash2Icon } from 'lucide-react';
import { toast } from 'react-toastify';
import axios from 'axios';

const Notecard = ({ note, onDelete }) => {
  const handleDelete = async (e) => {
    e.preventDefault();

    if (!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/notes/${note._id}`);
      toast.success("Note deleted successfully");

      if (onDelete) onDelete(note._id); 
    } catch (error) {
      console.error("Error deleting note:", error);
      toast.error("Failed to delete note");
    }
  };

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 shadow-blue-300">

      <div className="card-body">
        {/* View Link */}
        <Link to={`/note/${note._id}`}>
          <h2 className="card-title text-lg font-semibold">{note.title}</h2>
          <p className="text-sm text-base-content">{note.content}</p>
        </Link>

        <div className="card-actions justify-between items-center mt-4">
          <span className="text-xs text-gray-400">
            {new Date(note.createdat || note.createdAt).toLocaleString()}
          </span>

          <div className="flex gap-2">
            {/* Edit Button */}
            <Link to={`/note/${note._id}`} className="btn btn-sm btn-outline">
              <PenSquareIcon className=" h-5 w-5 text-blue-500" />
            
            </Link>

            {/* Delete Button */}
            <button
              className="btn btn-sm btn-outline btn-error"
              onClick={handleDelete}
            >
              <Trash2Icon className="h-5 w-5 text-red-500" />
            
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notecard;
