export default {
  global: {
    componenteFormativo: 'Medios de transporte',
    descripcionCurso:
      'Este componente se enfoca en los medios y modos de transporte de acuerdo con la normativa y manejo de información para la preparación de la carga y planificación del transporte, además de la documentación requerida en el proceso. Es un referente para aquellos que laboran en el sector de rutas y medios de transporte de carga internacional.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal-img.png'),
    fondoBannerPrincipal: require('@/assets/curso/banner-principal-bg.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Medios y modos de transporte según normativa',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Protección física',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Especificaciones de la mercancía',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Normativa en la prestación de servicios de carga',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Tipos de controles de pesaje',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: '<em>Picking</em> y <em>packing</em>',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Modos y medios de transporte, conceptos de operación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Características de modos y medios de transporte',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Plan de ruta',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Documentación de transporte internacional',
            hash: 't_2_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Asonav. (2020). <em>Autoridad marítima, legislación aduanera, sector portuario, términos que hacen parte del Comercio Exterior vigente</em>. ',
      link: 'https://www.asonav.org/documentos/',
    },

    {
      referencia:
        'Baca, E. (2009). <em>Legislación y normatividad internacional para envases y embalaje</em>. ',
      link:
        'https://idoc.pub/documents/legislacion-y-normatividad-internacional-para-envases-y-embalajes-logistica-internaciona-pnxkzoxozg4v ',
    },

    {
      referencia:
        'Cooper, B., Bowersox, D. y Closs, M. (2007). <em>Administración y logística de la cadena suministro</em>. México: McGraw Hill.',
    },

    {
      referencia:
        'ITENE. (2007). <em>Guía práctica para el diseño de empaques y embalajes</em>. ',
      link:
        'https://www.itene.com/rs/810/d112d6ad-54ec-438b-9358-4483f9e98868/f8b/filename/guia-diseno-envases-embalajes.pdf ',
    },

    {
      referencia: 'Ministerio de Transporte. <em>Decreto 1079 de 2015</em>. ',
      link: 'https://www.mintransporte.gov.co',
    },

    {
      referencia:
        'Ministerio de Transporte. <em>Resolución 2498 de 2018</em>. ',
      link:
        'https://www.mintransporte.gov.co/publicaciones/9854/ministerio-de-transporte-pone-a-disposicion-para-comentarios-de-la-ciudadania-la-modificacion-de-la-resolucion-2498-que-busca-beneficiar-a-los-transportadores-de-carga-liviana/',
    },

    {
      referencia:
        'Mira, D. (2015). <em>Manual del Transporte de Mercancías</em> (3ra Edición ed.). Barcelona, España: Marge Book. ',
      link:
        'https://www-alphaeditorialcloud-com.bdigital.sena.edu.co/reader/manual-del-transporte-de-mercancias?location=3',
    },
  ],
  glosario: [
    {
      termino: 'Acuerdo comercial',
      significado:
        'Entendimiento bilateral, plurilateral o multilateral entre Estados, que puede ser de cooperación internacional o de integración internacional.',
    },
    {
      termino: 'Almacenamiento',
      significado:
        'Depósito de mercancías bajo el control de la autoridad aduanera en depósitos de carácter público o privado, habilitados por la Dirección de Impuestos y Aduanas Nacionales.',
    },
    {
      termino: 'Autoridad aduanera',
      significado:
        'Persona de la administración aduanera que en virtud de la ley y en ejercicio de sus funciones ejerce la potestad aduanera.',
    },
    {
      termino: 'Medio de transporte',
      significado:
        'Cualquier nave, aeronave, vagón de ferrocarril o vehículo de transporte por carretera, incluidos los remolques y semirremolques, cuando están incorporados a un tractor o a otro vehículo móvil.',
    },
  ],
  complementario: [
    {
      texto:
        'Baca, E. (2009). Legislación y normatividad internacional para envases y embalaje.',
      tipo: 'Cartilla',
      link:
        'https://idoc.pub/documents/legislacion-y-normatividad-internacional-para-envases-y-embalajes-logistica-internaciona-pnxkzoxozg4v ',
    },
    {
      texto:
        'ITENE. (2007). Guía práctica para el diseño de empaques y embalajes.',
      tipo: 'Guía',
      link:
        'https://www.itene.com/rs/810/d112d6ad-54ec-438b-9358-4483f9e98868/f8b/filename/guia-diseno-envases-embalajes.pdf ',
    },
    {
      texto: 'Ministerio de Transporte. Decreto 1079 de 2015.',
      tipo: 'Página web',
      link: 'https://www.mintransporte.gov.co',
    },
    {
      texto: 'Ministerio de Transporte. Resolución 2498 de 2018.',
      tipo: 'Página web',
      link:
        'https://www.mintransporte.gov.co/publicaciones/9854/ministerio-de-transporte-pone-a-disposicion-para-comentarios-de-la-ciudadania-la-modificacion-de-la-resolucion-2498-que-busca-beneficiar-a-los-transportadores-de-carga-liviana/',
    },
    {
      texto:
        'Legicomex. (s.f.). Tipos de carga, regularizado por Legicomex. Biblioteca SENA',
      tipo: 'Biblioteca SENA',
      link:
        'https://login.bdigital.sena.edu.co/login?url=https://www.legiscomex.com/Documentos/TIPOSDECARGA',
    },
    {
      texto:
        'Asonav. (2020). Autoridad marítima, legislación aduanera, sector portuario, términos que hacen parte del Comercio Exterior vigente.',
      tipo: 'Página web',
      link: 'https://www.asonav.org/documentos/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nelly Parra Guarín',
        cargo: 'Experta temática',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'María Inés Machado López',
        cargo: 'Diseñadora Instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor metodológico y pedagógico',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda ',
        cargo: 'Revisión y corrección de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Blanca Flor Tinoco Torres',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Walter Roa Serrano',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ricardo Vásquez Arroyave',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },

      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
