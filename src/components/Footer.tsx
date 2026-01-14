export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-card px-6 py-6 mt-12">
      <div className="max-w-4xl mx-auto text-sm text-muted-foreground">
        © {new Date().getFullYear()} It's Easy Son — handcrafted merch and
        books.
      </div>
    </footer>
  );
}
