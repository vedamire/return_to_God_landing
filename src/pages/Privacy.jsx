import PageLayout from '../components/PageLayout'

function Privacy() {
  return (
    <PageLayout title="Privacy Policy" effectiveDate="17th April 2025">
      <section className="legal-section">
        <p>
          This Privacy Policy explains how Return to God (&ldquo;we,&rdquo;
          &ldquo;our,&rdquo; or &ldquo;us&rdquo;) collects, uses, and
          protects your information when you use our mobile application. By
          using the app, you agree to the practices described in this policy.
        </p>
      </section>

      <section className="legal-section">
        <h2>1. Data We Collect</h2>
        <p>
          Return to God does not collect personal identifiers such as your
          name, email address, or IP address. However, certain data may be
          collected automatically, including:
        </p>
        <ul>
          <li>Crash logs and diagnostics (via Apple and Google)</li>
          <li>App usage data (via Apple, Google, Superwall, and PostHog)</li>
          <li>Device information such as model and operating system version</li>
          <li>Religious preference (e.g., Christian denomination) for content personalization</li>
          <li>Age group for content personalization</li>
        </ul>
      </section>

      <section className="legal-section">
        <h2>2. How We Use Your Data</h2>
        <p>The data we collect is used to:</p>
        <ul>
          <li>Monitor app performance and stability</li>
          <li>Diagnose and fix crashes and technical issues</li>
          <li>Understand user behavior to improve the app experience</li>
          <li>Enhance subscription experiences through Superwall</li>
        </ul>
        <p>
          All analytics data is anonymized and is never used for advertising
          or sold to third parties.
        </p>
      </section>

      <section className="legal-section">
        <h2>3. Third-Party Services</h2>
        <p>Return to God uses the following third-party services:</p>
        <ul>
          <li>Apple App Store &amp; Analytics</li>
          <li>Google Play Store &amp; Analytics</li>
          <li>Superwall &ndash; subscription and paywall management</li>
          <li>PostHog (Cloud) &ndash; anonymized product analytics</li>
          <li>Gemini API (Google) &ndash; AI-powered content generation</li>
        </ul>
        <p>
          These services may collect anonymized data in accordance with their
          own privacy policies. We do not intentionally transmit any
          personally identifiable information to these providers.
        </p>
      </section>

      <section className="legal-section">
        <h2>4. AI-Generated Content</h2>
        <p>
          Return to God uses artificial intelligence to generate personalized
          prayers and devotional content. The inputs you provide for prayer
          generation are used solely for that purpose and are not permanently
          stored or shared with third parties.
        </p>
      </section>

      <section className="legal-section">
        <h2>5. Your Privacy Controls</h2>
        <p>
          Since Return to God does not require an account, there is no user
          profile to delete. If you wish to remove all data associated with
          your use of the app, you can uninstall it from your device.
        </p>
        <p>
          If you would like to request deletion of any analytics data
          associated with your device, please contact us at{' '}
          <a href="mailto:vedefan@returntogod.love">vedefan@returntogod.love</a>.
          PostHog analytics data will be removed upon request.
        </p>
      </section>

      <section className="legal-section">
        <h2>6. Children&rsquo;s Privacy</h2>
        <p>
          The app is rated 4+ on the App Store and is designed to be
          suitable for users of all ages. We do not intentionally collect
          personal information from children under 13. If we become aware
          that we have inadvertently collected such information, we will
          promptly delete it.
        </p>
      </section>

      <section className="legal-section">
        <h2>7. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes
          will be reflected by updating the effective date at the top of this
          page. Your continued use of the app following any changes
          constitutes your acceptance of the updated policy.
        </p>
      </section>

      <section className="legal-section">
        <h2>8. Contact</h2>
        <p>
          If you have any questions about this Privacy Policy, please
          contact us at{' '}
          <a href="mailto:vedefan@returntogod.love">vedefan@returntogod.love</a>.
        </p>
      </section>
    </PageLayout>
  )
}

export default Privacy
