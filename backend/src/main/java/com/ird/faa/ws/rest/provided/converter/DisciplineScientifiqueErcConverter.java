package  com.ird.faa.ws.rest.provided.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.ird.faa.service.util.*;


import com.ird.faa.bean.DisciplineScientifiqueErc;
import com.ird.faa.ws.rest.provided.vo.DisciplineScientifiqueErcVo;

@Component
public class DisciplineScientifiqueErcConverter extends AbstractConverter<DisciplineScientifiqueErc,DisciplineScientifiqueErcVo>{

        @Autowired
        private DisciplineScientifiqueErcParentConverter disciplineScientifiqueErcParentConverter ;
        @Autowired
        private ChercheurConverter chercheurConverter ;
    private Boolean disciplineScientifiqueErcParent;
    private Boolean chercheur;

public  DisciplineScientifiqueErcConverter(){
init(true);
}

@Override
public DisciplineScientifiqueErc toItem(DisciplineScientifiqueErcVo vo) {
if (vo == null) {
return null;
} else {
DisciplineScientifiqueErc item = new DisciplineScientifiqueErc();
        if(StringUtil.isNotEmpty(vo.getId()))
        item.setId(NumberUtil.toLong(vo.getId()));
        if(StringUtil.isNotEmpty(vo.getLibelleFr()))
        item.setLibelleFr(vo.getLibelleFr());
        if(StringUtil.isNotEmpty(vo.getLibelleEng()))
        item.setLibelleEng(vo.getLibelleEng());
        if(StringUtil.isNotEmpty(vo.getCode()))
        item.setCode(vo.getCode());
        if(StringUtil.isNotEmpty(vo.getNiveau()))
        item.setNiveau(NumberUtil.toLong(vo.getNiveau()));
            if(vo.getArchive() != null)
            item.setArchive(vo.getArchive());
        if(StringUtil.isNotEmpty(vo.getDateArchivage()))
        item.setDateArchivage(DateUtil.parse(vo.getDateArchivage()));
        if(StringUtil.isNotEmpty(vo.getDateCreation()))
        item.setDateCreation(DateUtil.parse(vo.getDateCreation()));
            if(vo.getAdmin() != null)
            item.setAdmin(vo.getAdmin());
            if(vo.getVisible() != null)
            item.setVisible(vo.getVisible());
    if(vo.getDisciplineScientifiqueErcParentVo()!=null && this.disciplineScientifiqueErcParent)
        item.setDisciplineScientifiqueErcParent(disciplineScientifiqueErcParentConverter.toItem(vo.getDisciplineScientifiqueErcParentVo())) ;
    if(vo.getChercheurVo()!=null && this.chercheur)
        item.setChercheur(chercheurConverter.toItem(vo.getChercheurVo())) ;


return item;
}
}

@Override
public DisciplineScientifiqueErcVo toVo(DisciplineScientifiqueErc item) {
if (item == null) {
return null;
} else {
DisciplineScientifiqueErcVo vo = new DisciplineScientifiqueErcVo();
        if(item.getId()!=null)
        vo.setId(NumberUtil.toString(item.getId()));

        if(StringUtil.isNotEmpty(item.getLibelleFr()))
        vo.setLibelleFr(item.getLibelleFr());

        if(StringUtil.isNotEmpty(item.getLibelleEng()))
        vo.setLibelleEng(item.getLibelleEng());

        if(StringUtil.isNotEmpty(item.getCode()))
        vo.setCode(item.getCode());

        if(item.getNiveau()!=null)
        vo.setNiveau(NumberUtil.toString(item.getNiveau()));

        if(item.getArchive()!=null)
        vo.setArchive(item.getArchive());
        if(item.getDateArchivage()!=null)
        vo.setDateArchivage(DateUtil.formateDate(item.getDateArchivage()));
        if(item.getDateCreation()!=null)
        vo.setDateCreation(DateUtil.formateDate(item.getDateCreation()));
        if(item.getAdmin()!=null)
        vo.setAdmin(item.getAdmin());
        if(item.getVisible()!=null)
        vo.setVisible(item.getVisible());
    if(item.getDisciplineScientifiqueErcParent()!=null && this.disciplineScientifiqueErcParent) {
        vo.setDisciplineScientifiqueErcParentVo(disciplineScientifiqueErcParentConverter.toVo(item.getDisciplineScientifiqueErcParent())) ;
    }
    if(item.getChercheur()!=null && this.chercheur) {
        vo.setChercheurVo(chercheurConverter.toVo(item.getChercheur())) ;
    }

return vo;
}
}

public void init(Boolean value) {
    disciplineScientifiqueErcParent = value;
    chercheur = value;
}


        public DisciplineScientifiqueErcParentConverter getDisciplineScientifiqueErcParentConverter(){
        return this.disciplineScientifiqueErcParentConverter;
        }
        public void setDisciplineScientifiqueErcParentConverter(DisciplineScientifiqueErcParentConverter disciplineScientifiqueErcParentConverter ){
        this.disciplineScientifiqueErcParentConverter = disciplineScientifiqueErcParentConverter;
        }
        public ChercheurConverter getChercheurConverter(){
        return this.chercheurConverter;
        }
        public void setChercheurConverter(ChercheurConverter chercheurConverter ){
        this.chercheurConverter = chercheurConverter;
        }

    public boolean  isDisciplineScientifiqueErcParent(){
    return this.disciplineScientifiqueErcParent;
    }
    public void  setDisciplineScientifiqueErcParent(boolean disciplineScientifiqueErcParent){
    this.disciplineScientifiqueErcParent = disciplineScientifiqueErcParent;
    }
    public boolean  isChercheur(){
    return this.chercheur;
    }
    public void  setChercheur(boolean chercheur){
    this.chercheur = chercheur;
    }
























}
