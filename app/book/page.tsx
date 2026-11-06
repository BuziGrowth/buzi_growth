"use client";

import { sendEmail } from "@/server/sendEmailAction";
import Link from "next/link";
import { FormEvent, useState } from "react";
import {toast}from "react-toastify"

const services = {
  "Sales Automation": [
    "Lead capture",
    "Lead qualification",
    "CRM updates",
    "Automatic follow-ups",
    "Lead assignment",
    "Sales notifications",
  ],

  "Customer Communication": [
    "Automatic email replies",
    "Email follow-ups",
    "WhatsApp automation",
    "Customer notifications",
    "Appointment reminders",
    "Welcome messages",
  ],

  "Operations Automation": [
    "Order automation",
    "Invoice & payment automation",
    "Calendar automation",
    "Booking automation",
    "Business notifications",
    "Internal workflows",
  ],

  "Data & Reporting": [
    "Data entry automation",
    "Spreadsheet automation",
    "Data synchronization",
    "Automated reports",
    "Daily & weekly reports",
    "Record management",
  ],

  "App & API Integration": [
    "REST API integrations",
    "Webhooks",
    "CRM integrations",
    "Payment integrations",
    "Database connections",
    "Custom workflows",
  ],
  "App/Web Development": [
    "Mobile Apps",
    "Web Apps",
    "Desktop Apps",
    
  ],
};

type ServiceCategory = keyof typeof services;

export default function BookPage() {
  const [category, setCategory] = useState<ServiceCategory | "">("");
  const [service, setService] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleCategoryChange(value: ServiceCategory) {
    setCategory(value);
    setService("");
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const details = {
      name: data.get("name"),
      email: data.get("email"),
      category: data.get("category"),
      service: data.get("service"),
      description: data.get("description"),
      tools: data.get("tools"),
      timeline: data.get("timeline"),
    };

    const res = await sendEmail(details)
    if(res){
      toast.error(res)
    }else{
              setSubmitted(true);

    }

  }

  if (submitted) {
    return (
      <main>

        <section className="bookSuccess">
          <div className="successIcon">✓</div>

          <div className="sectionLabel">REQUEST RECEIVED</div>

          <h1>
            Let&apos;s automate
            <br />
            <span>your business.</span>
          </h1>

          <p>
            We&apos;ve received your automation request. We&apos;ll review your workflow
            and get back to you using the contact details you provided.
          </p>

          <div className="successContact">
            <span>Need to reach us directly?</span>
            <a href="mailto:support@buzigrowth.com">
              support@buzigrowth.com
            </a>
          </div>

          <Link href="/" className="button secondary">
            Back to Home
          </Link>
        </section>

      </main>
    );
  }

  return (
    <main>

      <section className="bookHero">
        <div className="sectionLabel">BOOK AN AUTOMATION SERVICE</div>

        <h1>
          Tell us what you want
          <br />
          <span>to automate.</span>
        </h1>

        <p>
          Tell us a little about your business and the work you'd like to
          automate. We&apos;ll review your request and get in touch.
        </p>
      </section>

      <section className="bookSection">
        <form onSubmit={handleSubmit} className="bookingForm">
          {/* Contact details */}

          <div className="formSection">
            <div className="formSectionHeader">
              <span>01</span>

              <div>
                <h2>Your details</h2>
                <p>Tell us how we can reach you.</p>
              </div>
            </div>

            <div className="formGrid">
              <Field
                label="Full name/business"
                name="name"
                placeholder="John Doe"
                required
              />

             

              <Field
                label="Email address"
                name="email"
                type="email"
                placeholder="you@business.com"
                required
              />

            </div>
          </div>

          {/* Service */}

          <div className="formSection">
            <div className="formSectionHeader">
              <span>02</span>

              <div >
                <h2>What do you want to automate?</h2>
                <p>Choose the area that best describes your needs.</p>
              </div>
            </div>

            <input
              style={{color:"greenyellow"}}
              type="hidden"
              name="category"
              value={category}
              required
            />

            <div className="categoryGrid">
              {Object.keys(services).map((item) => {
                const value = item as ServiceCategory;

                return (
                  <button
                    key={value}
                    type="button"
                    className={`categoryOption ${
                      category === value ? "selected" : ""
                    }`}
                    onClick={() => handleCategoryChange(value)}
                  >
                    <span className="categoryCheck">
                      {category === value ? "✓" : ""}
                    </span>

                    <span style={{color:"greenyellow"}}>{value}</span>
                  </button>
                );
              })}
            </div>

            {category && (
              <div className="serviceSelectWrapper">
                <label style={{color:"greenyellow"}} htmlFor="service">Specific automation</label>

                <select
                  id="service"
                  name="service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  required
                >
                  <option value="">Select an automation</option>

                  {services[category].map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>

          {/* Workflow */}

          <div className="formSection">
            <div className="formSectionHeader">
              <span>03</span>

              <div>
                <h2>Tell us about the workflow</h2>
                <p>
                  The more you tell us, the better we can understand what to
                  automate.
                </p>
              </div>
            </div>

            <div className="textareaField">
              <label style={{color:"greenyellow"}} htmlFor="description">
                What are you currently doing manually?
              </label>

              <textarea
                id="description"
                name="description"
                placeholder="For example: When a customer sends us an email, someone reads it, checks our customer records, replies to them, then adds the customer to our spreadsheet..."
                rows={7}
                required
              />
            </div>

            <div className="textareaField">
              <label style={{color:"greenyellow"}} htmlFor="tools">
                What tools does your business currently use?
              </label>

              <textarea
                id="tools"
                name="tools"
                placeholder="For example: Gmail, Google Sheets, WhatsApp, Google Calendar, Shopify..."
                rows={4}
              />
            </div>
          </div>

          {/* Timeline */}

          <div className="formSection">
            <div className="formSectionHeader">
              <span>04</span>

              <div>
                <h2>When would you like to start?</h2>
                <p>Give us an idea of your timeline.</p>
              </div>
            </div>

            <div className="timelineGrid">
              {[
                "As soon as possible",
               
                "Next week",
              ].map((item) => (
                <label key={item} className="timelineOption">
                  <input
                    type="radio"
                    name="timeline"
                    value={item}
                    defaultChecked={item === "As soon as possible"}
                  />

                  <span style={{color:"greenyellow"}}>{item}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="formBottom">
            <div>
              <span>ONE-TIME IMPLEMENTATION</span>
              <p>
                No recurring BuziGrowth maintenance fee.
              </p>
            </div>

            <button type="submit" className="button primary submitButton">
              Submit Automation Request
              <span>↗</span>
            </button>
          </div>
        </form>
      </section>

    </main>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="inputField">
      <label style={{color:"greenyellow"}} htmlFor={name}>{label}</label>

      <input
        // style={{borderColor:"greenyellow"}}
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}

