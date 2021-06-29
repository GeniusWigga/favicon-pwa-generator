import pwaAssetGenerator from "pwa-asset-generator";

(async () => {
  await pwaAssetGenerator.generateImages(
    "./icons/df21.jpeg",
    "./output_splashscreen",
    {
      scrape: false,
      background: "#CC8F63",
      splashOnly: true,
      portraitOnly: true
    }
  );
})();
