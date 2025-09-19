import withFlowbiteReact from "flowbite-react/plugin/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/nichiha",
  async redirects() {
    return [
      {
        source: "/",              // akses root domain
        destination: "/nichiha",  // redirect ke /nichiha
        permanent: false,
      },
    ];
  },
};

export default withFlowbiteReact(nextConfig);
