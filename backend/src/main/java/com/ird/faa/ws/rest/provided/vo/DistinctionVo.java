package  com.ird.faa.ws.rest.provided.vo;

    import java.util.List;
    import java.util.Date;
    import javax.persistence.Temporal;
    import javax.persistence.TemporalType;
    import com.fasterxml.jackson.annotation.JsonFormat;

public class DistinctionVo {

    private String id ;
    private String dateObtention ;
    private String intitule ;


            private String dateObtentionMax ;
            private String dateObtentionMin ;

        private ChercheurVo chercheurVo ;
        private CampagneVo campagneVo ;
        private EtatEtapeCampagneVo etatEtapeCampagneVo ;

    private List<DistinctionDisciplineScientifiqueVo> distinctionDisciplineScientifiquesVo ;

    public DistinctionVo(){
    super();
    }

        public String getId(){
        return this.id;
        }

        public void setId(String id){
        this.id = id;
        }
        public String getDateObtention(){
        return this.dateObtention;
        }

        public void setDateObtention(String dateObtention){
        this.dateObtention = dateObtention;
        }
        public String getIntitule(){
        return this.intitule;
        }

        public void setIntitule(String intitule){
        this.intitule = intitule;
        }


            public String getDateObtentionMax(){
            return this.dateObtentionMax;
            }

            public String getDateObtentionMin(){
            return this.dateObtentionMin;
            }

            public void setDateObtentionMax(String dateObtentionMax){
            this.dateObtentionMax = dateObtentionMax;
            }

            public void setDateObtentionMin(String dateObtentionMin){
            this.dateObtentionMin = dateObtentionMin;
            }


        public ChercheurVo getChercheurVo(){
        return this.chercheurVo;
        }

        public void setChercheurVo(ChercheurVo chercheurVo){
        this.chercheurVo = chercheurVo;
        }
        public CampagneVo getCampagneVo(){
        return this.campagneVo;
        }

        public void setCampagneVo(CampagneVo campagneVo){
        this.campagneVo = campagneVo;
        }
        public EtatEtapeCampagneVo getEtatEtapeCampagneVo(){
        return this.etatEtapeCampagneVo;
        }

        public void setEtatEtapeCampagneVo(EtatEtapeCampagneVo etatEtapeCampagneVo){
        this.etatEtapeCampagneVo = etatEtapeCampagneVo;
        }


        public List<DistinctionDisciplineScientifiqueVo> getDistinctionDisciplineScientifiquesVo(){
        return this.distinctionDisciplineScientifiquesVo;
        }

        public void setDistinctionDisciplineScientifiquesVo(List<DistinctionDisciplineScientifiqueVo> distinctionDisciplineScientifiquesVo){
            this.distinctionDisciplineScientifiquesVo = distinctionDisciplineScientifiquesVo;
            }

            }
