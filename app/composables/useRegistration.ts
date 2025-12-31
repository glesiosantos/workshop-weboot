export function useRegistration() {
  const config = useRuntimeConfig()

  async function registerParticipant(payload: any) {

    console.log('PAYLOAD ENVIADO →', payload)
    
    try {
      return await $fetch(`${config.public.supabaseUrl}/functions/v1/register-participant`, {
        method: 'POST',
        body: payload
      })
    } catch (err: any) {
      console.error('Erro na function →', err?.data || err)
      throw err
    }
  }

  return { registerParticipant }
}

