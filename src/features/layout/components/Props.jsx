import React from 'react'

export function getImageUrl(person, size = 's') {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    size +
    '.jpg'
  );
}

//Elpadre
function Avatar({ person, size }) {
  return (
    <div className="text-center">
      <img
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
        className="rounded-circle shadow"
      />
      <p className="mt-2 fw-semibold">{person.name}</p>
    </div>
  );
}

//Elhijo
export const Props = () => {
  return (
    <div className="container text-center py-5">
    <h1 className="fw-bold display-4">Props React</h1>
    <p className="mx-auto mb-5" style={{ maxWidth: "800px" }}>
    <strong> Los props</strong> (abreviatura de properties o propiedades) en React son un mecanismo para pasar datos desde un componente padre a un componente hijo, permitiendo la creación de interfaces dinámicas y reutilizables.
    </p>
    <div className="d-flex justify-content-center gap-5">

      <Avatar
          size={130}
          person={{
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
          }}
        />

        <Avatar
          size={130}
          person={{
          name: 'Aklilu Lemma',
          imageId: 'OKS67lh'
          }}
        />

        <Avatar
          size={130}
          person={{
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
          }}
        />

      </div>
      </div>
  )
}