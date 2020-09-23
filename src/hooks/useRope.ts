import { useContext } from 'react'
import { Context } from '../contexts/RopeProvider'

const useRope = () => {
  const { rope } = useContext(Context)
  return rope
}

export default useRope
