package  com.ird.faa.ws.rest.provided.vo;


public class IdentifiantAuteurExpertVo {

    private String id ;
    private String valeur ;



        private IdentifiantRechercheVo identifiantRechercheVo ;
        private ChercheurVo chercheurVo ;


    public IdentifiantAuteurExpertVo(){
    super();
    }

        public String getId(){
        return this.id;
        }

        public void setId(String id){
        this.id = id;
        }
        public String getValeur(){
        return this.valeur;
        }

        public void setValeur(String valeur){
        this.valeur = valeur;
        }



        public IdentifiantRechercheVo getIdentifiantRechercheVo(){
        return this.identifiantRechercheVo;
        }

        public void setIdentifiantRechercheVo(IdentifiantRechercheVo identifiantRechercheVo){
        this.identifiantRechercheVo = identifiantRechercheVo;
        }
        public ChercheurVo getChercheurVo(){
        return this.chercheurVo;
        }

        public void setChercheurVo(ChercheurVo chercheurVo){
        this.chercheurVo = chercheurVo;
        }


            }
