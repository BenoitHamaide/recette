
function ListeEtape () {
  const Instructions= [
    'Tamiser la farine',
    'Rajouter le sucre et le sel',
    'Rajouter les oeufs tout en mélangeant',
    'Rajouter le beurre fondu tout en mélangeant',
    'Rajouter le lait petit à petit tout en mélangeant',
    'Rajouter le rhum tout en mélangeant. À ce stade si vous fatiguez, n\'hésitez pas à vous en servir un petit verre avant d\'attaquer la suite.',
    'Laisser reposer une heure',
    'Faire cuire à la poêle ou à la machine à crêpes.',
    'Dégustez !',
  ];
  return (
    <ul className="ListeEtapes">
{Instructions.map((instruction) => (
  <li>{instruction}</li>
))}
    </ul>
  );
}

export default ListeEtape;
