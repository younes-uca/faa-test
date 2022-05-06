package  com.ird.faa.ws.rest.provided.vo;


public class KeyWordDisciplineScientifiqueErcVo {

    private String id ;



        private KeyWordVo keyWordVo ;
        private DisciplineScientifiqueVo disciplineScientifiqueVo ;


    public KeyWordDisciplineScientifiqueErcVo(){
    super();
    }

        public String getId(){
        return this.id;
        }

        public void setId(String id){
        this.id = id;
        }



        public KeyWordVo getKeyWordVo(){
        return this.keyWordVo;
        }

        public void setKeyWordVo(KeyWordVo keyWordVo){
        this.keyWordVo = keyWordVo;
        }
        public DisciplineScientifiqueVo getDisciplineScientifiqueVo(){
        return this.disciplineScientifiqueVo;
        }

        public void setDisciplineScientifiqueVo(DisciplineScientifiqueVo disciplineScientifiqueVo){
        this.disciplineScientifiqueVo = disciplineScientifiqueVo;
        }


            }
