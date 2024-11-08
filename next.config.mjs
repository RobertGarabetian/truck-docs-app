/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'utfs.io',
            port: '',
            pathname: '/f/TyvOmWdABc6GiinXK2qbJKGoCOxhAfnzm4lNyeVw7gLX9QaB',
          },
        ],
      },
};

export default nextConfig;
