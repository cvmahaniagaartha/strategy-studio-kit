import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  ChevronDown,
  User,
  FileText,
  Pencil,
  Mail,
  Github,
  Linkedin,
  Phone,
  MapPin,
  Languages,
} from "lucide-react";
import portrait from "@/assets/portrait.jpg";
import { content, type Lang } from "@/lib/cv-content";

export const Route = createFileRoute("/")({
  component: Index,
});

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

function Chip({ children, solid = false }: { children: React.ReactNode; solid?: boolean }) {
  return (
    <span
      className={`rounded-full px-3 py-1 text-[11.5px] ${
        solid ? "bg-primary text-primary-foreground" : "border border-ink/25 text-ink"
      }`}
    >
      {children}
    </span>
  );
}

function LangToggle({ lang, onChange }: { lang: Lang; onChange: (l: Lang) => void }) {
  return (
    <div className="flex items-center gap-1 rounded-full border border-ink/25 p-0.5">
      <Languages className="ml-1.5 h-3.5 w-3.5 text-muted-foreground" />
      {(["id", "en"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => onChange(l)}
          aria-pressed={lang === l}
          className={`rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase transition-colors ${
            lang === l
              ? "bg-ink text-ink-foreground"
              : "text-muted-foreground hover:text-ink"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

function SectionNav({
  active,
  t,
}: {
  active: "about" | "resume" | "work";
  t: (typeof content)["id"];
}) {
  const items = [
    { id: "about", label: t.nav.about },
    { id: "resume", label: t.nav.resume },
    { id: "work", label: t.nav.work },
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
      <div className="hidden items-center gap-2 sm:flex">
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

function Index() {
  const [lang, setLang] = useState<Lang>("id");
  const t = content[lang] as unknown as (typeof content)["id"];

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <header className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-b border-ink/15 px-4 py-3 sm:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <Mark />
          <h1 className="truncate text-base font-bold tracking-tight sm:text-lg">
            Angger Aji P.
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden text-[13px] font-medium md:inline">{t.role}</span>
          <LangToggle lang={lang} onChange={setLang} />
        </div>
      </header>

      {/* Hero */}
      <section className="grid gap-5 px-4 py-6 sm:px-8 md:grid-cols-[1fr_1fr] md:items-stretch">
        <div className="flex flex-col justify-between gap-5">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {t.heroKicker}
            </p>
            <p className="mt-3 text-[clamp(1.35rem,3.2vw,2.1rem)] font-bold leading-[1.1] tracking-tight">
              {t.heroLine}
            </p>
          </div>
          <div>
            <ArrowDownRight className="h-10 w-10 stroke-[2.5] text-ink" />
            <div className="mt-4 flex flex-wrap gap-1.5">
              {t.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-ink/20 px-2.5 py-1 text-[11px] text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative h-[210px] overflow-hidden rounded-2xl bg-primary sm:h-[280px] md:h-auto md:min-h-[300px]">
          <div className="absolute inset-0 flex flex-col justify-center pl-[12%] text-primary-foreground">
            <span className="-rotate-6 text-[clamp(2.2rem,7.5vw,4.6rem)] font-black leading-[0.8] tracking-tighter">
              PORT
            </span>
            <span className="-rotate-6 pl-[10%] text-[clamp(2.2rem,7.5vw,4.6rem)] font-black leading-[0.8] tracking-tighter">
              FOLIO
            </span>
          </div>
          <div className="absolute bottom-4 left-5 flex items-end gap-3">
            <span className="text-[clamp(1.1rem,3vw,1.9rem)] font-black italic leading-none tracking-tighter text-primary-foreground">
              2026
            </span>
            <span className="mb-1 h-2.5 w-14 bg-primary-foreground/90" />
          </div>
        </div>
      </section>

      <div className="flex items-center justify-end gap-3 border-t border-ink/15 px-4 py-3 sm:px-8">
        <a href="#about" className="text-sm font-semibold">
          {t.seeMore}
        </a>
        <Circle>
          <ArrowDown className="h-3.5 w-3.5" />
        </Circle>
      </div>

      {/* About */}
      <SectionNav active="about" t={t} />
      <section id="about" className="grid gap-6 px-4 py-8 sm:px-8 md:grid-cols-[0.8fr_1.4fr]">
        <div className="relative overflow-hidden rounded-2xl bg-ink">
          <img
            src={portrait}
            alt="Angger Aji Prayogo"
            width={700}
            height={900}
            loading="lazy"
            className="h-full min-h-[300px] w-full object-cover opacity-75"
          />
          <div className="absolute inset-0 flex flex-col justify-between p-5 text-ink-foreground">
            <div>
              <p className="text-sm">{t.hello}</p>
              <p className="mt-2 text-[clamp(1.5rem,3.5vw,2.25rem)] font-bold leading-[1.05] tracking-tight">
                {t.myName[0]}
                <br />
                {t.myName[1]}
              </p>
            </div>
            <p className="text-[11px] leading-relaxed text-ink-foreground/85">
              {t.photoCaption}
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <Heading>{t.introduction}</Heading>
            <div className="mt-3 rounded-2xl border border-ink/25 p-5">
              <h3 className="text-lg font-bold tracking-tight">{t.introTitle}</h3>
              {t.introBody.map((p) => (
                <p key={p} className="mt-3 text-[12.5px] leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
            </div>
          </div>

          <div>
            <Heading>{t.getInTouch}</Heading>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              <div className="flex h-24 flex-col justify-between rounded-2xl bg-ink p-4 text-ink-foreground">
                <Mail className="h-5 w-5" />
                <span className="truncate text-[11px] opacity-80">[Email]</span>
              </div>
              <div className="flex h-24 flex-col justify-between rounded-2xl bg-primary p-4 text-primary-foreground">
                <Linkedin className="h-5 w-5" />
                <span className="truncate text-[11px] opacity-90">[LinkedIn]</span>
              </div>
              <div className="flex h-24 flex-col justify-between rounded-2xl border border-ink/25 p-4">
                <Github className="h-5 w-5" />
                <span className="truncate text-[11px] text-muted-foreground">[GitHub]</span>
              </div>
            </div>
            <div className="mt-3 flex flex-wrap gap-4 text-[12px] text-muted-foreground">
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
      <SectionNav active="resume" t={t} />
      <section id="resume" className="px-4 py-8 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.35fr_1fr]">
          {/* Experience timeline */}
          <div>
            <Heading>{t.experience}</Heading>
            <ol className="mt-6 space-y-8 border-l border-ink/20 pl-6">
              {t.jobs.map((job, i) => (
                <li key={job.role} className="relative">
                  <span
                    className={`absolute -left-[31px] top-1.5 grid h-3.5 w-3.5 place-items-center rounded-full ring-4 ring-background ${
                      i === 0 ? "bg-primary" : "bg-ink/40"
                    }`}
                  />
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`rounded-full px-3 py-1 text-[11px] font-medium ${
                        i === 0
                          ? "bg-primary text-primary-foreground"
                          : "border border-ink/25 text-muted-foreground"
                      }`}
                    >
                      {job.period}
                    </span>
                    <span className="text-[11px] text-muted-foreground">{job.company}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-bold tracking-tight">{job.role}</h3>
                  <ul className="mt-3 grid gap-x-6 gap-y-1.5 text-[12.5px] leading-relaxed text-muted-foreground sm:grid-cols-2">
                    {job.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-ink/50" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap items-center gap-1.5">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-ink">
                      {job.footerLabel}
                    </span>
                    {job.footerItems.map((f) => (
                      <Chip key={f}>{f}</Chip>
                    ))}
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Skills + education */}
          <div className="space-y-6 lg:border-l lg:border-ink/15 lg:pl-8">
            <div>
              <Heading>{t.expertise}</Heading>
              <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">
                {t.expertiseBody}
              </p>
            </div>

            <div>
              <Heading>{t.hardskill}</Heading>
              <div className="mt-3 flex flex-wrap gap-2">
                {t.hardskills.map((s, i) => (
                  <Chip key={s} solid={i % 3 === 0}>
                    {s}
                  </Chip>
                ))}
              </div>
            </div>

            <div>
              <Heading>{t.marketing}</Heading>
              <div className="mt-3 flex flex-wrap gap-2">
                {t.marketingSkills.map((s, i) => (
                  <Chip key={s} solid={i % 4 === 1}>
                    {s}
                  </Chip>
                ))}
              </div>
            </div>

            <div>
              <Heading>{t.softskill}</Heading>
              <div className="mt-3 flex flex-wrap gap-2">
                {t.softskills.map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </div>
            </div>

            <div>
              <Heading>{t.education}</Heading>
              <div className="mt-3 rounded-2xl bg-ink p-5 text-ink-foreground">
                <span className="rounded-full bg-ink-foreground px-3 py-1 text-[11px] font-medium text-ink">
                  {t.graduated}
                </span>
                <p className="mt-4 text-[11px] opacity-70">{t.schoolCity}</p>
                <p className="text-base font-bold">{t.school}</p>
              </div>
            </div>

            <div>
              <Heading>{t.extra}</Heading>
              <div className="mt-3 rounded-2xl border border-ink/25 p-5 text-[12.5px] leading-relaxed text-muted-foreground">
                <p>
                  <span className="font-semibold text-ink">{t.languagesLabel}:</span>{" "}
                  {t.languagesValue}
                </p>
                <p className="mt-2">
                  <span className="font-semibold text-ink">{t.focusLabel}:</span>{" "}
                  {t.focusValue}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work */}
      <SectionNav active="work" t={t} />
      <section id="work" className="px-4 py-8 sm:px-8">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
          <div className="min-w-0">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{t.workTitle}</h2>
            <p className="mt-1 text-[13px] text-muted-foreground">{t.workSubtitle}</p>
          </div>
          <span className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
            04 / {t.nav.work}
          </span>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {t.projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} featured={i === 0} dark={i === 3} />
          ))}
        </div>
      </section>

      <footer className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-t border-ink/15 px-4 py-5 sm:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <Mark />
          <span className="truncate text-sm font-medium">Angger Aji Prayogo — 2026</span>
        </div>
        <span className="hidden text-[12px] text-muted-foreground sm:inline">
          Web Dev · Digital Marketing
        </span>
      </footer>
    </main>
  );
}

function ProjectCard({
  project,
  featured = false,
  dark = false,
}: {
  project: (typeof content)["id"]["projects"][number];
  featured?: boolean;
  dark?: boolean;
}) {
  const tone = featured
    ? "bg-primary text-primary-foreground md:col-span-2 md:row-span-1"
    : dark
      ? "bg-ink text-ink-foreground"
      : "border border-ink/25 hover:border-ink";
  return (
    <article
      className={`group flex flex-col justify-between rounded-2xl p-6 transition-transform duration-200 hover:-translate-y-1 ${tone}`}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="text-[11px] font-semibold tracking-widest opacity-70">
          {project.index}
        </span>
        <ArrowUpRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
      <div className="mt-8">
        <h3
          className={`font-bold leading-tight tracking-tight ${
            featured ? "text-2xl sm:text-3xl" : "text-lg"
          }`}
        >
          {project.title}
        </h3>
        <p className="mt-2 text-[12.5px] leading-relaxed opacity-80">{project.summary}</p>
        <ul className="mt-3 space-y-1.5 text-[12px] leading-relaxed opacity-75">
          {project.bullets.map((b) => (
            <li key={b} className="flex gap-2">
              <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-current opacity-70" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-current/30 px-2.5 py-1 text-[11px] opacity-80"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
