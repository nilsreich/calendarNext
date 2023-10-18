import { Navbar } from "@/components/Navbar";
import { useTranslations } from "next-intl";
import { Week } from "@/components/Week";

export default function Home() {
  const t = useTranslations("Index");
  return (
    <div className="flex h-[100dvh] flex-col">
      <Navbar />
      <Week />
    </div>
  );
}
