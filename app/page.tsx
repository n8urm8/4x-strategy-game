import { GalleryImage } from "@/components/gallery-image";
import { FeatureCard } from "@/components/feature-card";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Globe, Rocket, Star, Users } from "lucide-react";
import Image from "next/image";
import HeroImage from "@/components/assets/hero-image.jpeg";
import Link from "next/link";
import Particles from "@/components/particles";

export default async function Home() {
  return (
    <>
      <main className="flex-grow">
        <section className="relative min-h-screen flex items-center justify-center">
          <Image
            src={HeroImage}
            alt="Space background with galaxies and nebulae"
            fill
            // layout="fill"
            // objectFit="cover"
            quality={100}
            priority
            className="absolute inset-0"
          />
          <div
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
            }}
          >
            <Particles
              particleColors={["#ffffff", "#ffffff"]}
              particleCount={100}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={50}
              moveParticlesOnHover={true}
              alphaParticles={false}
              disableRotation={false}
            />
          </div>
          <div className="absolute inset-0 bg-gray-900/50"></div>
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white">
              Conquer the Galaxy in Astral Ascendency
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-gray-300">
              Explore, Expand, Exploit, and Exterminate in this epic space
              strategy game. Build your empire among the stars!
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant={"outline"}>Coming Soon!</Button>
              <Link
                href="https://discord.gg/YBhxXNhpE7"
                className={buttonVariants({ variant: "default" })}
              >
                Discord
              </Link>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                icon={<Globe className="h-12 w-12 mb-4 text-green-500" />}
                title="Vast Universe"
                description="Explore thousands of star systems"
              />
              <FeatureCard
                icon={<Rocket className="h-12 w-12 mb-4 text-green-500" />}
                title="Advanced Technology"
                description="Research and develop cutting-edge space technologies"
              />
              <FeatureCard
                icon={<Users className="h-12 w-12 mb-4 text-green-500" />}
                title="Diplomacy"
                description="Form alliances or wage wars with enemy empires"
              />
              <FeatureCard
                icon={<Star className="h-12 w-12 mb-4 text-green-500" />}
                title="Epic Battles"
                description="Engage in massive space battles"
              />
            </div>
          </div>
        </section>

        {/* TODO: implement when available */}
        {/* <section id="gallery" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">
              Game Gallery
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <GalleryImage
                src="/placeholder.svg?height=300&width=400"
                alt="Game Screenshot 1"
              />
              <GalleryImage
                src="/placeholder.svg?height=300&width=400"
                alt="Game Screenshot 2"
              />
              <GalleryImage
                src="/placeholder.svg?height=300&width=400"
                alt="Game Screenshot 3"
              />
            </div>
          </div>
        </section> */}

        <section id="signup" className="py-20 bg-gray-800">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-white">
              Join the Astral Ascendency Community
            </h2>
            <p className="mb-8 max-w-2xl mx-auto text-gray-300">
              Learn about updates, beta access, and a special in-game bonus when
              we launch!
            </p>

            <Link
              href="https://discord.gg/YBhxXNhpE7"
              className={buttonVariants({ variant: "default" })}
            >
              Discord
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
