# Favicon PWA Asset Generator

## Generate Favicons

To generate a favicon copy the image into the `icons` folder. Make sure the image has at least a 70px width and in `png` format. Now adjust the path to the image in the `faviconDescription.json` under the property `masterPicture`. 

Run the favicon script 
```bash
$ npm run favicon
```

You can also generate a index.html with the injected favicons
```bash
$ npm run favicon:inject
```

The result of the generated favicons can be found under `output_favicons`.

For more information visit [https://realfavicongenerator.net](https://realfavicongenerator.net) or [https://github.com/RealFaviconGenerator/cli-real-favicon#readme](https://github.com/RealFaviconGenerator/cli-real-favicon).

## Generate Splashscreen

