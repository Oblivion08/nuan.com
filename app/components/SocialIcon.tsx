type IconName = "email" | "messenger" | "facebook" | "tiktok" | "clock";

export function SocialIcon({ name }: { name: IconName }) {
  const paths: Record<IconName, React.ReactNode> = {
    email: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
    messenger: <><path d="M21 11.5a8.5 8.5 0 0 1-9 8.5 9 9 0 0 1-3.7-.8L4 20.5l1.2-3.7A8.2 8.2 0 0 1 3 11.5 8.5 8.5 0 0 1 12 3a8.5 8.5 0 0 1 9 8.5Z" /><path d="m7.5 14 3-3 2.5 2 3.5-3" /></>,
    facebook: <path d="M14 21v-8h3l.5-3H14V8.5c0-.9.3-1.5 1.7-1.5H18V4.3A19 19 0 0 0 15.5 4C13 4 11 5.5 11 8.4V10H8v3h3v8" />,
    tiktok: <><path d="M15 4v10.5a4.5 4.5 0 1 1-4-4.5" /><path d="M15 4c.5 2.4 2 3.8 4 4.2" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  };
  return <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}
