package com.ird.faa.bean;

import java.util.Objects;

import java.util.Date;
import com.fasterxml.jackson.annotation.JsonFormat;


import javax.persistence.*;



@Entity
@Table(name = "enjeux_ird")
public class EnjeuxIrd    implements Archivable  {

@Id
    @SequenceGenerator(name="enjeux_ird_seq",sequenceName="enjeux_ird_seq",
    allocationSize=1, initialValue = 10000)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="enjeux_ird_seq")
private Long id;

            @Column(length = 500)
            private String libelle;
            @Column(length = 500)
            private String code;
            @Lob
            @Column(columnDefinition="TEXT")
            private String description;
            @Column(columnDefinition = "boolean default false")
                 private Boolean archive = false;
            @JsonFormat(pattern="yyyy-MM-dd")
            @Temporal(TemporalType.DATE)
            private Date dateArchivage ;
            @JsonFormat(pattern="yyyy-MM-dd")
            @Temporal(TemporalType.DATE)
            private Date dateCreation ;
            @Column(columnDefinition = "boolean default false")
                 private Boolean admin = false;
            @Column(columnDefinition = "boolean default false")
                 private Boolean visible = false;

    @ManyToOne
    private Chercheur chercheur ;


public EnjeuxIrd(){
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
            public String getDescription(){
            return this.description;
            }
            public void setDescription(String description){
            this.description = description;
            }
        public Boolean  getArchive(){
        return this.archive;
        }
        public void setArchive(Boolean archive){
        this.archive = archive;
        }
            public Date getDateArchivage(){
            return this.dateArchivage;
            }
            public void setDateArchivage(Date dateArchivage){
            this.dateArchivage = dateArchivage;
            }
            public Date getDateCreation(){
            return this.dateCreation;
            }
            public void setDateCreation(Date dateCreation){
            this.dateCreation = dateCreation;
            }
        public Boolean  getAdmin(){
        return this.admin;
        }
        public void setAdmin(Boolean admin){
        this.admin = admin;
        }
        public Boolean  getVisible(){
        return this.visible;
        }
        public void setVisible(Boolean visible){
        this.visible = visible;
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
        EnjeuxIrd enjeuxIrd = (EnjeuxIrd) o;
        return id != null && id.equals(enjeuxIrd.id);
        }

        @Override
        public int hashCode() {
        return Objects.hash(id);
        }

}

