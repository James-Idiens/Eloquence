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
    <div className="flex flex-wrap">
      {novels.map((novel) => (
        <Link key={novel.id} to={`/novels/${novel.id}`} className="w-1/3 p-4">
          <div className="border-2 border-gray-300 rounded-lg p-4 h-full">
            <h3 className="text-xl font-semibold mb-4">{novel.title}</h3>
          </div>
        </Link>
      ))}
      <NovelForm />
    </div>
  )
}
