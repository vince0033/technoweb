// Script global pour le site de restaurants

document.addEventListener("DOMContentLoaded", function () {
    // Fonction pour filtrer les restaurants par nom
    const searchBar = document.getElementById("filtreNom");
    const restaurantArticles = document.querySelectorAll("#listeRestaurants article");

    searchBar.addEventListener("input", function () {
        const searchTerm = searchBar.value.toLowerCase();

        restaurantArticles.forEach(article => {
            const restaurantName = article.querySelector("h3").textContent.toLowerCase();
            if (restaurantName.includes(searchTerm)) {
                article.style.display = "block";
            } else {
                article.style.display = "none";
            }
        });
    });

    // Fonction pour trier les restaurants par note
    const sortButton = document.querySelector("button[onclick='trierParNote()']");
    sortButton.addEventListener("click", function () {
        const sortedArticles = Array.from(restaurantArticles).sort((a, b) => {
            const ratingA = parseFloat(a.querySelector("p").textContent.match(/\d\.\d/)[0]);
            const ratingB = parseFloat(b.querySelector("p").textContent.match(/\d\.\d/)[0]);
            return ratingB - ratingA;
        });

        const listContainer = document.getElementById("listeRestaurants");
        listContainer.innerHTML = "";  // Vider la liste existante
        sortedArticles.forEach(article => listContainer.appendChild(article));
    });
});

/* script de tri par note*/
// Fonction pour trier les restaurants par note
document.getElementById("trierParNote").addEventListener("click", function() {
    const listeRestaurants = document.getElementById("listeRestaurants");
    const restaurants = Array.from(listeRestaurants.getElementsByTagName("article"));
    
    // Ajoute la classe pour l'animation de sortie
    restaurants.forEach(restaurant => {
        restaurant.classList.add("fade-out");
    });

    // Attends un peu avant de réorganiser les éléments
    setTimeout(() => {
        // Tri des restaurants par note (décroissant)
        restaurants.sort((a, b) => {
            const noteA = parseFloat(a.getAttribute("data-note"));
            const noteB = parseFloat(b.getAttribute("data-note"));
            return noteB - noteA;
        });
        
        // Réorganise les éléments dans le DOM
        listeRestaurants.innerHTML = "";
        restaurants.forEach(restaurant => {
            restaurant.classList.remove("fade-out");
            restaurant.classList.add("fade-in");
            listeRestaurants.appendChild(restaurant);
        });
    }, 300); // Durée de l'animation en ms
});

/*script de filtre par nom*/
// Fonction de filtrage par nom
// Fonction de filtrage par nom avec surbrillance
document.getElementById("filtreNom").addEventListener("input", function() {
    const filtre = this.value.toLowerCase();
    const restaurants = document.querySelectorAll("#listeRestaurants article");
    
    restaurants.forEach(restaurant => {
        const nomElement = restaurant.querySelector("h3 a");
        const nomTexte = nomElement.textContent.toLowerCase();
        
        // Affiche ou cache l'article en fonction du filtre
        if (nomTexte.includes(filtre)) {
            restaurant.style.display = "block";
            
            // Mise en surbrillance du texte filtré
            const regex = new RegExp(`(${filtre})`, "gi");
            const texteSurligne = nomElement.textContent.replace(regex, "<span class='highlight'>$1</span>");
            nomElement.innerHTML = texteSurligne;
        } else {
            restaurant.style.display = "none";
        }
    });
});

