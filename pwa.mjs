import pwaAssetGenerator from "pwa-asset-generator";

(async () => {
  await pwaAssetGenerator.generateImages(
    "./icons/df21.png",
    "./output_splashscreen",
    {
      scrape: false,
      background: "transparent",
      splashOnly: true,
      portraitOnly: true
    }
  );
})();
