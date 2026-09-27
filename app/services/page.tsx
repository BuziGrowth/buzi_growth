// app/services/page.tsx
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Sales Automation",
    description:
      "Capture, organize and follow up with leads automatically so opportunities don't get lost.",
    items: [
      "Lead capture",
      "Lead qualification",
      "CRM updates",
      "Automatic follow-ups",
      "Lead assignment",
      "Sales notifications",
    ],
  },
  {
    number: "02",
    title: "Customer Communication",
    description:
      "Automate the repetitive conversations your business has with customers every day.",
    items: [
      "Automatic email replies",
      "Email follow-ups",
      "WhatsApp automation",
      "Customer notifications",
      "Appointment reminders",
      "Welcome messages",
    ],
  },
  {
    number: "03",
    title: "Operations Automation",
    description:
      "Turn repetitive business processes into workflows that run automatically in the background.",
    items: [
      "Order automation",
      "Invoice & payment automation",
      "Calendar automation",
      "Booking automation",
      "Business notifications",
      "Internal workflows",
    ],
  },
  {
    number: "04",
    title: "Data & Reporting",
    description:
      "Stop moving information between spreadsheets and systems manually.",
    items: [
      "Data entry automation",
      "Spreadsheet automation",
      "Data synchronization",
      "Automated reports",
      "Daily & weekly reports",
      "Record management",
    ],
  },
  {
    number: "05",
    title: "App & API Integration",
    description:
      "Connect the applications your business already uses and make them work together.",
    items: [
      "REST API integrations",
      "Webhooks",
      "CRM integrations",
      "Payment integrations",
      "Database connections",
      "Custom workflows",
    ],
  },

  {
    number: "06",
    title: "App Development",
    description:
      "Develop the applications your business needs.",
    items: [
      "Web Development",
      "Desktop App Development",
      "Backend Service",
     
    ],
  },
];

export default function ServicesPage() {
  return (
    <main>

      <section className="pageHero">
        <div className="sectionLabel">OUR SERVICES</div>

        <h1>
          Your business has
          <br />
          <span>work to automate.</span>
        </h1>

        <p>
          We build practical automation systems around the tools and processes
          your business already uses.
        </p>
      </section>

      <section className="servicesList">
        {services.map((service) => (
          <article className="serviceCard" key={service.number}>
            <div className="serviceNumber">{service.number}</div>

            <div className="serviceMain">
              <h2>{service.title}</h2>
              <p>{service.description}</p>

              <div className="serviceItems">
                {service.items.map((item) => (
                  <div className="serviceItem" key={item}>
                    <span>+</span>
                    {item}
                  </div>
                ))}
              </div>

              <Link href="#book" className="serviceLink">
                Book this service <span>↗</span>
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className="serviceCTA" id="book">
        <div className="sectionLabel">NOT SURE WHAT YOU NEED?</div>

        <h2>
          Tell us what you're
          <br />
          <span>doing manually.</span>
        </h2>

        <p>
          If you're repeating it, copying it, checking it, or reminding
          someone about it, there's a good chance we can automate it.
        </p>

        <a
          href="mailto:support@buzigrowth.com?subject=Automation Service Request"
          className="button primary large"
        >
          Book an Automation Service <span>↗</span>
        </a>
      </section>

    </main>
  );
}

