package  com.ird.faa.ws.rest.provided.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.ird.faa.service.util.*;


import com.ird.faa.bean.Distinction;
import com.ird.faa.ws.rest.provided.vo.DistinctionVo;

@Component
public class DistinctionConverter extends AbstractConverter<Distinction,DistinctionVo>{

        @Autowired
        private EtatEtapeCampagneConverter etatEtapeCampagneConverter ;
        @Autowired
        private CampagneConverter campagneConverter ;
        @Autowired
        private DistinctionDisciplineScientifiqueConverter distinctionDisciplineScientifiqueConverter ;
        @Autowired
        private ChercheurConverter chercheurConverter ;
    private Boolean chercheur;
    private Boolean campagne;
    private Boolean etatEtapeCampagne;
        private Boolean distinctionDisciplineScientifiques;

public  DistinctionConverter(){
init(true);
}

@Override
public Distinction toItem(DistinctionVo vo) {
if (vo == null) {
return null;
} else {
Distinction item = new Distinction();
        if(StringUtil.isNotEmpty(vo.getId()))
        item.setId(NumberUtil.toLong(vo.getId()));
        if(StringUtil.isNotEmpty(vo.getDateObtention()))
        item.setDateObtention(DateUtil.parse(vo.getDateObtention()));
        if(StringUtil.isNotEmpty(vo.getIntitule()))
        item.setIntitule(vo.getIntitule());
    if(vo.getChercheurVo()!=null && this.chercheur)
        item.setChercheur(chercheurConverter.toItem(vo.getChercheurVo())) ;
    if(vo.getCampagneVo()!=null && this.campagne)
        item.setCampagne(campagneConverter.toItem(vo.getCampagneVo())) ;
    if(vo.getEtatEtapeCampagneVo()!=null && this.etatEtapeCampagne)
        item.setEtatEtapeCampagne(etatEtapeCampagneConverter.toItem(vo.getEtatEtapeCampagneVo())) ;

    if(ListUtil.isNotEmpty(vo.getDistinctionDisciplineScientifiquesVo()) && this.distinctionDisciplineScientifiques)
        item.setDistinctionDisciplineScientifiques(distinctionDisciplineScientifiqueConverter.toItem(vo.getDistinctionDisciplineScientifiquesVo()));

return item;
}
}

@Override
public DistinctionVo toVo(Distinction item) {
if (item == null) {
return null;
} else {
DistinctionVo vo = new DistinctionVo();
        if(item.getId()!=null)
        vo.setId(NumberUtil.toString(item.getId()));

        if(item.getDateObtention()!=null)
        vo.setDateObtention(DateUtil.formateDate(item.getDateObtention()));
        if(StringUtil.isNotEmpty(item.getIntitule()))
        vo.setIntitule(item.getIntitule());

    if(item.getChercheur()!=null && this.chercheur) {
        vo.setChercheurVo(chercheurConverter.toVo(item.getChercheur())) ;
    }
    if(item.getCampagne()!=null && this.campagne) {
        vo.setCampagneVo(campagneConverter.toVo(item.getCampagne())) ;
    }
    if(item.getEtatEtapeCampagne()!=null && this.etatEtapeCampagne) {
        vo.setEtatEtapeCampagneVo(etatEtapeCampagneConverter.toVo(item.getEtatEtapeCampagne())) ;
    }
        if(ListUtil.isNotEmpty(item.getDistinctionDisciplineScientifiques()) && this.distinctionDisciplineScientifiques){
        distinctionDisciplineScientifiqueConverter.init(true);
        distinctionDisciplineScientifiqueConverter.setDistinction(false);
        vo.setDistinctionDisciplineScientifiquesVo(distinctionDisciplineScientifiqueConverter.toVo(item.getDistinctionDisciplineScientifiques()));
        distinctionDisciplineScientifiqueConverter.setDistinction(true);
        }

return vo;
}
}

public void init(Boolean value) {
    chercheur = value;
    campagne = value;
    etatEtapeCampagne = value;
        distinctionDisciplineScientifiques = value;
}


        public EtatEtapeCampagneConverter getEtatEtapeCampagneConverter(){
        return this.etatEtapeCampagneConverter;
        }
        public void setEtatEtapeCampagneConverter(EtatEtapeCampagneConverter etatEtapeCampagneConverter ){
        this.etatEtapeCampagneConverter = etatEtapeCampagneConverter;
        }
        public CampagneConverter getCampagneConverter(){
        return this.campagneConverter;
        }
        public void setCampagneConverter(CampagneConverter campagneConverter ){
        this.campagneConverter = campagneConverter;
        }
        public DistinctionDisciplineScientifiqueConverter getDistinctionDisciplineScientifiqueConverter(){
        return this.distinctionDisciplineScientifiqueConverter;
        }
        public void setDistinctionDisciplineScientifiqueConverter(DistinctionDisciplineScientifiqueConverter distinctionDisciplineScientifiqueConverter ){
        this.distinctionDisciplineScientifiqueConverter = distinctionDisciplineScientifiqueConverter;
        }
        public ChercheurConverter getChercheurConverter(){
        return this.chercheurConverter;
        }
        public void setChercheurConverter(ChercheurConverter chercheurConverter ){
        this.chercheurConverter = chercheurConverter;
        }

    public boolean  isChercheur(){
    return this.chercheur;
    }
    public void  setChercheur(boolean chercheur){
    this.chercheur = chercheur;
    }
    public boolean  isCampagne(){
    return this.campagne;
    }
    public void  setCampagne(boolean campagne){
    this.campagne = campagne;
    }
    public boolean  isEtatEtapeCampagne(){
    return this.etatEtapeCampagne;
    }
    public void  setEtatEtapeCampagne(boolean etatEtapeCampagne){
    this.etatEtapeCampagne = etatEtapeCampagne;
    }









        public Boolean  isDistinctionDisciplineScientifiques(){
        return this.distinctionDisciplineScientifiques ;
        }
        public void  setDistinctionDisciplineScientifiques(Boolean distinctionDisciplineScientifiques ){
        this.distinctionDisciplineScientifiques  = distinctionDisciplineScientifiques ;
        }






}
