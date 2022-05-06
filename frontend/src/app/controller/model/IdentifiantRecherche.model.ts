import {ChercheurVo} from './Chercheur.model';



export class IdentifiantRechercheVo {

    public id: number;

    public libelle: string;
    public code: string;
    public description: string;
    public archive: null | boolean;
    public dateArchivage: Date;
    public dateCreation: Date;
    public admin: null | boolean;
    public visible: null | boolean;
                public dateArchivageMax: string ;
                public dateArchivageMin: string ;
                public dateCreationMax: string ;
                public dateCreationMin: string ;
      public chercheurVo: ChercheurVo ;

}
