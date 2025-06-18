import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Createpg = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      setError('Title and content are required');
      return;
    }

    setLoading(true);
    try {
      await axios.post('http://localhost:5000/api/notes', {
        title,
        content,
      });

      toast.success('Note created successfully');
      navigate('/');
    } catch (err) {
      console.error('Error creating note:', err);
      setError('Failed to create note. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral text-neutral-content">
      <div className="max-w-2xl mx-auto p-4">
        <Link to="/" className="btn btn-ghost mb-4">
          <ArrowLeft className="h-6 w-6 text-primary" />
          Back to Home
        </Link>

        <div className="card bg-base-100 shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Create a New Note</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Content</span>
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="textarea textarea-bordered w-full"
                rows="6"
                required
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <button
              type="submit"
              className={`btn btn-primary ${loading ? 'loading' : ''}`}
            >
              {loading ? 'Creating...' : 'Create Note'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Createpg;
