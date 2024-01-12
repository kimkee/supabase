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
	remotePatterns: [
		{
		  // 도메인 이름
		  domain: "fonts.googleapis.com",
		  // 패턴
		  patterns: ["/earlyaccess/notosanskr.css"],
		},
	  ],
  }

module.exports = nextConfig
