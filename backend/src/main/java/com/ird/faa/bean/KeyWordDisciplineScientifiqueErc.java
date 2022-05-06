package com.ird.faa.bean;

import java.util.Objects;



import javax.persistence.*;



@Entity
@Table(name = "key_word_discipline_scientifique_erc")
public class KeyWordDisciplineScientifiqueErc   {

@Id
    @SequenceGenerator(name="key_word_discipline_scientifique_erc_seq",sequenceName="key_word_discipline_scientifique_erc_seq",
    allocationSize=1, initialValue = 10000)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="key_word_discipline_scientifique_erc_seq")
private Long id;


    @ManyToOne
    private KeyWord keyWord ;
    @ManyToOne
    private DisciplineScientifique disciplineScientifique ;


public KeyWordDisciplineScientifiqueErc(){
super();
}


            public Long getId(){
            return this.id;
            }
            public void setId(Long id){
            this.id = id;
            }
            public KeyWord getKeyWord(){
            return this.keyWord;
            }
            public void setKeyWord(KeyWord keyWord){
            this.keyWord = keyWord;
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
        KeyWordDisciplineScientifiqueErc keyWordDisciplineScientifiqueErc = (KeyWordDisciplineScientifiqueErc) o;
        return id != null && id.equals(keyWordDisciplineScientifiqueErc.id);
        }

        @Override
        public int hashCode() {
        return Objects.hash(id);
        }

}

