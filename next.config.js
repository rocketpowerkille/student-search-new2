/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
	dest:"public",
	disable:true, // Disable PWA for static export
	runtimeCaching: []
})

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
//   async redirects() {
//   	return [{ //redirect all other pages to the index page i.e. url.com/bla -> url.com
//   		source: "/:params([^]{1,})", //this matches *any* non-zero length string - has to be non-zero otherwise will infinitely redirect
//   		destination: "/",
//   		permanent: true
//   	}]
//   }
}

module.exports = withPWA(nextConfig)
