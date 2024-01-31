/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com'
      },
      {
        protocol: 'https',
        hostname: 'avatar.vercel.sh'
      }
    ]
  }
};

module.exports = nextConfig;

// we only need to use the utility during development so we can check NODE_ENV
// (note: this check is recommended but completely optional)
if (process.env.NODE_ENV === "development") {
  // import the utility from the next-dev submodule
  const { setupDevBindings } = require("@cloudflare/next-on-pages/next-dev");

  // call the utility with the bindings you want to have access to
  setupDevBindings({
    bindings: {
      DB: {
        type: "D1Database",
        id: "226f2354-d837-40e1-9957-94941fc47967",
      }
    }
  });
}