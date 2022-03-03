var config = {
    style: 'mapbox://styles/caiojacintho/ckyu4kjqz000a14p7kivbajq6',
    accessToken: 'pk.eyJ1IjoiY2Fpb2phY2ludGhvIiwiYSI6ImNreXVmeGNjeTBiaGczMm1sYTAzc2EyNWwifQ.gmZ0eUpq0-tgaQb3tJ0PiQ',
    theme: 'light',
    cameraViewWidthBreakpoint: 500, // in pixels
    use3dTerrain: true,
    chapters: [{
      id: 'riodejaneiro',
      // mapAnimation: 'easeTo', // flyTo, easeTo
      location: {
        mobile: {
          center: {
            lon: -43.41869,
            lat: -22.95622
          },
          zoom: 12.85,
          pitch: 27.00,
          bearing: -2.79,
          speed: 2,
          curve: 1
          },
        desktop: {
          center: {
            lon: -43.41869,
            lat: -22.95622
          },
          zoom: 8.85,
          pitch: 27.00,
          bearing: -2.79,
          speed: 2,
          curve: 1
          }
      },
      rotateAnimation: {
        duration: 100, // seconds
        degrees: 180 // degress
      },
      mapAnimation: 'flyTo',
      // callback: 'newContainer', 
      onChapterEnter: [{
        layer: 'jacarezinho-full',
        opacity: 1,
      }, ],
      onChapterExit: [{
        layer: 'jacarezinho-full',
        opacity: 0,
      }]
    },
    {
      id: 'bairro',
      location: {
        mobile: {
          center: {
            lon: -43.25119,
            lat: -22.88566
          },
          zoom: 14.98,
          pitch: 8.50,
          bearing: -34.70,
          speed: 2,
          curve: 1
        },
        desktop: {
            center: {
              lon: -43.25119,
              lat: -22.88566
            },
            zoom: 14.98,
            pitch: 8.50,
            bearing: -34.70,
            speed: 2,
            curve: 1
          },
        },
      mapAnimation: 'flyTo',
      onChapterEnter: [
      {
        layer: 'jacarezinho-full',
        opacity: 1,
      }
      ],
      onChapterExit: [
        {
          layer: 'jacarezinho-full',
          opacity: 0,
        }
      ]
    }, ]
  };