import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Loader2, CheckCircle } from "lucide-react";
import { CodeRow as C } from "./CodeRow";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Status = "idle" | "loading" | "success" | "error";

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    // Basic validation — ensure all fields are filled
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all fields.");
      return;
    }

    // Validate email format with regex
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Invalid email address.");
      return;
    }

    setError("");
    setStatus("loading");

    try {
      // Send form data to the backend contact route
      const res = await fetch(`${import.meta.env.VITE_API_URL || "http://localhost:5000/api"}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again.");
    }
  };

  const handleClose = () => {
    onClose();
    // Reset form state after the exit animation finishes
    setTimeout(() => {
      setForm({ name: "", email: "", message: "" });
      setStatus("idle");
      setError("");
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop — clicking it closes the modal */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          {/* Modal container — centered on screen */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <div className="bg-slate-900 border border-slate-800 rounded-xl w-full max-w-md p-6 relative">

              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>

              {/* Success state — shown after message is sent */}
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-8 gap-4 text-center">
                  <CheckCircle size={48} className="text-purple-500" />
                  <div className="font-mono text-xl">
                    <C type="var">message</C>{" "}
                    <C type="punct">=</C>{" "}
                    <C type="string">"sent!"</C>
                  </div>
                  <p className="text-slate-400">Thanks for reaching out, I'll get back to you soon.</p>
                  <button
                    onClick={handleClose}
                    className="mt-2 px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors font-mono cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <>
                  {/* Modal header styled as a code declaration */}
                  <div className="font-mono text-xl mb-6">
                    <C type="keyword">const</C>{" "}
                    <C type="var">message</C>{" "}
                    <C type="punct">=</C>{" "}
                    <C type="punct">{"{"}</C>
                  </div>

                  <div className="space-y-4">

                    {/* Name field */}
                    <div>
                      <label className="text-slate-400 font-mono text-sm mb-1 block">
                        <C type="var">name</C><C type="punct">:</C>
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                        placeholder="Your name"
                        className="w-full bg-slate-800 border border-slate-700 rounded px-4 py-2 text-white placeholder-slate-500 font-mono text-sm focus:outline-none focus:border-purple-500 transition-colors"
                      />
                    </div>

                    {/* Email field */}
                    <div>
                      <label className="text-slate-400 font-mono text-sm mb-1 block">
                        <C type="var">email</C><C type="punct">:</C>
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                        placeholder="your@email.com"
                        className="w-full bg-slate-800 border border-slate-700 rounded px-4 py-2 text-white placeholder-slate-500 font-mono text-sm focus:outline-none focus:border-purple-500 transition-colors"
                      />
                    </div>

                    {/* Message field */}
                    <div>
                      <label className="text-slate-400 font-mono text-sm mb-1 block">
                        <C type="var">message</C><C type="punct">:</C>
                      </label>
                      <textarea
                        value={form.message}
                        onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                        placeholder="Hey Filipe..."
                        rows={4}
                        className="w-full bg-slate-800 border border-slate-700 rounded px-4 py-2 text-white placeholder-slate-500 font-mono text-sm focus:outline-none focus:border-purple-500 transition-colors resize-none"
                      />
                    </div>

                    {/* Inline error message */}
                    {error && <p className="text-red-400 font-mono text-sm">{error}</p>}

                    {/* Closing brace styled as code */}
                    <div className="font-mono text-sm">
                      <C type="punct">{"}"}</C>
                      <C type="punct">;</C>
                    </div>

                    {/* Submit button — disabled while loading */}
                    <button
                      onClick={handleSubmit}
                      disabled={status === "loading"}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 text-white rounded border border-purple-500/50 hover:bg-purple-700 transition-all font-mono disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {status === "loading" ? (
                        <><Loader2 size={18} className="animate-spin" /> Sending...</>
                      ) : (
                        <><Send size={18} /> Send Message</>
                      )}
                    </button>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}