import withFlowbiteReact from "flowbite-react/plugin/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
    // add standalone
    output: "standalone",
};

export default withFlowbiteReact(nextConfig);