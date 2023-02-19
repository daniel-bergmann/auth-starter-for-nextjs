//
// // This file helps us to swtich between dev and production mode
//

const dev = process.env.NODE_ENV !== "production"

export const server = dev
  ? "http://localhost:3000"
  : "https://auth-starter-two.vercel.app"
