import { useEffect, useState } from 'react'

function useScrollNavbar() {
  const [scrollY, setScrollY] = useState(0)
  const [fixedActive, setFixedActive] = useState(false)

  const handleScrollNav = () => {
    if (scrollY >= 100) {
      setScrollY(window.pageYOffset)
      setFixedActive(true)
    } else {
      setScrollY(window.pageYOffset)
      setFixedActive(false)
    }
  }

  useEffect(() => {
    function scrollListener() {
      window.addEventListener('scroll', handleScrollNav)
    }
    scrollListener()
    return () => {
      window.removeEventListener('scroll', handleScrollNav)
    }
  })

  return fixedActive
}

export default useScrollNavbar
