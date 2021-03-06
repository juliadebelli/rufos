/**
 * @providesModule ui-city-description-store
 */

const descriptions = [
  {
    string: "MAKEATHONFABCITY_DEMO",
    name: "Rufos - Makeathon Fab City",
    description: "A cidade não é apenas um espaço físico. Ela é um espaço de experiências de inúmeras pessoas que lá vivem. Entretanto, cada pessoa, com sua vivência única, ressignifica  a cidade.\nA arquiteta e o arquiteto não veem a cidade da mesma forma que a historiadora e o historiador, que por suas vezes não veem a cidade da mesma forma que a engenheira e o engenheiro. As pessoas que vivenciam a cidade hoje talvez experienciem um conjunto característico de vivências muito diferente daqueles que as pessoas que vivenciaram a cidade há 50 anos.\n\nO Rufos é uma oportunidade de criar janelas auditivas para um mundo de vivências distintas. Uma ferramenta para fazer com que lugares e objetos urbanos possam ser vivenciados através de experiências auditivas tornadas físicas. E, primariamente, um convite a redescobrir e ressignificar objetos supostamente familiares através da visão e do tato.\n O aplicativo móvel permite que o projeto seja levado para qualquer cidade, por qualquer um que se interesse, mas também provê acessibilidade para que todos possam encontrar e compartilhar novos significados na cidade, independente do quão única seja sua vivência.\n\nO Rufos convida você a ressignificar sua cidade para o mundo.\n"
  }
]

export default class DescriptionKVStore {
  getDescriptionForKey(key) {
    for(let kv of descriptions) {
      if(kv.string == key) {
        return {found: true, name: kv.name, value: kv.description};
      }
    }

    return {found: false, value: null};
  }
}
