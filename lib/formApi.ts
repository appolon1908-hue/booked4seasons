export type PublicFormKind = "service" | "contact" | "partner";
export type PublicFormPayload = Record<string, unknown> & { kind: PublicFormKind };
export class FormApiError extends Error { constructor(message: string, public readonly status?: number) { super(message); } }
export async function submitPublicForm(payload: PublicFormPayload, idempotencyKey = crypto.randomUUID()) {
  const endpoint = "/api/public-forms";
  const url = new URL(endpoint, window.location.origin);
  if (url.protocol !== "https:" && url.hostname !== "localhost") throw new FormApiError("Form endpoint must use HTTPS.");
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 12_000);
  try {
    const response = await fetch(url, { method: "POST", headers: { Accept: "application/json", "Content-Type": "application/json", "Idempotency-Key": idempotencyKey }, body: JSON.stringify(payload), signal: controller.signal, credentials: "same-origin", referrerPolicy: "same-origin" });
    if (!response.ok) throw new FormApiError("The request could not be submitted.", response.status);
  } catch (error) {
    if (error instanceof FormApiError) throw error;
    if (error instanceof DOMException && error.name === "AbortError") throw new FormApiError("The request timed out.");
    throw new FormApiError("The request could not be submitted.");
  } finally { window.clearTimeout(timeout); }
}
