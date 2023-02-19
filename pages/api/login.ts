import connect from "../../lib/mongodb"
import User from "../../models/userSchema"
import type { NextApiRequest, NextApiResponse } from "next"
import jwt from "jsonwebtoken"

connect()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { email, password } = req.body

  const user = await User.findOne({ email, password })

  const loggedInUser = email

  const accessToken = jwt.sign(
    loggedInUser,
    process.env.NEXT_PUBLIC_JWT_SECRET as string
  )

  if (!user) {
    return res
      .status(400)
      .json({ success: false, message: "Wrong email or password" })
  }
  res.json({ token: accessToken })
}
