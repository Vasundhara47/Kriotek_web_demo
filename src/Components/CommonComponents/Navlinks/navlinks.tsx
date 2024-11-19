import { NavLinks, LinkItem } from "./style";
import { usePathname } from "next/navigation";
import { NavlinkProps } from "./types";
import { animate } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navlinks({ customColor = "primary", secondary }: NavlinkProps) {
    const pathname = usePathname();
    const [activeLink, setActiveLink] = useState("");

    const navLinks = [
        { name: "Home", slug: "#home" },
        { name: "About us", slug: "#aboutus" },
        { name: "Our services", slug: "#ourservices" },
        { name: "Portfolio", slug: "#portfolio" },
        { name: "Career", slug: "#career" },
        { name: "Contact us", slug: "#contactus" },
    ];

    const scrollToSection = (id: string) => {
        const headerOffset = 80;
        const section = document.querySelector(id) as HTMLElement;
        if (section) {
            const elementPosition = section.offsetTop;
            const offsetPosition = elementPosition - headerOffset;

            animate(
                window.scrollY,
                offsetPosition,
                {
                    duration: 1.2,

                    ease: [0.22, 0.61, 0.36, 1],
                    onUpdate: (latest) => window.scrollTo(0, latest),
                }
            );
            setActiveLink(id); // Set active link when clicked
        }
    };

    useEffect(() => {
        // Set active link based on scroll position
        const handleScroll = () => {
            let currentActive = "";
            navLinks.forEach((item) => {
                const section = document.querySelector(item.slug) as HTMLElement;
                if (section) {
                    const sectionTop = section.offsetTop - 100; // Adjust offset
                    const sectionBottom = sectionTop + section.offsetHeight;
                    if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                        currentActive = item.slug;
                    }
                }
            });
            setActiveLink(currentActive);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [navLinks]);

    return (
        <NavLinks>
            {navLinks.map((item) => {
                const isActive = activeLink === item.slug;

                return (
                    <LinkItem
                        secondary={secondary}
                        customColor={customColor}
                        key={item.slug}
                        href={item.slug}
                        isActive={isActive}
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(item.slug);
                        }}
                    >
                        {item.name}
                    </LinkItem>
                );
            })}
        </NavLinks>
    );
}
