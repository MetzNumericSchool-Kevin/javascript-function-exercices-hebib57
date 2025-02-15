const nom_sorcier = "Archibald 🧙‍♂️";
const manuel_de_fabrication = {
  potion_soin: {
    ingredients: ["eau_de_source", "ecaille_de_dragon", "poudre_de_diamant"],
    temps_de_fabrication: 3, // exprimé en secondes
  },
};
const inventaire = [
  {
    id: "potion_soin", // identifiant unique de la potion
    prix: 10,
    stock: 0,
  },
  {
    id: "potion_mana",
    prix: 20,
    stock: 0,
  },
];

//Salutation Aventurier

function salutations(nom_sorcier) {
  console.log(
    `​Salutations Aventurier ! Je me nomme ${nom_sorcier} pour vous servir.`
  );
}
salutations(nom_sorcier);

//Quel est le tarif d'une potion ?

function tarif_potion(id, inventaire, quantite = 1) {
  for (let i = 0; i < inventaire.length; i++) {
    const p = inventaire[i];
    console.log(p);
    if (p.id === id) {
      const prix_total = p.prix * quantite;
      return prix_total;
    }
  }
}

const prix_total = tarif_potion("potion_mana", inventaire, 3);

console.log(`Le prix total est ${prix_total}`);

//Fabrication de potion

function fabrication_potion(id, prix = 10, stock = 1) {
  const nouvellePotion = { id, prix, stock };
  inventaire.push(nouvellePotion);
  console.log(`Nouvelle potion créée: ${id}, ${prix}, ${stock}`);
  return nouvellePotion;
}

console.log(fabrication_potion("potion_sommeil"));

//Ajout de nouvelles potions dans l'inventaire

function ajout_potion(inventaire, potion) {
  if (potion.id !== inventaire.potion.id) {
    inventaire.prix = potion.prix;
    inventaire.stock += potion.stock;
  } else {
    inventaire.push(potion);
    console.log();
  }
  inventaire.sort((a, b) => b.prix - a.prix);
}
console.log(ajout_potion);

//Cherche moi les potions qui...

function potion_stock(inventaire) {
  return inventaire.filter((potion) => potion.stock > 0);
}

function potion_stock_0(inventaire) {
  return inventaire.filter((potion) => potion.stock === 0);
}

console.log("Inventaire  : ", inventaire);
console.log("Potions en stock (stock > 0) : ", potion_stock(inventaire));
console.log("Potions avec stock à 0 : ", potion_stock_0(inventaire));
