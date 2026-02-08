import { useState, useEffect } from 'react'
import './FamilyOverlay.css'

function FamilyOverlay() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) return
    const handleKey = (e) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isOpen])

  return (
    <>
      <button className="family-owned-trigger" onClick={() => setIsOpen(true)}>
        (Family owned)
      </button>

      {isOpen && (
        <div className="family-overlay" onClick={() => setIsOpen(false)}>
          <div
            className="family-overlay-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="family-overlay-close"
              onClick={() => setIsOpen(false)}
            >
              &times;
            </button>
            <img
              className="family-overlay-photo"
              src="/images/family_owned.jpg"
              alt="Our family"
            />
            <div className="family-overlay-names">
              <span>Kate</span>
              <span>Ved</span>
              <span>Emily</span>
              <span>Alice</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default FamilyOverlay
