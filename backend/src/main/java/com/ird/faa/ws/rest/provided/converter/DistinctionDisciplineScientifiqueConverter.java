package  com.ird.faa.ws.rest.provided.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.ird.faa.service.util.*;


import com.ird.faa.bean.DistinctionDisciplineScientifique;
import com.ird.faa.ws.rest.provided.vo.DistinctionDisciplineScientifiqueVo;

@Component
public class DistinctionDisciplineScientifiqueConverter extends AbstractConverter<DistinctionDisciplineScientifique,DistinctionDisciplineScientifiqueVo>{

        @Autowired
        private DisciplineScientifiqueConverter disciplineScientifiqueConverter ;
        @Autowired
        private DistinctionConverter distinctionConverter ;
    private Boolean distinction;
    private Boolean disciplineScientifique;

public  DistinctionDisciplineScientifiqueConverter(){
init(true);
}

@Override
public DistinctionDisciplineScientifique toItem(DistinctionDisciplineScientifiqueVo vo) {
if (vo == null) {
return null;
} else {
DistinctionDisciplineScientifique item = new DistinctionDisciplineScientifique();
        if(StringUtil.isNotEmpty(vo.getId()))
        item.setId(NumberUtil.toLong(vo.getId()));
    if(vo.getDistinctionVo()!=null && this.distinction)
        item.setDistinction(distinctionConverter.toItem(vo.getDistinctionVo())) ;
    if(vo.getDisciplineScientifiqueVo()!=null && this.disciplineScientifique)
        item.setDisciplineScientifique(disciplineScientifiqueConverter.toItem(vo.getDisciplineScientifiqueVo())) ;


return item;
}
}

@Override
public DistinctionDisciplineScientifiqueVo toVo(DistinctionDisciplineScientifique item) {
if (item == null) {
return null;
} else {
DistinctionDisciplineScientifiqueVo vo = new DistinctionDisciplineScientifiqueVo();
        if(item.getId()!=null)
        vo.setId(NumberUtil.toString(item.getId()));

    if(item.getDistinction()!=null && this.distinction) {
        vo.setDistinctionVo(distinctionConverter.toVo(item.getDistinction())) ;
    }
    if(item.getDisciplineScientifique()!=null && this.disciplineScientifique) {
        vo.setDisciplineScientifiqueVo(disciplineScientifiqueConverter.toVo(item.getDisciplineScientifique())) ;
    }

return vo;
}
}

public void init(Boolean value) {
    distinction = value;
    disciplineScientifique = value;
}


        public DisciplineScientifiqueConverter getDisciplineScientifiqueConverter(){
        return this.disciplineScientifiqueConverter;
        }
        public void setDisciplineScientifiqueConverter(DisciplineScientifiqueConverter disciplineScientifiqueConverter ){
        this.disciplineScientifiqueConverter = disciplineScientifiqueConverter;
        }
        public DistinctionConverter getDistinctionConverter(){
        return this.distinctionConverter;
        }
        public void setDistinctionConverter(DistinctionConverter distinctionConverter ){
        this.distinctionConverter = distinctionConverter;
        }

    public boolean  isDistinction(){
    return this.distinction;
    }
    public void  setDistinction(boolean distinction){
    this.distinction = distinction;
    }
    public boolean  isDisciplineScientifique(){
    return this.disciplineScientifique;
    }
    public void  setDisciplineScientifique(boolean disciplineScientifique){
    this.disciplineScientifique = disciplineScientifique;
    }






}
