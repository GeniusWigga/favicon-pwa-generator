import pwaAssetGenerator from "pwa-asset-generator";

(async () => {
  await pwaAssetGenerator.generateImages(
    "./icons/21f.png",
    "./output_splashscreen",
    {
      scrape: false,
      background: "#fffff",
      splashOnly: true,
      portraitOnly: true
    }
  );
})();
