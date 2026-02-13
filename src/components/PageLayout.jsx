import { Link } from 'react-router-dom'
import Background from './Background'
import './PageLayout.css'

function PageLayout({ title, effectiveDate, children }) {
  return (
    <>
      <Background />
      <div className="legal-page">
        <div className="legal-container">
          <Link to="/" className="legal-back-link">
            &larr; Back to Home
          </Link>
          <h1 className="legal-title">{title}</h1>
          {effectiveDate && (
            <p className="legal-effective-date">Effective Date: {effectiveDate}</p>
          )}
          {children}
        </div>
      </div>
    </>
  )
}

export default PageLayout
