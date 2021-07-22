import Advancement from '../../Components/Advancement'

export const Travel = () => (
    <div>
      <Advancement endDate={"09/03/2021"} beginDate={"02/08/2021"} greenFirst={true}key="0"> Départ d'Antonin </Advancement>
      <Advancement endDate={"05/27/2022"} beginDate={"02/08/2021"} greenFirst={false} key="1"> Retour d'Antonin </Advancement>
    </div>
)
