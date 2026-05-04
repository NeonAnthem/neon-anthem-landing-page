import { IconMailFilled } from "@tabler/icons-react";

export default function ValidatingAuthPage() {
  return (
    <div className="w-full max-w-sm text-center space-y-4">
      <div className="flex items-center justify-center size-16 rounded-full bg-muted mx-auto">
        <IconMailFilled className="size-8 text-muted-foreground" />
      </div>
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">Check your email</h1>
        <p className="text-sm text-muted-foreground">
          We sent you a magic link. Click it to sign in — no password needed.
        </p>
        <p className="text-xs text-muted-foreground">
          The link expires in 5 minutes. Check your spam folder if you don't see it.
        </p>
      </div>
    </div>
  );
}
