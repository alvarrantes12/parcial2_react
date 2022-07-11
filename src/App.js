import React, { useState, useEffect } from 'react'
import List from './components/List'
import WithLoadingList from './components/WithLoadingList'
import './App.css'
import { getFetch } from './components/FetchMethods'
import PostForm from './components/PostForm'

function App() {
  const LoadingList = WithLoadingList(List)

  const [content, setContent] = useState([])
  const [loadingContentList, setLoadingContentList] = useState(false)

  const [refreshContent, setRefreshContent] = useState(true)

  useEffect(() => {
    if (!refreshContent) return
    setLoadingContentList(true)
    getFetch('contents/').then((data) => {
      setContent(data)
      setLoadingContentList(false)
    })
    setRefreshContent(false)
  }, [setContent, setLoadingContentList, refreshContent])

  const refetchContent = () => {
    setRefreshContent(true)
  }
  const [specialContent, setSpecialContent] = useState([])
  const [loadingSpecialContentList, setLoadingSpecialContentList] =
    useState(false)

  useEffect(() => {
    setLoadingContentList(true)
    getFetch('special_contents/').then((data) => {
      setSpecialContent(data)
      setLoadingSpecialContentList(false)
    })
  }, [setSpecialContent])

  return (
    <div className='d-flex flex-column justify-content-center align-items-center position-relative'>
      <div
        className='position-sticky d-flex justify-content-center align-items-center'
        style={{ minHeight: '70px', minWidth: '100vw' }}
      >
        <h1>Estos son los contenidos disponibles</h1>
      </div>
      <div className='d-flex flex-row'>
        <div
          className='px-5 d-flex flex-column align-items-center position-relative'
          style={{ minWidth: '30vw' }}
        >
          <PostForm refetch={refetchContent} />
        </div>
        <div className='px-2'>
          <h4>Lista de contenidos </h4>
          <div
            className='d-flex flex-column align-items-center position-relative'
            style={{ minWidth: '30vw', maxHeight: '80vh', overflowY: 'scroll' }}
          >
            <LoadingList isLoading={loadingContentList} contents={content} />
          </div>
        </div>
        <div className='px-2'>
          <h4>Lista de contenidos especiales </h4>
          <div
            className='d-flex flex-column align-items-center position-relative'
            style={{ minWidth: '30vw', maxHeight: '80vh', overflowY: 'scroll' }}
          >
            <LoadingList
              isLoading={loadingSpecialContentList}
              contents={specialContent}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
