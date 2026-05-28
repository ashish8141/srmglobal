"use client";
import { useState, useEffect, useRef } from "react";

function RFQField({ k, label, placeholder, value, error, onValueChange, ta = false, required = true }) {
  return (
    <div className={"field " + (error ? "invalid" : "")}>
      <label>{label}{required && " *"}</label>
      {ta
        ? <textarea value={value} onChange={(e) => onValueChange(k, e.target.value)} placeholder={placeholder} />
        : <input value={value} onChange={(e) => onValueChange(k, e.target.value)} placeholder={placeholder} />}
      {error && <span className="err">{error}</span>}
    </div>
  );
}

export default function QuickRFQ() {
  const [data, setData] = useState({ name: "", company: "", email: "", qty: "", notes: "" });
  const [pns, setPns] = useState([]);
  const [pnInput, setPnInput] = useState("");
  const [flashPn, setFlashPn] = useState(null);
  const [errs, setErrs] = useState({});
  const [sent, setSent] = useState(false);
  const [ref, setRef] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const inputRef = useRef(null);
  const formRef = useRef(null);

  const set = (k, v) => setData((d) => ({ ...d, [k]: v }));

  const addPn = (raw) => {
    if (!raw) return;
    const parts = raw.split(/[,\n]+/).map((s) => s.trim()).filter(Boolean);
    setPns((prev) => {
      const next = [...prev];
      parts.forEach((p) => { if (!next.includes(p)) next.push(p); });
      return next;
    });
    setPnInput("");
    if (parts.length) {
      setFlashPn(parts[parts.length - 1]);
      setTimeout(() => setFlashPn(null), 900);
    }
  };
  const removePn = (pn) => setPns((p) => p.filter((x) => x !== pn));

  useEffect(() => {
    const handler = (e) => {
      const pn = e.detail?.pn;
      if (!pn) return;
      setPns((prev) => (prev.includes(pn) ? prev : [...prev, pn]));
      setFlashPn(pn);
      setTimeout(() => setFlashPn(null), 900);
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    };
    window.addEventListener("srm:add-to-quote", handler);
    return () => window.removeEventListener("srm:add-to-quote", handler);
  }, []);

  const validate = () => {
    const e = {};
    if (!data.name.trim()) e.name = "Required";
    if (!data.company.trim()) e.company = "Required";
    if (!data.email.match(/.+@.+\..+/)) e.email = "Valid business email required";
    if (pns.length === 0) e.pn = "At least one part number";
    if (!data.qty.trim()) e.qty = "Quantity required";
    setErrs(e);
    return Object.keys(e).length === 0;
  };

  const submit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/rfq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source: "home-rfq", ...data, pn: pns.join(", ") }),
      });
      const out = await res.json();
      if (!res.ok || !out.ok) throw new Error(out.message || "Unable to send RFQ.");
      setRef(out.reference || "");
      setSent(true);
    } catch (e) {
      setErrs({ submit: e.message || "Unable to send RFQ." });
    } finally { setSubmitting(false); }
  };

  if (sent) {
    return (
      <div className="card" style={{ padding: 28, textAlign: "left" }}>
        <span className="num">RIGHT TERMINAL — RAPID RFQ MODULE</span>
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          height: 64, width: 64, borderRadius: "50%", background: "#effaf3",
          color: "var(--green)", fontSize: 30, marginTop: 12, marginBottom: 16,
          border: "1px solid #b7d9c8"
        }}>✓</div>
        <h3>Request transmitted.</h3>
        <p style={{ marginTop: 8 }}>
          Thanks for your request. Our team responds within 2 hours during business hours.
        </p>
        <button className="btn btn-ghost btn-sm" style={{ marginTop: 16, color: "var(--paper)" }} onClick={() => { setSent(false); setData({ name: "", company: "", email: "", qty: "", notes: "" }); setPns([]); }}>
          Submit another →
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} id="rfq-form" className="card" onSubmit={submit} style={{ padding: 28 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
        <div>
          <span className="num">RIGHT TERMINAL — RAPID RFQ MODULE</span>
          <h3 style={{ marginTop: 4 }}>Request a Rapid RFQ</h3>
        </div>
        <span className="tag amber mono">⏱ &lt; 2h RESPONSE</span>
      </div>
      <div className="form-2col-sm">
        <RFQField k="name" label="Full Name" placeholder="Jane Doe" value={data.name} error={errs.name} onValueChange={set} />
        <RFQField k="company" label="Company Name" placeholder="Acme Electronics Limited" value={data.company} error={errs.company} onValueChange={set} />
        <RFQField k="email" label="Business Email" placeholder="jane@acme.com" value={data.email} error={errs.email} onValueChange={set} />
        <RFQField k="qty" label="Quantity Required" placeholder="e.g. 5,000" value={data.qty} error={errs.qty} onValueChange={set} />
        <div style={{ gridColumn: "1 / -1" }}>
          <div className={"field " + (errs.pn ? "invalid" : "")}>
            <label style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span>PART NUMBER(S) *</span>
              <span style={{ textTransform: "none", letterSpacing: 0, fontFamily: "var(--font-sans)", fontSize: 11, color: "var(--text-faint)", fontWeight: 500 }}>
                {pns.length > 0
                  ? `${pns.length} part${pns.length === 1 ? "" : "s"} queued`
                  : "Type and press Enter — or click ‘Add to Quote’ from search"}
              </span>
            </label>
            <div className="chip-input" onClick={() => inputRef.current?.focus()}>
              {pns.map((pn) => (
                <span key={pn} className={"chip" + (flashPn === pn ? " flash" : "")}>
                  {pn}
                  <button type="button" aria-label={"Remove " + pn} onClick={(e) => { e.stopPropagation(); removePn(pn); }}>×</button>
                </span>
              ))}
              <input
                ref={inputRef}
                value={pnInput}
                onChange={(e) => {
                  const v = e.target.value;
                  if (v.endsWith(",")) addPn(v);
                  else setPnInput(v);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") { e.preventDefault(); addPn(pnInput); }
                  else if (e.key === "Backspace" && !pnInput && pns.length) {
                    removePn(pns[pns.length - 1]);
                  }
                }}
                onPaste={(e) => {
                  const txt = e.clipboardData.getData("text");
                  if (/[,\n]/.test(txt)) { e.preventDefault(); addPn(txt); }
                }}
                onBlur={() => { if (pnInput.trim()) addPn(pnInput); }}
                placeholder={pns.length === 0 ? "STM32F407VGT6, SN74HC595N…" : ""}
              />
            </div>
            {errs.pn && <span className="err">{errs.pn}</span>}
          </div>
        </div>
        <div style={{ gridColumn: "1 / -1" }}>
          <RFQField k="notes" label="Target Price / Notes" placeholder="Target unit price, packaging, delivery window…" value={data.notes} error={errs.notes} onValueChange={set} ta required={false} />
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 18, gap: 12, flexWrap: "wrap" }}>
        <div style={{ fontSize: 12, color: "var(--text-faint)" }}>By submitting you agree to our data routing policy.</div>
        <button type="submit" className="btn btn-amber btn-arrow" disabled={submitting}>
          {submitting ? "Sending…" : "Submit Request"}
        </button>
      </div>
      {errs.submit && <div className="err" style={{ color: "#c0392b", fontSize: 12, marginTop: 10 }}>{errs.submit}</div>}
    </form>
  );
}
