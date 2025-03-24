"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Section from "@/components/section"
import Hero from "@/components/hero"
import IterativeDesignPreview from "@/components/iterative-design-preview"
import PromptTemplateSelector from "@/components/prompt-template-selector"
import CodeExportPreview from "@/components/code-export-preview"
import InteractiveSandbox from "@/components/interactive-sandbox"
import TipsSection from "@/components/tips-section"
import CommonMistakes from "@/components/common-mistakes"
import Newsletter from "@/components/newsletter"

// Sample data for IterativeDesignPreview
const iterativeDesignVersions = [
  {
    id: "version-1",
    title: "Alapvető változat",
    description: "Egy egyszerű, alap leírással ellátott prompt, amely a lényegi elemeket tartalmazza.",
    prompt: "Készíts egy bejelentkező űrlapot email címmel és jelszóval.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "version-2",
    title: "Részletes változat",
    description: "A prompt kiterjesztése a tartalmi elemek részletesebb leírásával.",
    prompt:
      "Készíts egy bejelentkező űrlapot email címmel, jelszóval és egy 'Emlékezz rám' jelölőnégyzettel. Legyen egy 'Bejelentkezés' gomb és egy 'Elfelejtett jelszó' link is.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "version-3",
    title: "Teljes körű változat",
    description: "Teljesen kidolgozott prompt, amely részletes stílusbeli és funkcionális meghatározásokat tartalmaz.",
    prompt:
      "Készíts egy bejelentkező űrlapot a következő elemekkel:\n- Email cím mező (kötelező, email validációval)\n- Jelszó mező (kötelező, min. 8 karakter)\n- 'Emlékezz rám' jelölőnégyzet\n- 'Bejelentkezés' gomb (kék színű, teljes szélességű)\n- 'Elfelejtett jelszó' link az űrlap alatt\n- Reszponzív dizájn (mobilon és asztali gépen is jól nézzen ki)\n- Sötét módot támogató színek",
    image: "/placeholder.svg?height=400&width=600",
  },
]

// Sample data for PromptTemplateSelector
const promptTemplateCategories = [
  {
    id: "ui-components",
    name: "UI Komponensek",
    templates: [
      {
        id: "login-form",
        title: "Bejelentkező űrlap",
        description: "Teljes bejelentkező űrlap validációval",
        prompt:
          "Készíts egy bejelentkező űrlapot a következő elemekkel:\n- Email cím mező (kötelező, email validációval)\n- Jelszó mező (kötelező, min. 8 karakter)\n- 'Emlékezz rám' jelölőnégyzet\n- 'Bejelentkezés' gomb (kék színű, teljes szélességű)\n- 'Elfelejtett jelszó' link az űrlap alatt\n- Reszponzív dizájn (mobilon és asztali gépen is jól nézzen ki)\n- Sötét módot támogató színek",
      },
      {
        id: "navbar",
        title: "Navigációs sáv",
        description: "Reszponzív navigációs sáv hamburger menüvel",
        prompt:
          "Készíts egy reszponzív navigációs sávot a következő elemekkel:\n- Logo a bal oldalon\n- Navigációs linkek középen (Főoldal, Szolgáltatások, Árak, Kapcsolat)\n- Bejelentkezés/Regisztráció gombok a jobb oldalon\n- Mobilnézetben hamburger menü, amely kinyitható\n- Sötét/világos mód váltó gomb\n- Sticky header, amely a görgetés során is látható marad",
      },
    ],
  },
  {
    id: "page-layouts",
    name: "Oldal elrendezések",
    templates: [
      {
        id: "landing-page",
        title: "Landing oldal",
        description: "Teljes landing oldal több szekcióval",
        prompt:
          "Készíts egy modern landing oldalt a következő szekciókkal:\n- Hero szekció nagyméretű képpel és CTA gombbal\n- Szolgáltatások szekció 3 funkcióval és ikonokkal\n- Árazási szekció 3 csomaggal\n- Gyakori kérdések accordion elemmel\n- Kapcsolatfelvételi űrlap\n- Footer szekció\n\nA dizájn legyen modern, letisztult, használj fehér hátteret, enyhe árnyékokat és a vállalat elsődleges színét (kék #2563EB) a kiemelésekhez.",
      },
      {
        id: "dashboard",
        title: "Dashboard",
        description: "Admin dashboard elrendezés",
        prompt:
          "Tervezz egy admin dashboard felületet a következő elemekkel:\n- Oldalsáv navigációval (Dashboard, Felhasználók, Termékek, Rendelések, Beállítások menüpontokkal)\n- Felső fejléc keresőmezővel és felhasználói profil menüvel\n- Fő tartalmi rész 4 statisztikai kártyával\n- Egy vonalas grafikon az elmúlt 30 nap adatairól\n- Egy táblázat a legutóbbi 5 aktivitással\n\nA dizájn legyen letisztult, használj fehér hátteret a kártyákhoz, enyhe szürke (#F9FAFB) hátteret az oldalhoz.",
      },
    ],
  },
]

