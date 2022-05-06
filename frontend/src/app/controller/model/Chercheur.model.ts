import {IdentifiantAuteurExpertVo} from './IdentifiantAuteurExpert.model';
import {EnjeuxIrdChercheurVo} from './EnjeuxIrdChercheur.model';
import {DisciplineScientifiqueChercheurVo} from './DisciplineScientifiqueChercheur.model';
import {User} from './User.model';



export class ChercheurVo  extends User{


    public consentementRgpd: null | boolean;
    public numeroMatricule: string;
    public emailPrincipale: string;
    public resume: string;
    public natureImplication: string;
    public formationEnManagement: null | boolean;
    public credentialsNonExpired: null | boolean;
    public enabled: null | boolean;
    public accountNonExpired: null | boolean;
    public accountNonLocked: null | boolean;
    public passwordChanged: null | boolean;
    public createdAt: Date;
    public updatedAt: Date;
    public username: string;
    public password: string;
    public prenom: string;
    public nom: string;
    public baseHorizon: string;
    public role: string;
                public createdAtMax: string ;
                public createdAtMin: string ;
                public updatedAtMax: string ;
                public updatedAtMin: string ;
      public disciplineScientifiqueChercheursVo: Array<DisciplineScientifiqueChercheurVo>;
      public enjeuxIrdChercheursVo: Array<EnjeuxIrdChercheurVo>;
      public identifiantAuteurExpertsVo: Array<IdentifiantAuteurExpertVo>;

}
