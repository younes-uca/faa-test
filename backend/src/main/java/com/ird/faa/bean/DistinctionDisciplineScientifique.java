package com.ird.faa.bean;

import java.util.Objects;



import javax.persistence.*;



@Entity
@Table(name = "distinction_discipline_scientifique")
public class DistinctionDisciplineScientifique   {

@Id
    @SequenceGenerator(name="distinction_discipline_scientifique_seq",sequenceName="distinction_discipline_scientifique_seq",
    allocationSize=1, initialValue = 10000)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="distinction_discipline_scientifique_seq")
private Long id;


    @ManyToOne
    private Distinction distinction ;
    @ManyToOne
    private DisciplineScientifique disciplineScientifique ;


public DistinctionDisciplineScientifique(){
super();
}


            public Long getId(){
            return this.id;
            }
            public void setId(Long id){
            this.id = id;
            }
            public Distinction getDistinction(){
            return this.distinction;
            }
            public void setDistinction(Distinction distinction){
            this.distinction = distinction;
            }
            public DisciplineScientifique getDisciplineScientifique(){
            return this.disciplineScientifique;
            }
            public void setDisciplineScientifique(DisciplineScientifique disciplineScientifique){
            this.disciplineScientifique = disciplineScientifique;
            }

        @Override
        public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        DistinctionDisciplineScientifique distinctionDisciplineScientifique = (DistinctionDisciplineScientifique) o;
        return id != null && id.equals(distinctionDisciplineScientifique.id);
        }

        @Override
        public int hashCode() {
        return Objects.hash(id);
        }

}

