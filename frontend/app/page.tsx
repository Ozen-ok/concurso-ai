import { Suspense } from "react";
import { ActivitySection, Header, SubjectCard, StudyHero } from "./components/dashboard";
import { ApiStatus, ApiStatusFallback } from "./components/api-status";

const subjects = [
  { name: "Língua Portuguesa", category: "Linguagens", icon: "Aa", tone: "violet" },
  { name: "Direito Constitucional", category: "Direito", icon: "§", tone: "blue" },
  { name: "Raciocínio Lógico", category: "Exatas", icon: "∑", tone: "amber" },
  { name: "Administração Pública", category: "Gestão", icon: "⌘", tone: "green" },
] as const;

export default function Home() {
  return (
    <main id="inicio" className="min-h-screen bg-[#f7f8fc] text-slate-900">
      <Header
        apiStatus={
          <Suspense fallback={<ApiStatusFallback />}>
            <ApiStatus />
          </Suspense>
        }
      />
      <div className="mx-auto max-w-7xl px-5 pb-16 pt-10 sm:px-8 lg:px-10 lg:pt-14">
        <section aria-labelledby="welcome-title" className="mb-10">
          <p className="mb-2 text-sm font-semibold tracking-wide text-indigo-600">SEU ESPAÇO DE ESTUDOS</p>
          <h1 id="welcome-title" className="text-3xl font-semibold tracking-tight sm:text-4xl">Boas-vindas ao ConcursoAI</h1>
          <p className="mt-3 max-w-2xl text-base leading-7 text-slate-500">Um passo de cada vez, no seu ritmo. Sua próxima conquista começa com uma boa sessão de estudo.</p>
        </section>

        <StudyHero />

        <section aria-labelledby="subjects-title" className="mt-12">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-sm font-medium text-slate-500">Explore o que você pode estudar</p>
              <h2 id="subjects-title" className="mt-1 text-xl font-semibold tracking-tight">Disciplinas</h2>
            </div>
            <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-500">Áreas de estudo</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {subjects.map((subject) => <SubjectCard key={subject.name} {...subject} />)}
          </div>
        </section>

        <ActivitySection />
      </div>
    </main>
  );
}
