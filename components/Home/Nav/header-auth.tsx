import { signOutAction } from "@/app/actions";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import Link from "next/link";
import { Button } from "../../ui/button";
import { createClient } from "@/utils/supabase/server";
import React from "react";

export default async function AuthButton({
  params,
}: {
  params: { locale?: string };
}) {
  const locale = params?.locale || "en"; // Fallback to 'en' if locale is undefined
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!hasEnvVars) {
    return (
      <div className="flex gap-4 items-center">
        <div className="flex gap-2">
          <Button
            asChild
            size="sm"
            variant={"outline"}
            disabled
            className="opacity-75 cursor-none pointer-events-none"
          >
            <Link href={`/${locale}/sign-in`}>Sign in</Link>
          </Button>
          <Button
            asChild
            size="sm"
            variant={"default"}
            disabled
            className="opacity-75 cursor-none pointer-events-none"
          >
            <Link href={`/${locale}/sign-up`}>Sign up</Link>
          </Button>
        </div>
      </div>
    );
  }

  return user ? (
    <div className="flex items-center gap-4">
      Hey, {user.email}!
      <form action={signOutAction}>
        <Button type="submit" variant={"default"}>
          Sign out
        </Button>
      </form>
    </div>
  ) : (
    <div className="flex gap-2">
      <Button asChild size="sm" variant={"outline"}>
        <Link href={`/${locale}/sign-in`}>Sign in</Link>
      </Button>
      <Button asChild size="sm" variant={"default"}>
        <Link href={`/${locale}/sign-up`}>Sign up</Link>
      </Button>
    </div>
  );
}
