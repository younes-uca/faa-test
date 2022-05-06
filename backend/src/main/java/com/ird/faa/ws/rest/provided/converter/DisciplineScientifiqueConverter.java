package  com.ird.faa.ws.rest.provided.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.ird.faa.service.util.*;


import com.ird.faa.bean.DisciplineScientifique;
import com.ird.faa.ws.rest.provided.vo.DisciplineScientifiqueVo;

@Component
public class DisciplineScientifiqueConverter extends AbstractConverter<DisciplineScientifique,DisciplineScientifiqueVo>{

        @Autowired
        private DisciplineScientifiqueParentConverter disciplineScientifiqueParentConverter ;
        @Autowired
        private DisciplineScientifiqueErcAssociationConverter disciplineScientifiqueErcAssociationConverter ;
        @Autowired
        private ChercheurConverter chercheurConverter ;
    private Boolean disciplineScientifiqueParent;
    private Boolean chercheur;
        private Boolean disciplineScientifiqueErcAssociations;

public  DisciplineScientifiqueConverter(){
init(true);
}

@Override
public DisciplineScientifique toItem(DisciplineScientifiqueVo vo) {
if (vo == null) {
return null;
} else {
DisciplineScientifique item = new DisciplineScientifique();
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
    if(vo.getDisciplineScientifiqueParentVo()!=null && this.disciplineScientifiqueParent)
        item.setDisciplineScientifiqueParent(disciplineScientifiqueParentConverter.toItem(vo.getDisciplineScientifiqueParentVo())) ;
    if(vo.getChercheurVo()!=null && this.chercheur)
        item.setChercheur(chercheurConverter.toItem(vo.getChercheurVo())) ;

    if(ListUtil.isNotEmpty(vo.getDisciplineScientifiqueErcAssociationsVo()) && this.disciplineScientifiqueErcAssociations)
        item.setDisciplineScientifiqueErcAssociations(disciplineScientifiqueErcAssociationConverter.toItem(vo.getDisciplineScientifiqueErcAssociationsVo()));

return item;
}
}

@Override
public DisciplineScientifiqueVo toVo(DisciplineScientifique item) {
if (item == null) {
return null;
} else {
DisciplineScientifiqueVo vo = new DisciplineScientifiqueVo();
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
    if(item.getDisciplineScientifiqueParent()!=null && this.disciplineScientifiqueParent) {
        vo.setDisciplineScientifiqueParentVo(disciplineScientifiqueParentConverter.toVo(item.getDisciplineScientifiqueParent())) ;
    }
    if(item.getChercheur()!=null && this.chercheur) {
        vo.setChercheurVo(chercheurConverter.toVo(item.getChercheur())) ;
    }
        if(ListUtil.isNotEmpty(item.getDisciplineScientifiqueErcAssociations()) && this.disciplineScientifiqueErcAssociations){
        disciplineScientifiqueErcAssociationConverter.init(true);
        disciplineScientifiqueErcAssociationConverter.setDisciplineScientifique(false);
        vo.setDisciplineScientifiqueErcAssociationsVo(disciplineScientifiqueErcAssociationConverter.toVo(item.getDisciplineScientifiqueErcAssociations()));
        disciplineScientifiqueErcAssociationConverter.setDisciplineScientifique(true);
        }

return vo;
}
}

public void init(Boolean value) {
    disciplineScientifiqueParent = value;
    chercheur = value;
        disciplineScientifiqueErcAssociations = value;
}


        public DisciplineScientifiqueParentConverter getDisciplineScientifiqueParentConverter(){
        return this.disciplineScientifiqueParentConverter;
        }
        public void setDisciplineScientifiqueParentConverter(DisciplineScientifiqueParentConverter disciplineScientifiqueParentConverter ){
        this.disciplineScientifiqueParentConverter = disciplineScientifiqueParentConverter;
        }
        public DisciplineScientifiqueErcAssociationConverter getDisciplineScientifiqueErcAssociationConverter(){
        return this.disciplineScientifiqueErcAssociationConverter;
        }
        public void setDisciplineScientifiqueErcAssociationConverter(DisciplineScientifiqueErcAssociationConverter disciplineScientifiqueErcAssociationConverter ){
        this.disciplineScientifiqueErcAssociationConverter = disciplineScientifiqueErcAssociationConverter;
        }
        public ChercheurConverter getChercheurConverter(){
        return this.chercheurConverter;
        }
        public void setChercheurConverter(ChercheurConverter chercheurConverter ){
        this.chercheurConverter = chercheurConverter;
        }

    public boolean  isDisciplineScientifiqueParent(){
    return this.disciplineScientifiqueParent;
    }
    public void  setDisciplineScientifiqueParent(boolean disciplineScientifiqueParent){
    this.disciplineScientifiqueParent = disciplineScientifiqueParent;
    }
    public boolean  isChercheur(){
    return this.chercheur;
    }
    public void  setChercheur(boolean chercheur){
    this.chercheur = chercheur;
    }













        public Boolean  isDisciplineScientifiqueErcAssociations(){
        return this.disciplineScientifiqueErcAssociations ;
        }
        public void  setDisciplineScientifiqueErcAssociations(Boolean disciplineScientifiqueErcAssociations ){
        this.disciplineScientifiqueErcAssociations  = disciplineScientifiqueErcAssociations ;
        }














}
