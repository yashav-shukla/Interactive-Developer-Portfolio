export const MOBILE_BREAKPOINT = 768;

export function shouldUseLenis(): boolean {
  return window.innerWidth > MOBILE_BREAKPOINT;
}

export function enableNativeScroll(): void {
  document.body.style.overflowY = "auto";
  document.documentElement.style.overflowY = "auto";
  document.documentElement.classList.remove("lenis", "lenis-smooth", "lenis-stopped");
}
