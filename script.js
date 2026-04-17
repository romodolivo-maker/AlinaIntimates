document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // FILTRO DE CATEGORÍAS
    // =========================
    const botones = document.querySelectorAll(".categoria-btn");
    const productos = document.querySelectorAll(".producto");

    botones.forEach(boton => {
        boton.addEventListener("click", () => {

            botones.forEach(b => b.classList.remove("active"));
            boton.classList.add("active");

            const categoria = boton.dataset.categoria;

            productos.forEach(p => {
                p.style.display =
                    (categoria === "todos" || p.dataset.categoria === categoria)
                    ? "flex"
                    : "none";
            });
        });
    });

    // =========================
    // ANIMACIÓN SCROLL (PRO)
    // =========================
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // solo una vez 🔥
            }
        });
    }, { threshold: 0.2 });

    productos.forEach(producto => {
        observer.observe(producto);
    });

    // =========================
    // WHATSAPP (VENTAS)
    // =========================
    const botonesWpp = document.querySelectorAll(".btn-wpp");

    botonesWpp.forEach(boton => {
        boton.addEventListener("click", (e) => {
            e.preventDefault();

            const producto = boton.closest(".producto");
            const nombre = producto.querySelector("h3").innerText;

            const numero = "5493521440999";

            const mensaje = `Hola! Me interesa "${nombre}". ¿Tenés stock?`;

            const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

            window.open(url, "_blank");
        });
    });

    // =========================
    // HEADER SCROLL
    // =========================
    const header = document.querySelector(".hero");

    window.addEventListener("scroll", () => {
        header.classList.toggle("scrolled", window.scrollY > 50);
    });

});