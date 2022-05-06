package com.ird.faa.bean;

import java.util.Objects;

import java.util.Date;
import com.fasterxml.jackson.annotation.JsonFormat;


import javax.persistence.*;



@Entity
@Table(name = "campagne")
public class Campagne   {

@Id
    @SequenceGenerator(name="campagne_seq",sequenceName="campagne_seq",
    allocationSize=1, initialValue = 10000)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="campagne_seq")
private Long id;

            @Column(length = 500)
            private String libelle;
            @Column(length = 500)
            private String code;
            private Long annee ;
            @JsonFormat(pattern="yyyy-MM-dd")
            @Temporal(TemporalType.DATE)
            private Date dateDepart ;
            @JsonFormat(pattern="yyyy-MM-dd")
            @Temporal(TemporalType.DATE)
            private Date dateFin ;



public Campagne(){
super();
}


            public Long getId(){
            return this.id;
            }
            public void setId(Long id){
            this.id = id;
            }
            public String getLibelle(){
            return this.libelle;
            }
            public void setLibelle(String libelle){
            this.libelle = libelle;
            }
            public String getCode(){
            return this.code;
            }
            public void setCode(String code){
            this.code = code;
            }
            public Long getAnnee(){
            return this.annee;
            }
            public void setAnnee(Long annee){
            this.annee = annee;
            }
            public Date getDateDepart(){
            return this.dateDepart;
            }
            public void setDateDepart(Date dateDepart){
            this.dateDepart = dateDepart;
            }
            public Date getDateFin(){
            return this.dateFin;
            }
            public void setDateFin(Date dateFin){
            this.dateFin = dateFin;
            }

        @Override
        public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Campagne campagne = (Campagne) o;
        return id != null && id.equals(campagne.id);
        }

        @Override
        public int hashCode() {
        return Objects.hash(id);
        }

}

