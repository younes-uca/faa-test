package  com.ird.faa.ws.rest.provided.vo;


public class SemanticRelationshipVo {

    private String id ;
    private String libelle ;
    private String code ;
    private String niveauExactitude ;


            private String niveauExactitudeMax ;
            private String niveauExactitudeMin ;



    public SemanticRelationshipVo(){
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
        public String getNiveauExactitude(){
        return this.niveauExactitude;
        }

        public void setNiveauExactitude(String niveauExactitude){
        this.niveauExactitude = niveauExactitude;
        }


            public String getNiveauExactitudeMax(){
            return this.niveauExactitudeMax;
            }

            public String getNiveauExactitudeMin(){
            return this.niveauExactitudeMin;
            }

            public void setNiveauExactitudeMax(String niveauExactitudeMax){
            this.niveauExactitudeMax = niveauExactitudeMax;
            }

            public void setNiveauExactitudeMin(String niveauExactitudeMin){
            this.niveauExactitudeMin = niveauExactitudeMin;
            }




            }
