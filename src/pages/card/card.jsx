import { UserCard } from "../../components/userCard/userCard";

export const Card = () => {

  return (

    <div>

      <UserCard
        nombre="Lisseth"
        edad={21}
        url="https://www.reprodart.com/kunst/vincent_van_gogh/thm_Cafeterrasse-bei-Nacht.jpg"
        activo={true}
      />

    </div>

  );
};