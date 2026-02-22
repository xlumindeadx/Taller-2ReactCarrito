import React from "react";

export const Header = () => {
  return (
    <header className="sticky-top">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
    <div className="container">

      <a className="navbar-brand" href="/">
      <h1 className="h4 mb-0">Carrito </h1>
      </a>

    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      >
    <span className="navbar-toggler-icon"></span>
    </button>

      <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
    <li className="nav-item">
    <a className="nav-link" href="/">Inicio</a>
    </li>
    <li className="nav-item">
    <a className="nav-link" href="/article">Articulos</a>
    </li>
    <li className="nav-item">
    <a className="nav-link" href="/props">Props</a>
    </li>
      </ul>
    </div>
    </div>
    </nav>
    </header>
  );
};

