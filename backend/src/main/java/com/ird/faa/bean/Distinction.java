package com.ird.faa.bean;

import java.util.Objects;
import java.util.List;

import java.util.Date;
import com.fasterxml.jackson.annotation.JsonFormat;


import javax.persistence.*;



@Entity
@Table(name = "distinction")
public class Distinction   {

@Id
    @SequenceGenerator(name="distinction_seq",sequenceName="distinction_seq",
    allocationSize=1, initialValue = 10000)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="distinction_seq")
private Long id;

            @JsonFormat(pattern="yyyy-MM-dd")
            @Temporal(TemporalType.DATE)
            private Date dateObtention ;
            @Column(length = 500)
            private String intitule;

    @ManyToOne
    private Chercheur chercheur ;
    @ManyToOne
    private Campagne campagne ;
    @ManyToOne
    private EtatEtapeCampagne etatEtapeCampagne ;

                @OneToMany(mappedBy = "distinction")
            private List<DistinctionDisciplineScientifique> distinctionDisciplineScientifiques ;

public Distinction(){
super();
}


            public Long getId(){
            return this.id;
            }
            public void setId(Long id){
            this.id = id;
            }
            public Date getDateObtention(){
            return this.dateObtention;
            }
            public void setDateObtention(Date dateObtention){
            this.dateObtention = dateObtention;
            }
            public String getIntitule(){
            return this.intitule;
            }
            public void setIntitule(String intitule){
            this.intitule = intitule;
            }
            public Chercheur getChercheur(){
            return this.chercheur;
            }
            public void setChercheur(Chercheur chercheur){
            this.chercheur = chercheur;
            }
            public List<DistinctionDisciplineScientifique> getDistinctionDisciplineScientifiques(){
            return this.distinctionDisciplineScientifiques;
            }
            public void setDistinctionDisciplineScientifiques(List<DistinctionDisciplineScientifique> distinctionDisciplineScientifiques){
            this.distinctionDisciplineScientifiques = distinctionDisciplineScientifiques;
            }
            public Campagne getCampagne(){
            return this.campagne;
            }
            public void setCampagne(Campagne campagne){
            this.campagne = campagne;
            }
            public EtatEtapeCampagne getEtatEtapeCampagne(){
            return this.etatEtapeCampagne;
            }
            public void setEtatEtapeCampagne(EtatEtapeCampagne etatEtapeCampagne){
            this.etatEtapeCampagne = etatEtapeCampagne;
            }

        @Override
        public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Distinction distinction = (Distinction) o;
        return id != null && id.equals(distinction.id);
        }

        @Override
        public int hashCode() {
        return Objects.hash(id);
        }

}

