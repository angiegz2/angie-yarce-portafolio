const Education = () => {
  const educationData = [
    {
      institution: "Politécnico Samuel Restrepo Rios",
      degree: "Certificado en inglés A1",
      role: "Estudiante",
      date: "Noviembre de 2013",
      description:
      "Realicé un curso en mi lugar de residencia, el cual tuvo una duración de 16 dias y en donde obtuve aprendizajes en el idioma inglés y un certificado de competencia A1 en inglés conversacional.",
    },
    {
      institution: "SENA",
      degree: "Certificado de servicio al cliente",
      role: "Estudiante",
      date: "Marzo de 2017",
      description:
      "El servicio nacional de aprendizaje SENA me otorga el certificado por cursar y aprobar la acción de formación: servicio al cliente principios básicos.",
    },
    {
      institution: "SENA",
      degree: "Certificado de atención y servicio",
      role: "Estudiante",
      date: "Marzo de 2017",
      description:
      "El servicio nacional de aprendizaje SENA hace constar que cursé y aprobé la acción de formación: atención y servicio al cliente en la organización.",
    },
    {
      institution: "Politécnico nacional",
      degree: "Certificado de inglés básico",
      role: "Estudiante",
      date: "Septiembre 2016 - Junio 2017",
      description:
      "Curso realizado en mi lugar de residencia, el cual tuvo una intensidad de 100 horas y me certifiqué como aprobada en inglés básico.",
    },
    {
      institution: "Liceo Manuela Beltrán",
      degree: "Certificado de bachillerato",
      role: "Estudiante",
      date: "Enero 2006 - Noviembre 2017",
      description:
      "Aqui inicie mis estudios de básicos. Hice primaria y secundaria. Obtuve mi certificado de 5º grado y finalmente me gradué como bachiller.",
    },
  ];

  return (
    <section className="mt-8">
      <h2 className="text-3xl font-bold text-center">Educación</h2>
      <p className="text-center text-gray-600 mt-2">
        Lugares de estudio y certificados que he obtenido a lo largo de mi vida.
      </p>
      <div className="mt-8 space-y-6">
        {educationData.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md flex justify-between items-start"
          >
            <div className="flex-1">
              <h3 className="text-xl font-semibold">{item.institution}</h3>
              <p className="text-yellow-500 font-semibold">{item.role}</p>
              <p className="mt-2 text-gray-600">{item.description}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold bg-yellow-500 text-white px-4 py-1 rounded-md">
                {item.date}
              </p>
              <p className="mt-2 font-semibold">{item.degree}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
