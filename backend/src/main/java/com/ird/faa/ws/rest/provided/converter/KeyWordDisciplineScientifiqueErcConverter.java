package  com.ird.faa.ws.rest.provided.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.ird.faa.service.util.*;


import com.ird.faa.bean.KeyWordDisciplineScientifiqueErc;
import com.ird.faa.ws.rest.provided.vo.KeyWordDisciplineScientifiqueErcVo;

@Component
public class KeyWordDisciplineScientifiqueErcConverter extends AbstractConverter<KeyWordDisciplineScientifiqueErc,KeyWordDisciplineScientifiqueErcVo>{

        @Autowired
        private KeyWordConverter keyWordConverter ;
        @Autowired
        private DisciplineScientifiqueConverter disciplineScientifiqueConverter ;
    private Boolean keyWord;
    private Boolean disciplineScientifique;

public  KeyWordDisciplineScientifiqueErcConverter(){
init(true);
}

@Override
public KeyWordDisciplineScientifiqueErc toItem(KeyWordDisciplineScientifiqueErcVo vo) {
if (vo == null) {
return null;
} else {
KeyWordDisciplineScientifiqueErc item = new KeyWordDisciplineScientifiqueErc();
        if(StringUtil.isNotEmpty(vo.getId()))
        item.setId(NumberUtil.toLong(vo.getId()));
    if(vo.getKeyWordVo()!=null && this.keyWord)
        item.setKeyWord(keyWordConverter.toItem(vo.getKeyWordVo())) ;
    if(vo.getDisciplineScientifiqueVo()!=null && this.disciplineScientifique)
        item.setDisciplineScientifique(disciplineScientifiqueConverter.toItem(vo.getDisciplineScientifiqueVo())) ;


return item;
}
}

@Override
public KeyWordDisciplineScientifiqueErcVo toVo(KeyWordDisciplineScientifiqueErc item) {
if (item == null) {
return null;
} else {
KeyWordDisciplineScientifiqueErcVo vo = new KeyWordDisciplineScientifiqueErcVo();
        if(item.getId()!=null)
        vo.setId(NumberUtil.toString(item.getId()));

    if(item.getKeyWord()!=null && this.keyWord) {
        vo.setKeyWordVo(keyWordConverter.toVo(item.getKeyWord())) ;
    }
    if(item.getDisciplineScientifique()!=null && this.disciplineScientifique) {
        vo.setDisciplineScientifiqueVo(disciplineScientifiqueConverter.toVo(item.getDisciplineScientifique())) ;
    }

return vo;
}
}

public void init(Boolean value) {
    keyWord = value;
    disciplineScientifique = value;
}


        public KeyWordConverter getKeyWordConverter(){
        return this.keyWordConverter;
        }
        public void setKeyWordConverter(KeyWordConverter keyWordConverter ){
        this.keyWordConverter = keyWordConverter;
        }
        public DisciplineScientifiqueConverter getDisciplineScientifiqueConverter(){
        return this.disciplineScientifiqueConverter;
        }
        public void setDisciplineScientifiqueConverter(DisciplineScientifiqueConverter disciplineScientifiqueConverter ){
        this.disciplineScientifiqueConverter = disciplineScientifiqueConverter;
        }

    public boolean  isKeyWord(){
    return this.keyWord;
    }
    public void  setKeyWord(boolean keyWord){
    this.keyWord = keyWord;
    }
    public boolean  isDisciplineScientifique(){
    return this.disciplineScientifique;
    }
    public void  setDisciplineScientifique(boolean disciplineScientifique){
    this.disciplineScientifique = disciplineScientifique;
    }






}
