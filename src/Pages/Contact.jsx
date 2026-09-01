import React, { useEffect, useState } from "react";
import {
  Share2,
  User,
  Mail,
  MessageSquare,
  Send,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import SocialLinks from "../components/SocialLinks";
import Komentar from "../components/Commentar";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    Swal.fire({
      title: "Mengirim Pesan...",
      html: "Harap tunggu sebentar.",
      allowOutsideClick: false,
      background: "#08121f",
      color: "#f1f5f9",
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      /*
       * FormSubmit
       * GANTI EMAIL DI BAWAH DENGAN EMAIL KAMU
       */
      const formSubmitUrl =
        "https://formsubmit.co/ekizulfarrachman@gmail.com";

      const submitData = new FormData();

      submitData.append("name", formData.name);
      submitData.append("email", formData.email);
      submitData.append("message", formData.message);

      submitData.append(
        "_subject",
        "Pesan Baru dari Website Portfolio"
      );

      submitData.append("_captcha", "false");
      submitData.append("_template", "table");

      await axios.post(formSubmitUrl, submitData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      Swal.fire({
        title: "Pesan Terkirim!",
        text: "Terima kasih. Pesan kamu berhasil dikirim.",
        icon: "success",
        confirmButtonColor: "#06b6d4",
        background: "#08121f",
        color: "#f1f5f9",
        timer: 2200,
        timerProgressBar: true,
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);

      /*
       * FormSubmit terkadang berhasil mengirim tetapi
       * browser menganggap request sebagai CORS error.
       */
      if (error.request && error.request.status === 0) {
        Swal.fire({
          title: "Pesan Terkirim!",
          text: "Pesan kamu kemungkinan sudah berhasil dikirim.",
          icon: "success",
          confirmButtonColor: "#06b6d4",
          background: "#08121f",
          color: "#f1f5f9",
          timer: 2200,
          timerProgressBar: true,
        });

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        Swal.fire({
          title: "Gagal Mengirim",
          text: "Terjadi kesalahan. Silakan coba lagi nanti.",
          icon: "error",
          confirmButtonColor: "#06b6d4",
          background: "#08121f",
          color: "#f1f5f9",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="Contact"
      className="relative overflow-hidden px-[5%] py-16 sm:py-20 lg:px-[8%]"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/4 top-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-10 right-1/4 h-72 w-72 rounded-full bg-emerald-500/10 blur-[120px]" />

      {/* Header */}
      <div className="relative mb-12 text-center">
        <div
          data-aos="fade-down"
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />

          <span className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
            Get In Touch
          </span>
        </div>

        <h2
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
        >
          Let's{" "}
          <span className="bg-gradient-to-r from-[#06b6d4] to-[#10b981] bg-clip-text text-transparent">
            Connect
          </span>
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 md:text-base"
        >
          Punya pertanyaan, ide project, atau ingin berdiskusi?
          Jangan ragu untuk menghubungi saya.
        </p>
      </div>

      {/* Main Grid */}
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        {/* LEFT — Contact Form */}
        <div
          data-aos="fade-right"
          className="group relative"
        >
          {/* Glow Border */}
          <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-[#06b6d4] to-[#10b981] opacity-20 blur-sm transition-all duration-500 group-hover:opacity-40" />

          <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-[#08121f]/90 p-6 backdrop-blur-xl sm:p-8">
            {/* Decorative */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative">
              {/* Form Header */}
              <div className="mb-8 flex items-start justify-between gap-4">
                <div>
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
                    <Share2 className="h-5 w-5 text-cyan-400" />
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    Send a Message
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Ceritakan apa yang ingin kamu diskusikan.
                  </p>
                </div>

                <div className="hidden rounded-xl border border-white/10 bg-white/5 p-3 sm:block">
                  <ArrowUpRight className="h-5 w-5 text-slate-500" />
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* Name */}
                <div
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="group/input"
                >
                  <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-500">
                    Name
                  </label>

                  <div className="relative">
                    <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500 transition-colors duration-300 group-focus-within/input:text-cyan-400" />

                    <input
                      type="text"
                      name="name"
                      placeholder="Nama Anda"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-4 pl-12 pr-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-600 hover:border-cyan-400/20 focus:border-cyan-400/40 focus:bg-cyan-400/[0.03] focus:ring-2 focus:ring-cyan-400/10 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                </div>

                {/* Email */}
                <div
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="group/input"
                >
                  <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-500">
                    Email
                  </label>

                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500 transition-colors duration-300 group-focus-within/input:text-cyan-400" />

                    <input
                      type="email"
                      name="email"
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-4 pl-12 pr-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-600 hover:border-cyan-400/20 focus:border-cyan-400/40 focus:bg-cyan-400/[0.03] focus:ring-2 focus:ring-cyan-400/10 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                </div>

                {/* Message */}
                <div
                  data-aos="fade-up"
                  data-aos-delay="300"
                  className="group/input"
                >
                  <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-500">
                    Message
                  </label>

                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 h-5 w-5 text-slate-500 transition-colors duration-300 group-focus-within/input:text-cyan-400" />

                    <textarea
                      name="message"
                      placeholder="Tulis pesan Anda..."
                      value={formData.message}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      required
                      className="h-36 w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] py-4 pl-12 pr-4 text-sm leading-6 text-white outline-none transition-all duration-300 placeholder:text-slate-600 hover:border-cyan-400/20 focus:border-cyan-400/40 focus:bg-cyan-400/[0.03] focus:ring-2 focus:ring-cyan-400/10 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  data-aos="fade-up"
                  data-aos-delay="400"
                  type="submit"
                  disabled={isSubmitting}
                  className="group/button relative w-full overflow-hidden rounded-xl p-[1px] transition-all duration-300 hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#06b6d4] to-[#10b981]" />

                  <div className="relative flex items-center justify-center gap-2 rounded-xl bg-[#07111f] py-3.5 text-sm font-semibold text-white transition-all duration-300 group-hover/button:bg-transparent">
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/20 border-t-white" />
                        Mengirim...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 text-cyan-300" />
                        Kirim Pesan
                        <ArrowUpRight className="h-4 w-4 text-emerald-300 transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5" />
                      </>
                    )}
                  </div>
                </button>
              </form>

              {/* Social */}
              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="mb-4 text-center text-xs text-slate-600">
                  Or connect with me
                </p>

                <div className="flex justify-center">
                  <SocialLinks />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — Comments */}
        <div
          data-aos="fade-left"
          className="group relative"
        >
          <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-[#10b981] to-[#06b6d4] opacity-20 blur-sm transition-all duration-500 group-hover:opacity-40" />

          <div className="relative h-full min-h-[500px] overflow-hidden rounded-3xl border border-white/10 bg-[#08121f]/90 p-4 backdrop-blur-xl sm:p-6">
            {/* Header */}
            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />

                  <span className="text-sm font-semibold text-white">
                    Visitor Messages
                  </span>
                </div>

                <p className="mt-1 text-xs text-slate-500">
                  Leave a message or share your thoughts.
                </p>
              </div>

              <div className="hidden rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 sm:block">
                <span className="text-[10px] uppercase tracking-widest text-slate-500">
                  Community
                </span>
              </div>
            </div>

            {/* Comment Component */}
            <div className="relative">
              <Komentar />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="relative mx-auto mt-10 flex max-w-3xl items-center justify-center gap-2 text-center"
      >
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />

        <span className="px-4 text-[10px] uppercase tracking-[0.25em] text-slate-600">
          Let's build something together
        </span>

        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
      </div>
    </section>
  );
};

export default ContactPage;