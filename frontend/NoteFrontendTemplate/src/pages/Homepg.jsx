import React from 'react';
import Navbar from '../components/navbar';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Notecard from '../components/Notecard';


const Homepg = () => {
  const[notes, setNotes] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const handleNoteDeleted = (id) => {
  setNotes(prev => prev.filter(note => note._id !== id));
};

// ...
{notes.map(note => (
  <Notecard key={note._id} note={note} onDelete={handleNoteDeleted} />
))}

  useEffect(() => {
  const fetchNotes = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/notes');

      setNotes(response.data); // ✅ response.data contains the notes
    } catch (error) {
      console.error("Error fetching notes:", error);
    } finally {
      setLoading(false);
    }
  };
  fetchNotes();
}, []);




  return (
    <div className="min-h-screen bg-neutral text-neutral-content">
      <Navbar />

      <div className="hero min-h-[80vh] bg-base-100 text-base-content">
        <div className="hero-content text-center">
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold mb-4">Welcome to the PinBoard</h1>
            <p className="mb-6 text-lg">
              A simple note-taking app built with <span className="text-primary font-semibold">React</span> and <span className="text-secondary font-semibold">Node.js</span>.
              Easily create, edit, and manage your notes.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link to="/create" className="btn btn-primary">Create a Note</Link>
            </div>
            <div className="max-w-7xl mx-auto p-4 mt-6">
              
              {!loading && notes.length === 0 && (
                <div className="text-center text-gray-500 py-10">
                  No notes available. Start by creating a new note!
                </div>
              )}
              {notes.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {notes.map(note => (
                    <Notecard key={note._id} note={note} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepg;
