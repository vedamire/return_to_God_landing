import './FamilyOverlay.css'

function FamilyOverlay() {
  return (
    <div className="family-section">
      <p className="family-owned-label">(Family owned)</p>
      <div className="family-card">
        <img
          className="family-card-photo"
          src="/images/family_owned.jpg"
          alt="Our family"
        />
        <div className="family-card-names">
          <span>Kate</span>
          <span>Ved</span>
          <span>Alice</span>
          <span>Emily</span>
        </div>
      </div>
    </div>
  )
}

export default FamilyOverlay
