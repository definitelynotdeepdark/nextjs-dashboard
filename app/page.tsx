import AcmeLogo from "./ui/acme-logo";
import { lusitana } from "./ui/fonts";
import Image from 'next/image';

export default function Page() {
  return (
    <main >
      <div>
        <AcmeLogo />
        <h1 className={`${lusitana.className}`}>Hello</h1>
      <Image
        src="/hero-desktop.png"
        width={1000}
        height={760}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
      <Image
        src="/hero-mobile.png"
        width={500}
        height={620}
        className="block md:hidden"
        alt="Screenshot of the dashboard project showing mobile version"
      />
      </div>
      
    </main>
  );
}
