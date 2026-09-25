/**
 * Form delivery through Formspree. The recipient inbox is configured in the
 * Formspree dashboard, so no destination address ships in the site bundle.
 */

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xwlpnbpw";

type FormspreeErrorResponse = { errors?: { message?: string }[] };

export async function sendToFormspree(subject: string, fields: FormData | Record<string, string>) {
  const payload = fields instanceof FormData ? Object.fromEntries(fields) : { ...fields };

  const response = await fetch(FORMSPREE_ENDPOINT, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({ ...payload, _subject: subject }),
  });

  if (!response.ok) {
    const body = (await response.json().catch(() => ({}))) as FormspreeErrorResponse;
    throw new Error(body.errors?.map((error) => error.message).join(" ") || "The form could not be sent.");
  }
}
