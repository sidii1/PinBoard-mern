import React from 'react';

const Navbar = () => {
  return (
    <header className="navbar bg-neutral text-neutral-content px-4 shadow-md">
      <div className="flex-1">
        <a className="btn btn-ghost text-2xl font-bold"> 📌 PinBoard</a>
      </div>
      <div className="flex-none gap-4">
        <ul className="menu menu-horizontal px-1">
          <li><a href="/">Home</a></li>
          <li><a href="/create">Create</a></li>
        </ul>
        <button className="btn btn-accent">Login</button>
      </div>
    </header>
  );
};

export default Navbar;
