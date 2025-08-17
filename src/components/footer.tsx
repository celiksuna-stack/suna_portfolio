export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-muted-foreground">&copy; {currentYear} Suna Çelik. Tüm hakları saklıdır.</p>
    </footer>
  );
}
