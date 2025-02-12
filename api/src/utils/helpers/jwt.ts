import jwt from 'jsonwebtoken'

const generateToken = (email: string) => {
  // return jwt.sign({ email }, process.env.JWT_SECRET!, {
  //   expiresIn: process.env.JWT_EXPIRY! as string
  // })
}

const verifyAndDecodeToken = (token: string) => {
  return jwt.verify(token, process.env.JWT_SECRET!)
}

export { generateToken, verifyAndDecodeToken }
