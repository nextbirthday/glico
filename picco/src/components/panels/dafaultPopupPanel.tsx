/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import './defaultPopupPanel.css'
type Props = {
  open?: boolean
  children: React.ReactElement
  actionClose: () => void
}
const DefaultPopupPanel = ({ open = false, children, actionClose }: Props) => {
  console.log('DafaultPopupPanel open ===>', open)

  useEffect(() => {
    const escKeyEvent = (e: Event) => {
      const keyboardEvent = e as unknown as KeyboardEvent
      if (keyboardEvent.key === 'Escape') {
        actionClose()
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

  return (
    <div className="default_popup_wrap">
      <article>{children}</article>
    </div>
  )
}

export default DefaultPopupPanel
