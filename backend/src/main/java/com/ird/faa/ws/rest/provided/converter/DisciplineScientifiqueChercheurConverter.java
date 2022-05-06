package  com.ird.faa.ws.rest.provided.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.ird.faa.service.util.*;


import com.ird.faa.bean.DisciplineScientifiqueChercheur;
import com.ird.faa.ws.rest.provided.vo.DisciplineScientifiqueChercheurVo;

@Component
public class DisciplineScientifiqueChercheurConverter extends AbstractConverter<DisciplineScientifiqueChercheur,DisciplineScientifiqueChercheurVo>{

        @Autowired
        private DisciplineScientifiqueConverter disciplineScientifiqueConverter ;
        @Autowired
        private DisciplineScientifiqueErcConverter disciplineScientifiqueErcConverter ;
        @Autowired
        private ChercheurConverter chercheurConverter ;
    private Boolean disciplineScientifique;
    private Boolean disciplineScientifiqueErc;
    private Boolean chercheur;

public  DisciplineScientifiqueChercheurConverter(){
init(true);
}

@Override
public DisciplineScientifiqueChercheur toItem(DisciplineScientifiqueChercheurVo vo) {
if (vo == null) {
return null;
} else {
DisciplineScientifiqueChercheur item = new DisciplineScientifiqueChercheur();
        if(StringUtil.isNotEmpty(vo.getId()))
        item.setId(NumberUtil.toLong(vo.getId()));
    if(vo.getDisciplineScientifiqueVo()!=null && this.disciplineScientifique)
        item.setDisciplineScientifique(disciplineScientifiqueConverter.toItem(vo.getDisciplineScientifiqueVo())) ;
    if(vo.getDisciplineScientifiqueErcVo()!=null && this.disciplineScientifiqueErc)
        item.setDisciplineScientifiqueErc(disciplineScientifiqueErcConverter.toItem(vo.getDisciplineScientifiqueErcVo())) ;
    if(vo.getChercheurVo()!=null && this.chercheur)
        item.setChercheur(chercheurConverter.toItem(vo.getChercheurVo())) ;


return item;
}
}

@Override
public DisciplineScientifiqueChercheurVo toVo(DisciplineScientifiqueChercheur item) {
if (item == null) {
return null;
} else {
DisciplineScientifiqueChercheurVo vo = new DisciplineScientifiqueChercheurVo();
        if(item.getId()!=null)
        vo.setId(NumberUtil.toString(item.getId()));

    if(item.getDisciplineScientifique()!=null && this.disciplineScientifique) {
        vo.setDisciplineScientifiqueVo(disciplineScientifiqueConverter.toVo(item.getDisciplineScientifique())) ;
    }
    if(item.getDisciplineScientifiqueErc()!=null && this.disciplineScientifiqueErc) {
        vo.setDisciplineScientifiqueErcVo(disciplineScientifiqueErcConverter.toVo(item.getDisciplineScientifiqueErc())) ;
    }
    if(item.getChercheur()!=null && this.chercheur) {
        vo.setChercheurVo(chercheurConverter.toVo(item.getChercheur())) ;
    }

return vo;
}
}

public void init(Boolean value) {
    disciplineScientifique = value;
    disciplineScientifiqueErc = value;
    chercheur = value;
}


        public DisciplineScientifiqueConverter getDisciplineScientifiqueConverter(){
        return this.disciplineScientifiqueConverter;
        }
        public void setDisciplineScientifiqueConverter(DisciplineScientifiqueConverter disciplineScientifiqueConverter ){
        this.disciplineScientifiqueConverter = disciplineScientifiqueConverter;
        }
        public DisciplineScientifiqueErcConverter getDisciplineScientifiqueErcConverter(){
        return this.disciplineScientifiqueErcConverter;
        }
        public void setDisciplineScientifiqueErcConverter(DisciplineScientifiqueErcConverter disciplineScientifiqueErcConverter ){
        this.disciplineScientifiqueErcConverter = disciplineScientifiqueErcConverter;
        }
        public ChercheurConverter getChercheurConverter(){
        return this.chercheurConverter;
        }
        public void setChercheurConverter(ChercheurConverter chercheurConverter ){
        this.chercheurConverter = chercheurConverter;
        }

    public boolean  isDisciplineScientifique(){
    return this.disciplineScientifique;
    }
    public void  setDisciplineScientifique(boolean disciplineScientifique){
    this.disciplineScientifique = disciplineScientifique;
    }
    public boolean  isDisciplineScientifiqueErc(){
    return this.disciplineScientifiqueErc;
    }
    public void  setDisciplineScientifiqueErc(boolean disciplineScientifiqueErc){
    this.disciplineScientifiqueErc = disciplineScientifiqueErc;
    }
    public boolean  isChercheur(){
    return this.chercheur;
    }
    public void  setChercheur(boolean chercheur){
    this.chercheur = chercheur;
    }








}
