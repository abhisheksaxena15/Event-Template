import React, { useState, useEffect } from "react";
import bannerImg from "./assets/1650x450--Ahmedabad.jpg";
import bannerMobile from "./assets/850x450-Ahmedabad.jpg";
import insightImage from "./assets/image.png";

const styles = {

  root: {
    width: "100%",
    margin: "0",
    padding: "0",
    backgroundColor: "#ffffff",  // ADD THIS
    minHeight: "100vh",
  },

  wrapper: {
    margin: "0 auto",
    width: "100%",
    minHeight: "100vh",
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
    backgroundColor: "#ffffff",
    // border: "1px solid #c6c6a9",
    // borderRadius: 12,
    // overflow: "hidden",
  },

  // ── Hero ──────────────────────────────────────────────────────────────
  hero: {

    position: "relative",
    backgroundImage: `url(${bannerImg})`,
    backgroundSize: "COVER", //"100% auto",
    backgroundPosition: "center", //top center",
    backgroundRepeat: "no-repeat",

    height: "27vw",
    maxHeight: 450,
    minHeight: 250,
    padding: 0,
    overflow: "hidden",


    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",

  },
  heroOverlay: {
    display: " none",
  },
  heroContent: {
    color: "#fff",
    textAlign: "center",
    maxWidth: "900px",
    position: "relative", zIndex: 2
  },
  heroBadge: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderWidth: "0 88px 88px 0",
    borderColor: "transparent #01A982 transparent transparent",
  },
  logoBar: {
    position: "absolute",
    top: 20,
    left: 32,
    fontSize: 24,
    fontWeight: 800,
    color: "#ffffff",
    letterSpacing: -1,
    zIndex: 2,
  },
  logoAccent: { color: "#01A982" },
  heroTitle: {
    fontSize: 26,
    fontWeight: 700,
    color: "#ffffff",
    lineHeight: 1.2,
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: 14,
  },
  heroMeta: { display: "flex", flexDirection: "column", gap: 3 },
  heroMetaBold: { fontSize: 14, color: "#ffffff", fontWeight: 600 },
  heroMetaLight: { fontSize: 14, color: "#cce8e0" },

  // ── Body ──────────────────────────────────────────────────────────────
  // bodySection: { padding: "28px 32px 8px" },
  // bodyP: { fontSize: 15, lineHeight: 1.75, color: "#1a1a1a", marginBottom: 14 },
  // bold: { fontWeight: 700 },

  bodySection: {
    padding: "24px 40px 12px",
    backgroundColor: "#ffffff",
    textAlign: "left",
  },

  bodyP: {
    fontSize: "18px",
    lineHeight: "1.4",
    color: "#333333",
    marginBottom: "22px",
    marginTop: 0,
    textAlign: "left",
  },

  bold: {
    fontWeight: 700,
  },

  // ── CTA ───────────────────────────────────────────────────────────────
  ctaWrap: {
    textAlign: "center",
    padding: "10px 0 30px",
  },
  ctaBtn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00b388",
    color: "#fff",
    fontSize: "18px",
    fontWeight: 700,
    borderRadius: "24px",
    padding: "12px 28px",
    textDecoration: "none",
    border: "none",
    minWidth: "160px",
  },
  agendaHeading: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#111111",
    marginTop: "32px",
    marginBottom: "16px",
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
  },
  agendaSubheading: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#444444",
    marginBottom: "12px",
  },
  agendaList: {
    listStyleType: "none",
    paddingLeft: 0,
    marginBottom: "24px",
  },
  agendaListItem: {
    fontSize: "15px",
    color: "#333333",
    lineHeight: "1.6",
    marginBottom: "8px",
    display: "flex",
    alignItems: "flex-start",
    gap: "10px",
  },
  bulletDot: {
    display: "inline-block",
    width: "6px",
    height: "6px",
    backgroundColor: "#01A982",
    borderRadius: "50%",
    marginTop: "8px",
    flexShrink: 0,
  },

  // ── Technical Insights ────────────────────────────────────────────────
  insightsSection: {
    backgroundColor: "#d7d9dc",
    padding: "28px 32px",
  },
  insightsInner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "50px",
  },
  sectionTitle: {
    fontSize: "42px",
    fontWeight: 700,
    color: "#1a1a1a",
    marginBottom: "20px",
    textAlign: "left",
  },
  ssectionDesc: {
    fontSize: "28px",
    lineHeight: 1.35,
    color: "#2f3542",
    fontWeight: 500, maxWidth: "850px",
    textAlign: "left",
  },
  serverIcon: {
    flexShrink: 0,
    width: 180,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  pillarsGrid: {
    display: "flex",
    justifyContent: "space-between",
    gap: 30,
    marginTop: 30,
  },
  pillar: {
    display: "flex",
    alignItems: "center",
    gap: "22px",
    background: "transparent",
    border: "none",
    padding: 0,
  },
  pillarNum: {
    width: 48,
    height: 48,
    backgroundColor: "#fff",
    border: "1px solid #999",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    fontWeight: 700,
    color: "#000",
    position: "relative",
    zIndex: 1,
  },
  pillarLabel: {
    fontSize: 16,
    lineHeight: 1.2,
    fontWeight: 500,
    color: "#1a1a1a",
    textAlign: "left",
    whiteSpace: "pre-line",
  },

  // ── Registration Form Section (image_07be63.png Specifications) ──────
  detailsSection: {
    padding: "32px 40px",
    backgroundColor: "#ffffff",
    textAlign: "left",
  },



  detailRow: {
    fontSize: "18px",
    lineHeight: "1.8",
    color: "#bebcbc",
    marginBottom: "4px",
  },

  detailLabel: {
    fontWeight: 700,
    color: "#000",
  },

  detailValue: {
    color: "#374151",
  },

  subHeading: {
    fontSize: "20px",
    fontWeight: 500,
    color: "#1f2937",
    marginTop: "30px",
    marginBottom: "24px",
  },

  input: {
    width: "100%",
    height: "58px",
    padding: "0 18px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    fontSize: "16px",
    color: "#a4c4f8",
    backgroundColor: "#ffffff",   // IMPORTANT
    marginBottom: "18px",
    boxSizing: "border-box",
    outline: "none",
  },


  consentText: {
    fontSize: "15px",
    lineHeight: "1.8",
    color: "#374151",
    marginBottom: "18px",
  },

  link: {
    color: "#01A982",
    textDecoration: "underline",
  },

  checkboxRow: {
    display: "flex",
    alignItems: "flex-start",
    gap: "10px",
    marginTop: "20px",
    marginBottom: "24px",
  },

  checkbox: {
    width: "18px",
    height: "18px",
    marginTop: "4px",
  },

  checkboxLabel: {
    fontSize: "14px",
    lineHeight: "1.6",
    color: "#374151",
  },

  submitBtn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00b388",
    color: "#fff",
    fontSize: "18px",
    fontWeight: 700,
    borderRadius: "24px",
    padding: "12px 28px",
    textDecoration: "none",
    border: "none",
    minWidth: "160px",
    cursor: "pointer",
  },

  // ── Business Insights ─────────────────────────────────────────────────
  bizSection: { padding: "28px 32px" },
  bizInner: { display: "flex", gap: 20, alignItems: "flex-start" },
  bizIconWrap: {
    flexShrink: 0,
    width: 52,
    height: 52,
    backgroundColor: "#e1f5ee",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 24,
  },
  bizList: { listStyle: "none", padding: 0, flex: 1 },
  bizListItem: {
    fontSize: 14,
    color: "#1a1a1a",
    lineHeight: 1.65,
    padding: "8px 0",
    borderBottom: "0.5px solid #e5e7eb",
    display: "flex",
    gap: 10,
    alignItems: "flex-start",
  },
  bizDot: {
    display: "inline-block",
    width: 7,
    height: 7,
    backgroundColor: "#01A982",
    borderRadius: "50%",
    marginTop: 7,
    flexShrink: 0,
  },

  // ── Closing ───────────────────────────────────────────────────────────
  closingSection: { padding: "4px 32px 28px" },
  closingBox: {
    backgroundColor: "#e1f5ee",
    borderLeft: "3px solid #01A982",
    borderRadius: "0 8px 8px 0",
    padding: "14px 18px",
    marginBottom: 20,
  },
  closingBoxTitle: {
    fontSize: 14,
    fontWeight: 700,
    color: "#0a5c3f",
    marginBottom: 4,
  },
  closingBoxText: { fontSize: 13, color: "#0f6e56", lineHeight: 1.6 },
  regards: { fontSize: 14, color: "#1a1a1a", lineHeight: 1.9 },

  // ── Partner Bar ───────────────────────────────────────────────────────
  partnerBar: {
    padding: "20px 32px",
    borderTop: "0.5px solid #e5e7eb",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 16,
  },
  amdLogo: {
    fontSize: 20,
    fontWeight: 900,
    color: "#1a1a1a",
    letterSpacing: -0.5,
    fontFamily: "Arial Black, sans-serif",
  },
  amdArrow: { color: "#ED1C24" },
  msBadge: { display: "flex", alignItems: "center", gap: 10 },
  msGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 2,
    width: 20,
    height: 20,
  },
  msName: { fontSize: 16, fontWeight: 600, color: "#1a1a1a" },
  wsBadge: { fontSize: 11, color: "#6b7280", lineHeight: 1.4 },
  wsBadgeStrong: { display: "block", color: "#1a1a1a", fontSize: 12, fontWeight: 600 },

  // ── Footer ────────────────────────────────────────────────────────────
  footer: {
    backgroundColor: "#efefef",
    padding: "24px 55px",
    textAlign: "left",
    fontFamily: "Arial, Helvetica, sans-serif",
  },

  footerP: {
    fontSize: "12px",
    lineHeight: "1.4",
    color: "#222222",
    margin: "0 0 16px 0",
  },

  footerLink: {
    color: "#0070d2",
    textDecoration: "underline",
  },

  footerCopy: {
    borderTop: "1px solid #cfcfcf",
    marginTop: "22px",
    paddingTop: "18px",
  },

  footerCopyP: {
    fontSize: "12px",
    lineHeight: "1.35",
    color: "#333333",
    margin: "0 0 14px 0",
  },
};

