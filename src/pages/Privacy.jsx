import PageLayout from '../components/PageLayout'

function Privacy() {
  return (
    <PageLayout title="Privacy Policy" effectiveDate="6th March 2026">
      <section className="legal-section">
        <p>
          This Privacy Policy explains how Return to God (&ldquo;we,&rdquo;
          &ldquo;our,&rdquo; or &ldquo;us&rdquo;) handles your information
          when you use Five Prayers (bundle ID: com.returntogod.app), our
          Christian prayer habit app. By using the app, you agree to the
          practices described in this policy.
        </p>
        <p>
          We built Five Prayers with privacy at its core. Almost all of your
          data stays on your device and is never sent to any server.
        </p>
      </section>

      <section className="legal-section">
        <h2>1. What Data We Collect</h2>
        <p>
          During onboarding, the app asks you to provide the following
          information to personalize your prayer experience:
        </p>
        <ul>
          <li>First name</li>
          <li>Age range (14&ndash;24, 25&ndash;34, 35&ndash;44, 45&ndash;54, 55+)</li>
          <li>Gender</li>
          <li>Daily screen time estimate</li>
          <li>Faith goals</li>
          <li>Faith vision (free text)</li>
          <li>Desired prayer days per week</li>
          <li>Relationship with God</li>
          <li>Personal blockers and struggles</li>
          <li>Commitment level</li>
          <li>Religious denomination</li>
          <li>Honesty self-assessment</li>
          <li>A hand-drawn signature (stored as SVG path data)</li>
        </ul>
        <p>The app also stores the following on your device:</p>
        <ul>
          <li>Prayer completion history and streaks</li>
          <li>Notification preferences (enabled or disabled)</li>
          <li>Onboarding completion status</li>
        </ul>
      </section>

      <section className="legal-section">
        <h2>2. How Data Is Collected and Stored</h2>
        <p>
          All data listed above is collected directly from you within the app
          and stored locally on your device using AsyncStorage. None of this
          data is sent to any external server or cloud database. We do not
          have access to your data.
        </p>
      </section>

      <section className="legal-section">
        <h2>3. How We Use Your Data</h2>
        <p>Your data is used solely to:</p>
        <ul>
          <li>Personalize your prayer experience based on your faith goals, struggles, and preferences</li>
          <li>Track your prayer streaks and completion history</li>
          <li>Schedule local push notification reminders for prayer times</li>
          <li>Remember your onboarding choices so you don&rsquo;t have to repeat them</li>
        </ul>
        <p>
          Your data is never used for advertising, marketing, profiling, or
          any purpose other than delivering your personalized prayer
          experience within the app.
        </p>
      </section>

      <section className="legal-section">
        <h2>4. Sensitive Data</h2>
        <p>
          Five Prayers collects information that may be considered sensitive,
          including your religious denomination, relationship with God, and
          personal struggles (such as &ldquo;my mind races&rdquo; or
          &ldquo;the afternoon just slips away on my phone&rdquo;). This
          information is collected solely to personalize your prayer
          experience. It is stored only on your device and is never shared
          with any third party, transmitted to any server, or used for any
          other purpose.
        </p>
      </section>

      <section className="legal-section">
        <h2>5. Third-Party Services</h2>
        <p>Five Prayers uses the following third-party services:</p>
        <ul>
          <li>
            <strong>RevenueCat</strong> &ndash; manages subscription
            purchases through Apple In-App Purchase. RevenueCat may receive
            anonymous purchase data and device identifiers from Apple to
            process your subscription. See their privacy policy
            at{' '}
            <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer">
              revenuecat.com/privacy
            </a>.
          </li>
          <li>
            <strong>Expo Notifications</strong> &ndash; used to schedule
            local prayer reminders on your device. No user data is sent to
            Expo servers for notifications.
          </li>
        </ul>
        <p>
          We do not use any analytics SDKs, advertising SDKs, or tracking
          tools. No data is sent to any external server or backend controlled
          by us.
        </p>
      </section>

      <section className="legal-section">
        <h2>6. Data Sharing</h2>
        <p>
          We do not sell, rent, share, or transmit any of your personal data
          to third parties. The only third party that receives any
          transaction-related data is Apple (via RevenueCat) for the sole
          purpose of processing in-app subscription purchases.
        </p>
      </section>

      <section className="legal-section">
        <h2>7. Data Retention and Deletion</h2>
        <p>
          All personal data is stored locally on your device only. We do not
          maintain any server-side copies of your data.
        </p>
        <ul>
          <li>
            You can delete all your data at any time within the app by going
            to <strong>Settings &gt; Your Data &gt; &ldquo;Delete all my
            data&rdquo;</strong>.
          </li>
          <li>
            Uninstalling the app from your device also removes all locally
            stored data.
          </li>
          <li>
            Because no data is stored on our servers, there is no server-side
            data to retain or delete.
          </li>
        </ul>
      </section>

      <section className="legal-section">
        <h2>8. Push Notifications</h2>
        <p>
          Five Prayers may request permission to send local push
          notifications to remind you of prayer times. Notifications are
          entirely optional and can be enabled or disabled in the
          app&rsquo;s Settings at any time. Notifications are never used for
          marketing or promotional purposes.
        </p>
      </section>

      <section className="legal-section">
        <h2>9. Children&rsquo;s Privacy (COPPA)</h2>
        <p>
          Five Prayers is designed for users aged 14 and older. We do not
          knowingly collect personal information from children under 13. If
          we become aware that we have inadvertently collected data from a
          child under 13, we will promptly delete it.
        </p>
        <p>
          For users aged 14&ndash;17, all data remains stored locally on the
          device and is never transmitted to any external server. No
          third-party analytics or advertising is present in the app.
        </p>
        <p>
          If you believe a child under 13 has provided information through
          the app, please contact us at{' '}
          <a href="mailto:vedefan@returntogod.love">vedefan@returntogod.love</a>{' '}
          so we can take appropriate action.
        </p>
      </section>

      <section className="legal-section">
        <h2>10. Your Rights Under GDPR (European Users)</h2>
        <p>
          If you are located in the European Economic Area (EEA), the United
          Kingdom, or Switzerland, you have certain rights under the General
          Data Protection Regulation (GDPR).
        </p>
        <p>
          <strong>Lawful basis for processing:</strong> We process your data
          based on your consent, which you provide by entering your
          information during onboarding. You can withdraw consent at any time
          by deleting your data through the app.
        </p>
        <p>
          <strong>Your rights:</strong> You have the right to:
        </p>
        <ul>
          <li><strong>Access</strong> &ndash; view the personal data we hold about you. Since all data is stored on your device, you already have full access.</li>
          <li><strong>Rectification</strong> &ndash; correct inaccurate data. You can update your information within the app.</li>
          <li><strong>Erasure</strong> &ndash; delete your data at any time via Settings &gt; Your Data &gt; &ldquo;Delete all my data&rdquo;, or by uninstalling the app.</li>
          <li><strong>Data portability</strong> &ndash; since all data is stored locally on your device, it is already in your possession.</li>
          <li><strong>Object</strong> &ndash; you may object to processing by deleting your data or uninstalling the app.</li>
        </ul>
        <p>
          Because all data is stored locally on your device and we do not
          have access to it, exercising these rights does not require
          contacting us. However, if you have questions, you may reach us
          at{' '}
          <a href="mailto:vedefan@returntogod.love">vedefan@returntogod.love</a>.
        </p>
      </section>

      <section className="legal-section">
        <h2>11. Your Rights Under CCPA (California Residents)</h2>
        <p>
          If you are a California resident, the California Consumer Privacy
          Act (CCPA) provides you with specific rights regarding your
          personal information.
        </p>
        <p>
          <strong>Categories of personal information collected:</strong>{' '}
          identifiers (first name), demographic information (age range,
          gender), and personal preferences (faith goals, denomination,
          struggles, prayer habits). All of this is stored locally on your
          device only.
        </p>
        <p><strong>Your rights:</strong></p>
        <ul>
          <li><strong>Right to know</strong> &ndash; you have the right to know what personal information we collect and how it is used. This policy provides that disclosure.</li>
          <li><strong>Right to delete</strong> &ndash; you can delete all your data at any time via Settings &gt; Your Data &gt; &ldquo;Delete all my data&rdquo;, or by uninstalling the app.</li>
          <li><strong>Right to opt-out of sale</strong> &ndash; we never sell your personal information. There is no data sale to opt out of.</li>
          <li><strong>Non-discrimination</strong> &ndash; we will not discriminate against you for exercising any of your CCPA rights. You will receive the same quality of service regardless.</li>
        </ul>
      </section>

      <section className="legal-section">
        <h2>12. How to Revoke Consent and Request Deletion</h2>
        <p>
          You can revoke consent and delete all your personal data at any
          time by:
        </p>
        <ul>
          <li>
            Going to <strong>Settings &gt; Your Data &gt; &ldquo;Delete all
            my data&rdquo;</strong> within the app
          </li>
          <li>Uninstalling Five Prayers from your device</li>
        </ul>
        <p>
          Since we do not store any of your data on our servers, deletion is
          immediate and complete. If you have any questions or need
          assistance, contact us at{' '}
          <a href="mailto:vedefan@returntogod.love">vedefan@returntogod.love</a>.
        </p>
      </section>

      <section className="legal-section">
        <h2>13. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. If we make
          material changes, we will notify you through the app or by updating
          the effective date at the top of this page. Your continued use of
          the app after any changes constitutes your acceptance of the
          updated policy. We encourage you to review this policy
          periodically.
        </p>
      </section>

      <section className="legal-section">
        <h2>14. Contact Us</h2>
        <p>
          If you have any questions, concerns, or requests regarding this
          Privacy Policy or your data, please contact us at:
        </p>
        <p>
          Return to God<br />
          Email:{' '}
          <a href="mailto:vedefan@returntogod.love">vedefan@returntogod.love</a>
        </p>
      </section>
    </PageLayout>
  )
}

export default Privacy
