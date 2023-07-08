import { NuxtAuthHandler } from '#auth'
import CredProvider from 'next-auth/providers/credentials'

export default NuxtAuthHandler({
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    CredProvider.default({
      name: 'QCrow',
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        console.log('credentials', credentials.username, credentials.password)

        if (credentials.username === 'sai@xplorebits.com' && credentials.password === 'kirankk*') {
          return { uid: 'Test' }
        }
      }
    })
  ]
})