// Sample data for CodeExportPreview
const codeExamples = {
  component: {
    name: "Komponens",
    language: "tsx",
    code: `import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

interface LoginFormProps {
  onSubmit: (data: { email: string; password: string; remember: boolean }) => void;
}

export function LoginForm({ onSubmit }: LoginFormProps) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [remember, setRemember] = React.useState(false);
  const [errors, setErrors] = React.useState({ email: '', password: '' });

  const validateForm = () => {
    const newErrors = { email: '', password: '' };
    let isValid = true;

    if (!email) {
      newErrors.email = 'Email cím megadása kötelező';
      isValid = false;
    } else if (!/\\S+@\\S+\\.\\S+/.test(email)) {
      newErrors.email = 'Érvénytelen email cím';
      isValid = false;
    }

    if (!password) {
      newErrors.password = 'Jelszó megadása kötelező';
      isValid = false;
    } else if (password.length < 8) {
      newErrors.password = 'A jelszónak legalább 8 karakter hosszúnak kell lennie';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit({ email, password, remember });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="email">Email cím</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="pelda@email.com"
        />
        {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Jelszó</Label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="remember"
          checked={remember}
          onCheckedChange={(checked) => setRemember(checked as boolean)}
        />
        <Label htmlFor="remember" className="text-sm font-normal">Emlékezz rám</Label>
      </div>

      <Button type="submit" className="w-full">Bejelentkezés</Button>

      <div className="text-center">
        <a href="#" className="text-sm text-blue-600 hover:underline">
          Elfelejtett jelszó?
        </a>
      </div>
    </form>
  );
}`,
  },
  styles: {
    name: "Stílusok",
    language: "css",
    code: `.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.dark .login-container {
  background-color: #1f2937;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #374151;
}

.dark .form-label {
  color: #e5e7eb;
}

.form-input {
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  background-color: white;
  color: #1f2937;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.dark .form-input {
  background-color: #374151;
  border-color: #4b5563;
  color: #e5e7eb;
}

.form-input:focus {
  border-color: #3b82f6;
  outline: none;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.25);
}

.checkbox-container {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.checkbox-input {
  margin-right: 0.5rem;
}

.checkbox-label {
  font-size: 0.875rem;
  color: #4b5563;
}

.dark .checkbox-label {
  color: #9ca3af;
}

.login-button {
  width: 100%;
  padding: 0.625rem 1.25rem;
  background-color: #3b82f6;
  color: white;
  font-weight: 500;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.15s ease-in-out;
}

.login-button:hover {
  background-color: #2563eb;
}

.login-button:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
}

.forgot-password {
  display: block;
  margin-top: 1rem;
  text-align: center;
  font-size: 0.875rem;
  color: #3b82f6;
  text-decoration: none;
}

.forgot-password:hover {
  text-decoration: underline;
}

.error-message {
  color: #ef4444;
  font-size: 0.75rem;
  margin-top: 0.25rem;
}`,
  },
  api: {
    name: "API Integrálás",
    language: "tsx",
    code: `import { useState } from 'react';
import { LoginForm } from '@/components/login-form';
import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const handleLogin = async (data: { email: string; password: string; remember: boolean }) => {
    try {
      setIsLoading(true);
      
      // API hívás a bejelentkezéshez
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
          remember: data.remember,
        }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Sikertelen bejelentkezés');
      }
      
      const responseData = await response.json();
      
      // Sikeres bejelentkezés
      toast({
        title: 'Sikeres bejelentkezés',
        description: 'Átirányítás a kezdőlapra...',
      });
      
      // Token tárolása (localStorage vagy cookie)
      if (data.remember) {
        localStorage.setItem('authToken', responseData.token);
      } else {
        sessionStorage.setItem('authToken', responseData.token);
      }
      
      // Átirányítás a dashboard oldalra
      router.push('/dashboard');
      
    } catch (error) {
      // Hiba kezelése
      toast({
        title: 'Hiba történt',
        description: error instanceof Error ? error.message : 'Sikertelen bejelentkezés',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Bejelentkezés</h1>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
}`,
  },
}

