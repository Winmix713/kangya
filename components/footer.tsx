import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-12 border-t border-gray-200 dark:border-gray-800">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center font-display font-bold text-xl">
              <div className="relative flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 44.343 46"
                  fill="none"
                  style={{ transform: "rotate(126deg)" }}
                >
                  <path
                    fill="#39347f"
                    stroke="#39347f"
                    strokeWidth="0.52"
                    d="M 22.15625 0 A 1.0001 1.0001 0 0 0 21.464844 0.29296875 L 21.445312 0.3125 L 0.87890625 20.878906 C -0.28429206 22.042104 -0.28429206 23.957896 0.87890625 25.121094 L 21.464844 45.707031 A 1.0001 1.0001 0 0 0 22.878906 45.707031 L 22.898438 45.6875 L 43.464844 25.121094 C 44.628041 23.957896 44.628041 22.042104 43.464844 20.878906 L 22.878906 0.29296875 A 1.0001 1.0001 0 0 0 22.15625 0 z M 22.234375 2.4765625 L 42.050781 22.292969 C 42.449681 22.691868 42.449681 23.308132 42.050781 23.707031 L 25.933594 39.824219 C 26.052442 39.242277 26.138227 38.651984 26.169922 38.052734 A 1.0001 1.0001 0 0 0 26.169922 37.947266 C 26.036349 35.421796 25.108902 33.01145 23.537109 31.050781 L 30.878906 23.707031 A 1.0001 1.0001 0 0 0 30.878906 22.292969 L 22.898438 14.3125 C 21.275291 12.594247 20.319287 10.358489 20.181641 8 C 20.299146 5.9866151 21.018169 4.0654641 22.234375 2.4765625 z M 18.410156 6.1757812 C 18.291308 6.7577229 18.205523 7.3480156 18.173828 7.9472656 A 1.0001 1.0001 0 0 0 18.173828 8.0527344 C 18.307423 10.578631 19.236316 12.988371 20.808594 14.949219 L 13.464844 22.292969 A 1.0001 1.0001 0 0 0 13.464844 23.707031 L 21.464844 31.708984 C 23.075846 33.424403 24.02503 35.651211 24.162109 38 C 24.044604 40.013385 23.325581 41.934536 22.109375 43.523438 L 2.2929688 23.707031 C 1.8940686 23.308131 1.8940686 22.691869 2.2929688 22.292969 L 18.410156 6.1757812 z M 22.171875 16.414062 L 28.757812 23 L 22.171875 29.585938 L 15.585938 23 L 22.171875 16.414062 z"
                  ></path>
                </svg>
                <span className="text-gradient ml-2">winmix.hu</span>
              </div>
            </Link>
            <p className="text-muted-foreground">
              Hatékony AI prototípus-készítés dizájnereknek, fejlesztőknek és termékmenedzsereknek.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">Navigáció</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#capabilities" className="text-muted-foreground hover:text-foreground transition-colors">
                  Képességek
                </Link>
              </li>
              <li>
                <Link href="/#tips" className="text-muted-foreground hover:text-foreground transition-colors">
                  Tippek
                </Link>
              </li>
              <li>
                <Link href="/#examples" className="text-muted-foreground hover:text-foreground transition-colors">
                  Példák
                </Link>
              </li>
              <li>
                <Link href="/#mistakes" className="text-muted-foreground hover:text-foreground transition-colors">
                  Gyakori hibák
                </Link>
              </li>
              <li>
                <Link href="/advanced" className="text-muted-foreground hover:text-foreground transition-colors">
                  Haladó technikák
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">Erőforrások</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Dokumentáció
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Közösség
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Támogatás
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">Kapcsolat</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:info@winmix.hu"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  info@winmix.hu
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} winmix.hu. Minden jog fenntartva.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Adatvédelmi irányelvek
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Felhasználási feltételek
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Cookie-k
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

