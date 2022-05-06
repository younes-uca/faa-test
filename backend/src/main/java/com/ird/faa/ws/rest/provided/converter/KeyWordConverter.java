package  com.ird.faa.ws.rest.provided.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.ird.faa.service.util.*;


import com.ird.faa.bean.KeyWord;
import com.ird.faa.ws.rest.provided.vo.KeyWordVo;

@Component
public class KeyWordConverter extends AbstractConverter<KeyWord,KeyWordVo>{


public  KeyWordConverter(){
init(true);
}

@Override
public KeyWord toItem(KeyWordVo vo) {
if (vo == null) {
return null;
} else {
KeyWord item = new KeyWord();
        if(StringUtil.isNotEmpty(vo.getId()))
        item.setId(NumberUtil.toLong(vo.getId()));
        if(StringUtil.isNotEmpty(vo.getLibelleFr()))
        item.setLibelleFr(vo.getLibelleFr());
        if(StringUtil.isNotEmpty(vo.getLibelleEng()))
        item.setLibelleEng(vo.getLibelleEng());
        if(StringUtil.isNotEmpty(vo.getCode()))
        item.setCode(vo.getCode());


return item;
}
}

@Override
public KeyWordVo toVo(KeyWord item) {
if (item == null) {
return null;
} else {
KeyWordVo vo = new KeyWordVo();
        if(item.getId()!=null)
        vo.setId(NumberUtil.toString(item.getId()));

        if(StringUtil.isNotEmpty(item.getLibelleFr()))
        vo.setLibelleFr(item.getLibelleFr());

        if(StringUtil.isNotEmpty(item.getLibelleEng()))
        vo.setLibelleEng(item.getLibelleEng());

        if(StringUtil.isNotEmpty(item.getCode()))
        vo.setCode(item.getCode());


return vo;
}
}

public void init(Boolean value) {
}











}
