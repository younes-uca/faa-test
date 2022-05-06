package com.ird.faa.bean;

import java.util.Objects;



import javax.persistence.*;



@Entity
@Table(name = "discipline_scientifique_chercheur")
public class DisciplineScientifiqueChercheur   {

@Id
    @SequenceGenerator(name="discipline_scientifique_chercheur_seq",sequenceName="discipline_scientifique_chercheur_seq",
    allocationSize=1, initialValue = 10000)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="discipline_scientifique_chercheur_seq")
private Long id;


    @ManyToOne
    private DisciplineScientifique disciplineScientifique ;
    @ManyToOne
    private DisciplineScientifiqueErc disciplineScientifiqueErc ;
    @ManyToOne
    private Chercheur chercheur ;


public DisciplineScientifiqueChercheur(){
super();
}


            public Long getId(){
            return this.id;
            }
            public void setId(Long id){
            this.id = id;
            }
            public DisciplineScientifique getDisciplineScientifique(){
            return this.disciplineScientifique;
            }
            public void setDisciplineScientifique(DisciplineScientifique disciplineScientifique){
            this.disciplineScientifique = disciplineScientifique;
            }
            public DisciplineScientifiqueErc getDisciplineScientifiqueErc(){
            return this.disciplineScientifiqueErc;
            }
            public void setDisciplineScientifiqueErc(DisciplineScientifiqueErc disciplineScientifiqueErc){
            this.disciplineScientifiqueErc = disciplineScientifiqueErc;
            }
            public Chercheur getChercheur(){
            return this.chercheur;
            }
            public void setChercheur(Chercheur chercheur){
            this.chercheur = chercheur;
            }

        @Override
        public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        DisciplineScientifiqueChercheur disciplineScientifiqueChercheur = (DisciplineScientifiqueChercheur) o;
        return id != null && id.equals(disciplineScientifiqueChercheur.id);
        }

        @Override
        public int hashCode() {
        return Objects.hash(id);
        }

}

