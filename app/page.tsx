import Header from "@/components/header"
import Footer from "@/components/footer"
import Section from "@/components/section"
import Hero from "@/components/hero"
import { FeatureCard } from "@/components/feature-card"
import { FileText, Users, Lightbulb, Download } from "lucide-react"
import CommonMistakes from "@/components/common-mistakes"
import SuccessStories from "@/components/success-stories"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Sample data for common mistakes
const commonMistakes = [
  {
    bad: "Készíts egy weboldalt.",
    good: "Készíts egy landing oldalt egy SaaS alkalmazáshoz, amely tartalmaz egy hero szekciót, szolgáltatások listáját és egy árazási táblázatot.",
    explanation:
      "A túl általános promptok nem adnak elég információt a v0-nak ahhoz, hogy pontosan azt hozza létre, amire szükséged van. Mindig adj meg konkrét részleteket és funkciókat.",
  },
  {
    bad: "Készíts egy szép bejelentkező űrlapot.",
    good: "Készíts egy bejelentkező űrlapot email és jelszó mezőkkel, 'Emlékezz rám' opcióval, és egy kék színű bejelentkezés gombbal. Az űrlap legyen reszponzív és tartalmazzon validációt.",
    explanation:
      "A 'szép' szubjektív. Helyette adj meg konkrét stíluselemeket, színeket és funkciókat, hogy a v0 pontosan tudja, mit szeretnél.",
  },
  {
    bad: "Nem tetszik a dizájn, csináld másképp.",
    good: "A kártyák túl sűrűn vannak elhelyezve, növeld meg a térközt közöttük. A gombok színe nem eléggé kontrasztos a háttérrel, használj sötétebb árnyalatot. A főcím túl kicsi, növeld meg a méretét és tedd vastagabbá.",
    explanation: "Kerüld az általános visszajelzéseket. Pontosan határozd meg, mit szeretnél változtatni és miért.",
  },
]

