/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/webp"],
    domains: ["images.unsplash.com", "images.pexels.com"],
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.webm$/,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next/static/videos/",
            outputPath: "static/videos/",
            name: "[name].[hash].[ext]",
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
