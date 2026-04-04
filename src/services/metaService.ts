/**
 * Utility to send events to Meta Conversions API via the backend proxy.
 */
export async function sendMetaEvent(eventName: string, eventData?: any, userData?: any) {
  try {
    const response = await fetch('/api/meta-event', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        eventName,
        eventData,
        userData,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error(`Meta CAPI Frontend Error: ${eventName}`, error);
      return { success: false, error };
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error(`Meta CAPI Frontend Network Error: ${eventName}`, error);
    return { success: false, error };
  }
}