// Sample data for success stories
const successStories = [
  {
    name: "Kovács Péter",
    role: "UX Designer",
    company: "FashionLine",
    content:
      "A v0.dev segítségével napok helyett órák alatt készítettem el a webáruházunk új prototípusát. A konverziós ráta 25%-kal nőtt az új dizájn bevezetése után.",
    rating: 5,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Nagy Anna",
    role: "Product Manager",
    company: "TechSolutions",
    content:
      "Imádom, hogy a v0.dev-vel gyorsan tudok iterálni. A fejlesztőink sokkal könnyebben értik meg a víziómat, amikor konkrét prototípusokat mutatok nekik.",
    rating: 5,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Szabó Gábor",
    role: "Frontend Developer",
    company: "InnoTech",
    content:
      "A v0.dev által generált kód tiszta és jól strukturált. Minimális módosítással tudom integrálni a meglévő projektjeinkbe.",
    rating: 4,
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          title={
            <>
              V0 Gyorstalpaló 2.0:{" "}
              <span className="text-black dark:text-white">Tippek és trükkök az AI Prototípus-készítéshez</span>
            </>
          }
          subtitle="Hogyan érhetsz el jobb eredményeket nagyobb kontroll mellett a v0.dev használatával"
          primaryCta={{ text: "Kezdd el a tanulást", href: "#capabilities" }}
          secondaryCta={{ text: "Prompt sablonok", href: "/page2" }}
          className="pt-32 pb-16"
        />

        <div className="container mx-auto text-center py-8">
          <p className="text-muted-foreground">
            Az 50-60%-os készültségi szint gyorsan elérhető, de az ezt meghaladó finomítás a trükkös rész.
          </p>
        </div>

        {/* Overview Section */}
        <Section id="overview" className="bg-white dark:bg-gray-950 py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">A v0.dev és a hatékony prototípus-készítés</h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-16">
              Ismerkedj meg a v0.dev képességeivel és tanuld meg, hogyan használhatod hatékonyan a prototípusok
              készítéséhez. Útmutatónk 8 gyakorlati tippet mutat be a jobb eredmények eléréséhez.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <FeatureCard
                title="UI Prototípusok"
                description="A v0.dev segítségével gyors és pontos UI prototípusokat készíthetsz, amelyek valós kódba fordíthatók."
                icon={<FileText className="h-10 w-10" />}
                href="#tips"
              />
              <FeatureCard
                title="Felhasználói Körök"
                description="Dizájnerek, fejlesztők, termékmenedzserek és vállalkozók számára egyaránt hasznos eszköz."
                icon={<Users className="h-10 w-10" />}
                href="#tips"
              />
              <FeatureCard
                title="8 Bevált Módszer"
                description="Útmutatónk 8 bevált módszert mutat be, amelyekkel jobb eredményeket érhetsz el a v0.dev használata során."
                icon={<Lightbulb className="h-10 w-10" />}
                href="#tips"
              />
              <FeatureCard
                title="Letölthető Anyagok"
                description="Prompt sablonok, ellenőrzőlisták és egyéb hasznos anyagok a hatékonyabb munkafolyamatokhoz."
                icon={<Download className="h-10 w-10" />}
                href="/page2"
              />
            </div>
          </div>
        </Section>

        {/* Tips Section */}
        <Section
          id="tips"
          title="8 tipp a hatékonyabb winmix.hu használathoz"
          subtitle="Ezeket a módszereket alkalmazva jobb eredményeket érhetsz el, és nagyobb kontrollt szerezhetsz a tervezési folyamat felett."
          className="bg-gray-50 dark:bg-gray-900"
        >
          <div className="space-y-16">
            {/* Tip 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl">
                    1
                  </div>
                  <h3 className="text-2xl font-bold">Részletes követelmények megadása</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  A pontos és részletes követelmények megfogalmazása kulcsfontosságú a jó eredmények eléréséhez.
                </p>
                <p className="mb-4">
                  Minél részletesebben fogalmazod meg a követelményeidet, annál pontosabban fogja a winmix.hu
                  megvalósítani az elképzeléseidet. Ne félj konkrét funkciókat, elrendezést, színeket és interakciókat
                  leírni.
                </p>

                <div className="space-y-4 mt-6">
                  <div className="flex items-start gap-2">
                    <div className="text-red-500 mt-1">✗</div>
                    <div>
                      <p className="font-medium">Rossz példa:</p>
                      <p className="text-muted-foreground">"Készíts egy landing page-et egy applikációhoz."</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <div className="text-green-500 mt-1">✓</div>
                    <div>
                      <p className="font-medium">Jó példa:</p>
                      <p className="text-muted-foreground">
                        "Készíts egy modern, világos landing page-et egy produktivitás növelő mobilalkalmazáshoz. A
                        landing page tartalmazzon egy hero szekciót, ahol az app fő előnyei jelennek meg, 3 feature
                        szekciót ikonokkal, árazási táblát, ügyfél véleményeket és CTA-t."
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg border shadow-sm overflow-hidden">
                <div className="bg-gray-100 dark:bg-gray-700 p-2 flex items-center gap-2 border-b">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-sm text-center flex-1">winmix.hu interaktív példa #1</div>
                </div>
                <div className="p-4">
                  <div className="flex gap-4 mb-4">
                    <button className="px-4 py-2 rounded border bg-white dark:bg-gray-900">Szerkesztés</button>
                    <button className="px-4 py-2 rounded border bg-white dark:bg-gray-900">Előnézet</button>
                    <button className="px-4 py-2 rounded border bg-white dark:bg-gray-900">Eredmény</button>
                  </div>
                  <div className="border rounded-md p-4 bg-white dark:bg-gray-900 min-h-[200px]">
                    <p className="font-mono text-sm">Készíts egy landing page-et egy applikációhoz.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tip 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="order-2 lg:order-1">
                <div className="bg-white dark:bg-gray-800 rounded-lg border shadow-sm overflow-hidden">
                  <div className="bg-gray-100 dark:bg-gray-700 p-2 flex items-center gap-2 border-b">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-sm text-center flex-1">winmix.hu interaktív példa #2</div>
                  </div>
                  <div className="p-4">
                    <div className="flex gap-4 mb-4">
                      <button className="px-4 py-2 rounded border bg-white dark:bg-gray-900">Szerkesztés</button>
                      <button className="px-4 py-2 rounded border bg-white dark:bg-gray-900">Előnézet</button>
                      <button className="px-4 py-2 rounded border bg-white dark:bg-gray-900">Eredmény</button>
                    </div>
                    <div className="border rounded-md p-4 bg-white dark:bg-gray-900 min-h-[200px]">
                      <p className="font-mono text-sm">Készíts egy modern dashboard-ot a felhasználók számára.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl">
                    2
                  </div>
                  <h3 className="text-2xl font-bold">Vizuális referenciák használata</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  A képi hivatkozások és stílusreferenciák segítenek pontosítani az elvárt megjelenést.
                </p>
                <p className="mb-4">
                  Egy kép többet mondhat ezer szónál. A vizuális referenciákkal pontosabban tudod közvetíteni az elvárt
                  stílust és megjelenést.
                </p>

                <div className="space-y-4 mt-6">
                  <div className="flex items-start gap-2">
                    <div className="text-red-500 mt-1">✗</div>
                    <div>
                      <p className="font-medium">Referencia nélkül:</p>
                      <p className="text-muted-foreground">"Készíts egy modern dashboard-ot."</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <div className="text-green-500 mt-1">✓</div>
                    <div>
                      <p className="font-medium">Referenciával:</p>
                      <p className="text-muted-foreground">
                        "Készíts egy dashboard-ot hasonló stílusban, mint az Apple Health vagy a Figma analitikai
                        felülete. Használj fehér hátteret, lekerekített sarkú kártyákat és minimális színeket."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tip 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl">
                    3
                  </div>
                  <h3 className="text-2xl font-bold">Iteratív fejlesztés és finomítás</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  A fokozatos fejlesztés és a visszajelzések alapján történő finomítás a legjobb módszer.
                </p>
                <p className="mb-4">
                  Ritka, hogy az első próbálkozás tökéletes eredményt hoz. Az iteratív megközelítés - ahol először egy
                  alapverziót készítesz, majd fokozatosan finomítod azt - gyakran a leghatékonyabb módszer.
                </p>

                <ol className="space-y-2 mt-6 list-decimal list-inside">
                  <li>
                    <span className="font-medium">1. iteráció:</span> Alap funkcionalitás és elrendezés
                  </li>
                  <li>
                    <span className="font-medium">2. iteráció:</span> Stílus és dizájnelemek finomítása
                  </li>
                  <li>
                    <span className="font-medium">3. iteráció:</span> Interakciók és animációk hozzáadása
                  </li>
                  <li>
                    <span className="font-medium">4. iteráció:</span> Részletek és a felhasználói élmény csiszolása
                  </li>
                </ol>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg border shadow-sm overflow-hidden">
                <div className="bg-gray-100 dark:bg-gray-700 p-2 flex items-center gap-2 border-b">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-sm text-center flex-1">winmix.hu interaktív példa #3</div>
                </div>
                <div className="p-4">
                  <div className="flex gap-4 mb-4">
                    <button className="px-4 py-2 rounded border bg-white dark:bg-gray-900">Szerkesztés</button>
                    <button className="px-4 py-2 rounded border bg-white dark:bg-gray-900">Előnézet</button>
                    <button className="px-4 py-2 rounded border bg-white dark:bg-gray-900">Eredmény</button>
                  </div>
                  <div className="border rounded-md p-4 bg-white dark:bg-gray-900 min-h-[200px]">
                    <p className="font-mono text-sm">Tervezz egy teljes e-commerce oldalt minden funkcióval.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tip 4 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="order-2 lg:order-1">
                <div className="bg-white dark:bg-gray-800 rounded-lg border shadow-sm overflow-hidden">
                  <div className="bg-gray-100 dark:bg-gray-700 p-2 flex items-center gap-2 border-b">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-sm text-center flex-1">winmix.hu interaktív példa #4</div>
                  </div>
                  <div className="p-4">
                    <div className="flex gap-4 mb-4">
                      <button className="px-4 py-2 rounded border bg-white dark:bg-gray-900">Szerkesztés</button>
                      <button className="px-4 py-2 rounded border bg-white dark:bg-gray-900">Előnézet</button>
                      <button className="px-4 py-2 rounded border bg-white dark:bg-gray-900">Eredmény</button>
                    </div>
                    <div className="border rounded-md p-4 bg-white dark:bg-gray-900 min-h-[200px]">
                      <p className="font-mono text-sm">Készíts egy komplett webáruházat.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl">
                    4
                  </div>
                  <h3 className="text-2xl font-bold">Komponens-alapú megközelítés</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  A komplex felületeket bontsd fel kisebb, kezelhetőbb komponensekre a jobb eredmény érdekében.
                </p>
                <p className="mb-4">
                  A komponens-alapú megközelítés lehetővé teszi a komplex felületek kezelhetőbb egységekre bontását, ami
                  jobb minőséget eredményez és megkönnyíti a későbbi módosításokat.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="font-medium mb-2">Főkomponensek:</h4>
                    <ul className="space-y-1 list-disc list-inside text-muted-foreground">
                      <li>Fejléc</li>
                      <li>Termék detail nézet</li>
                      <li>Termék lista</li>
                      <li>Lábléc</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Alkomponensek:</h4>
                    <ul className="space-y-1 list-disc list-inside text-muted-foreground">
                      <li>Keresősáv</li>
                      <li>Termék kártya</li>
                      <li>Értékelő csillagok</li>
                      <li>Szűrők panel</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Tip 5 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl">
                    5
                  </div>
                  <h3 className="text-2xl font-bold">Stílus és dizájn rendszer meghatározása</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Egységes vizuális nyelv meghatározása a konzisztens felhasználói élmény érdekében.
                </p>
                <p className="mb-4">
                  A stílus és dizájn rendszer meghatározása segít biztosítani a vizuális konzisztenciát az egész
                  felületen. Határozd meg a színpalettát, a tipográfiát, a komponensek stílusát és az elrendezés
                  szabályait.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                    <h4 className="font-medium mb-2">Dizájn rendszer elemei:</h4>
                    <ul className="space-y-1 list-disc list-inside text-muted-foreground">
                      <li>Színpaletta</li>
                      <li>Tipográfia</li>
                      <li>Gombok és form elemek</li>
                      <li>Térköz és elrendezés</li>
                      <li>Ikonok és illusztrációk</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Színpaletta példa:</h4>
                    <div className="flex gap-2 mt-2">
                      <div className="w-10 h-10 rounded bg-blue-500"></div>
                      <div className="w-10 h-10 rounded bg-blue-400"></div>
                      <div className="w-10 h-10 rounded bg-gray-900"></div>
                      <div className="w-10 h-10 rounded bg-gray-600"></div>
                      <div className="w-10 h-10 rounded bg-gray-100"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg border shadow-sm overflow-hidden">
                <div className="bg-gray-100 dark:bg-gray-700 p-2 flex items-center gap-2 border-b">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-sm text-center flex-1">winmix.hu interaktív példa #5</div>
                </div>
                <div className="p-4">
                  <div className="flex gap-4 mb-4">
                    <button className="px-4 py-2 rounded border bg-white dark:bg-gray-900">Szerkesztés</button>
                    <button className="px-4 py-2 rounded border bg-white dark:bg-gray-900">Előnézet</button>
                    <button className="px-4 py-2 rounded border bg-white dark:bg-gray-900">Eredmény</button>
                  </div>
                  <div className="border rounded-md p-4 bg-white dark:bg-gray-900 min-h-[200px]">
                    <p className="font-mono text-sm">Tervezz egy alkalmazást modern kinézettel.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Common Mistakes Section */}
        <Section
          id="mistakes"
          title="Gyakori hibák"
          subtitle="Kerüld el ezeket a gyakori hibákat a v0 használata során"
          className="bg-white dark:bg-gray-950"
        >
          <CommonMistakes mistakes={commonMistakes} />
        </Section>

        {/* Success Stories Section */}
        <Section
          id="success-stories"
          title="Sikertörténetek"
          subtitle="Ismerd meg azokat a projekteket, amelyek a v0.dev segítségével valósultak meg. Nézd meg az Előtte-Utána összehasonlításokat és olvasd el a felhasználók tapasztalatait."
          className="bg-gray-50 dark:bg-gray-900"
        >
          <SuccessStories stories={successStories} />
        </Section>

        {/* CTA Section */}
        <Section className="bg-white dark:bg-gray-950 py-20">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">Készen állsz a haladó technikákra?</h2>
            <p className="text-xl text-muted-foreground">
              Fedezd fel a fokozatos fejlesztés, promptsablonok és kódexportálás hatékony módszereit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" asChild>
                <Link href="/page2">Haladó technikák felfedezése</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/page2#prompt-templates">Prompt sablonok</Link>
              </Button>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  )
}

