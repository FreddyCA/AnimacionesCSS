import styled from "styled-components";

const InfoPeterContainStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin: 1.5rem;
`;

const InfoPeterStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  border: 2px solid blue;
  padding: 1rem;
  background-color: aliceblue;
`;

const InfoPeter = () => {
  const peterParkerInfo = [
    {
      subtitle: "Identidad",
      description:
        "Peter Parker es conocido por su alter ego, Spider-Man. Desde una edad temprana, Peter mostró una aptitud extraordinaria para la ciencia y la tecnología. Su vida cambió drásticamente cuando fue mordido por una araña radiactiva, lo que le otorgó habilidades sobrehumanas. Adoptó la identidad de Spider-Man para proteger a los inocentes y combatir el crimen en Nueva York.",
    },
    {
      subtitle: "Edad",
      description:
        "Peter Parker tiene 25 años. A pesar de su juventud, ha acumulado una gran experiencia en la lucha contra el crimen y ha enfrentado numerosos desafíos tanto en su vida personal como en su papel de superhéroe.",
    },
    {
      subtitle: "Dirección",
      description:
        "Peter vive en 20 Ingram Street, en el barrio de Queens, Nueva York. Este vecindario ha sido su hogar durante la mayor parte de su vida, y mantiene un fuerte vínculo con su comunidad local.",
    },
    {
      subtitle: "Ocupación",
      description:
        "Peter Parker trabaja como fotógrafo en el Daily Bugle, uno de los periódicos más prominentes de Nueva York. Su trabajo le permite estar cerca de la acción y obtener información privilegiada sobre los eventos que ocurren en la ciudad. A lo largo de los años, también ha trabajado como profesor de ciencias en la escuela secundaria Midtown.",
    },
    {
      subtitle: "Superpoderes",
      description:
        "Peter posee una variedad de habilidades extraordinarias, incluyendo la capacidad de trepar paredes, fuerza sobrehumana, agilidad superior, y un 'sentido arácnido' que le alerta de peligros inminentes. Además, ha creado sus propios dispositivos, como los lanzadores de telaraña, que le permiten desplazarse rápidamente por la ciudad.",
    },
    {
      subtitle: "Afiliación",
      description:
        "Peter es miembro de los Avengers, un grupo de superhéroes que trabajan juntos para proteger el mundo de amenazas extraordinarias. Su participación en el equipo le ha permitido colaborar con otros héroes y enfrentar enemigos que van más allá de los villanos locales.",
    },
    {
      subtitle: "Contacto",
      description:
        "Para cuestiones relacionadas con su trabajo en el Daily Bugle, Peter puede ser contactado a través de su correo electrónico peter.parker@dailybugle.com. También tiene un número de teléfono profesional, 555-1234. En su papel como profesor, su correo es peter.parker@midtownhigh.edu y su número de contacto en la escuela es 555-5678.",
    },
    {
      subtitle: "Historia de Origen",
      description:
        "Peter Parker fue criado por sus tíos, Ben y May Parker, en Nueva York. La muerte de su tío Ben, que fue asesinado por un ladrón que Peter previamente no había detenido, tuvo un profundo impacto en él. Este trágico evento le enseñó que 'un gran poder conlleva una gran responsabilidad', una lección que guía todas sus acciones como Spider-Man.",
    },
    {
      subtitle: "Relaciones Personales",
      description:
        "A lo largo de los años, Peter ha mantenido relaciones significativas con varias personas, incluyendo su amor de toda la vida, Mary Jane Watson, y su amiga cercana, Gwen Stacy. También tiene una relación de mentor-aprendiz con Tony Stark (Iron Man), quien ha jugado un papel importante en su desarrollo como superhéroe.",
    },
    {
      subtitle: "Logros",
      description:
        "Además de sus hazañas como Spider-Man, Peter Parker ha logrado grandes cosas en su vida personal. Ha obtenido una licenciatura en ciencias, ha sido un destacado miembro de su comunidad, y ha ganado varios premios por su fotografía. Sus contribuciones como superhéroe han salvado innumerables vidas y han inspirado a muchos.",
    },
  ];

  return (
    <InfoPeterContainStyle>
      <h1>Hombre Araña</h1>

      {peterParkerInfo.map((item) => (
        <InfoPeterStyle key={item.subtitle}>
          <h3>{item.subtitle}</h3>
          <p>{item.description}</p>
        </InfoPeterStyle>
      ))}
    </InfoPeterContainStyle>
  );
};

export default InfoPeter;
