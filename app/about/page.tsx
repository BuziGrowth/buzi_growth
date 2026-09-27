// app/about/page.tsx

export default function AboutPage() {
  return (
    <main>

      <section className="pageHero aboutHero">
        <div className="sectionLabel">ABOUT US</div>

        <h1>
          Businesses shouldn't
          <br />
          <span>work like machines.</span>
        </h1>

        <p>
          BuziGrowth helps businesses remove repetitive work through practical,
          custom automation.
        </p>
      </section>

      <section className="aboutStory section">
        <div className="sectionLabel">OUR APPROACH</div>

        <div className="aboutGrid">
          <h2>
            We believe your team
            <br />
            should focus on <span>work</span>
            <br />
            that actually matters.
          </h2>

          <div>
            <p>
              Businesses spend countless hours copying information, sending
              repetitive emails, updating spreadsheets, checking systems and
              following up with customers.
            </p>

            <p>
              BuziGrowth turns those repetitive processes into automated
              workflows that run in the background.
            </p>

            <p>
              We work with the tools your business already uses and connect
              them together to create systems that save time and reduce
              unnecessary manual work.
            </p>
          </div>
        </div>
      </section>

      <section className="values section">
        <div className="sectionLabel">WHAT WE VALUE</div>

        <div className="valueGrid">
          <div className="valueCard">
            <span>01</span>
            <h3>Practical</h3>
            <p>
              We build automation around real business problems, not
              technology for technology's sake.
            </p>
          </div>

          <div className="valueCard">
            <span>02</span>
            <h3>Fast</h3>
            <p>
              Our goal is to get standard automations running within a week.
            </p>
          </div>

          <div className="valueCard">
            <span>03</span>
            <h3>Simple</h3>
            <p>
              Your automation should make your business simpler, not add
              another complicated process.
            </p>
          </div>

          <div className="valueCard">
            <span>04</span>
            <h3>Transparent</h3>
            <p>
              We charge a one-time implementation fee. There is no recurring
              BuziGrowth maintenance fee.
            </p>
          </div>
        </div>
      </section>

      <section className="aboutCTA">
        <div className="sectionLabel">LET'S BUILD</div>

        <h2>
          Have work you'd
          <br />
          <span>like to automate?</span>
        </h2>

        <p>Tell us what you're doing manually and let's turn it into a system.</p>

        <a
          href="mailto:support@buzigrowth.com?subject=Automation Service Request"
          className="button primary large"
        >
          support@buzigrowth.com <span>↗</span>
        </a>
      </section>

    </main>
  );
}


