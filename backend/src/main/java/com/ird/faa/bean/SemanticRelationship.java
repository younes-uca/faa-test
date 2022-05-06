package com.ird.faa.bean;

import java.util.Objects;



import javax.persistence.*;



@Entity
@Table(name = "semantic_relationship")
public class SemanticRelationship   {

@Id
    @SequenceGenerator(name="semantic_relationship_seq",sequenceName="semantic_relationship_seq",
    allocationSize=1, initialValue = 10000)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="semantic_relationship_seq")
private Long id;

            @Column(length = 500)
            private String libelle;
            @Column(length = 500)
            private String code;
            @GeneratedValue(strategy = GenerationType.SEQUENCE)
            private Long niveauExactitude ;



public SemanticRelationship(){
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
            public Long getNiveauExactitude(){
            return this.niveauExactitude;
            }
            public void setNiveauExactitude(Long niveauExactitude){
            this.niveauExactitude = niveauExactitude;
            }

        @Override
        public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        SemanticRelationship semanticRelationship = (SemanticRelationship) o;
        return id != null && id.equals(semanticRelationship.id);
        }

        @Override
        public int hashCode() {
        return Objects.hash(id);
        }

}

