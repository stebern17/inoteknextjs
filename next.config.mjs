import withFlowbiteReact from "flowbite-react/plugin/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/nichiha",
  // assetPrefix: "/nichiha/", // ⚠️ disable dulu
};

export default withFlowbiteReact(nextConfig);
