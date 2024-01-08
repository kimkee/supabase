export default function manifest() {
	return {
	  name: '슈파마켓 App',
	  short_name: '슈파마켓 App',
	  description: '슈파마켓 App',
	  start_url: '/',
	  display: 'standalone',
	  background_color: '#1a1a1a',
	  theme_color: '#1a1a1a',
	  icons: [
		{
		  src: '/favicon.ico',
		  sizes: 'any',
		  type: 'image/x-icon',
		  sizes: "48x48"
		},
		{
		  src: "/img/icon_app.png",
		  type: "image/png",
		  sizes: "512x512"
		}
	  ],
	}
  }