const pillars = [
  { num: "01", label: "Next-level\nsecurity", color: "#00C48C" },
  { num: "02", label: "Seamless\nmodernization", color: "#55D6F5" },
  { num: "03", label: "Energy\nefficiency", color: "#7B61FF" },
  { num: "04", label: "AI driven\nautomation", color: "#007BFF" },
];

const bizItems = [
  "Market dynamics shaping demand for servers and Windows licenses.",
  "Enterprise IT priorities and the challenges customers face today.",
  "Powering next-gen workloads with HPE ProLiant Compute Gen12 and Microsoft's latest innovations.",
];

const RegisterBtn = ({ small = false }) => (
  <a
    href="#registration-form"
    style={{
      ...styles.ctaBtn,
      ...(small ? { fontSize: 14, padding: "10px 22px" } : {}),
    }}
  >
    Register now &nbsp;→
  </a>
);

export default function HPEEmailTemplate() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  const [formData, setFormData] = useState({
    fullName: "",
    designation: "",
    companyName: "",
    email: "",
    contactNumber: "",
    city: "",
    stateName: "",
    complianceChecked: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!/^[0-9]{10}$/.test(formData.contactNumber)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }
    if (!formData.complianceChecked) {
      alert("Please confirm corporate compliance check to complete submission.");
      return;
    }
    setSubmitted(true);
  };
  if (submitted) {
    return (
      <div style={styles.successContainer}>
        <h2>Thank You!</h2>
        <p>Your registration has been submitted successfully.</p>
      </div>
    );
  }


  return (
    <div style={styles.root}>
      <div style={styles.wrapper}>

        {/* ── Hero ── */}
        <div
          style={{
            ...styles.hero,
            backgroundImage: `url(${isMobile ? bannerMobile : bannerImg})`,
            height: isMobile ? "55vw" : "27vw",        // ← mobile gets proportional height
            minHeight: isMobile ? 180 : 250,
            backgroundPosition: isMobile ? "center center" : "top center",
          }}
        >        {/* <div style={styles.heroOverlay} /> */}
          <div style={styles.heroBadge} />
          <div style={styles.logoBar}>
            {/* HP<span style={styles.logoAccent}>E</span> */}
          </div>
        </div>

        {/* ── Body ── */}
        {/* <div style={styles.bodySection}>
        <p style={styles.bodyP}>
          Dear Partner,
        </p>

        <p style={styles.bodyP}>
          Legacy systems were built for yesterday's challenges.
        </p>

        <p style={styles.bodyP}>
          In today’s fast-evolving enterprise landscape, modernization is a necessity.
          Businesses are seeking{" "}
          <span style={styles.bold}>
            intelligent, scalable, and future-ready solutions
          </span>{" "}
          that accelerate innovation, reduce operational costs, and deliver seamless
          experiences for end users.
        </p>

        <p style={styles.bodyP}>
          To help you lead this transformation, we’re excited to invite you to the{" "}
          <span style={styles.bold}>
            Explore Next with HPE ProLiant Compute
          </span>
          , a curated program designed to equip you with the tools, insights, and
          strategies needed to drive customer conversations and accelerate adoption
          of next-generation compute solutions.
        </p>
      </div> */}
        <div style={styles.bodySection}>
          {/* <p style={styles.agendaHeading}>Dear Partner,</p> */}

          <p style={styles.agendaListItem}>
            Enterprises today are taking a bolder move to adopt platforms that can improve their productivity,
            automate day-to-day operation and bring seamless experience for their end users.
            Legacy systems are becoming irrelevant and are getting replaced by more intelligent infrastructure
            that reduce maintenance costs, eliminate data silos, and improve scalability.
          </p>

          <p style={styles.agendaListItem}>
            We have designed a program to help partners drive the modernization conversation with end customers
            using HPE ProLiant compute powered by AMD EPYC processors and innovations led by Microsoft.
          </p>

          {/* ── Section: What's in Store ── */}
          <h3 style={styles.agendaHeading}>What's in Store</h3>
          <div style={styles.agendaSubheading}>Technical Deep Dives:</div>
          <ul style={styles.agendaList}>
            <li style={styles.agendaListItem}><span style={styles.bulletDot} />Energy efficiency & sustainability</li>
            <li style={styles.agendaListItem}><span style={styles.bulletDot} />Flexible architecture & modernization</li>
            <li style={styles.agendaListItem}><span style={styles.bulletDot} />Next-level security</li>
            <li style={styles.agendaListItem}><span style={styles.bulletDot} />AI-driven management</li>
          </ul>

          {/* ── Section: Notable Insights ── */}
          <h3 style={styles.agendaHeading}>Notable Insights for Partners</h3>
          <ul style={styles.agendaList}>
            <li style={styles.agendaListItem}><span style={styles.bulletDot} />Technology trends driving server and Windows licenses demand in the market.</li>
            <li style={styles.agendaListItem}><span style={styles.bulletDot} />Key customer challenges and evolving Enterprise IT priorities.</li>
            <li style={styles.agendaListItem}><span style={styles.bulletDot} />HPE ProLiant Compute Gen12 value proposition and Microsoft innovations.</li>
            <li style={styles.agendaListItem}><span style={styles.bulletDot} />Critical role of the partners</li>
          </ul>

          {/* ── Section: Networking Opportunities ── */}
          <h3 style={styles.agendaHeading}>Networking Opportunities</h3>
          <p style={styles.agendaListItem}>
            Connect with fellow HPE, AMD and Microsoft professionals during exclusive networking sessions offering the perfect atmosphere to exchange ideas and build valuable relationships.
          </p>


        </div>


        {/* ── CTA ── */}
        <div id="registration-form" style={styles.ctaWrap}>
          <RegisterBtn />
        </div>

        {/* ── Technical Insights ── */}
        <div style={styles.insightsSection}>
  {isMobile ? (
    // ── MOBILE (new clean UI) ──────────────────────────────
    <div style={{ textAlign: "left" }}>
      <div style={styles.sectionTitle}>Technical insights</div>
      <div style={{
        fontSize: "15px",
        lineHeight: 1.45,
        color: "#2f3542",
        fontWeight: 500,
        marginBottom: "24px",
      }}>
        Explore the latest innovations in compute technology and how HPE, AMD, and
        Microsoft are offering future-ready enterprise infrastructure, and propelling
        businesses forward with:
      </div>
      <div style={{ textAlign: "center", marginBottom: "24px" }}>
        <img src={insightImage} alt="Technical Insights"
          style={{ width: "55%", height: "auto", objectFit: "contain" }} />
      </div>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "16px",
      }}>
        {pillars.map((p) => (
          <div key={p.num} style={{
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            padding: "16px 12px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "10px",
            boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
          }}>
            <div style={{ position: "relative", width: 48, height: 48 }}>
              <div style={{
                position: "absolute", width: 48, height: 48,
                backgroundColor: p.color, top: -5, left: -5,
                borderRadius: "4px", opacity: 0.3,
              }} />
              <div style={{
                position: "relative", width: 48, height: 48,
                backgroundColor: "#fff", border: "1px solid #ccc",
                borderRadius: "4px", display: "flex",
                alignItems: "center", justifyContent: "center",
                fontSize: 18, fontWeight: 700, color: "#000", zIndex: 1,
              }}>{p.num}</div>
            </div>
            <div style={{
              fontSize: "14px", fontWeight: 600,
              color: "#1a1a1a", lineHeight: 1.3, whiteSpace: "pre-line",
            }}>{p.label}</div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    // ── DESKTOP (original untouched) ───────────────────────
    <div style={styles.insightsInner}>
      <div style={{ flex: 1, textAlign: "left", alignSelf: "flex-start" }}>
        <div style={styles.sectionTitle}>Technical insights</div>
        <div style={styles.sectionDesc}>
          Explore the latest innovations in compute technology and how HPE, AMD, and
          Microsoft are offering future-ready enterprise infrastructure, and propelling
          businesses forward with:
        </div>
        <div style={styles.pillarsGrid}>
          {pillars.map((p) => (
            <div key={p.num} style={styles.pillar}>
              <div style={{ position: "relative", flexShrink: 0 }}>
                <div style={{
                  position: "absolute", width: 48, height: 48,
                  backgroundColor: p.color, top: -6, left: -6,
                }} />
                <div style={styles.pillarNum}>{p.num}</div>
              </div>
              <div style={styles.pillarLabel}>{p.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={styles.serverIcon}>
        <img src={insightImage} alt="Technical Insights"
          style={{ width: "100%", height: "auto", display: "block", objectFit: "contain" }} />
      </div>
    </div>
  )}
</div>

        {/* ── Registration Form Section (Replacing simple button with image_07be63.png layouts) ── */}
        <div style={styles.detailsSection}>
          <h1 style={styles.sectionTitle}>Details</h1>

          <p style={styles.detailRow}>
            <span style={styles.detailLabel}>Dates: </span>
            <span style={styles.detailValue}>June 26, 2026</span>
          </p>

          <p style={styles.detailRow}>
            <span style={styles.detailLabel}>Time: </span>
            <span style={styles.detailValue}>11:00 AM</span>
          </p>

          <p style={styles.detailRow}>
            <span style={styles.detailLabel}>Venue: </span>
            <span style={styles.detailValue}>ITC Sonar, Kolkata</span>
          </p>

          <hr />

          <h3 style={styles.subHeading}>
            Please enter your details below :
          </h3>
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              style={styles.input}
              placeholder="Name"
              required
            />

            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleInputChange}
              style={styles.input}
              placeholder="Designation"
            />

            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              style={styles.input}
              placeholder="Company Name"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              style={styles.input}
              placeholder="Email Id"
              required
            />

            <input
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleInputChange}
              style={styles.input}
              placeholder="Contact Number"
              maxLength={10}
              required />

            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              style={styles.input}
              placeholder="City"
            />

            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              style={styles.input}
              placeholder="State"
            />

            <div style={styles.consentSection}>
              <p style={styles.consentText}>
                For more information on how HPE manages, uses and protects your
                information please refer to{" "}
                <a
                  href="https://www.hpe.com/in/en/legal/privacy.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.link}
                >
                  HPE Privacy Statement
                </a>
                . You can always withdraw or modify your consent to receive marketing
                communication from HPE. This can be done by using the opt-out and
                preference mechanism at the bottom of our email marketing communication
                or by following this{" "}
                <a
                  href="https://www.hpe.com/in/en/legal/privacy.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.link}
                >
                  link
                </a>
                .
              </p>

              <p style={styles.consentText}>
                If you have provided your mobile number to receive marketing
                communications, please note that roaming charges may apply.
              </p>

              <p style={styles.consentText}>
                By completing and submitting this form to HPE you acknowledge and
                consent to HPE’s collection and use of your personal information in
                accordance with{" "}
                <a
                  href="https://www.hpe.com/in/en/legal/privacy.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.link}
                >
                  HPE's Privacy Statement
                </a>
                .
              </p>

              <p style={styles.consentText}>
                By registering and participating, you consent to HPE using photos
                and/or video taken during the event for Marketing purposes.
              </p>
            </div>

            <div style={styles.checkboxRow}>
              <input
                type="checkbox"
                name="complianceChecked"
                checked={formData.complianceChecked}
                onChange={handleInputChange}
                style={styles.checkbox}
              />            <label style={styles.checkboxLabel}>
                By submitting my registration, I am likely to participate in the HPE
                Unlocking Ambitions and I will only accept amenities or gifts that
                are not prohibited by my organisation's policies. I confirm that I
                (and not Hewlett Packard Enterprise) shall be responsible for
                managing compliance with my organisation's policies.
              </label>
            </div>



            <button type="submit" style={styles.submitBtn}>
              Submit &nbsp;→
            </button>

          </form>


        </div>
        {/* ── Business Insights ── */}
        {/* <div style={styles.bizSection}>
        <div style={styles.sectionTitle}>Business insights and trends</div>
        <div style={{ ...styles.sectionDesc, marginBottom: 16 }}>
          Gain a competitive edge with:
        </div>
        <div style={styles.bizInner}>
          <div style={styles.bizIconWrap}>📊</div>
          <ul style={styles.bizList}>
            {bizItems.map((item, i) => (
              <li
                key={i}
                style={{
                  ...styles.bizListItem,
                  ...(i === bizItems.length - 1 ? { borderBottom: "none" } : {}),
                }}
              >
                <span style={styles.bizDot} />
                {item}
              </li>
            ))}
          </ul>
        </div> 
      </div>*/}

        {/* ── Closing ── */}
        <div style={styles.closingSection}>
          <div style={styles.closingBox}>
            <div style={styles.closingBoxTitle}>We look forward to your participation!</div>
            <span style={styles.closingBoxText}>
              Join us for an insightful, actionable, and collaborative experience that
              strengthens our partnership and accelerates shared success.
            </span>
          </div>
          <div style={styles.regards}>
            Regards
            <br />
            <strong>Team HPE</strong>
          </div>
        </div>

        {/* ── Partner Bar ── */}
        <div style={styles.partnerBar}>
          <div style={styles.amdLogo}>
            AMD<span style={styles.amdArrow}>↑</span>
          </div>
          <div style={styles.msBadge}>
            <div style={styles.msGrid}>
              <div style={{ background: "#F25022", borderRadius: 1 }} />
              <div style={{ background: "#7FBA00", borderRadius: 1 }} />
              <div style={{ background: "#00A4EF", borderRadius: 1 }} />
              <div style={{ background: "#FFB900", borderRadius: 1 }} />
            </div>
            <div>
              <div style={styles.msName}>Microsoft</div>
              <div style={styles.wsBadge}>
                <strong style={styles.wsBadgeStrong}>Windows Server 2025</strong>
                Advanced security and resiliency
              </div>
            </div>
          </div>
        </div>

        {/* ── Footer ── */}
        <div style={styles.footer}>
          <p style={styles.footerP}>
            You are receiving this email as a partner of the Hewlett Packard Enterprise. If
            you prefer not to receive future communications, you may{" "}
            <a href="#" style={styles.footerLink}>unsubscribe here</a>.
          </p>
          <p style={styles.footerP}>
            For more information regarding HPE's privacy policies, please visit the{" "}
            <a
              href="https://www.hpe.com/in/en/legal/privacy.html"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.footerLink}
            >
              HPE Privacy Statement
            </a>        </p>
          <p style={styles.footerP}>
            Was this email forwarded to you? To receive it directly from HPE, please{" "}
            <a
              href="#registration-form"
              style={styles.footerLink}
            >
              register
            </a>          Ready Portal account.
          </p>
          <div style={styles.footerCopy}>
            <p style={styles.footerCopyP}>
              © 2026 Hewlett Packard Enterprise Development LP. All rights reserved. All
              product and company names referenced herein are trademarks of their respective
              owners.
            </p>
            <p style={styles.footerCopyP}>
              AMD and the AMD Arrow logo are trademarks of Advanced Micro Devices, Inc.
            </p>
            <p style={styles.footerCopyP}>
              Microsoft, Windows, and Windows Server are either registered trademarks or
              trademarks of Microsoft Corporation in the United States and/or other countries.
              All third-party marks are property of their respective owners.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
