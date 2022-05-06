package  com.ird.faa.ws.rest.provided.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.ird.faa.service.util.*;


import com.ird.faa.bean.EnjeuxIrdChercheur;
import com.ird.faa.ws.rest.provided.vo.EnjeuxIrdChercheurVo;

@Component
public class EnjeuxIrdChercheurConverter extends AbstractConverter<EnjeuxIrdChercheur,EnjeuxIrdChercheurVo>{

        @Autowired
        private EnjeuxIrdConverter enjeuxIrdConverter ;
        @Autowired
        private ChercheurConverter chercheurConverter ;
    private Boolean enjeuxIrd;
    private Boolean chercheur;

public  EnjeuxIrdChercheurConverter(){
init(true);
}

@Override
public EnjeuxIrdChercheur toItem(EnjeuxIrdChercheurVo vo) {
if (vo == null) {
return null;
} else {
EnjeuxIrdChercheur item = new EnjeuxIrdChercheur();
        if(StringUtil.isNotEmpty(vo.getId()))
        item.setId(NumberUtil.toLong(vo.getId()));
    if(vo.getEnjeuxIrdVo()!=null && this.enjeuxIrd)
        item.setEnjeuxIrd(enjeuxIrdConverter.toItem(vo.getEnjeuxIrdVo())) ;
    if(vo.getChercheurVo()!=null && this.chercheur)
        item.setChercheur(chercheurConverter.toItem(vo.getChercheurVo())) ;


return item;
}
}

@Override
public EnjeuxIrdChercheurVo toVo(EnjeuxIrdChercheur item) {
if (item == null) {
return null;
} else {
EnjeuxIrdChercheurVo vo = new EnjeuxIrdChercheurVo();
        if(item.getId()!=null)
        vo.setId(NumberUtil.toString(item.getId()));

    if(item.getEnjeuxIrd()!=null && this.enjeuxIrd) {
        vo.setEnjeuxIrdVo(enjeuxIrdConverter.toVo(item.getEnjeuxIrd())) ;
    }
    if(item.getChercheur()!=null && this.chercheur) {
        vo.setChercheurVo(chercheurConverter.toVo(item.getChercheur())) ;
    }

return vo;
}
}

public void init(Boolean value) {
    enjeuxIrd = value;
    chercheur = value;
}


        public EnjeuxIrdConverter getEnjeuxIrdConverter(){
        return this.enjeuxIrdConverter;
        }
        public void setEnjeuxIrdConverter(EnjeuxIrdConverter enjeuxIrdConverter ){
        this.enjeuxIrdConverter = enjeuxIrdConverter;
        }
        public ChercheurConverter getChercheurConverter(){
        return this.chercheurConverter;
        }
        public void setChercheurConverter(ChercheurConverter chercheurConverter ){
        this.chercheurConverter = chercheurConverter;
        }

    public boolean  isEnjeuxIrd(){
    return this.enjeuxIrd;
    }
    public void  setEnjeuxIrd(boolean enjeuxIrd){
    this.enjeuxIrd = enjeuxIrd;
    }
    public boolean  isChercheur(){
    return this.chercheur;
    }
    public void  setChercheur(boolean chercheur){
    this.chercheur = chercheur;
    }






}
