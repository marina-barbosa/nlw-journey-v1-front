import { UserRoundPlus, ArrowRight } from "lucide-react";
import { Button } from "../../../components/button";

interface InviteGuestsStepProps {
  emailsToInvite: string[]
  toggleGuestsModal: () => void
  toggleConfirmTripModal: () => void
}

export function InviteGuestsStep({
  emailsToInvite,
  toggleGuestsModal,
  toggleConfirmTripModal,
}: InviteGuestsStepProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <button type="button" onClick={toggleGuestsModal} className="flex items-center gap-2 flex-1 text-left">
        <UserRoundPlus className="size-5 text-zinc-400" />
        {emailsToInvite.length > 0 ? (
          <span className="text-zinc-100 text-lg flex-1">{emailsToInvite.length} pessoa(s) convidada(s)</span>
        ) : (
          <span className="text-zinc-400 text-lg flex-1">Quem estará na viagem?</span>
        )}
      </button>
      <div className="w-px h-6 bg-zinc-800" />
      <Button onClick={toggleConfirmTripModal} variant="primary" >
        Confirmar viagem
        <ArrowRight className="size-5" />
      </Button>
    </div>
  )
}