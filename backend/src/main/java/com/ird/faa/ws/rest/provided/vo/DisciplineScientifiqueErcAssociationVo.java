package  com.ird.faa.ws.rest.provided.vo;


public class DisciplineScientifiqueErcAssociationVo {

    private String id ;



        private DisciplineScientifiqueErcVo disciplineScientifiqueErcVo ;
        private DisciplineScientifiqueVo disciplineScientifiqueVo ;
        private SemanticRelationshipVo semanticRelationshipVo ;


    public DisciplineScientifiqueErcAssociationVo(){
    super();
    }

        public String getId(){
        return this.id;
        }

        public void setId(String id){
        this.id = id;
        }



        public DisciplineScientifiqueErcVo getDisciplineScientifiqueErcVo(){
        return this.disciplineScientifiqueErcVo;
        }

        public void setDisciplineScientifiqueErcVo(DisciplineScientifiqueErcVo disciplineScientifiqueErcVo){
        this.disciplineScientifiqueErcVo = disciplineScientifiqueErcVo;
        }
        public DisciplineScientifiqueVo getDisciplineScientifiqueVo(){
        return this.disciplineScientifiqueVo;
        }

        public void setDisciplineScientifiqueVo(DisciplineScientifiqueVo disciplineScientifiqueVo){
        this.disciplineScientifiqueVo = disciplineScientifiqueVo;
        }
        public SemanticRelationshipVo getSemanticRelationshipVo(){
        return this.semanticRelationshipVo;
        }

        public void setSemanticRelationshipVo(SemanticRelationshipVo semanticRelationshipVo){
        this.semanticRelationshipVo = semanticRelationshipVo;
        }


            }
