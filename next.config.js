/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
	  return [
		{
		  source: '/404',
		  destination: '/404', // 커스텀 404 페이지 경로
		  permanent: true,
		},
	  ];
	},
  }

module.exports = nextConfig
