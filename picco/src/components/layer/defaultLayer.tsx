/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import './defaultLayer.css'
type Props = {
  open: boolean
  children: React.ReactElement
  actionClose?: () => void
}
const DefaultLayer = ({ children, open = true, actionClose }: Props) => {
  useEffect(() => {
    const escKeyEvent = (e: Event) => {
      const keyboardEvent = e as unknown as KeyboardEvent
      if (keyboardEvent.key === 'Escape') {
        actionClose?.()
      }
    }

    window.addEventListener('keydown', escKeyEvent)

    return () => {
      window.removeEventListener('keydown', escKeyEvent)
    }
  }, [])
  if (open === false) {
    return <></>
  }
  return <div className="default_layer_wrap">{React.cloneElement(children, { open })}</div>
}

export default DefaultLayer
