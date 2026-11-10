function BrandMark() {
  return (
    <span className="flex size-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-sm shadow-indigo-200" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" className="size-6">
        <path d="M12 3.5 14.1 9.9 20.5 12l-6.4 2.1L12 20.5l-2.1-6.4L3.5 12l6.4-2.1L12 3.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="m18.5 3 .7 2.1 2.1.7-2.1.7-.7 2.1-.7-2.1-2.1-.7 2.1-.7.7-2.1Z" fill="currentColor" />
      </svg>
    </span>
  );
}

export function Header() {
  return (
    <header className="border-b border-slate-200/80 bg-white">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <a href="#inicio" className="flex items-center gap-3" aria-label="ConcursoAI, início">
          <BrandMark />
          <span className="text-lg font-semibold tracking-tight text-slate-900">Concurso<span className="text-indigo-600">AI</span></span>
        </a>
        <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-sm text-slate-600 sm:flex">
          <span className="size-2 rounded-full bg-emerald-500" aria-hidden="true" />
          Seu espaço de preparação
        </div>
        <div className="flex size-10 items-center justify-center rounded-full bg-indigo-50 text-sm font-semibold text-indigo-700" aria-label="Perfil">
          CA
        </div>
      </div>
    </header>
  );
}

export function StudyHero() {
  return (
    <section aria-labelledby="study-title" className="relative isolate overflow-hidden rounded-3xl bg-[#211b49] px-6 py-8 text-white shadow-xl shadow-indigo-950/10 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
      <div className="pointer-events-none absolute -right-16 -top-28 -z-10 size-80 rounded-full border border-white/10 sm:right-8 sm:size-96" />
      <div className="pointer-events-none absolute right-12 top-12 -z-10 size-40 rounded-full bg-indigo-400/20 blur-3xl sm:right-36 sm:top-10" />
      <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
        <div className="max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-indigo-100">
            <span className="size-1.5 rounded-full bg-violet-300" aria-hidden="true" /> Tutoria com inteligência artificial
          </div>
          <h2 id="study-title" className="max-w-xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">Estude com uma tutora que acompanha o seu raciocínio.</h2>
          <p className="mt-4 max-w-lg text-sm leading-6 text-indigo-100/75 sm:text-base">Tire dúvidas, explore conceitos e organize suas ideias em uma conversa dedicada aos seus estudos.</p>
          <button type="button" className="mt-7 inline-flex min-h-12 items-center justify-center gap-2.5 rounded-xl bg-white px-5 text-sm font-semibold text-indigo-950 shadow-lg shadow-black/10 transition hover:bg-indigo-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            Iniciar sessão de estudo
            <svg viewBox="0 0 20 20" fill="none" className="size-4" aria-hidden="true"><path d="M4 10h12m0 0-5-5m5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          <p className="mt-3 text-xs text-indigo-100/60">Sua tutora está pronta quando você estiver.</p>
        </div>
        <div className="hidden h-44 w-44 items-center justify-center rounded-[2rem] border border-white/10 bg-white/[.06] lg:flex" aria-hidden="true">
          <div className="flex size-28 items-center justify-center rounded-[1.7rem] bg-gradient-to-br from-violet-400 to-indigo-500 shadow-2xl shadow-indigo-950/40">
            <svg viewBox="0 0 64 64" fill="none" className="size-16 text-white">
              <path d="M32 8v6m0 36v6M8 32h6m36 0h6M15 15l4.2 4.2m25.6 25.6L49 49M49 15l-4.2 4.2M19.2 44.8 15 49" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".72" />
              <path d="M32 17.5 36.7 27l10.5 1.5-7.6 7.4 1.8 10.4L32 41.4l-9.4 4.9 1.8-10.4-7.6-7.4L27.3 27 32 17.5Z" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

type SubjectCardProps = {
  name: string;
  category: string;
  icon: string;
  tone: "violet" | "blue" | "amber" | "green";
};

const toneClasses: Record<SubjectCardProps["tone"], string> = {
  violet: "bg-violet-50 text-violet-700 ring-violet-100",
  blue: "bg-blue-50 text-blue-700 ring-blue-100",
  amber: "bg-amber-50 text-amber-700 ring-amber-100",
  green: "bg-emerald-50 text-emerald-700 ring-emerald-100",
};

export function SubjectCard({ name, category, icon, tone }: SubjectCardProps) {
  return (
    <article className="group rounded-2xl border border-slate-200/80 bg-white p-5 transition hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-lg hover:shadow-slate-200/60">
      <div className={`mb-5 flex size-11 items-center justify-center rounded-xl text-lg font-semibold ring-1 ${toneClasses[tone]}`} aria-hidden="true">{icon}</div>
      <p className="text-xs font-medium text-slate-400">{category}</p>
      <div className="mt-1 flex items-center justify-between gap-2">
        <h3 className="text-sm font-semibold leading-5 text-slate-800">{name}</h3>
        <svg viewBox="0 0 20 20" fill="none" className="size-4 shrink-0 text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-indigo-500" aria-hidden="true"><path d="M4 10h12m0 0-5-5m5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </div>
    </article>
  );
}

function EmptyStateIcon() {
  return <svg viewBox="0 0 48 48" fill="none" className="size-11 text-slate-400" aria-hidden="true"><rect x="8" y="9" width="32" height="30" rx="6" stroke="currentColor" strokeWidth="1.6" /><path d="M16 19h16M16 25h10M16 31h7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /><circle cx="36" cy="34" r="7" fill="white" /><path d="M36 30.5v7m-3.5-3.5h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>;
}

export function ActivitySection() {
  return (
    <section aria-labelledby="activity-title" className="mt-12">
      <div className="mb-5">
        <p className="text-sm font-medium text-slate-500">Retome de onde parou</p>
        <h2 id="activity-title" className="mt-1 text-xl font-semibold tracking-tight">Atividades recentes</h2>
      </div>
      <div className="flex min-h-52 flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white/70 px-6 py-8 text-center">
        <div className="mb-3 flex size-16 items-center justify-center rounded-2xl bg-slate-100"><EmptyStateIcon /></div>
        <h3 className="text-sm font-semibold text-slate-800">Suas atividades aparecerão aqui</h3>
        <p className="mt-1.5 max-w-sm text-sm leading-6 text-slate-500">Quando você começar a estudar, poderá encontrar suas sessões recentes neste espaço.</p>
      </div>
    </section>
  );
}

