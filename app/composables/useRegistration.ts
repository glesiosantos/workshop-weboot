import type { RegisterParticipantResponse } from "~/types/register-participant.response"

export function useRegistration() {
  const config = useRuntimeConfig()

  async function registerParticipant(payload: any) {
    const response = await $fetch<RegisterParticipantResponse>(`${config.public.supabaseUrl}/functions/v1/register-participant`, {
      method: 'POST',
      body: payload
    })
    
    return response
  }

  return { registerParticipant }
}

