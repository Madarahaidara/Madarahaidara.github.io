<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script>
    document.addEventListener("DOMContentLoaded", () => {
        // Sélecteurs de chaque section
        const sections = document.querySelectorAll("section");

        // Animation à l'apparition
        gsap.utils.toArray(sections).forEach((section) => {
            gsap.from(section, {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%", // Lancement de l'animation quand la section entre dans la vue
                    toggleActions: "play none none none",
                },
            });
        });

        // Animation pour les éléments spécifiques dans les sections
        gsap.utils.toArray(".hobby-item, .experience-item").forEach((item, index) => {
            gsap.from(item, {
                opacity: 0,
                x: index % 2 === 0 ? -100 : 100, // Alternance de directions
                duration: 0.8,
                delay: index * 0.2,
                scrollTrigger: {
                    trigger: item,
                    start: "top 90%",
                    toggleActions: "play none none none",
                },
            });
        });

        // Animation du Header (parallaxe sur l'image de fond)
        gsap.to("header", {
            backgroundPosition: "50% 150%",
            scrollTrigger: {
                trigger: "header",
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
        });

        // Animation des titres (scaling effect)
        gsap.from("h2", {
            scale: 0.8,
            opacity: 0,
            duration: 1,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: "h2",
                start: "top 90%",
                toggleActions: "play none none none",
            },
        });
    });
</script>
