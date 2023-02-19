import connect from "../../lib/mongodb"
import User from "../../models/userSchema"
import type { NextApiRequest, NextApiResponse } from "next"

connect()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const user = await User.create(req.body)
    res.redirect("/")
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "user not created" })
    }
  } catch (error) {
    res
      .status(400)
      .json({ success: false, message: "not able to create a new user" })
  }
}
