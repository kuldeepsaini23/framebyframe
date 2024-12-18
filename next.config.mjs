/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
      {
        protocol: "https",
        hostname: "avatar.vercel.sh",
      },
      {
        protocol:"https",
        hostname:"magicui.design"
      },
      {
        protocol:"https",
        hostname:"i.ibb.co"
      },
      {
        protocol:"https",
        hostname:"api.dicebear.com"
      }
    ],
  },
};

export default nextConfig;
