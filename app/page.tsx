// app/page.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const workflow = [
  { title: "New customer", icon: "01" },
  { title: "Capture details", icon: "02" },
  { title: "Update CRM", icon: "03" },
  { title: "Send email", icon: "04" },
  { title: "Notify team", icon: "05" },
];

export default function Home() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % workflow.length);
    }, 1300);

    return () => clearInterval(timer);
  }, []);

  return (
    <main>

      <section className="hero">
        <div className="heroGlow" />

        <div className="heroContent">
          <div className="eyebrow">
            <span className="pulse" />
            BUSINESS AUTOMATION
          </div>

          <h1>
            Automate the work.
            <br />
            <span>Grow your business.</span>
          </h1>

          <p>
            We build custom automations that eliminate repetitive work,
            connect your business tools, and keep your operations moving.
          </p>

          <div className="heroActions">
            <Link href="/services" className="button primary">
              Book an Automation Service
              <span>↗</span>
            </Link>

            <Link href="/services" className="button secondary">
              Explore Services
            </Link>
          </div>

          <div className="promise">
            <span>✦</span>
            Get your automation running within a week.
          </div>
        </div>

        <div className="workflowWindow">
          <div className="windowTop">
            <div className="windowDots">
              <i />
              <i />
              <i />
            </div>

            <div className="windowTitle">BUZIGROWTH / WORKFLOW</div>

            <div className="live">
              <span />
              LIVE
            </div>
          </div>

          <div className="workflow">
            {workflow.map((item, index) => (
              <div
                key={item.title}
                className={`workflowItem ${
                  index === active ? "active" : ""
                } ${index < active ? "completed" : ""}`}
              >
                <div className="node">
                  <span>{item.icon}</span>
                </div>

                <div className="nodeText">
                  <small>
                    {index === 0
                      ? "TRIGGER"
                      : index === workflow.length - 1
                      ? "ACTION"
                      : "AUTOMATION"}
                  </small>
                  <strong>{item.title}</strong>
                </div>

                {index !== workflow.length - 1 && (
                  <div className={`connector ${index < active ? "filled" : ""}`}>
                    <span />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="windowFooter">
            <span>Automation status</span>
            <strong>Running automatically</strong>
          </div>
        </div>
      </section>

      <section className="problem section">
        <div className="sectionLabel">WHY BUZIGROWTH</div>

        <div className="splitHeading">
          <h2>
            Stop doing work
            <br />
            <span>software can do.</span>
          </h2>

          <p>
            Your team shouldn't have to spend hours copying information,
            sending repetitive emails, checking spreadsheets, or reminding
            customers to take the next step.
          </p>
        </div>

        <div className="problemGrid">
          {[
            ["01", "Manual data entry", "→", "Automatically captured"],
            ["02", "Repetitive emails", "→", "Automatically sent"],
            ["03", "Missed follow-ups", "→", "Automatically scheduled"],
            ["04", "Disconnected tools", "→", "Automatically connected"],
          ].map(([number, before, arrow, after]) => (
            <div className="problemCard" key={number}>
              <span className="cardNumber">{number}</span>
              <div>
                <p>{before}</p>
                <div className="cardArrow">
                  <span>{arrow}</span>
                  {after}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="how section">
        <div className="sectionLabel">HOW IT WORKS</div>

        <div className="splitHeading">
          <h2>
            From manual work
            <br />
            <span>to automated.</span>
          </h2>

          <p>
            We take the process your team repeats every day and turn it into a
            workflow that runs in the background.
          </p>
        </div>

        <div className="steps">
          {[
            [
              "01",
              "Tell us what you do manually",
              "Show us the process that's taking your team's time.",
            ],
            [
              "02",
              "We design the automation",
              "We map the workflow and determine what can be automated.",
            ],
            [
              "03",
              "We build and test it",
              "Your automation is built, tested, and refined with you.",
            ],
            [
              "04",
              "Your automation goes live",
              "Your workflow starts handling the repetitive work for you.",
            ],
          ].map(([number, title, description]) => (
            <div className="step" key={number}>
              <span>{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <div className="ctaGlow" />

        <div className="sectionLabel">READY TO AUTOMATE?</div>

        <h2>
          What could your business
          <br />
          <span>stop doing manually?</span>
        </h2>

        <p>
          Tell us about your workflow and we'll help turn the repetitive parts
          into automation.
        </p>

        <Link href="/services" className="button primary large">
          Book an Automation Service
          <span>↗</span>
        </Link>
      </section>

    </main>
  );
}



