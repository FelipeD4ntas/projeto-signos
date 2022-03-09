particlesJS('particles-js',

    {
        fpsLimit: 120,
        particles: {
            color: {
                value: "#ffffff",
            },
            links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.1,
                width: 1,
            },
            collisions: {
                enable: false,
            },
            move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 0.12,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 5000,
                },
                value: 80,
            },
            opacity: {
                value: 0.3,
            },
            shape: {
                type: "star",
            },
            size: {
                random: true,
                value: 5,
            },
        },
        interactivity: {
            events: {
                onhover: {
                    enable: true,
                    mode: "grab",
                    parallax: {
                        enable: false,
                        smooth: 300,
                        force: 50,
                    },
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                grab: {
                    links: {
                        opacity: 1,
                    },
                },
                bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 0.4,
                    size: 40,
                },
                repulse: {
                    distance: 300,
                    duration: 4,
                },
                push: {
                    quantity: 1,
                    delay: 0,
                },
            }
        },
        retina_detect: true
    }

);