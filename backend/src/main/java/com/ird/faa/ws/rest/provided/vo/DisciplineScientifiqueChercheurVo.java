package  com.ird.faa.ws.rest.provided.vo;


public class DisciplineScientifiqueChercheurVo {

    private String id ;



        private DisciplineScientifiqueVo disciplineScientifiqueVo ;
        private DisciplineScientifiqueErcVo disciplineScientifiqueErcVo ;
        private ChercheurVo chercheurVo ;


    public DisciplineScientifiqueChercheurVo(){
    super();
    }

        public String getId(){
        return this.id;
        }

        public void setId(String id){
        this.id = id;
        }



        public DisciplineScientifiqueVo getDisciplineScientifiqueVo(){
        return this.disciplineScientifiqueVo;
        }

        public void setDisciplineScientifiqueVo(DisciplineScientifiqueVo disciplineScientifiqueVo){
        this.disciplineScientifiqueVo = disciplineScientifiqueVo;
        }
        public DisciplineScientifiqueErcVo getDisciplineScientifiqueErcVo(){
        return this.disciplineScientifiqueErcVo;
        }

        public void setDisciplineScientifiqueErcVo(DisciplineScientifiqueErcVo disciplineScientifiqueErcVo){
        this.disciplineScientifiqueErcVo = disciplineScientifiqueErcVo;
        }
        public ChercheurVo getChercheurVo(){
        return this.chercheurVo;
        }

        public void setChercheurVo(ChercheurVo chercheurVo){
        this.chercheurVo = chercheurVo;
        }


            }
