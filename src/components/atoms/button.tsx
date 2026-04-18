import Link from "next/link";
import { type ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "secondary" | "ghost" | "coral" | "dark";
type Size = "sm" | "md";

type BaseProps = {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
};

type ButtonAsLink = BaseProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, "className"> & {
    href: string;
  };

type ButtonAsButton = BaseProps &
  Omit<ComponentPropsWithoutRef<"button">, "className">;

type ButtonProps = ButtonAsLink | ButtonAsButton;

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-smaragd text-white hover:bg-smaragd-dark active:scale-95 shadow-[0_0_0_0_transparent] hover:shadow-glow-smaragd",
  secondary:
    "bg-surface-light text-heading hover:bg-surface-border active:scale-95",
  ghost:
    "bg-transparent text-heading hover:bg-surface-light active:scale-95",
  coral:
    "bg-coral text-white hover:bg-coral-dark active:scale-95 shadow-[0_0_0_0_transparent] hover:shadow-glow-coral",
  dark:
    "bg-black text-white border border-white/30 hover:bg-black/80 active:scale-95",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-5 py-2.5 text-sm",
};

function isLinkProps(props: ButtonProps): props is ButtonAsLink {
  return "href" in props;
}

export default function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", fullWidth = false } = props;

  const classes = [
    fullWidth ? "flex w-full" : "inline-flex",
    "items-center justify-center rounded-full font-semibold transition-all duration-150",
    "focus-visible:ring-2 focus-visible:ring-smaragd focus-visible:ring-offset-2 focus-visible:ring-offset-page",
    variantStyles[variant],
    sizeStyles[size],
  ].join(" ");

  if (isLinkProps(props)) {
    const { variant: _v, size: _s, fullWidth: _f, ...linkRest } = props;
    return <Link className={classes} {...linkRest} />;
  }

  const { variant: _v, size: _s, fullWidth: _f, ...buttonRest } = props;
  return <button className={classes} {...buttonRest} />;
}
