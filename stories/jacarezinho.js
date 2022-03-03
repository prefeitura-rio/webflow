var config = {
    style: 'mapbox://styles/caiojacintho/ckyu4kjqz000a14p7kivbajq6',
    accessToken: 'pk.eyJ1IjoiY2Fpb2phY2ludGhvIiwiYSI6ImNreXVmeGNjeTBiaGczMm1sYTAzc2EyNWwifQ.gmZ0eUpq0-tgaQb3tJ0PiQ',
    theme: 'light',
    use3dTerrain: true,
    chapters: [{
      id: 'inicio',
      location: {
        center: [-43.51986, -23.01196],
        zoom: 7.74,
        pitch: 15.50,
        bearing: 0.00,
        speed: 2,
        curve: 1
      },
      rotateAnimation: {
        duration: 120, 
        degrees: 180 
      },
      mapAnimation: 'flyTo',
      onChapterEnter: [
      {
        layer: 'municipio',
        opacity: .3,
      }, 
      ],
      onChapterExit: [
      {
        layer: 'municipio',
        opacity: 0,
      }
      ]
    },
    {
      id: 'parte1',
      location: {
        center: [-43.25988, -22.89086],
        zoom: 13.58,
        pitch: 15.50,
        bearing: -35.20,
        speed: 2,
        curve: 1
      },
      rotateAnimation: {
        duration: 0,
        degrees: 0 
      },
      mapAnimation: 'flyTo',
      onChapterEnter: [
      {
        layer: 'fogocruzado',
        opacity: 1,
      }, 
            {
        layer: 'jacarezinho',
        opacity: 1,
      }, 
      ],
      onChapterExit: [
      {
        layer: 'fogocruzado',
        opacity: 0,
      },
            {
        layer: 'jacarezinho',
        opacity: 0,
      }
      ]
    },
         {
      id: 'parte2',
      location: {
        center: [-43.25988, -22.89086],
        zoom: 13.58,
        pitch: 15.50,
        bearing: -35.20,
        speed: 2,
        curve: 1
      },
      rotateAnimation: {
        duration: 0, 
        degrees: 0 
      },
      mapAnimation: 'flyTo',
      onChapterEnter: [
      {
        layer: 'populacao',
        opacity: .8,
      }
      ],
      onChapterExit: [
        {
          layer: 'populacao',
          opacity: 0,
        }
      ]
    },
         {
      id: 'parte4',
      location: {
        center: [-43.25988, -22.89086],
        zoom: 13.58,
        pitch: 15.50,
        bearing: -35.20,
        speed: 2,
        curve: 1
      },
      rotateAnimation: {
        duration: 0, 
        degrees: 0 
      },
      mapAnimation: 'flyTo',
      onChapterEnter: [
      {
        layer: 'renda',
        opacity: .8,
      }
      ],
      onChapterExit: [
        {
          layer: 'renda',
          opacity: 0,
        }
      ]
    },
                 {
      id: 'parte5',
      location: {
        center: [-43.25435, -22.88469],
        zoom: 12.69,
        pitch: 15.00,
        bearing: -32.35,
        speed: 2,
        curve: 1
      },
      rotateAnimation: {
        duration: 0, 
        degrees: 0
      },
      mapAnimation: 'flyTo',
      onChapterEnter: [
      {
        layer: 'escolas',
        opacity: 1,
      },
        {
        layer: 'creches',
        opacity: 1,
      },
        {
        layer: 'bairros',
        opacity: .2,
      }
      ],
      onChapterExit: [
        {
          layer: 'escolas',
          opacity: 0,
        },
                {
          layer: 'creches',
          opacity: 0,
        },
                {
          layer: 'bairros',
          opacity: 0,
        }
      ]
     },
             {
      id: 'parte6',
      location: {
        center: [-43.25435, -22.88469],
        zoom: 12.69,
        pitch: 15.00,
        bearing: -32.35,
        speed: 2,
        curve: 1
      },
      rotateAnimation: {
        duration: 0, 
        degrees: 0 
      },
      mapAnimation: 'flyTo',
      onChapterEnter: [
      {
        layer: 'escolas',
        opacity: 1,
      },
        {
        layer: 'creches',
        opacity: 1,
      },
        {
        layer: 'bairros',
        opacity: .2,
      }
      ],
      onChapterExit: [
        {
          layer: 'escolas',
          opacity: 0,
        },
                {
          layer: 'creches',
          opacity: 0,
        },
                {
          layer: 'bairros',
          opacity: 0,
        }
      ]
     },
             {
      id: 'parte7',
      location: {
        center: [-43.26084, -22.88630],
        zoom: 13.73,
        pitch: 60.00,
        bearing: -9.95,
        speed: 2,
        curve: 1
      },
      rotateAnimation: {
        duration: 0, 
        degrees: 0 
      },
      mapAnimation: 'flyTo',
      onChapterEnter: [
      {
        layer: 'saude',
        opacity: 1,
      }
      ],
      onChapterExit: [
        {
          layer: 'saude',
          opacity: 0,
        }
      ]
    },
                 {
      id: 'parte8',
      location: {
        center: [-43.26084, -22.88630],
        zoom: 13.73,
        pitch: 60.00,
        bearing: -9.95,
        speed: 2,
        curve: 1
      },
      rotateAnimation: {
        duration: 0, 
        degrees: 0 
      },
      mapAnimation: 'flyTo',
      onChapterEnter: [
      {
        layer: 'saude',
        opacity: 1,
      }
      ],
      onChapterExit: [
        {
          layer: 'saude',
          opacity: 0,
        }
      ]
    },
                 {
      id: 'parte9',
      location: {
        center: [-43.26084, -22.88630],
        zoom: 13.73,
        pitch: 60.00,
        bearing: -9.95,
        speed: 2,
        curve: 1
      },
      rotateAnimation: {
        duration: 0, 
        degrees: 0 
      },
      mapAnimation: 'flyTo',
      onChapterEnter: [
      {
        layer: 'saude',
        opacity: 1,
      }
      ],
      onChapterExit: [
        {
          layer: 'saude',
          opacity: 0,
        }
      ]
    },
                 {
      id: 'parte10',
      location: {
        center: [-43.26084, -22.88630],
        zoom: 13.73,
        pitch: 60.00,
        bearing: -9.95,
        speed: 2,
        curve: 1
      },
      rotateAnimation: {
        duration: 0, 
        degrees: 0 
      },
      mapAnimation: 'flyTo',
      onChapterEnter: [
      {
        layer: 'saude',
        opacity: 1,
      }
      ],
      onChapterExit: [
        {
          layer: 'saude',
          opacity: 0,
        }
      ]
    },
                 {
      id: 'parte11',
      location: {
        center: [-43.26084, -22.88630],
        zoom: 13.73,
        pitch: 60.00,
        bearing: -9.95,
        speed: 2,
        curve: 1
      },
      rotateAnimation: {
        duration: 0, 
        degrees: 0 
      },
      mapAnimation: 'flyTo',
      onChapterEnter: [
      {
        layer: 'saude',
        opacity: 1,
      }
      ],
      onChapterExit: [
        {
          layer: 'saude',
          opacity: 0,
        }
      ]
    },
        ]
  };