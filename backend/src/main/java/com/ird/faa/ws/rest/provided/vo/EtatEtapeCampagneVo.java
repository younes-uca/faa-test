package  com.ird.faa.ws.rest.provided.vo;


public class EtatEtapeCampagneVo {

    private String id ;
    private String libelle ;
    private String code ;
    private String ordre ;


            private String ordreMax ;
            private String ordreMin ;



    public EtatEtapeCampagneVo(){
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
        public String getOrdre(){
        return this.ordre;
        }

        public void setOrdre(String ordre){
        this.ordre = ordre;
        }


            public String getOrdreMax(){
            return this.ordreMax;
            }

            public String getOrdreMin(){
            return this.ordreMin;
            }

            public void setOrdreMax(String ordreMax){
            this.ordreMax = ordreMax;
            }

            public void setOrdreMin(String ordreMin){
            this.ordreMin = ordreMin;
            }




            }
