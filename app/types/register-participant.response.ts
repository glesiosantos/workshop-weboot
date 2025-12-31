import type { Participant } from './participant'

export interface RegisterParticipantResponse {
  success: boolean
  participant: Participant
}
