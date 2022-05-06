package com.ird.faa.bean;

import java.util.Objects;



import javax.persistence.*;



@Entity
@Table(name = "enjeux_ird_chercheur")
public class EnjeuxIrdChercheur   {

@Id
    @SequenceGenerator(name="enjeux_ird_chercheur_seq",sequenceName="enjeux_ird_chercheur_seq",
    allocationSize=1, initialValue = 10000)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="enjeux_ird_chercheur_seq")
private Long id;


    @ManyToOne
    private EnjeuxIrd enjeuxIrd ;
    @ManyToOne
    private Chercheur chercheur ;


public EnjeuxIrdChercheur(){
super();
}


            public Long getId(){
            return this.id;
            }
            public void setId(Long id){
            this.id = id;
            }
            public EnjeuxIrd getEnjeuxIrd(){
            return this.enjeuxIrd;
            }
            public void setEnjeuxIrd(EnjeuxIrd enjeuxIrd){
            this.enjeuxIrd = enjeuxIrd;
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
        EnjeuxIrdChercheur enjeuxIrdChercheur = (EnjeuxIrdChercheur) o;
        return id != null && id.equals(enjeuxIrdChercheur.id);
        }

        @Override
        public int hashCode() {
        return Objects.hash(id);
        }

}

