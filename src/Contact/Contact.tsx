// src/pages/Contact.tsx
import { useState } from "react";
import { supabase } from "../Client/lib/supabase";

import addressIcon  from "../assets/address.png";
import inquiryIcon  from "../assets/inquiry.png";
import linkedlnIcon from "../assets/icons8-linkedin-50.png";
import instagramIcon from "../assets/icons8-instagram-50.png";
import twiterIcon   from "../assets/icons8-twitter-50.png";
import mailtoIcon   from "../assets/@Icon.png";

interface FormState {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  area: string;
  service: string;
  preferredDate: string;
  details: string;
}

const EMPTY: FormState = {
  firstName: "", lastName: "", phone: "", email: "",
  area: "", service: "", preferredDate: "", details: "",
};

type Status = "idle" | "sending" | "success" | "error";

// ── Inline toast ──────────────────────────────────────────────────────────────
function StatusBanner({ status, onClose }: { status: Status; onClose: () => void }) {
  if (status === "idle" || status === "sending") return null;

  const isSuccess = status === "success";
  return (
    <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3
      px-6 py-4 rounded-2xl shadow-2xl text-white text-sm font-medium
      transition-all duration-300 ${isSuccess ? "bg-green-600" : "bg-red-500"}`}>
      {isSuccess ? (
        <>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M20 6L9 17l-5-5"/>
          </svg>
          Your request was sent! We'll be in touch within 1 hour.
        </>
      ) : (
        <>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          Something went wrong. Please try again or call us directly.
        </>
      )}
      <button onClick={onClose} className="ml-2 opacity-70 hover:opacity-100">✕</button>
    </div>
  );
}

const Contact = () => {
  const [form, setForm]   = useState<FormState>(EMPTY);
  const [status, setStatus] = useState<Status>("idle");

  const set = (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async () => {
    // Basic validation
    if (!form.firstName || !form.lastName || !form.phone || !form.area || !form.service) {
      alert("Please fill in all required fields (name, phone, area and service).");
      return;
    }

    setStatus("sending");

    try {
      // 1. Save contact to Supabase
      const { error: dbError } = await supabase.from("contacts").insert([{
        first_name:     form.firstName,
        last_name:      form.lastName,
        phone:          form.phone,
        email:          form.email || null,
        area:           form.area,
        service:        form.service,
        preferred_date: form.preferredDate || null,
        details:        form.details || null,
      }]);

      if (dbError) throw dbError;

      // 2. Save email to subscribers list (if provided + not already subscribed)
      if (form.email) {
        await supabase.from("subscribers").upsert(
          [{ email: form.email, first_name: form.firstName, subscribed: true }],
          { onConflict: "email", ignoreDuplicates: true }
        );
      }

      // 3. Trigger confirmation emails via Edge Function
      const { error: fnError } = await supabase.functions.invoke("send-contact-email", {
        body: {
          firstName:     form.firstName,
          lastName:      form.lastName,
          phone:         form.phone,
          email:         form.email,
          area:          form.area,
          service:       form.service,
          preferredDate: form.preferredDate,
          details:       form.details,
        },
      });

      if (fnError) {
        // Don't block the user — DB save succeeded, email is best-effort
        console.warn("Email send warning:", fnError);
      }

      setStatus("success");
      setForm(EMPTY); // reset form
      setTimeout(() => setStatus("idle"), 6000);

    } catch (err) {
      console.error("Contact submit error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 6000);
    }
  };

  const inputClass = `bg-white p-3 px-4 text-sm sm:text-base outline-none border-2 border-transparent
    focus:border-[#e7d6ff] focus:ring-2 focus:ring-[#e7d6ff] transition-all duration-300 w-full`;

  const isSending = status === "sending";

  return (
    <div className="bg-white pb-10">
      <StatusBanner status={status} onClose={() => setStatus("idle")} />

      <section id="contact" className="pt-10 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16 2xl:px-20">

        <div className="justify-center flex flex-col items-center">
          <h3 className="text-[var(--primary)] tracking-normal! leading-[1] head text-center text-[20px] sm:text-[24px] lg:text-[20px] xl:text-[28px] font-bold">
            Please tell So-Nyah Team the service you need
          </h3>
          <div className="border-b-[5px] pt-2 w-[500px]! sm:w-[120px] border-[var(--primary)]" />
        </div>

        <div className="flex flex-col lg:flex-row justify-center gap-10 lg:gap-14 xl:gap-20 pt-10 lg:pt-15">

          {/* ── Form ─────────────────────────────────────────────────────────── */}
          <div className="bg-[var(--primary)] flex flex-col p-5 sm:p-8 lg:p-10 w-full lg:max-w-[600px]">

            <label className="flex justify-center text-2xl sm:text-3xl text-white font-bold tracking-wide text-center">
              Get a Free Estimate
            </label>
            <p className="!text-[#ffffffaa] justify-center flex text-center text-sm sm:text-base mt-2">
              We respond within 1 hour, 7 days a week
            </p>

            {/* Row 1 — Name */}
            <div className="flex flex-col md:flex-row pt-6 sm:pt-8 justify-between gap-5 md:gap-6">
              <div className="flex flex-col w-full gap-2">
                <label className="font-bold text-white text-base sm:text-xl">
                  First Name <span className="text-red-300">*</span>
                </label>
                <input value={form.firstName} onChange={set("firstName")}
                  placeholder="Type your firstname" className={inputClass} />
              </div>
              <div className="flex flex-col w-full gap-2">
                <label className="font-bold text-white text-base sm:text-xl">
                  Surname <span className="text-red-300">*</span>
                </label>
                <input value={form.lastName} onChange={set("lastName")}
                  placeholder="Type your surname" className={inputClass} />
              </div>
            </div>

            {/* Row 2 — Phone + Area */}
            <div className="flex flex-col md:flex-row pt-5 justify-between gap-5 md:gap-6">
              <div className="flex flex-col w-full gap-2">
                <label className="font-bold text-white text-base sm:text-xl">
                  Phone / WhatsApp <span className="text-red-300">*</span>
                </label>
                <input value={form.phone} onChange={set("phone")}
                  placeholder="+234 8*** ***" className={inputClass} />
              </div>
              <div className="flex flex-col w-full gap-2">
                <label className="font-bold text-white text-base sm:text-xl">
                  Area in Abuja <span className="text-red-300">*</span>
                </label>
                <select value={form.area} onChange={set("area")} className={inputClass}>
                  <option value="">Select your area</option>
                  {["Maitama","Asokoro","Wuse","Wuse 2","Garki","Jabi","Utako","Gwarinpa",
                    "Life Camp","Lokogoma","Katampe","Durumi","Apo","Lugbe","Kubwa"].map((a) => (
                    <option key={a} value={a}>{a}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Email — new field for notifications */}
            <div className="flex flex-col pt-5 w-full gap-2">
              <label className="font-bold text-white text-base sm:text-xl flex items-center gap-2">
                Email Address
                <span className="text-[#ffffff80] text-xs font-normal normal-case tracking-normal">
                  (optional — for confirmation & blog updates)
                </span>
              </label>
              <input value={form.email} onChange={set("email")} type="email"
                placeholder="your@email.com" className={inputClass} />
            </div>

            {/* Service */}
            <div className="flex flex-col pt-5 w-full gap-2">
              <label className="font-bold text-white text-base sm:text-xl">
                Service Needed <span className="text-red-300">*</span>
              </label>
              <select value={form.service} onChange={set("service")} className={inputClass}>
                <option value="">Select a service</option>
                {["Residential Deep Clean","Post-Construction Cleaning","Office Cleaning",
                  "Home Cleaning","Upholstery Cleaning","Carpet Revamp",
                  "Pest Control / Fumigation","Facade Cleaning"].map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            {/* Preferred date */}
            <div className="flex flex-col pt-5 w-full gap-2">
              <label className="font-bold text-white text-base sm:text-xl">Preferred Date</label>
              <input type="date" value={form.preferredDate} onChange={set("preferredDate")}
                className={inputClass} />
            </div>

            {/* Details */}
            <div className="flex flex-col pt-5 w-full gap-2">
              <label className="font-bold text-white text-base sm:text-xl">
                Additional Details (Optional)
              </label>
              <textarea value={form.details} onChange={set("details")}
                placeholder="Tell us more about what you need"
                rows={6}
                className={`${inputClass} resize-none min-h-[160px]`} />
            </div>

            {/* Email opt-in note */}
            {form.email && (
              <p className="mt-4 text-[#ffffffaa]! text-xs! leading-relaxed!">
                📧 By providing your email, you'll receive a confirmation of this request 
                and occasional blog posts from So-Nyah (cleaning tips, eco-friendly guides). 
                You can unsubscribe at any time.
              </p>
            )}

            {/* Submit */}
            <button
              onClick={handleSubmit}
              disabled={isSending}
              className="flex mt-10 sm:mt-12 rounded-2xl p-3 px-10 justify-center self-center items-center gap-3
                bg-white text-[var(--primary)] text-lg sm:text-xl font-bold max-w-[240px] w-full
                transition-all duration-300 hover:bg-[#f3e8ff] hover:scale-105 hover:shadow-xl
                disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSending ? (
                <>
                  <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2">
                    <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                  </svg>
                  Sending…
                </>
              ) : "Send Request"}
            </button>
          </div>

          {/* ── Contact info sidebar (unchanged) ─────────────────────────────── */}
          <div className="flex flex-col gap-8 sm:gap-10 w-full lg:max-w-[420px]">

            <div className="flex gap-4 sm:gap-5 items-start">
              <div className="p-3 bg-[var(--bg-section)] h-[40px] w-[40px] rounded-full flex items-center justify-center shrink-0">
                <img src={addressIcon} alt="" className="w-5 h-5 object-contain" />
              </div>
              <div>
                <h4 className="text-lg sm:text-xl text-[var(--primary)] font-bold tracking-wide">ADDRESS</h4>
                <p className="text-sm sm:text-base">Ahmadu Bello Way, NTA Headquarters Axis, Area 11 Garki Abuja</p>
              </div>
            </div>

            <div className="flex gap-4 sm:gap-5 items-start">
              <div className="p-3 bg-[var(--bg-section)] h-[40px] w-[40px] rounded-full flex items-center justify-center shrink-0">
                <img src={inquiryIcon} alt="" className="w-5 h-5 object-contain" />
              </div>
              <div>
                <h4 className="text-[var(--primary)] text-lg sm:text-xl font-bold tracking-wide">INQUIRIES</h4>
                <p className="text-sm sm:text-base">+234 (0) 909 478 2495</p>
                <p className="text-[var(--primary)] text-sm sm:text-base">Mon-Sat: 8am - 6pm</p>
              </div>
            </div>

            <div className="flex gap-4 sm:gap-5 items-start">
              <div className="p-3 bg-[var(--bg-section)] h-[40px] w-[40px] rounded-full flex items-center justify-center shrink-0">
                <img src={mailtoIcon} alt="" className="w-5 h-5 object-contain" />
              </div>
              <div>
                <h4 className="text-[var(--primary)] text-lg sm:text-xl font-bold tracking-wide">EMAIL</h4>
                <p className="text-sm sm:text-base break-all sm:break-normal">sonyahintegratedventures@gmail.com</p>
              </div>
            </div>

            <div>
              <h3 className="text-[var(--primary)] text-xl sm:text-2xl font-black tracking-wide">CONNECT WITH US</h3>
              <div className="flex pt-3 gap-3 sm:gap-4 flex-wrap">
                <button onClick={() => window.open("https://instagram.com/sonyah_cleaners?utm_source=qr&igsh=MWRtdG9ud3YzNDFoZQ==", "_blank")}>
                  <img src={instagramIcon} alt="instagram" className="w-8 h-8 sm:w-12 sm:h-12" />
                </button>
                <button onClick={() => window.open("https://www.linkedin.com/in/uchenna-linda-nzewigbo-b81b8aa1/", "_blank")}>
                  <img src={linkedlnIcon} alt="linkedin" className="w-8 h-8 sm:w-12 sm:h-12" />
                </button>
                <button>
                  <img src={twiterIcon} alt="twitter" className="w-8 h-8 sm:w-12 sm:h-12" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;