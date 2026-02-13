import PageLayout from '../components/PageLayout'

function Terms() {
  return (
    <PageLayout title="Terms of Service" effectiveDate="17th April 2025">
      <section className="legal-section">
        <h2>1. Use of the App</h2>
        <p>
          Return to God is a mobile application designed to help users deepen
          their spiritual life through guided prayer, reflection, and
          devotional content. The app uses features such as app locking and
          screen time management to encourage focused prayer time.
        </p>
        <p>
          Access to the app&rsquo;s full features requires an active
          subscription. You agree to use the app only for its intended
          purpose and not to misuse, manipulate, or attempt to bypass any of
          its features or locking mechanisms.
        </p>
      </section>

      <section className="legal-section">
        <h2>2. No Account Required</h2>
        <p>
          Return to God does not require you to create an account. All data
          is stored locally on your device. We do not collect or store
          personal information such as your name, email, or login
          credentials.
        </p>
      </section>

      <section className="legal-section">
        <h2>3. Subscriptions &amp; Payments</h2>
        <p>
          The app is free to download but requires a paid subscription to
          access its full features. Subscriptions are managed through the
          Apple App Store or Google Play Store and are subject to their
          respective terms and conditions.
        </p>
        <p>
          All purchases are final. We do not offer refunds, except as
          required by applicable law or the policies of Apple or Google.
        </p>
      </section>

      <section className="legal-section">
        <h2>4. Third-Party Services</h2>
        <p>
          Return to God integrates with the following third-party services to
          improve the user experience:
        </p>
        <ul>
          <li>Superwall &ndash; for managing paywalls and subscriptions</li>
          <li>PostHog &ndash; for anonymized usage analytics</li>
          <li>Gemini API (Google) &ndash; for AI-powered prayer generation</li>
        </ul>
        <p>
          These services may collect anonymized data in accordance with their
          own privacy policies. Your data is never sold or shared with third
          parties for advertising purposes.
        </p>
      </section>

      <section className="legal-section">
        <h2>5. Restrictions</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the app for any unlawful purpose</li>
          <li>Reverse engineer, decompile, or disassemble the app</li>
          <li>Tamper with the app&rsquo;s functionality or locking features</li>
          <li>Exploit any bugs or vulnerabilities in the app</li>
        </ul>
        <p>
          We reserve the right to restrict or terminate access if the app is
          used in ways that violate these terms or compromise its
          functionality.
        </p>
      </section>

      <section className="legal-section">
        <h2>6. Age Requirement</h2>
        <p>
          The app is rated 4+ on the App Store and is intended for users of
          all ages who are able to engage with its spiritual and devotional
          purpose. If you are under 13, please use the app with parental
          guidance.
        </p>
      </section>

      <section className="legal-section">
        <h2>7. AI-Generated Content</h2>
        <p>
          Prayers and devotional content in Return to God may be generated
          using artificial intelligence. This content is intended for
          inspirational and devotional use only and should not be considered
          a substitute for professional spiritual counsel or guidance.
        </p>
      </section>

      <section className="legal-section">
        <h2>8. Disclaimer &amp; Limitation of Liability</h2>
        <p>
          The app is provided &ldquo;as is&rdquo; without warranties of any
          kind, whether express or implied. We do not guarantee that the app
          will be error-free, uninterrupted, or meet your specific
          expectations.
        </p>
        <p>
          To the fullest extent permitted by law, we shall not be liable for
          any indirect, incidental, special, consequential, or punitive
          damages arising from your use of the app.
        </p>
      </section>

      <section className="legal-section">
        <h2>9. Changes to the Terms</h2>
        <p>
          We may update these Terms of Service from time to time. Any
          changes will be reflected by updating the effective date at the top
          of this page. Your continued use of the app following any changes
          constitutes your acceptance of the updated terms.
        </p>
      </section>

      <section className="legal-section">
        <h2>10. Contact</h2>
        <p>
          If you have any questions about these Terms of Service, please
          contact us at{' '}
          <a href="mailto:vedefan@returntogod.love">vedefan@returntogod.love</a>.
        </p>
      </section>
    </PageLayout>
  )
}

export default Terms
