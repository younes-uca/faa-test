package  com.ird.faa.ws.rest.provided.vo;


public class DistinctionDisciplineScientifiqueVo {

    private String id ;



        private DistinctionVo distinctionVo ;
        private DisciplineScientifiqueVo disciplineScientifiqueVo ;


    public DistinctionDisciplineScientifiqueVo(){
    super();
    }

        public String getId(){
        return this.id;
        }

        public void setId(String id){
        this.id = id;
        }



        public DistinctionVo getDistinctionVo(){
        return this.distinctionVo;
        }

        public void setDistinctionVo(DistinctionVo distinctionVo){
        this.distinctionVo = distinctionVo;
        }
        public DisciplineScientifiqueVo getDisciplineScientifiqueVo(){
        return this.disciplineScientifiqueVo;
        }

        public void setDisciplineScientifiqueVo(DisciplineScientifiqueVo disciplineScientifiqueVo){
        this.disciplineScientifiqueVo = disciplineScientifiqueVo;
        }


            }
