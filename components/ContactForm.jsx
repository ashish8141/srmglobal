"use client";
import { useState } from "react";
import Link from "next/link";

export default function ContactForm() {
  const [data, setData] = useState({
    name: "", company: "", email: "", phone: "", bom: "", notes: "", agree: false,
  });
  const [errs, setErrs] = useState({});
  const [sent, setSent] = useState(false);
  const [ref, setRef] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const set = (k, v) => setData((d) => ({ ...d, [k]: v }));

  const submit = async (e) => {
    e.preventDefault();
    const er = {};
    if (!data.name.trim()) er.name = "Required";
    if (!data.company.trim()) er.company = "Required";
    if (!data.email.match(/.+@.+\..+/)) er.email = "Valid email required";
    if (!data.bom.trim()) er.bom = "Submit at least one part number with quantity";
    if (!data.agree) er.agree = "Please acknowledge our data routing rules";
    setErrs(er);
    if (Object.keys(er).length !== 0) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/rfq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source: "contact-bom", ...data }),
      });
      const out = await res.json();
      setRef(out.reference || "");
      setSent(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } finally { setSubmitting(false); }
  };

  if (sent) {
    return (
      <div className="card" style={{ padding: 48, textAlign: "center" }}>
        <div style={{
          width: 96, height: 96, borderRadius: "50%",
          background: "#effaf3", border: "1px solid #b7d9c8",
          margin: "0 auto 24px", display: "flex", alignItems: "center", justifyContent: "center",
          color: "var(--green)", fontSize: 48
        }}>✓</div>
        <span className="num">▎ TRANSMISSION COMPLETE</span>
        <h2 style={{ marginTop: 8, marginBottom: 16 }}>Your request has been received.</h2>
        <p style={{ maxWidth: 480, margin: "0 auto", fontSize: 16 }}>
          Reference <span className="mono" style={{ color: "var(--ink-700)", fontWeight: 600 }}>{ref}</span> has been routed to our sourcing desk. A dedicated account manager will respond to <span className="mono" style={{ color: "var(--ink-700)" }}>{data.email}</span> within 2 business hours.
        </p>
        <div style={{ display: "flex", gap: 10, justifyContent: "center", marginTop: 28 }}>
          <button className="btn btn-ghost" onClick={() => { setSent(false); setData({ name: "", company: "", email: "", phone: "", bom: "", notes: "", agree: false }); setErrs({}); }}>
            Submit another
          </button>
          <Link href="/" className="btn btn-primary btn-arrow">Back to home</Link>
        </div>
      </div>
    );
  }

  const F = ({ id, label, ta = false, rows = 3, placeholder }) => (
    <div className={"field " + (errs[id] ? "invalid" : "")}>
      <label htmlFor={id}>{label}</label>
      {ta
        ? <textarea id={id} value={data[id]} onChange={(e) => set(id, e.target.value)} placeholder={placeholder} rows={rows}
            style={{ fontFamily: id === "bom" ? "var(--font-mono)" : undefined, fontSize: id === "bom" ? 13 : undefined }} />
        : <input id={id} value={data[id]} onChange={(e) => set(id, e.target.value)} placeholder={placeholder} />}
      {errs[id] && <span className="err">{errs[id]}</span>}
    </div>
  );

  return (
    <form className="card" onSubmit={submit} style={{ padding: 36 }}>
      <div className="eyebrow"><span className="dot" />BOM / DATA INGESTION ENGINE</div>
      <h3 style={{ marginTop: 14, marginBottom: 22, fontSize: 24 }}>Submit Your Bill of Materials (BOM) or RFQ.</h3>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <F id="name"    label="Given Name & Surname *"               placeholder="Jane Doe" />
        <F id="company" label="Company Identification Name *"         placeholder="Acme Electronics Limited" />
        <F id="email"   label="Corporate Network Email Node *"        placeholder="jane@acme.com" />
        <F id="phone"   label="Mobile or Voice Access String"         placeholder="+91 ………" />
        <div style={{ gridColumn: "1 / -1" }}>
          <F id="bom" label="Part Identifier Systems & Volume Matrix Requirements *" ta rows={6}
            placeholder={"STM32F407VGT6, ST, 5000\nSN74HC595N, TI, 12000\nMAX232CPE, ADI, 800"} />
        </div>
        <div style={{ gridColumn: "1 / -1" }}>
          <F id="notes" label="Context Parameters (e.g., Target Budget, Manufacturer Limits)" ta rows={3}
            placeholder="Optional context — target unit pricing, AVL constraints, delivery preference…" />
        </div>
      </div>

      <label style={{
        display: "flex", gap: 12, marginTop: 22,
        padding: "14px 16px", background: "var(--ink-050)",
        borderRadius: "var(--radius)",
        border: "1px solid " + (errs.agree ? "#c0392b" : "var(--ink-100)"),
        cursor: "pointer", fontSize: 13.5
      }}>
        <input type="checkbox" checked={data.agree} onChange={(e) => set("agree", e.target.checked)}
          style={{ marginTop: 3, width: 18, height: 18, accentColor: "var(--ink-600)" }} />
        <span>I record agreement to data routing rules for srmglobaltech.com. Submission consents to processing for sourcing and RFQ fulfilment.</span>
      </label>
      {errs.agree && <div className="err" style={{ color: "#c0392b", fontSize: 12, marginTop: 6 }}>{errs.agree}</div>}

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 24, gap: 16, flexWrap: "wrap" }}>
        <div className="mono" style={{ fontSize: 11, color: "var(--text-faint)", letterSpacing: "0.1em" }}>
          ◉ TLS · ENCRYPTED · ROUTED TO rfq@srmglobaltech.com
        </div>
        <button type="submit" className="btn btn-amber btn-arrow" disabled={submitting}>
          {submitting ? "Transmitting…" : "Transmit Request"}
        </button>
      </div>
    </form>
  );
}
