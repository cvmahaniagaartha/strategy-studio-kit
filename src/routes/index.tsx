import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowDownRight,
  Search,
  ChevronDown,
  User,
  FileText,
  Pencil,
  Mail,
  Github,
  Linkedin,
  Phone,
  MapPin,
} from "lucide-react";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const TAGS = [
  ["#Web_Development", "#PHP"],
  ["#CRM", "#Sistem_Internal"],
  ["#Landing_Page", "#API_Integration"],
  ["#Digital_Marketing", "#Content_Strategy"],
  ["#Social_Media", "#Copywriting"],
];

function Mark() {
  return (
    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-ink text-[11px] font-black text-ink-foreground">
      A
    </span>
  );
}

function Circle({ children, filled = false }: { children: React.ReactNode; filled?: boolean }) {
  return (
    <span
      className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border border-ink/25 ${
        filled ? "bg-ink text-ink-foreground" : "text-ink"
      }`}
    >
      {children}
    </span>
  );
}

function SectionNav({ active }: { active: "about" | "resume" | "work" }) {
  const items = [
    { id: "about", label: "About me" },
    { id: "resume", label: "Resume" },
    { id: "work", label: "Work" },
  ] as const;
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-y border-ink/15 px-4 py-3 sm:px-8">
      <div className="flex min-w-0 items-center gap-4 sm:gap-7">
        <Mark />
        {items.map((it) => (
          <a
            key={it.id}
            href={`#${it.id}`}
            className={`whitespace-nowrap pb-0.5 text-[13px] sm:text-sm ${
              active === it.id
                ? "border-b-2 border-ink font-medium text-ink"
                : "text-muted-foreground hover:text-ink"
            }`}
          >
            {it.label}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <Circle>
          <User className="h-3.5 w-3.5" />
        </Circle>
        <Circle filled>
          <FileText className="h-3.5 w-3.5" />
        </Circle>
        <Circle>
          <Pencil className="h-3.5 w-3.5" />
        </Circle>
      </div>
    </div>
  );
}

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <h2 className="text-xl font-bold tracking-tight sm:text-2xl">{children}</h2>
      <Circle>
        <ChevronDown className="h-3.5 w-3.5" />
      </Circle>
    </div>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-1.5 text-[12.5px] leading-relaxed text-muted-foreground">
      {items.map((t) => (
        <li key={t} className="flex gap-2">
          <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-ink/50" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

function Chip({ children, solid = false }: { children: React.ReactNode; solid?: boolean }) {
  return (
    <span
      className={`rounded-full px-3 py-1 text-[11.5px] ${
        solid
          ? "bg-primary text-primary-foreground"
          : "border border-ink/25 text-ink"
      }`}
    >
      {children}
    </span>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <header className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-ink/15 px-4 py-3 sm:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <Mark />
          <h1 className="truncate text-base font-bold tracking-tight sm:text-lg">
            Angger Aji P.
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden text-[13px] font-medium sm:inline sm:text-base">
            Web Developer Portfolio
          </span>
          <Circle>
            <Search className="h-3.5 w-3.5" />
          </Circle>
        </div>
      </header>

      {/* Hero */}
      <section className="grid gap-6 px-4 py-6 sm:px-8 md:grid-cols-[1fr_1.35fr] md:items-end">
        <div className="flex flex-col justify-between gap-8">
          <ArrowDownRight className="h-24 w-24 stroke-[2.5] text-ink sm:h-32 sm:w-32" />
          <div className="text-right">
            {TAGS.map((row) => (
              <div
                key={row.join()}
                className="flex justify-end gap-4 border-t border-ink/30 py-2 text-[13px] sm:text-[15px]"
              >
                {row.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            ))}
            <div className="border-t border-ink/30" />
          </div>
        </div>

        <div className="relative aspect-square overflow-hidden rounded-xl bg-primary">
          <div className="absolute inset-0 flex flex-col justify-center pl-[18%] text-primary-foreground">
            <span className="-rotate-6 text-[clamp(2.5rem,11vw,7.5rem)] font-black leading-[0.78] tracking-tighter">
              PORT
            </span>
            <span className="-rotate-6 pl-[12%] text-[clamp(2.5rem,11vw,7.5rem)] font-black leading-[0.78] tracking-tighter">
              FOLIO
            </span>
          </div>
          <div className="absolute bottom-5 left-5 flex items-end gap-3">
            <span className="text-[clamp(1.5rem,5vw,3rem)] font-black italic leading-none tracking-tighter text-primary-foreground">
              2026
            </span>
            <span className="mb-1 h-4 w-20 bg-primary-foreground/90" />
          </div>
        </div>
      </section>

      <div className="flex items-center justify-end gap-3 border-t border-ink/15 px-4 py-3 sm:px-8">
        <a href="#about" className="text-sm font-semibold">
          See More
        </a>
        <Circle>
          <ArrowDown className="h-3.5 w-3.5" />
        </Circle>
      </div>

      {/* About */}
      <SectionNav active="about" />
      <section id="about" className="grid gap-6 px-4 py-6 sm:px-8 md:grid-cols-[0.85fr_1.4fr]">
        <div className="relative overflow-hidden rounded-2xl bg-ink">
          <img
            src={portrait}
            alt="Suasana kerja Angger Aji Prayogo"
            width={700}
            height={900}
            loading="lazy"
            className="h-full min-h-[320px] w-full object-cover opacity-80"
          />
          <div className="absolute inset-0 flex flex-col justify-between p-5 text-ink-foreground">
            <div>
              <p className="text-sm">Hello,</p>
              <p className="mt-2 text-[clamp(1.75rem,4.5vw,2.75rem)] font-bold leading-[1.05] tracking-tight">
                My name
                <br />
                is Angger
              </p>
            </div>
            <p className="text-[11px] leading-relaxed text-ink-foreground/85">
              Developer yang memahami bisnis, marketing, dan kebutuhan pengguna — dari
              strategi konten ke sistem yang benar-benar dipakai.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <Heading>Introduction</Heading>
            <div className="mt-3 rounded-2xl border border-ink/25 p-5">
              <h3 className="text-lg font-bold tracking-tight">
                Web Developer &amp; Digital Marketing Specialist
              </h3>
              <p className="mt-3 text-[12.5px] leading-relaxed text-muted-foreground">
                Profesional di bidang Web Development dan Digital Marketing dengan pengalaman
                dalam pengembangan sistem berbasis web, CRM, sistem internal perusahaan,
                integrasi antarplatform, serta pengelolaan media sosial dan strategi konten.
              </p>
              <p className="mt-2 text-[12.5px] leading-relaxed text-muted-foreground">
                Berpengalaman mengembangkan solusi digital untuk mendukung kebutuhan
                operasional dan bisnis perusahaan, sekaligus memiliki pengalaman dalam
                perencanaan konten, riset tren, copywriting, analisis performa, dan strategi
                pertumbuhan media sosial.
              </p>
            </div>
          </div>

          <div>
            <Heading>Get In Touch</Heading>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              <div className="flex h-28 flex-col justify-between rounded-2xl bg-ink p-4 text-ink-foreground">
                <Mail className="h-6 w-6" />
                <span className="truncate text-[11px] opacity-80">[Email]</span>
              </div>
              <div className="flex h-28 flex-col justify-between rounded-2xl bg-primary p-4 text-primary-foreground">
                <Linkedin className="h-6 w-6" />
                <span className="truncate text-[11px] opacity-90">[LinkedIn]</span>
              </div>
              <div className="flex h-28 flex-col justify-between rounded-2xl border border-ink/25 p-4">
                <Github className="h-6 w-6" />
                <span className="truncate text-[11px] text-muted-foreground">[GitHub]</span>
              </div>
            </div>
            <div className="mt-3 flex flex-wrap gap-2 text-[12px] text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5" /> [No. WhatsApp]
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" /> [Kota]
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Resume */}
      <SectionNav active="resume" />
      <section id="resume" className="grid gap-0 px-4 py-6 sm:px-8 lg:grid-cols-3">
        <div className="pb-6 lg:pb-0 lg:pr-6">
          <Heading>Experience</Heading>
          <div className="mt-4 space-y-4">
            <ExpCard
              period="2025-Sekarang"
              company="CV Maha Niaga Artha"
              role="PHP Web Developer"
              start="Des"
              end="Sekarang"
              bullets={[
                "Mengembangkan CRM multi-role untuk pengelolaan pelanggan dan kebutuhan operasional perusahaan.",
                "Membangun sistem internal perusahaan untuk mendukung proses bisnis dan operasional.",
                "Mengembangkan sistem inventaris internal untuk pengelolaan data inventaris.",
                "Mengembangkan landing page untuk kebutuhan perusahaan dan brand.",
                "Melakukan integrasi antarplatform untuk mendukung alur kerja bisnis.",
                "Melakukan troubleshooting, pemeliharaan, dan pengembangan fitur sistem.",
                "Memberikan dukungan teknis dan IT untuk memastikan sistem berjalan dengan baik.",
                "Menganalisis kebutuhan pengguna dan menerjemahkannya menjadi solusi berbasis sistem.",
              ]}
              footer="Sistem: CRM · Sistem Inventaris Internal · Sistem Perencanaan Konten"
            />
            <ExpCard
              period="2022-2025"
              company="CV Maha Niaga Artha"
              role="Social Media Marketing Specialist"
              start="Nov"
              end="Des"
              bullets={[
                "Menyusun strategi dan perencanaan konten untuk berbagai media sosial.",
                "Mengelola kalender konten dan memastikan publikasi berjalan secara terstruktur.",
                "Melakukan riset tren media sosial untuk menghasilkan konten yang relevan.",
                "Membuat copywriting untuk berbagai kebutuhan komunikasi digital.",
                "Menganalisis performa konten sebagai dasar pengembangan strategi.",
                "Menjalankan strategi organic growth untuk meningkatkan jangkauan dan engagement.",
                "Mengelola kebutuhan media sosial dari berbagai brand F&B.",
              ]}
              footer="Brand: Be Nice Coffee · Esteh Ibukota · Kentang Ganteng · Raja Steak · MyBestea"
            />
          </div>
        </div>

        <div className="border-t border-ink/15 py-6 lg:border-l lg:border-t-0 lg:px-6 lg:py-0">
          <Heading>Expertise</Heading>
          <p className="mt-3 text-[13px] leading-relaxed">
            Web Development, CRM, Sistem Internal, API &amp; System Integration, Digital
            Marketing, Content Strategy, Social Media Management
          </p>

          <div className="mt-6">
            <Heading>Hardskill</Heading>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                "PHP",
                "HTML & CSS",
                "JavaScript",
                "Pengembangan CRM",
                "Sistem Internal",
                "Database Management",
                "API & System Integration",
                "Troubleshooting & Maintenance",
              ].map((s, i) => (
                <Chip key={s} solid={i % 3 === 0}>
                  {s}
                </Chip>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <Heading>Digital Marketing</Heading>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                "Social Media Management",
                "Content Planning",
                "Content Strategy",
                "Copywriting",
                "Trend Research",
                "Social Media Analytics",
                "Organic Growth Strategy",
              ].map((s, i) => (
                <Chip key={s} solid={i % 4 === 1}>
                  {s}
                </Chip>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <Heading>Softskill</Heading>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                "Analisis Kebutuhan Bisnis",
                "Problem Solving",
                "System Analysis",
                "Project Management",
                "Business Process Analysis",
              ].map((s, i) => (
                <Chip key={s} solid={i % 2 === 0}>
                  {s}
                </Chip>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-ink/15 py-6 lg:border-l lg:border-t-0 lg:pl-6 lg:py-0">
          <Heading>Education</Heading>
          <div className="mt-4 space-y-4">
            <div className="rounded-2xl bg-ink p-5 text-ink-foreground">
              <span className="rounded-full bg-ink-foreground px-3 py-1 text-[11px] font-medium text-ink">
                Lulus 2024
              </span>
              <p className="mt-4 text-[11px] opacity-70">Kudus, Jawa Tengah</p>
              <p className="text-base font-bold">SMK Negeri 1 Kudus</p>
            </div>
          </div>

          <div className="mt-6">
            <Heading>Informasi Tambahan</Heading>
            <div className="mt-3 rounded-2xl border border-ink/25 p-5 text-[12.5px] leading-relaxed text-muted-foreground">
              <p>
                <span className="font-semibold text-ink">Bahasa:</span> Bahasa Indonesia ·
                Bahasa Inggris
              </p>
              <p className="mt-2">
                <span className="font-semibold text-ink">Fokus:</span> Web Development ·
                Programming · CRM · Digital Marketing · Social Media · Content Strategy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work */}
      <SectionNav active="work" />
      <section id="work" className="grid gap-4 px-4 py-6 sm:px-8 md:grid-cols-2">
        <ProjectCard
          index="01"
          title="CRM Sistem Manajemen Pelanggan"
          accent
          bullets={[
            "Pengembangan CRM dengan sistem akses berdasarkan role pengguna.",
            "Pengelolaan data pelanggan dan kebutuhan operasional.",
            "Pengembangan fitur berdasarkan kebutuhan dan alur bisnis.",
          ]}
        />
        <ProjectCard
          index="02"
          title="Sistem Inventaris Internal"
          bullets={[
            "Pengembangan sistem digital untuk pengelolaan inventaris.",
            "Membantu proses pencatatan dan pengelolaan data inventaris perusahaan.",
          ]}
        />
        <ProjectCard
          index="03"
          title="Sistem Perencanaan Konten"
          bullets={[
            "Pengembangan sistem internal untuk membantu proses perencanaan konten.",
            "Pengelolaan kalender dan alur kerja konten secara digital.",
          ]}
        />
        <ProjectCard
          index="04"
          title="Website & Landing Page"
          dark
          bullets={[
            "Pengembangan website dan landing page untuk kebutuhan bisnis dan pemasaran.",
            "Menggabungkan kebutuhan teknis dengan tujuan pemasaran dan komunikasi brand.",
          ]}
        />
      </section>

      <footer className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-t border-ink/15 px-4 py-5 sm:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <Mark />
          <span className="truncate text-sm font-medium">Angger Aji Prayogo — 2026</span>
        </div>
        <span className="text-[12px] text-muted-foreground">Web Dev · Digital Marketing</span>
      </footer>
    </main>
  );
}

function ExpCard({
  period,
  company,
  role,
  bullets,
  footer,
  start,
  end,
}: {
  period: string;
  company: string;
  role: string;
  bullets: string[];
  footer: string;
  start: string;
  end: string;
}) {
  return (
    <article className="rounded-2xl border border-ink/25 p-5">
      <div className="flex items-start justify-between gap-3">
        <span className="rounded-full bg-primary px-3 py-1 text-[11px] font-medium text-primary-foreground">
          {period}
        </span>
        <Circle>
          <ChevronDown className="h-3.5 w-3.5" />
        </Circle>
      </div>
      <p className="mt-4 text-[11px] text-muted-foreground">{company}</p>
      <h3 className="text-[15px] font-bold leading-snug">{role}</h3>
      <Bullets items={bullets} />
      <p className="mt-3 text-[11.5px] font-medium">{footer}</p>
      <div className="mt-4 flex items-center justify-between border-t border-ink/15 pt-2 text-[10.5px] text-muted-foreground">
        <span>{start}</span>
        <span>{end}</span>
      </div>
    </article>
  );
}

function ProjectCard({
  index,
  title,
  bullets,
  accent = false,
  dark = false,
}: {
  index: string;
  title: string;
  bullets: string[];
  accent?: boolean;
  dark?: boolean;
}) {
  const tone = accent
    ? "bg-primary text-primary-foreground"
    : dark
      ? "bg-ink text-ink-foreground"
      : "border border-ink/25";
  return (
    <article className={`rounded-2xl p-6 ${tone}`}>
      <div className="flex items-start justify-between gap-3">
        <span className="text-[11px] font-medium opacity-80">{index}</span>
        <ArrowDownRight className="h-5 w-5" />
      </div>
      <h3 className="mt-6 text-xl font-bold leading-tight tracking-tight">{title}</h3>
      <ul className="mt-3 space-y-1.5 text-[12.5px] leading-relaxed opacity-85">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-current opacity-70" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
