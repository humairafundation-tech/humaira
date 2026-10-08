import React from "react";

function Button({ href, label }) {
  return (
    <a
      href={href}
      className="inline-block rounded-xs bg-gold px-5.5 py-3 text-[16px] font-bold text-ink transition-colors hover:bg-gold-line"
    >
      {label}
    </a>
  );
}

export default Button;
