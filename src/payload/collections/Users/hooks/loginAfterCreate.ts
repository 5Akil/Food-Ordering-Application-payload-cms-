import type { AfterChangeHook } from 'payload/dist/collections/config/types'
import { BeforeReadHook } from 'payload/dist/globals/config/types'

export const loginAfterCreate: AfterChangeHook = async ({
  doc,
  req,
  req: { payload, body = {}, res },
  operation,
}) => {
  if (operation === 'create' && !req.user) {
    const { email, password } = body

    if (email && password) {
      const { user, token } = await payload.login({
        collection: 'users',
        data: { email, password },
        req,
        res,
      })

      return {
        ...doc,
        token,
        user,
      }
    }
  }

  return doc
}



export const logTheArg:BeforeReadHook=async({})=>{
  console.log("hello");
  
}