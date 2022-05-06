package  com.ird.faa.ws.rest.provided.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.ird.faa.service.util.*;


import com.ird.faa.bean.Campagne;
import com.ird.faa.ws.rest.provided.vo.CampagneVo;

@Component
public class CampagneConverter extends AbstractConverter<Campagne,CampagneVo>{


public  CampagneConverter(){
init(true);
}

@Override
public Campagne toItem(CampagneVo vo) {
if (vo == null) {
return null;
} else {
Campagne item = new Campagne();
        if(StringUtil.isNotEmpty(vo.getId()))
        item.setId(NumberUtil.toLong(vo.getId()));
        if(StringUtil.isNotEmpty(vo.getLibelle()))
        item.setLibelle(vo.getLibelle());
        if(StringUtil.isNotEmpty(vo.getCode()))
        item.setCode(vo.getCode());
        if(StringUtil.isNotEmpty(vo.getAnnee()))
        item.setAnnee(NumberUtil.toLong(vo.getAnnee()));
        if(StringUtil.isNotEmpty(vo.getDateDepart()))
        item.setDateDepart(DateUtil.parse(vo.getDateDepart()));
        if(StringUtil.isNotEmpty(vo.getDateFin()))
        item.setDateFin(DateUtil.parse(vo.getDateFin()));


return item;
}
}

@Override
public CampagneVo toVo(Campagne item) {
if (item == null) {
return null;
} else {
CampagneVo vo = new CampagneVo();
        if(item.getId()!=null)
        vo.setId(NumberUtil.toString(item.getId()));

        if(StringUtil.isNotEmpty(item.getLibelle()))
        vo.setLibelle(item.getLibelle());

        if(StringUtil.isNotEmpty(item.getCode()))
        vo.setCode(item.getCode());

        if(item.getAnnee()!=null)
        vo.setAnnee(NumberUtil.toString(item.getAnnee()));

        if(item.getDateDepart()!=null)
        vo.setDateDepart(DateUtil.formateDate(item.getDateDepart()));
        if(item.getDateFin()!=null)
        vo.setDateFin(DateUtil.formateDate(item.getDateFin()));

return vo;
}
}

public void init(Boolean value) {
}















}
