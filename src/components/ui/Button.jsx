import React from "react";
import { cn } from "@/lib/cn";

function Button({ href, label, className }) {
  return (
    <a
      href={href}
      className={cn(
        "inline-block rounded-[3px] bg-gold px-5 py-3.5 text-[15px] font-bold text-ink transition-colors hover:bg-gold-line",
        className,
      )}
    >
      {label}
    </a>
  );
}

export default Button;
