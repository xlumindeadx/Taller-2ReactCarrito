import React from "react";

export const Content = () => {
  return (

    <div className="container my-4">
    <div className="row">
      
    <div className="col-md-4"> {/*Columna izquierda*/}
    <div className="card shadow-sm mb-3">
    <div className="card-header bg-dark text-white">
      Agregar producto
    </div>
    <div className="card-body">

        {/* Nombre */}
        <div className="mb-3">
        <label className="form-label">Nombre del producto</label>
        <input
                type="text"
                className="form-control"
                placeholder="Ej: Bebida Monster Energy"
                />
        <small className="text-muted">Nombre visible en la tarjeta.</small>
        </div>

        {/* Precio y Stock */}
          <div className="row">
          <div className="col-md-6 mb-3">
          <label className="form-label">Precio (COP)</label>
          <input type="number" className="form-control" placeholder="$$$" />
          </div>

          <div className="col-md-6 mb-3">
          <label className="form-label">Stock</label>
          <input type="number" className="form-control" placeholder="10" />
          </div>
          </div>

        {/* Img */}
          <div className="mb-3">
          <label className="form-label">URL de imagen</label>
          <input type="text" className="form-control" placeholder="https://..." />
          </div>

        {/* Descri*/}
          <div className="mb-3">
          <label className="form-label">Descripción</label>
          <textarea
                className="form-control"
                rows="3"
                placeholder="Detalles del producto..."
                ></textarea>
          </div>

        {/* Botones */}
            <div className="d-flex gap-2">
              <button className="btn btn-success">Agregar al catálogo</button>
              <button className="btn btn-outline-secondary">Limpiar</button>
            </div>
            </div>
            </div>
            </div>

      <div className="col-md-8">{/*columna derecha */}
      <h4 className="fw-bold mb-3">Productos</h4>
      <div className="row g-3">

        {/* Producto 1 */}
            <div className="col-md-6 col-lg-4">
            <div className="card shadow-sm">
                <img src="/img/p1.jpg" className="card-img-top" />
            <div className="card-body">
                <h5 className="fw-bold">Ultra Rosa</h5>
                <p className="text-muted">COP $10.900</p>
                <span className="badge bg-success mb-2">En stock</span>
            <div className="d-flex gap-2 mt-2">
                <button className="btn btn-primary btn-sm">Editar</button>
                <button className="btn btn-danger btn-sm">Eliminar</button>
            </div>
            </div>
            </div>
            </div>

        {/* Producto 2 */}
            <div className="col-md-6 col-lg-4">
            <div className="card shadow-sm">
                <img src="/img/p2.jpg" className="card-img-top" />
            <div className="card-body">
                <h5 className="fw-bold">Zero Ultra</h5>
                <p className="text-muted">COP $9.000</p>
                <span className="badge bg-warning mb-2">Pocas unidades</span>
            <div className="d-flex gap-2 mt-2">
                <button className="btn btn-primary btn-sm">Editar</button>
                <button className="btn btn-danger btn-sm">Eliminar</button>
            </div>
            </div>
            </div>
            </div>

        {/* Producto 3 */}
            <div className="col-md-6 col-lg-4">
            <div className="card shadow-sm">
                <img src="/img/p5.jpg" className="card-img-top" />
            <div className="card-body">
                <h5 className="fw-bold">Ultra Blue</h5>
                <p className="text-muted">COP $10.000</p>
                <span className="badge bg-secondary mb-2">Agotado</span>
            <div className="d-flex gap-2 mt-2">
                <button className="btn btn-primary btn-sm">Editar</button>
                <button className="btn btn-danger btn-sm">Eliminar</button>
            </div>
            </div>
            </div>
            </div>

        {/* Producto 4 */}
            <div className="col-md-6 col-lg-4">
            <div className="card shadow-sm">
                <img src="/img/p10.jpg" className="card-img-top" />
            <div className="card-body">
                <h5 className="fw-bold"> Monster Energy Juiced</h5>
                <p className="text-muted">COP $9.000</p>
                <span className="badge bg-secondary mb-2">Agotado</span>
            <div className="d-flex gap-2 mt-2">
                <button className="btn btn-primary btn-sm">Editar</button>
                <button className="btn btn-danger btn-sm">Eliminar</button>
            </div>
            </div>
            </div>
            </div>

        {/* Producto 5 */}
            <div className="col-md-6 col-lg-4">
            <div className="card shadow-sm">
                <img src="/img/910.jpg" className="card-img-top" />
            <div className="card-body">
                <h5 className="fw-bold">Assault Energy</h5>
                <p className="text-muted">COP $9.000</p>
                <span className="badge bg-secondary mb-2">Agotado</span>
            <div className="d-flex gap-2 mt-2">
                <button className="btn btn-primary btn-sm">Editar</button>
                <button className="btn btn-danger btn-sm">Eliminar</button>
            </div>
            </div>
            </div>
            </div>

        {/* Producto 6 */}
            <div className="col-md-6 col-lg-4">
            <div className="card shadow-sm">
                <img src="/img/p8.jpg" className="card-img-top" />
            <div className="card-body">
                <h5 className="fw-bold">Mango Loco</h5>
                <p className="text-muted">COP $10.900</p>
                <span className="badge bg-warning mb-2">Pocas unidades</span>
            <div className="d-flex gap-2 mt-2">
                <button className="btn btn-primary btn-sm">Editar</button>
                <button className="btn btn-danger btn-sm">Eliminar</button>
            </div>
            </div>
            </div>
            </div>
      </div>
      </div>
      </div>
      </div>
  );
};