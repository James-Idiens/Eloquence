import NovelForm from '../components/NovelForm'
import { getNovels } from '../apis/novels'
import { useEffect, useState } from 'react'
import { Novel } from '../../models/interfaces'
import { Link } from 'react-router-dom'

export default function NovelListPage() {
  const [novels, setNovels] = useState<Novel[]>([])

  useEffect(() => {
    fetchNovels()
  }, [])

  const fetchNovels = async () => {
    const response = await getNovels()
    setNovels(response)
  }

  return (
    <div>
      {novels.map((novel) => (
        <Link key={novel.id} to={`/novels/${novel.id}`}>
          <h3>{novel.title}</h3>
        </Link>
      ))}
      <NovelForm />
    </div>
  )
}
