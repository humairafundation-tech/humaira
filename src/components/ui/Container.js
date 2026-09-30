import { cn } from "@/lib/cn";

export function Container({ className, children }) {
  return (
    <div
      className={cn("mx-auto w-full max-w-5xl px-5 sm:px-8 lg:px-0", className)}
    >
      {children}
    </div>
  );
}
