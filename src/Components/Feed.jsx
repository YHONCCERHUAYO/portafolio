import React from 'react';

const Feed = () => {
  const posts = [
    {
      id: 1,
      puesto: 'Web Developer Assistant',
      empresa: 'EDUCATIONAL PLATFORM CONSORTIUM',
      resumen: 'Company specialized in the implementation, training and support of web solutions.',
      date_start: 'July 26, 2023',
      date_end: 'January 26, 2024',
      functions: 'Implementación, capacitación y soporte en el marco de la relación contractual; “Contratación de servicios para implementación de página web, sistema web y entorno virtual para los 14 IESTP públicos de la región de Ayacucho”, de igual forma para los 12 IESTP de la región de Apurímac, utilizando herramientas como; WordPress, SQL Server, C#, MySQL, Node js, React js, Bootstrap y Scrum.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      puesto: 'Data Analyst',
      empresa: 'SOLID INVESTMENTS',
      resumen: 'Belgian company based in Peru, is a group of social and business entities.',
      date_start: 'March 21, 2023',
      date_end: 'July 21, 2023',
      functions: 'Data analysis for the inventory and budget modules of the ERP Odoo database, with the objective of developing business intelligence solutions for management, using tools such as; PostgreSQL, DBeaver, Power BI and the Scrum methodology.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      puesto: 'SIGA Implementer and Trainer',
      empresa: 'MH INNOVA',
      resumen: 'Company dedicated to implementation, training and support of the integrated administrative management system.',
      date_start: 'January 19, 2023',
      date_end: 'March 20, 2023',
      functions: 'Implement the corresponding SIGA modules to the user areas and provide them with training in the appropriate use for the requirement of goods and services, subsequently providing adequate support to the entire entity for a correct flow of information.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      puesto: 'Systems Assistant',
      empresa: 'GOBEATING GROUP',
      resumen: 'Company dedicated to computer consulting and management of computer facilities.',
      date_start: 'January 9, 2022',
      date_end: 'January 9, 2023',
      functions: 'Collaborator in the development of inventory web applications, both on the client and server side using tools such as; MySQL, Node js, Express js, React js and Bootstrap. Implementation and training of the web application, subsequently continuous support for the good performance of its activities.',
      imageUrl: 'https://via.placeholder.com/150',
    },

  ];

  return (
    <div className="flex max-w-7xl">
      {/* Columna de íconos y línea vertical */}
      <div className="relative w-8 flex flex-col items-center -z-40">
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gray-300"></div>
        {posts.map((post, index) => (
          <div key={post.id} className="relative w-3 h-3 bg-blue-500 rounded-full z-10 flex flex-col mt-40 mb-7" style={{ top: `${index * 4}rem` }}></div>
        ))}
      </div>
      {/* Feed */}
      <div className="flex-1 space-y-4 pl-8 mt-7">
        {posts.map((post) => (
          <div key={post.id} className="bg-gray-300 shadow-md rounded-lg p-4">
            <div className="flex items-center space-x-4">
              <div className="rounded-full bg-slate-400">
                <i className='bx bx-briefcase text-4xl p-2 text-green-900'></i>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold">{post.puesto}</h2>
                <p className="text-sm text-gray-500">{post.date_start} - {post.date_end}</p>
                <p className="text-lg font-semibold">{post.empresa}</p>
                <p className="text-lg text-gray-600">{post.resumen}</p>
                <p className='text-lg font-semibold'>Functions:</p>
                <p className="text-lg text-gray-600"> {post.functions}</p>
              </div>
            </div>
        
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
