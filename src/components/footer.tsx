export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full border-t">
      <div className="flex flex-col gap-2 sm:flex-row py-6 w-full max-w-6xl mx-auto shrink-0 items-center px-4 md:px-6">
        <p className="text-xs text-muted-foreground">&copy; {currentYear} Suna Çelik. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
}
