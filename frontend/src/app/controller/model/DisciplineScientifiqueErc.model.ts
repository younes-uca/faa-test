import {DisciplineScientifiqueErcParentVo} from './DisciplineScientifiqueErcParent.model';
import {ChercheurVo} from './Chercheur.model';



export class DisciplineScientifiqueErcVo {

    public id: number;

    public libelleFr: string;
    public libelleEng: string;
    public code: string;
     public niveau: number;
    public archive: null | boolean;
    public dateArchivage: Date;
    public dateCreation: Date;
    public admin: null | boolean;
    public visible: null | boolean;
                public niveauMax: string ;
                public niveauMin: string ;
                public dateArchivageMax: string ;
                public dateArchivageMin: string ;
                public dateCreationMax: string ;
                public dateCreationMin: string ;
      public disciplineScientifiqueErcParentVo: DisciplineScientifiqueErcParentVo ;
      public chercheurVo: ChercheurVo ;

}
