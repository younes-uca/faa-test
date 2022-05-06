package  com.ird.faa.ws.rest.provided.vo;

    import java.util.Date;
    import javax.persistence.Temporal;
    import javax.persistence.TemporalType;
    import com.fasterxml.jackson.annotation.JsonFormat;

public class CampagneVo {

    private String id ;
    private String libelle ;
    private String code ;
    private String annee ;
    private String dateDepart ;
    private String dateFin ;


            private String anneeMax ;
            private String anneeMin ;
            private String dateDepartMax ;
            private String dateDepartMin ;
            private String dateFinMax ;
            private String dateFinMin ;



    public CampagneVo(){
    super();
    }

        public String getId(){
        return this.id;
        }

        public void setId(String id){
        this.id = id;
        }
        public String getLibelle(){
        return this.libelle;
        }

        public void setLibelle(String libelle){
        this.libelle = libelle;
        }
        public String getCode(){
        return this.code;
        }

        public void setCode(String code){
        this.code = code;
        }
        public String getAnnee(){
        return this.annee;
        }

        public void setAnnee(String annee){
        this.annee = annee;
        }
        public String getDateDepart(){
        return this.dateDepart;
        }

        public void setDateDepart(String dateDepart){
        this.dateDepart = dateDepart;
        }
        public String getDateFin(){
        return this.dateFin;
        }

        public void setDateFin(String dateFin){
        this.dateFin = dateFin;
        }


            public String getAnneeMax(){
            return this.anneeMax;
            }

            public String getAnneeMin(){
            return this.anneeMin;
            }

            public void setAnneeMax(String anneeMax){
            this.anneeMax = anneeMax;
            }

            public void setAnneeMin(String anneeMin){
            this.anneeMin = anneeMin;
            }

            public String getDateDepartMax(){
            return this.dateDepartMax;
            }

            public String getDateDepartMin(){
            return this.dateDepartMin;
            }

            public void setDateDepartMax(String dateDepartMax){
            this.dateDepartMax = dateDepartMax;
            }

            public void setDateDepartMin(String dateDepartMin){
            this.dateDepartMin = dateDepartMin;
            }

            public String getDateFinMax(){
            return this.dateFinMax;
            }

            public String getDateFinMin(){
            return this.dateFinMin;
            }

            public void setDateFinMax(String dateFinMax){
            this.dateFinMax = dateFinMax;
            }

            public void setDateFinMin(String dateFinMin){
            this.dateFinMin = dateFinMin;
            }




            }
