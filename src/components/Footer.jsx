import { PROFILE } from "../content/data";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner mono dim">
        <span>© {new Date().getFullYear()} {PROFILE.name}</span>
        <a href="#top" className="link-inline">Kembali ke atas ↑</a>
      </div>
    </footer>
  );
}
