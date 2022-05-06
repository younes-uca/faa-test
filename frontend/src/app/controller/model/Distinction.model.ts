import {EtatEtapeCampagneVo} from './EtatEtapeCampagne.model';
import {CampagneVo} from './Campagne.model';
import {DistinctionDisciplineScientifiqueVo} from './DistinctionDisciplineScientifique.model';
import {ChercheurVo} from './Chercheur.model';



export class DistinctionVo {

    public id: number;

    public dateObtention: Date;
    public intitule: string;
                public dateObtentionMax: string ;
                public dateObtentionMin: string ;
      public chercheurVo: ChercheurVo ;
      public campagneVo: CampagneVo ;
      public etatEtapeCampagneVo: EtatEtapeCampagneVo ;
      public distinctionDisciplineScientifiquesVo: Array<DistinctionDisciplineScientifiqueVo>;

}
