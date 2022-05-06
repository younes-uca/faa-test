package com.ird.faa.bean;

import java.util.Objects;
import java.util.List;

import java.util.Date;
import com.fasterxml.jackson.annotation.JsonFormat;


import javax.persistence.*;



@Entity
@Table(name = "discipline_scientifique")
public class DisciplineScientifique    implements Archivable  {

@Id
    @SequenceGenerator(name="discipline_scientifique_seq",sequenceName="discipline_scientifique_seq",
    allocationSize=1, initialValue = 10000)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="discipline_scientifique_seq")
private Long id;

            @Column(length = 500)
            private String libelleFr;
            @Column(length = 500)
            private String libelleEng;
            @Column(length = 500)
            private String code;
            private Long niveau ;
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
    private DisciplineScientifiqueParent disciplineScientifiqueParent ;
    @ManyToOne
    private Chercheur chercheur ;

                @OneToMany(mappedBy = "disciplineScientifique")
            private List<DisciplineScientifiqueErcAssociation> disciplineScientifiqueErcAssociations ;

public DisciplineScientifique(){
super();
}


            public Long getId(){
            return this.id;
            }
            public void setId(Long id){
            this.id = id;
            }
            public String getLibelleFr(){
            return this.libelleFr;
            }
            public void setLibelleFr(String libelleFr){
            this.libelleFr = libelleFr;
            }
            public String getLibelleEng(){
            return this.libelleEng;
            }
            public void setLibelleEng(String libelleEng){
            this.libelleEng = libelleEng;
            }
            public String getCode(){
            return this.code;
            }
            public void setCode(String code){
            this.code = code;
            }
            public Long getNiveau(){
            return this.niveau;
            }
            public void setNiveau(Long niveau){
            this.niveau = niveau;
            }
            public DisciplineScientifiqueParent getDisciplineScientifiqueParent(){
            return this.disciplineScientifiqueParent;
            }
            public void setDisciplineScientifiqueParent(DisciplineScientifiqueParent disciplineScientifiqueParent){
            this.disciplineScientifiqueParent = disciplineScientifiqueParent;
            }
            public List<DisciplineScientifiqueErcAssociation> getDisciplineScientifiqueErcAssociations(){
            return this.disciplineScientifiqueErcAssociations;
            }
            public void setDisciplineScientifiqueErcAssociations(List<DisciplineScientifiqueErcAssociation> disciplineScientifiqueErcAssociations){
            this.disciplineScientifiqueErcAssociations = disciplineScientifiqueErcAssociations;
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
        DisciplineScientifique disciplineScientifique = (DisciplineScientifique) o;
        return id != null && id.equals(disciplineScientifique.id);
        }

        @Override
        public int hashCode() {
        return Objects.hash(id);
        }

}

