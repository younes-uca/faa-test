package  com.ird.faa.ws.rest.provided.vo;

    import java.util.List;
    import java.util.Date;
    import javax.persistence.Temporal;
    import javax.persistence.TemporalType;
    import com.fasterxml.jackson.annotation.JsonFormat;

public class DisciplineScientifiqueVo {

    private String id ;
    private String libelleFr ;
    private String libelleEng ;
    private String code ;
    private String niveau ;
    private Boolean archive ;
    private String dateArchivage ;
    private String dateCreation ;
    private Boolean admin ;
    private Boolean visible ;


            private String niveauMax ;
            private String niveauMin ;
            private String dateArchivageMax ;
            private String dateArchivageMin ;
            private String dateCreationMax ;
            private String dateCreationMin ;

        private DisciplineScientifiqueParentVo disciplineScientifiqueParentVo ;
        private ChercheurVo chercheurVo ;

    private List<DisciplineScientifiqueErcAssociationVo> disciplineScientifiqueErcAssociationsVo ;

    public DisciplineScientifiqueVo(){
    super();
    }

        public String getId(){
        return this.id;
        }

        public void setId(String id){
        this.id = id;
        }
        public String getLibelleFr(){
        return this.libelleFr;
        }

        public void setLibelleFr(String libelleFr){
        this.libelleFr = libelleFr;
        }
        public String getLibelleEng(){
        return this.libelleEng;
        }

        public void setLibelleEng(String libelleEng){
        this.libelleEng = libelleEng;
        }
        public String getCode(){
        return this.code;
        }

        public void setCode(String code){
        this.code = code;
        }
        public String getNiveau(){
        return this.niveau;
        }

        public void setNiveau(String niveau){
        this.niveau = niveau;
        }
        public Boolean getArchive(){
        return this.archive;
        }

        public void setArchive(Boolean archive){
        this.archive = archive;
        }
        public String getDateArchivage(){
        return this.dateArchivage;
        }

        public void setDateArchivage(String dateArchivage){
        this.dateArchivage = dateArchivage;
        }
        public String getDateCreation(){
        return this.dateCreation;
        }

        public void setDateCreation(String dateCreation){
        this.dateCreation = dateCreation;
        }
        public Boolean getAdmin(){
        return this.admin;
        }

        public void setAdmin(Boolean admin){
        this.admin = admin;
        }
        public Boolean getVisible(){
        return this.visible;
        }

        public void setVisible(Boolean visible){
        this.visible = visible;
        }


            public String getNiveauMax(){
            return this.niveauMax;
            }

            public String getNiveauMin(){
            return this.niveauMin;
            }

            public void setNiveauMax(String niveauMax){
            this.niveauMax = niveauMax;
            }

            public void setNiveauMin(String niveauMin){
            this.niveauMin = niveauMin;
            }

            public String getDateArchivageMax(){
            return this.dateArchivageMax;
            }

            public String getDateArchivageMin(){
            return this.dateArchivageMin;
            }

            public void setDateArchivageMax(String dateArchivageMax){
            this.dateArchivageMax = dateArchivageMax;
            }

            public void setDateArchivageMin(String dateArchivageMin){
            this.dateArchivageMin = dateArchivageMin;
            }

            public String getDateCreationMax(){
            return this.dateCreationMax;
            }

            public String getDateCreationMin(){
            return this.dateCreationMin;
            }

            public void setDateCreationMax(String dateCreationMax){
            this.dateCreationMax = dateCreationMax;
            }

            public void setDateCreationMin(String dateCreationMin){
            this.dateCreationMin = dateCreationMin;
            }


        public DisciplineScientifiqueParentVo getDisciplineScientifiqueParentVo(){
        return this.disciplineScientifiqueParentVo;
        }

        public void setDisciplineScientifiqueParentVo(DisciplineScientifiqueParentVo disciplineScientifiqueParentVo){
        this.disciplineScientifiqueParentVo = disciplineScientifiqueParentVo;
        }
        public ChercheurVo getChercheurVo(){
        return this.chercheurVo;
        }

        public void setChercheurVo(ChercheurVo chercheurVo){
        this.chercheurVo = chercheurVo;
        }


        public List<DisciplineScientifiqueErcAssociationVo> getDisciplineScientifiqueErcAssociationsVo(){
        return this.disciplineScientifiqueErcAssociationsVo;
        }

        public void setDisciplineScientifiqueErcAssociationsVo(List<DisciplineScientifiqueErcAssociationVo> disciplineScientifiqueErcAssociationsVo){
            this.disciplineScientifiqueErcAssociationsVo = disciplineScientifiqueErcAssociationsVo;
            }

            }
