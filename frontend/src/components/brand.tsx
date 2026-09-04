import Image from "next/image";
import Link from "next/link";
import rivixaLogo from "../../public/images/rivixa-logo.jpeg";
export function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      className={`brand ${light ? "brand-light" : ""}`}
      aria-label="Rivixa Lifesciences home"
    >
      <span className="brand-symbol" aria-hidden="true">
        <Image
          src={rivixaLogo}
          alt=""
          width={83}
          height={123}
          unoptimized
          loading="eager"
        />
      </span>
      <span className="brand-wordmark">
        Rivixa<span>LIFESCIENCES PVT. LTD.</span>
      </span>
    </Link>
  );
}
