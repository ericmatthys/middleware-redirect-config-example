import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const List: NextPage = () => {
  const { query } = useRouter()

  return (
    <div>
      {query.country}: {query.slug}
    </div>
  )
}

export default List
