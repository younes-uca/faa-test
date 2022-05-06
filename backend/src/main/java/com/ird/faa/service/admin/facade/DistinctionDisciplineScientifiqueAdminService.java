package com.ird.faa.service.admin.facade;

import java.util.List;
import com.ird.faa.bean.DistinctionDisciplineScientifique;
import com.ird.faa.ws.rest.provided.vo.DistinctionDisciplineScientifiqueVo;
import com.ird.faa.service.core.facade.AbstractService;

public interface DistinctionDisciplineScientifiqueAdminService extends AbstractService<DistinctionDisciplineScientifique,Long,DistinctionDisciplineScientifiqueVo>{




/**
    * delete DistinctionDisciplineScientifique from database
    * @param id - id of DistinctionDisciplineScientifique to be deleted
    *
    */
    int deleteById(Long id);



    List<DistinctionDisciplineScientifique> findByDistinctionId(Long id);

    int deleteByDistinctionId(Long id);
    List<DistinctionDisciplineScientifique> findByDisciplineScientifiqueCode(String code);

    int deleteByDisciplineScientifiqueCode(String code);

    List<DistinctionDisciplineScientifique> findByDisciplineScientifiqueId(Long id);

    int deleteByDisciplineScientifiqueId(Long id);







}
