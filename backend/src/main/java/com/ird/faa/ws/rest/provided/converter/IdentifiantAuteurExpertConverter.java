package  com.ird.faa.ws.rest.provided.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.ird.faa.service.util.*;


import com.ird.faa.bean.IdentifiantAuteurExpert;
import com.ird.faa.ws.rest.provided.vo.IdentifiantAuteurExpertVo;

@Component
public class IdentifiantAuteurExpertConverter extends AbstractConverter<IdentifiantAuteurExpert,IdentifiantAuteurExpertVo>{

        @Autowired
        private IdentifiantRechercheConverter identifiantRechercheConverter ;
        @Autowired
        private ChercheurConverter chercheurConverter ;
    private Boolean identifiantRecherche;
    private Boolean chercheur;

public  IdentifiantAuteurExpertConverter(){
init(true);
}

@Override
public IdentifiantAuteurExpert toItem(IdentifiantAuteurExpertVo vo) {
if (vo == null) {
return null;
} else {
IdentifiantAuteurExpert item = new IdentifiantAuteurExpert();
        if(StringUtil.isNotEmpty(vo.getId()))
        item.setId(NumberUtil.toLong(vo.getId()));
        if(StringUtil.isNotEmpty(vo.getValeur()))
        item.setValeur(vo.getValeur());
    if(vo.getIdentifiantRechercheVo()!=null && this.identifiantRecherche)
        item.setIdentifiantRecherche(identifiantRechercheConverter.toItem(vo.getIdentifiantRechercheVo())) ;
    if(vo.getChercheurVo()!=null && this.chercheur)
        item.setChercheur(chercheurConverter.toItem(vo.getChercheurVo())) ;


return item;
}
}

@Override
public IdentifiantAuteurExpertVo toVo(IdentifiantAuteurExpert item) {
if (item == null) {
return null;
} else {
IdentifiantAuteurExpertVo vo = new IdentifiantAuteurExpertVo();
        if(item.getId()!=null)
        vo.setId(NumberUtil.toString(item.getId()));

        if(StringUtil.isNotEmpty(item.getValeur()))
        vo.setValeur(item.getValeur());

    if(item.getIdentifiantRecherche()!=null && this.identifiantRecherche) {
        vo.setIdentifiantRechercheVo(identifiantRechercheConverter.toVo(item.getIdentifiantRecherche())) ;
    }
    if(item.getChercheur()!=null && this.chercheur) {
        vo.setChercheurVo(chercheurConverter.toVo(item.getChercheur())) ;
    }

return vo;
}
}

public void init(Boolean value) {
    identifiantRecherche = value;
    chercheur = value;
}


        public IdentifiantRechercheConverter getIdentifiantRechercheConverter(){
        return this.identifiantRechercheConverter;
        }
        public void setIdentifiantRechercheConverter(IdentifiantRechercheConverter identifiantRechercheConverter ){
        this.identifiantRechercheConverter = identifiantRechercheConverter;
        }
        public ChercheurConverter getChercheurConverter(){
        return this.chercheurConverter;
        }
        public void setChercheurConverter(ChercheurConverter chercheurConverter ){
        this.chercheurConverter = chercheurConverter;
        }

    public boolean  isIdentifiantRecherche(){
    return this.identifiantRecherche;
    }
    public void  setIdentifiantRecherche(boolean identifiantRecherche){
    this.identifiantRecherche = identifiantRecherche;
    }
    public boolean  isChercheur(){
    return this.chercheur;
    }
    public void  setChercheur(boolean chercheur){
    this.chercheur = chercheur;
    }








}
