package com.ird.faa.bean;

import java.util.Objects;



import javax.persistence.*;



@Entity
@Table(name = "discipline_scientifique_erc_association")
public class DisciplineScientifiqueErcAssociation   {

@Id
    @SequenceGenerator(name="discipline_scientifique_erc_association_seq",sequenceName="discipline_scientifique_erc_association_seq",
    allocationSize=1, initialValue = 10000)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="discipline_scientifique_erc_association_seq")
private Long id;


    @ManyToOne
    private DisciplineScientifiqueErc disciplineScientifiqueErc ;
    @ManyToOne
    private DisciplineScientifique disciplineScientifique ;
    @ManyToOne
    private SemanticRelationship semanticRelationship ;


public DisciplineScientifiqueErcAssociation(){
super();
}


            public Long getId(){
            return this.id;
            }
            public void setId(Long id){
            this.id = id;
            }
            public DisciplineScientifiqueErc getDisciplineScientifiqueErc(){
            return this.disciplineScientifiqueErc;
            }
            public void setDisciplineScientifiqueErc(DisciplineScientifiqueErc disciplineScientifiqueErc){
            this.disciplineScientifiqueErc = disciplineScientifiqueErc;
            }
            public DisciplineScientifique getDisciplineScientifique(){
            return this.disciplineScientifique;
            }
            public void setDisciplineScientifique(DisciplineScientifique disciplineScientifique){
            this.disciplineScientifique = disciplineScientifique;
            }
            public SemanticRelationship getSemanticRelationship(){
            return this.semanticRelationship;
            }
            public void setSemanticRelationship(SemanticRelationship semanticRelationship){
            this.semanticRelationship = semanticRelationship;
            }

        @Override
        public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        DisciplineScientifiqueErcAssociation disciplineScientifiqueErcAssociation = (DisciplineScientifiqueErcAssociation) o;
        return id != null && id.equals(disciplineScientifiqueErcAssociation.id);
        }

        @Override
        public int hashCode() {
        return Objects.hash(id);
        }

}

