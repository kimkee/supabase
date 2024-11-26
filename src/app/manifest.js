export default function manifest() {
  return {
    name: 'SUPA MARKET',
    short_name: 'SUPA MARKET',
    description: 'SUPAMARKET + Supabase + Nest.js',
    start_url: `${process.env.SITE_URL}`,
    display: 'standalone',
    background_color: '#1a1a1a',
    theme_color: '#1a1a1a',
    icons: [
    {
      src: `${process.env.SITE_URL}img/favicon.ico`,
      sizes: 'any',
      sizes: "48x48",
      type: 'image/x-icon'
    },
    {
      src: `${process.env.SITE_URL}img/icon_app.png`,
      type: "image/png",
      sizes: "512x512"
    }
    ],
  }
}