// Sample data for CommonMistakes
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

// Sample sandbox code
const sampleCode = `// Egyszerű React komponens
import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">Számláló</h2>
      <p className="mb-4">Jelenlegi érték: {count}</p>
      <div className="flex gap-2">
        <button 
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Csökkentés
        </button>
        <button 
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Növelés
        </button>
      </div>
    </div>
  );
}`

export default function Page2() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <Hero
          title="Komponensek és Sablonok"
          subtitle="Fedezd fel a v0 használatának haladó technikáit és sablonokat"
          primaryCta={{ text: "Kezdjük el", href: "#iterative-design" }}
          secondaryCta={{ text: "Prompt sablonok", href: "#prompt-templates" }}
        />

        <Section
          id="iterative-design"
          title="Fokozatos fejlesztés"
          subtitle="Egy jól megtervezett prompt lépcsőzetes fejlesztése hatékonyabb eredményekhez vezet."
          className="bg-white dark:bg-gray-950"
        >
          <IterativeDesignPreview versions={iterativeDesignVersions} />
        </Section>

        <Section
          id="prompt-templates"
          title="Prompt sablonok"
          subtitle="Használj előre elkészített sablonokat a gyakori komponensek és elrendezések gyors létrehozásához."
          className="bg-gray-50 dark:bg-gray-900"
        >
          <PromptTemplateSelector categories={promptTemplateCategories} />
        </Section>

        <Section
          id="code-export"
          title="Kód exportálás"
          subtitle="Használd a generált kódot saját projektedben a hatékony fejlesztés érdekében."
          className="bg-white dark:bg-gray-950"
        >
          <CodeExportPreview examples={codeExamples} />
        </Section>

        <Section
          id="interactive-sandbox"
          title="Interaktív kód szerkesztő"
          subtitle="Próbáld ki és módosítsd a kódot közvetlenül a böngészőben"
          className="bg-gray-50 dark:bg-gray-900"
        >
          <InteractiveSandbox initialCode={sampleCode} />
        </Section>

        <Section
          id="tips"
          title="Tippek"
          subtitle="Hogyan használd hatékonyan a v0-t"
          className="bg-white dark:bg-gray-950"
        >
          <TipsSection />
        </Section>

        <Section
          id="common-mistakes"
          title="Gyakori hibák"
          subtitle="Kerüld el ezeket a gyakori hibákat a v0 használata során"
          className="bg-gray-50 dark:bg-gray-900"
        >
          <CommonMistakes mistakes={commonMistakes} />
        </Section>

        <Section id="newsletter" className="bg-white dark:bg-gray-950">
          <div className="max-w-xl mx-auto">
            <Newsletter />
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  )
}

