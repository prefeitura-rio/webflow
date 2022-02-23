### Scrolltelling on Webflow


#### Configuration File and Layer Settings

Here is a sample configuration

```js
var config = {
    style: 'mapbox://styles/caiojacintho/ckyu4kjqz000a14p7kivbajq6',
    accessToken: 'pk.eyJ1IjoiY2Fpb2phY2ludGhvIiwiYSI6ImNreXVmeGNjeTBiaGczMm1sYTAzc2EyNWwifQ.gmZ0eUpq0-tgaQb3tJ0PiQ',
    theme: 'light',
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
          zoom: 10.85,
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
```

#### Configuration Options


Note: items in bold are **required**.

**`style`**: This is the Mapbox style `url` to use for the app. It can be a standard style, or a custom style from your Mapbox account. Use a custom style if you want to include custom data or layers.

**`accessToken`**: Your Mapbox access token.

**`theme`**: Two basic themes (light and dark) are available.

**`cameraViewWidthBreakpoint`**: The width of the screen at which the camera will change to a mobile view.

`use3dTerrain`: Enables 3D terrain. (Optional)

**`chapters`**: This contains all of the story content and map controls for each section of the story. _Array of objects_

- **`id`**: A slug-style ID for the chapter. This is read by the JavaScript driving the app and is assigned as an HTML `id` for the `div` element containing the rest of the story. A best-practice format would be to use kebab case, like `my-story-chapter-1`.
- **`location`**: Details about the map display and camera view. You can use the `mobile` and `desktop` objects to set different camera views for different screen sizes. **`desktop`** is required.
    - **`center`**: Center coordinates of the map, as `longitude, latitude`
    - **`zoom`**: Zoom level of the map.
    - **`pitch`**: Angle of the map view. `0` is straight down, and `60` is highly tilted.
    - **`bearing`**: Degrees of rotation clockwise from North (`0`). Negative values represent counter-clockwise rotation.
- `mapAnimation`: Defines the [animation type](https://docs.mapbox.com/mapbox-gl-js/api/#map#jumpto) for transitioning between locations. This property supports 'flyTo', 'easeTo', and 'jumpTo' animations. If not specified, defaults to `flyTo`.
    - flyTo and easeTo [options](https://docs.mapbox.com/mapbox-gl-js/api/map/#flyto-parameters) (`curve`, `maxDuration`, `minZoom`, `screenSpeed`, `speed`) can be included in the `location` array, for example:
```
            location: {
                center: [-113.72917, 48.58938],
                zoom: 12.92,
                pitch: 39.50,
                bearing: 36.00,
                speed: 0.2,
                curve: 1
            }
```
- `rotateAnimation`: Starts a slow rotation animation at the end of the map transition when set to `true`. The map will rotate 90 degrees over 24 seconds.
- `callback`: Accepts the name of a JavaScript function and executes the function. Use this if you have custom code you want to run for a chapter, like turning a legend on or off, adding data from an API request, or displaying an interactive graph.
- `onChapterEnter`: Layers to be displayed/hidden/muted when the section becomes active. _Array of objects_
    - `layer`: Layer name as assigned in Mapbox Studio.
    - `opacity`: The opacity to display the layer. `0` is fully transparent, `1` is fully opaque.
    - `duration`: The length of the opacity transition, numeric, in milliseconds. Default is 300. This is an optional parameter and can be omitted.
- `onChapterExit`: Same as `onChapterEnter` except it is triggered when the section becomes inactive. _Array of objects_


#### Layer Configuration in your Mapbox Studio Style

Add and style each custom layer in your Studio style. Before the final publish, set any layers's style to be hidden with `0` opacity. **Do not hide the layer**. For example, if you have a `circle` layer, makes sure the `color-opacity` and/or the `stroke-opacity` is set to 0.

This will ensure that the map appears correctly when the story page loads. To adjust the opacity of the layers as the reader scrolls through the story, use the `onChapterEnter` or `onChapterExit` configuration options to set your desired opacity for the layer.