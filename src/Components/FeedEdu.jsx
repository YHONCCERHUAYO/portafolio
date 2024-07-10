import React from 'react';

const FeedEdu = () => {
  const posts = [
    {
      id: 1,
      institucion: 'National University of San Cristóbal de Huamanga – UNSCH',
      carrera: 'Bachelor in systems engineering',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      institucion: 'Language Institute of the National University of San Cristobal de Huamanga',
      carrera: 'Course “English MCER (A1, A1-A2, A2-B1, B1)”',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
        id: 3,
        institucion: 'Information Technology Training Center - CETI',
        carrera: 'Diploma “Frontend Developer with Angular and React”',
        imageUrl: 'https://via.placeholder.com/150',
    },
    {
        id: 4,
        institucion: 'Information Technology Training Center - CETI',
        carrera: 'Diploma “Electronic Invoicing Developer - PHP”',
        imageUrl: 'https://via.placeholder.com/150',
    },

  ];

  return (
    <div className="flex max-w-7xl">
      {/* Columna de íconos y línea vertical */}
      <div className="relative w-8 flex flex-col items-center -z-40">
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gray-300"></div>
        {posts.map((post, index) => (
          <div key={post.id} className="relative w-3 h-3 bg-blue-500 rounded-full z-10 flex flex-col mt-14" style={{ top: `${index * 4}rem` }}></div>
        ))}
      </div>
      {/* Feed */}
      <div className="flex-1 space-y-4 pl-8 mt-7">
        {posts.map((post) => (
          <div key={post.id} className="bg-gray-300 shadow-md rounded-lg p-4">
            <div className="flex items-center space-x-4">
              <div className="rounded-full bg-slate-400">
                <i className='bx bx-book-open text-2xl p-2 text-green-900'></i>
              </div>
              <div>
                <h2 className="text-2xl font-bold">{post.institucion}</h2>
                <p className="text-lg font-semibold">{post.carrera}</p>
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedEdu;
