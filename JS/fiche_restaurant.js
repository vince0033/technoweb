// Fiche Restaurant - Simulation des données depuis le fichier JS
window.onload = function () {
  alert("JS chargé avec succès !");
};

document.addEventListener("DOMContentLoaded", function () {
    // Récupérer l'ID du restaurant depuis l'URL
    const urlParams = new URLSearchParams(window.location.search);
    const restaurantId = parseInt(urlParams.get("id"));

    // Simulation des données des restaurants
    const restaurants = [
        {
            id: 1,
            name: "Le Bistroquette",
            address: "123 Rue du Faubourg Saint-Antoine",
            phone: "+33 1 42 97 54 40",
            hours: "Lundi-Samedi: 12h00-14h30, 19h00-22h30",
            rating: 4.5,
            website: "http://www.lebistroquet-paris.fr/",
            image: "IMG/bistroquet.jpg",
            menu: ["Salade de chèvre chaud", "Entrecôte grillée", "Tarte au citron"],
            comments: ["👍 Super ambiance, service rapide !", "👎 Service un peu lent le soir...", "😍 La cuisine est excellente !"]
        },
        {
            id: 2,
            name: "Chez Jean",
            address: "5 Rue du Cherche-Midi",
            phone: "+33 1 45 48 52 40",
            hours: "Lundi-Samedi: 12h00-14h30, 19h00-22h30",
            rating: 4.2,
            website: "http://www.chezjeanparis.fr/",
            image: "IMG/jean.png",
            menu: ["Soupe à l'oignon", "Bœuf bourguignon", "Crème brûlée"],
            comments: ["Très bonne cuisine", "Service agréable", "Un peu cher mais ça vaut le coup"]
        },
        {
            id: 3,
            name: "La Tour d'Argent",
            address: "15 Quai de la Tournelle",
            phone: "+33 1 43 54 23 31",
            hours: "Lundi-Samedi: 12h00-14h30, 19h00-22h30",
            rating: 4.8,
            website: "http://www.tourdargent.com/",
            image: "../IMG/argent.jpg",
            menu: ["Foie gras", "Canard à l'orange", "Soufflé au chocolat"],
            comments: ["Vue magnifique sur la Seine", "Service impeccable", "Cuisine raffinée"]
        },
        {
            id: 4,
            name: "Chez Maurice",
            address: "56 Rue de la Roquette",
            phone: "+33 1 47 00 67 65",
            hours: "Mardi-Samedi: 12h00-14h00, 19h00-22h00",
            rating: 4.6,
            website: "https://www.chezmaurice.fr/",
            image: "../IMG/maurice.jpg",
            menu: ["Terrine de campagne", "Coq au vin", "Île flottante"],
            comments: ["Ambiance conviviale", "Plats traditionnels", "Bon rapport qualité-prix"]
        },
        {
            id: 5,
            name: "Le Comptoir du Relais",
            address: "9 Carrefour de l’Odéon",
            phone: "+33 1 44 27 07 97",
            hours: "Lundi-Samedi: 12h00-14h30, 19h00-22h30",
            rating: 4.8,
            website: "http://www.hotel-paris-relais-saint-germain.com/",
            image: "../IMG/relai.webp",
            menu: ["Salade niçoise", "Entrecôte frites", "Tarte Tatin"],
            comments: ["Service rapide", "Cuisine traditionnelle", "Bon rapport qualité-prix"]
        },
        {
            id: 6,
            name: "Le Bouillon",
            address: "47 Rue de Rochechouart",
            phone: "+33 1 48 78 55 60",
            hours: "Lun-Dim 12h00-14h30 / 19h00-23h00",
            rating: 4.4,
            website: "http://www.lebouillon.com",
            image: "../IMG/bouillon.png",
            menu: ["Escargots", "Bœuf bourguignon", "Mousse au chocolat"],
            comments: ["Prix abordables", "Ambiance authentique", "Portions généreuses"]
        },
        {
            id: 7,
            name: "Le Pain Quotidien",
            address: "18 Rue des Archives",
            phone: "+33 1 44 54 03 77",
            hours: "Lun-Sam 7h00-20h00 / Dim 8h00-20h00",
            rating: 3.8,
            website: "http://www.lepainquotidien.com",
            image: "../IMG/pain.png",
            menu: ["Tartines", "Salades", "Pâtisseries"],
            comments: ["Ambiance cosy", "Bon brunch", "Service un peu lent"]
        },
        {
            id: 8,
            name: "L'Atelier des Artistes",
            address: "4 Rue Rampon",
            phone: "+33 1 42 78 91 44",
            hours: "Lun-Sam 12h00-14h30 / 19h00-22h30",
            rating: 4.1,
            website: "http://www.latelierdesartistes.com",
            image: "../IMG/artiste.jpg",
            menu: ["Tapas", "Plats créatifs", "Desserts originaux"],
            comments: ["Décor artistique", "Ambiance unique", "Cuisine inventive"]
        },
        {
            id: 9,
            name: "Le Petit Prince",
            address: "12 Rue de Lanneau",
            phone: "+33 1 42 71 53 53",
            hours: "Lun-Dim 12h00-14h30 / 19h00-22h30",
            rating: 4.2,
            website: "http://www.lepetitprince.com",
            image: "../IMG/prince.jpg",
            menu: ["Foie gras", "Magret de canard", "Crème brûlée"],
            comments: ["Cadre romantique", "Cuisine délicieuse", "Service impeccable"]
        },
        {
            id: 10,
            name: "La Cantine",
            address: "151 Rue Saint-Honoré",
            phone: "+33 1 45 08 40 44",
            hours: "Lundi-Vendredi: 8h00-22h30",
            rating: 3.9,
            website: "https://www.lacantineparis.com/",
            image: "../IMG/cantine.webp",
            menu: ["Plats du jour", "Salades", "Pâtisseries"],
            comments: ["Ambiance décontractée", "Prix raisonnables", "Service rapide"]
        }
    ];

    // Trouver le restaurant correspondant à l'ID
    const restaurant = restaurants.find(r => r.id === restaurantId);

    if (restaurant) {
        // Mise à jour des informations du restaurant
        document.getElementById("restaurant-name").textContent = restaurant.name;
        document.getElementById("restaurant-image").src = restaurant.image;
        document.getElementById("restaurant-address").textContent = restaurant.address;
        document.getElementById("restaurant-phone").textContent = restaurant.phone;
        document.getElementById("restaurant-hours").textContent = restaurant.hours;
        document.getElementById("restaurant-rating").textContent = `⭐ Note : ${restaurant.rating} / 5`;
        document.getElementById("restaurant-website").href = restaurant.website;
        
        // Affichage du menu
        const menuSection = document.getElementById("restaurant-menu");
        restaurant.menu.forEach(item => {
            const listItem = document.createElement("li");
            listItem.textContent = item;
            menuSection.appendChild(listItem);
        });
        
        // Affichage des commentaires
        const commentSection = document.getElementById("restaurant-comments");
        restaurant.comments.forEach(comment => {
            const commentItem = document.createElement("li");
            commentItem.textContent = comment;
            commentSection.appendChild(commentItem);
        });
    } else {
        alert("Restaurant non trouvé.");
    }
});
