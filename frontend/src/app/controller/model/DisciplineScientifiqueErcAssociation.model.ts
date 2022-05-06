import {DisciplineScientifiqueVo} from './DisciplineScientifique.model';
import {SemanticRelationshipVo} from './SemanticRelationship.model';
import {DisciplineScientifiqueErcVo} from './DisciplineScientifiqueErc.model';



export class DisciplineScientifiqueErcAssociationVo {

    public id: number;

      public disciplineScientifiqueErcVo: DisciplineScientifiqueErcVo ;
      public disciplineScientifiqueVo: DisciplineScientifiqueVo ;
      public semanticRelationshipVo: SemanticRelationshipVo ;

}
