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
  const prix_total = inventaire[0].prix * quantite;
  return prix_total;
}

let prix_total = tarif_potion("potion_soin", inventaire, 3);

console.log(`Le prix total est ${prix_total}`);
