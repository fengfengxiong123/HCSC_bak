/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
    output: "export",
    images: {
        unoptimized: true,
    },
    eslint: {
        ignoreDuringBuilds: true, // 禁用 ESLint 在构建时的执行
    },
};

export default config;
