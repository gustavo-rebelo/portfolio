import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { MailIcon } from "lucide-react";

export default function Footer() {
  // get the current time in UTC+1 time zone
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      date.setHours(date.getHours());
      setTime(
        date.toLocaleTimeString("pt-BR", {
          timeZone: "America/Sao_Paulo",
          hour12: false,
          hour: "numeric",
          minute: "numeric",
        }),
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full bg-gradient-to-t from-primary/[1%] to-transparent">
      <div className="container mx-auto flex flex-row items-center justify-between py-6">
        <span className="flex flex-row items-center space-x-4">
          <p className="text-xs text-muted-foreground">
            Desenvolvido por{" "}
            <Link
              href="https://github.com/gustavo-rebelo"
              target="_blank"
              passHref
              className="text-foreground transition hover:text-primary"
            >
              Gustavo Rebelo
            </Link>
          </p>
          <hr className="hidden h-6 border-l border-muted md:flex" />
          <span className="flex hidden flex-row items-center space-x-2 md:flex">
            <p className="text-xs text-muted-foreground">Horário local:</p>
            <p className="text-sm font-semibold">{time} UTC+3</p>
          </span>
        </span>
        <Link
          href="mailto:gustavoo.rebelo155@gmail.com"
          passHref
          className="text-xs text-muted-foreground hover:text-foreground"
        >
          <Button variant={"outline"}>
            <MailIcon className="h-4 w-4 md:mr-2" />
            <span className="hidden md:flex">gustavo.rebelo155@gmail.com</span>
          </Button>
        </Link>
      </div>
      <div className="h-1 bg-[radial-gradient(closest-side,#8486ff,#42357d,#5d83ff,transparent)] opacity-50" />
    </footer>
  );
}
