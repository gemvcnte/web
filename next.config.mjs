/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [{
      protocol: 'https',
      hostname: 'a.storyblok.com',
      port: '',
    },
    {
      protocol: 'http',
      hostname: 'a.storyblok.com',
    },
    {
      protocol: 'https',
      hostname: 'scontent.fmnl37-2.fna.fbcdn.net'
    },
    {
      protocol: 'https',
      hostname: 'scontent.fmnl37-2.fna.fbcdn.net'
    },
    {
      protocol: 'https',
      hostname: 'scontent.fmnl3-4.fna.fbcdn.net',
    },
    {
      protocol: 'https',
      hostname: 'scontent.fmnl3-4.fna.fbcdn.net',
    },
    {
      protocol: 'https',
      hostname: 'scontent.fmnl37-2.fna.fbcdn.net',
    },
    {
      protocol: 'https',
      hostname: 'upload.wikimedia.org'
    }

    ]
  }
};

export default nextConfig;
