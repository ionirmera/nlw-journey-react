import { ArrowRight, UserRoundPlus } from "lucide-react";
import { Button } from "../../../componets/button";

interface InviteGuestsStepProps {
  openGuestModal: () => void;
  openConfirmtripModal: () => void;
  emailsToInvite: string[];
}

export function InviteGuestsStep({
  emailsToInvite,
  openConfirmtripModal,
  openGuestModal,
}: InviteGuestsStepProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <button
        type="button"
        onClick={openGuestModal}
        className="flex itens-center gap-2 flex-1 text-left"
      >
        <UserRoundPlus className="size-5 text-zinc-400" />
        {emailsToInvite.length > 0 ? (
          <span className="text-zinc-400 text-lg flex-1">
            {emailsToInvite.length} pessoa(s) conidada(s)
          </span>
        ) : (
          <span className="text-zinc-400 text-lg flex-1">
            Quem estará na viagem?
          </span>
        )}
      </button>

      <div className="w-px bg-zinc-800" />

      <Button onClick={openConfirmtripModal} variant="primary">
        Confirmar viagem
        <ArrowRight className="size-5" />
      </Button>
    </div>
  );
}
