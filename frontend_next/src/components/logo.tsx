import Image from "next/image";
import LOGO from "/public/logo.svg";

const logo = LOGO as { src: string; blurDataURL: string };

export function Logo() {
  return (
    <div className="relative h-14 w-14">
      <Image src={logo.src} blurDataURL={logo.blurDataURL} alt="Logo" fill />
    </div>
  );
}
