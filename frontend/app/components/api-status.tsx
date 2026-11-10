import "server-only";

type ApiStatusBadgeProps = {
  label: string;
  colorClass: string;
};

function ApiStatusBadge({ label, colorClass }: ApiStatusBadgeProps) {
  return (
    <div
      className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs text-slate-600 sm:text-sm"
      role="status"
      aria-label={label}
    >
      <span className={`size-2 rounded-full ${colorClass}`} aria-hidden="true" />
      {label}
    </div>
  );
}

export function ApiStatusFallback() {
  return <ApiStatusBadge label="Verificando API..." colorClass="bg-amber-400" />;
}

export async function ApiStatus() {
  const backendApiUrl = process.env.BACKEND_API_URL?.replace(/\/+$/, "");

  if (!backendApiUrl) {
    return <ApiStatusBadge label="API indisponível" colorClass="bg-slate-400" />;
  }

  let isAvailable = false;

  try {
    const response = await fetch(`${backendApiUrl}/health`, {
      cache: "no-store",
      signal: AbortSignal.timeout(3000),
    });

    if (response.status === 200) {
      const health: unknown = await response.json();
      isAvailable =
        typeof health === "object" &&
        health !== null &&
        "status" in health &&
        health.status === "ok";
    }
  } catch {}

  return isAvailable ? (
    <ApiStatusBadge label="API disponível" colorClass="bg-emerald-500" />
  ) : (
    <ApiStatusBadge label="API indisponível" colorClass="bg-slate-400" />
  );
}
