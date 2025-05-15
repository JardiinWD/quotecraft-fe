import { useAuthStore } from '@/stores'
import React, { JSX } from 'react'
import { Link } from 'react-router-dom'
import { Image } from '@/components/atoms'

const UserPill: React.FC = (): JSX.Element => {
  // ------------ ZUSTAND STORE
  const { userData } = useAuthStore()

  return (
    <Link
      data-testid="user-pill"
      state={{ userData }}
      to="/dashboard/settings"
      className="flex items-center rounded-full bg-primary_white_200"
    >
      <Image
        src={userData?.image as string}
        alt="User Image"
        htmlWidth={50}
        htmlHeight={50}
      />
    </Link>
  )
}

export default UserPill
