import Image from "next/image";
import InquiryPopup from "./ui/InquiryPopup";
import { FadeInUp } from "@/components/ui/MotionWrappers";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-[#0a0a0a] w-full py-20 sm:py-28 lg:py-36 flex flex-col items-center justify-center text-center relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, #aaed2e, transparent)",
        }}
      />

      <FadeInUp className="container-xl relative z-10 flex flex-col items-center">
        <h2
          className="font-black text-white uppercase tracking-tight leading-[0.9] mb-10 sm:mb-14 select-none"
          style={{ fontSize: "clamp(2.8rem, 9.5vw, 9rem)" }}
        >
          <span className="block text-center">LET&apos;S WORK</span>

          <span className="flex items-center justify-center">
            <span>T</span>

            <span
              className="relative rounded-full overflow-hidden border-[3px] border-white/20 flex-shrink-0"
              style={{
                display: "inline-block",
                width: "clamp(2.4rem, 8vw, 8rem)",
                height: "clamp(2.4rem, 8vw, 8rem)",
                verticalAlign: "middle",
                margin: "0 clamp(0.1rem, 0.35vw, 0.35rem)",
                position: "relative",
              }}
            >
              <Image
                src="/gianni/gianni_pf.png"
                alt="Gianni Vilayhane"
                fill
                className="object-cover object-top"
                sizes="128px"
              />
            </span>

            <span>GETHER</span>
          </span>
        </h2>

        <InquiryPopup
          trigger={
            <button
              className="group relative inline-flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 active:scale-95 animate-pulse-glow"
              style={{
                background: "#aaed2e",
                width: "clamp(90px, 13vw, 155px)",
                height: "clamp(90px, 13vw, 155px)",
              }}
            >
              <svg
                viewBox="0 0 40 40"
                fill="none"
                stroke="#0a0a0a"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:rotate-45"
                style={{ width: "clamp(28px, 4vw, 44px)", height: "clamp(28px, 4vw, 44px)" }}
              >
                <path d="M5 35L35 5M35 5H15M35 5v20" />
              </svg>
            </button>
          }
        />

        <p className="mt-6 sm:mt-8 text-gray-400 text-xs sm:text-sm md:text-base font-medium tracking-wide text-center max-w-full px-4 whitespace-nowrap overflow-x-auto">
          Or email me at{" "}
          <a
            href="mailto:gianni@giannivilayhane.com"
            className="text-[#aaed2e] hover:text-white transition-colors underline underline-offset-4 font-bold inline-block"
          >
            gianni@giannivilayhane.com
          </a>
        </p>
      </FadeInUp>
    </section>
  );
}
