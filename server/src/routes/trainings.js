"use strict";

function trainings(app) {
  app.get("/api/capacitaciones", (req, res, next) => {
    return res.json({
      data: [
        {
          name: "capacitacion 1",
          description: "esto es una descripcion",
          date: "03/11/2019"
        },
        {
          name: "capacitacion 2",
          description:
            "esto es una Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
          date: "03/10/2019"
        },
        {
          name: "capacitacion 3",
          description:
            "esto es una descripcion Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
          date: "03/09/2019"
        },
        {
          name: "capacitacion 4",
          description:
            "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
          date: "03/08/2019"
        }
      ]
    });
  });
}

module.exports = trainings;
