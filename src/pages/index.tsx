import Container from "@/components/Container";
import { useEffect, useRef, Suspense, useState } from "react";
import styles from "@/styles/Home.module.css";
import { Button } from "@/components/ui/button";
import {
  Code2,
  DatabaseIcon,
  KeyIcon,
  PenToolIcon
} from "lucide-react";
import { MobileIcon, TriangleDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { cn, scrollTo } from "@/lib/utils";
import {
  type CarouselApi,
} from "@/components/ui/carousel";
import VanillaTilt from "vanilla-tilt";
import { motion } from "framer-motion";
import Image from 'next/image';


const aboutStats = [
  { label: "Anos de experiência", value: "1+" },
  { label: "Tecnologias utilizadas", value: "5+" },
  { label: "Projetos desenvolvidos", value: "10+" },
];

const skills = [
  {
    service: "Desenvolvimento Full Stack",
    description:
      "Do front ao back, com foco em performance e escalabilidade.",
    icon: Code2,
  },
  {
    service: "Aplicações Mobile",
    description:
      "Apps híbridos e nativos com foco em usabilidade e fluidez.",
    icon: MobileIcon,
  },
  {
    service: "Integrações e APIs",
    description:
      "Criação e manutenção de APIs, integrando plataformas e sistemas para melhorar a eficiência dos processos internos.",
    icon: KeyIcon,
  },
  {
    service: "Pipelines de Dados",
    description:
      "Criação de fluxos automatizados de dados com Azure Data Factory, garantindo integração eficiente entre fontes diversas.",
    icon: DatabaseIcon,
  },
  {
    service: "Criação de Protótipos",
    description:
      "Elaboração de protótipos funcionais no Figma, focando em usabilidade e experiência do usuário desde as primeiras etapas do projeto.",
    icon: PenToolIcon, // ou outro ícone de design, como PenToolIcon
  },
];

export default function Home() {
  const refScrollContainer = useRef(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  // handle scroll
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    async function getLocomotive() {
      const Locomotive = (await import("locomotive-scroll")).default;
      new Locomotive({
        el: refScrollContainer.current ?? new HTMLElement(),
        smooth: true,
      });
    }

    function handleScroll() {
      let current = "";
      setIsScrolled(window.scrollY > 0);

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 250) {
          current = section.getAttribute("id") ?? "";
        }
      });

      navLinks.forEach((li) => {
        li.classList.remove("nav-active");

        if (li.getAttribute("href") === `#${current}`) {
          li.classList.add("nav-active");
          console.log(li.getAttribute("href"));
        }
      });
    }

    void getLocomotive();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!carouselApi) return;

    setCount(carouselApi.scrollSnapList().length);
    setCurrent(carouselApi.selectedScrollSnap() + 1);

    carouselApi.on("select", () => {
      setCurrent(carouselApi.selectedScrollSnap() + 1);
    });
  }, [carouselApi]);

  // card hover effect
  useEffect(() => {
    const tilt: HTMLElement[] = Array.from(document.querySelectorAll("#tilt"));
    VanillaTilt.init(tilt, {
      speed: 300,
      glare: true,
      "max-glare": 0.1,
      gyroscope: true,
      perspective: 900,
      scale: 0.9,
    });
  }, []);

  return (
    <Container>
      <div ref={refScrollContainer}>
        <Gradient />

        {/* Intro */}
        <section
          id="home"
          data-scroll-section
          className="mt-40 flex w-full flex-col items-center xl:mt-0 xl:min-h-screen xl:flex-row xl:justify-between"
        >
          <div className={styles.intro}>
            <div
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed=".1"
              className="flex flex-row items-center space-x-1.5"
            >
              <span className={styles.pill}>TypeScript</span>
              <span className={styles.pill}>Angular</span>
              <span className={styles.pill}>React</span>
              <span className={styles.pill}>Spring Boot</span>
              <span className={styles.pill}>Firebase</span>
            </div>
            <div>
              <h1
                data-scroll
                data-scroll-enable-touch-speed
                data-scroll-speed=".06"
                data-scroll-direction="horizontal"
              >
                <span className="text-6xl tracking-tighter text-foreground 2xl:text-8xl">
                  Olá, eu sou o {" "}
                </span>
                  <span className="clash-grotesk text-gradient text-6xl 2xl:text-8xl">
                    Gustavo.
                  </span>
              </h1>
              <p
                data-scroll
                data-scroll-enable-touch-speed
                data-scroll-speed=".06"
                className="mt-1 max-w-lg tracking-tight text-muted-foreground 2xl:text-xl"
              >
                Desenvolvedor de Software com conhecimento no desenvolvimento de soluções web e mobile. Atualmente, trabalho com tecnologias como React.js, React Native, Flutter, Ionic e Angular para criar e dar sustentação a interfaces de usuário em plataformas web e mobile.
              </p>
            </div>
            <span
              data-scroll
              data-scroll-enable-touch-speed
              data-scroll-speed="0.1"
              className="flex flex-row items-center space-x-1.5 pt-6"
            >
              <a href="https://www.linkedin.com/in/gustavo-mendes-rebelo/" target="_blank" rel="noopener noreferrer">
                <Button rel="noopener noreferrer"> 
                  LinkedIn
                </Button>
              </a>
              <Button
                variant="outline"
                onClick={() => scrollTo(document.querySelector("#about"))}
              >
                Saiba mais
              </Button>
            </span>

            <div
              className={cn(
                styles.scroll,
                isScrolled && styles["scroll--hidden"],
              )}
            >
              Role a página para explorar o conteúdo{" "}
              <TriangleDownIcon className="mt-1 animate-bounce" />
            </div>
          </div>
          <div
  data-scroll
  data-scroll-speed="0.1"
  className="mt-14 h-full xl:mt-0 flex justify-center xl:mr-20 xl:w-1/2 xl:max-w-md xl:items-center xl:justify-end "
>
  <Image
    src="/assets/cover.jpeg"
    alt="Gustavo Rebelo"
    width={500}
    height={800}
    className="rounded-lg transition-transform duration-1000 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 hover:backdrop-blur-sm"
  />
</div>

        </section>

        {/* About */}
        <section id="about" data-scroll-section>
          <div
            data-scroll
            data-scroll-speed="0.1"
            data-scroll-position="top"
            className="my-14 flex max-w-6xl flex-col justify-start space-y-10"
          >
            <h2 className="py-16  pb-2 text-3xl font-light leading-normal tracking-tighter text-foreground xl:text-[40px]">
            Desenvolvedor de Software com foco em aplicações web e mobile, atuando no desenvolvimento de interfaces modernas e responsivas utilizando tecnologias como Angular, React, Flutter e Ionic. Experiência também na integração de APIs e na entrega de soluções escaláveis, performáticas e alinhadas aos objetivos do negócio.            </h2>
            <div className="grid grid-cols-2 gap-8 xl:grid-cols-3">
              {aboutStats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center text-center xl:items-start xl:text-start"
                >
                  <span className="clash-grotesk text-gradient text-4xl font-semibold tracking-tight xl:text-6xl">
                    {stat.value}
                  </span>
                  <span className="tracking-tight text-muted-foreground xl:text-lg">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Skills */}
        <section id="skills" data-scroll-section>
          <div
            data-scroll
            data-scroll-speed="0.1"
            data-scroll-position="top"
            className="my-24 flex flex-col justify-start space-y-10"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                staggerChildren: 0.5,
              }}
              viewport={{ once: true }}
              className="grid items-center gap-1.5 md:grid-cols-2 xl:grid-cols-3"
            >
              <div className="flex flex-col py-6 xl:p-6">
                <h2 className="text-4xl font-medium tracking-tight">
                  
                  <br />
                  <span className="text-gradient clash-grotesk tracking-normal">
                    Minhas Habilidades
                  </span>
                </h2>
                <p className="mt-2 tracking-tighter text-secondary-foreground">
                  Aqui estão algumas das habilidades que coloco em prática:
                </p>
              </div>
              {skills.map((service) => (
                <div
                  key={service.service}
                  className="flex flex-col items-start rounded-md bg-white/5 p-14 shadow-md backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-md"
                >
                  <service.icon className="my-6 text-primary" size={20} />
                  <span className="text-lg tracking-tight text-foreground">
                    {service.service}
                  </span>
                  <span className="mt-2 tracking-tighter text-muted-foreground">
                    {service.description}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" data-scroll-section>
          <div
            data-scroll
            data-scroll-speed="0.1"
            data-scroll-position="top"
            className="my-24 flex max-w-6xl flex-col justify-start space-y-10"
          >
            <h2 className="py-16  pb-2 text-3xl font-light leading-normal tracking-tighter text-foreground xl:text-[40px]">
              Confira alguns dos meus projetos mais recentes:
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
              {/* Example project cards */}
              <div className="rounded-lg bg-white/5 p-6 shadow-md backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-md">
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <Image
                    src="/assets/Screenshot1.PNG"
                    alt="Screenshot 1"
                    width={300}
                    height={200}
                    className="rounded-md"
                  />
                  <Image
                    src="/assets/Screenshot2.PNG"
                    alt="Screenshot 2"
                    width={300}
                    height={200}
                    className="rounded-md"
                  />
                  <Image
                    src="/assets/Screenshot3.PNG"
                    alt="Screenshot 3"
                    width={300}
                    height={200}
                    className="rounded-md"
                  />
                </div>
                <h3 className="text-xl font-semibold">Savya</h3>
                <p className="mt-2 text-muted-foreground">
                  Aplicativo focado em bem-estar feminino, com rotina personalizada, agenda interativa e estatísticas motivacionais. Desenvolvido com React Native (Expo) e Firebase.
                </p>
                <Link href="https://github.com/gustavo-rebelo/Savya" passHref target="_blank">
                  <Button className="mt-4">Ver no GitHub</Button>
                </Link>
              </div>
              <div className="flex flex-col h-full rounded-lg bg-white/5 p-6 shadow-md backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-md">
                <div className="grid grid-cols-1 gap-4 mb-4">
                  <Image
                    src="/assets/TelaInicial.png"
                    alt="Screenshot 1"
                    width={300}
                    height={200}
                    className="rounded-md"
                  />
                </div>
                <h3 className="text-xl font-semibold">Saúde em Foco</h3>
                <p className="mt-2 text-muted-foreground">
                  Site desenvolvido para auxiliar as pessoas a acompanharem como está seu Índice de Massa Corporal (IMC), sua Taxa Metabólica Basal (TMB) e a sua saúde em geral.
                </p>
                
                <div className="mt-auto pt-4">
                  <Link href="https://github.com/gustavo-rebelo/saude-em-foco" passHref target="_blank">
                    <Button>Ver no GitHub</Button>
                  </Link>
                </div>
              </div>
              {/* Add more project cards as needed */}
            </div>
          </div>
          <h2 className="clash-grotesk text-gradient text-align font-fine text-2xl font-fine tracking-tight xl:text-4xl mb-8">
              Confira todos os meus projetos:
            </h2>

            <div className={styles.intro}>
              <div
                data-scroll
                data-scroll-direction="horizontal"
                data-scroll-speed="-0.001"
                className="flex flex-col items-center space-y-4"
              >
                <a
                  href="https://github.com/gustavo-rebelo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/assets/github.png"
                    alt="GitHub Logo"
                    width={0}
                    height={0}
                    className="w-full h-auto rounded-lg transition-transform duration-1000 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 hover:backdrop-blur-sm"
                    sizes="100vw"
                  />
                </a>

              </div>
            </div>
          </section>

        {/* Contact */}
        <section id="contact" data-scroll-section className="my-64">
          <div
            data-scroll
            data-scroll-speed="0.1"
            data-scroll-position="top"
            className="flex flex-col items-center justify-center rounded-lg bg-gradient-to-br from-primary/[6.5%] to-white/5 px-8 py-16 text-center xl:py-24"
          >
            <h2 className="text-4xl font-medium tracking-tighter xl:text-6xl">
              Entre em{" "} 
              <span className="text-gradient clash-grotesk">contato!</span>
            </h2>
            <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
              Clique abaixo e entre em contato comigo, vamos conversar!
            </p>
            <Link href="mailto:gustavo.rebelo155@gmail.com" passHref>
              <Button className="mt-6">Enviar e-mail</Button>
            </Link>
          </div>
        </section>
      </div>
    </Container>
  );
}

function Gradient() {
  return (
    <>
      {/* Upper gradient */}
      <div className="absolute -top-40 right-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".1"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7980fe" />
              <stop offset={1} stopColor="#f0fff7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Lower gradient */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <svg
          className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
            fillOpacity=".1"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9A70FF" />
              <stop offset={1} stopColor="#838aff" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
}
