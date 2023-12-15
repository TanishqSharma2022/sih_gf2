'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState } from 'react'

export default function Page() {
  const [user, setUser] = useState()
  const supabase = createClientComponentClient()

  useEffect(() => {
    const getData = async () => {
    //   const { data } = await supabase.auth.getUser()
      const { data } = await supabase.auth.user()
      
      setUser(data)
    }

    getData()
  }, [])

  return user ? <pre>{JSON.stringify(user, null, 2)}</pre> : <p>Loading users...</p>
}