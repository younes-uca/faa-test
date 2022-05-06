package com.ird.faa.bean;

import java.util.Objects;



import javax.persistence.*;



@Entity
@Table(name = "key_word")
public class KeyWord   {

@Id
    @SequenceGenerator(name="key_word_seq",sequenceName="key_word_seq",
    allocationSize=1, initialValue = 10000)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="key_word_seq")
private Long id;

            @Column(length = 500)
            private String libelleFr;
            @Column(length = 500)
            private String libelleEng;
            @Column(length = 500)
            private String code;



public KeyWord(){
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

        @Override
        public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        KeyWord keyWord = (KeyWord) o;
        return id != null && id.equals(keyWord.id);
        }

        @Override
        public int hashCode() {
        return Objects.hash(id);
        }

}

