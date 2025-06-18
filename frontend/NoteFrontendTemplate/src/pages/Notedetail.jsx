import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Notedetail = () => {
  const [note, setNote] = useState({ title: '', content: '' });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

useEffect(() => {
  const fetchNote = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/notes/${id}`);
      console.log("Fetched note:", response.data); // 👈 DEBUG
      setNote(response.data); // adjust this below if wrapped
    } catch (error) {
      console.error('Error fetching note:', error);
      toast.error('Failed to load note.');
    } finally {
      setLoading(false);
    }
  };
  fetchNote();
}, [id]);


  const handleSave = async (e) => {
    e.preventDefault();

    if (!note.title.trim() || !note.content.trim()) {
      toast.error('Title and content cannot be empty');
      return;
    }

    setSaving(true);
    try {
      await axios.put(`http://localhost:5000/api/notes/${id}`, note);
      toast.success('Note updated successfully');
      navigate('/');
    } catch (error) {
      console.error('Error updating note:', error);
      toast.error('Failed to update note');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-neutral text-neutral-content">
      <div className="max-w-2xl mx-auto p-4">
        <Link to="/" className="btn btn-ghost mb-4">
          <ArrowLeft className="h-6 w-6 text-primary" />
          Back to Home
        </Link>
        <h2 className="text-2xl font-bold mb-4">Edit Note</h2>
        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              value={note.title}
              onChange={(e) => setNote({ ...note, title: e.target.value })}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Content</span>
            </label>
            <textarea
              value={note.content}
              onChange={(e) => setNote({ ...note, content: e.target.value })}
              className="textarea textarea-bordered w-full"
              rows="6"
              required
            />
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" disabled={saving}>
              {saving ? 'Saving...' : 'Save changes'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Notedetail;
