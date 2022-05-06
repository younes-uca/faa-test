package com.ird.faa.service.admin.facade;

import java.util.List;
import com.ird.faa.bean.Distinction;
import com.ird.faa.ws.rest.provided.vo.DistinctionVo;
import com.ird.faa.service.core.facade.AbstractService;

public interface DistinctionAdminService extends AbstractService<Distinction,Long,DistinctionVo>{




/**
    * delete Distinction from database
    * @param id - id of Distinction to be deleted
    *
    */
    int deleteById(Long id);


    List<Distinction> findByChercheurNumeroMatricule(String numeroMatricule);

    int deleteByChercheurNumeroMatricule(String numeroMatricule);

    List<Distinction> findByChercheurId(Long id);

    int deleteByChercheurId(Long id);
    List<Distinction> findByCampagneCode(String code);

    int deleteByCampagneCode(String code);

    List<Distinction> findByCampagneId(Long id);

    int deleteByCampagneId(Long id);
    List<Distinction> findByEtatEtapeCampagneCode(String code);

    int deleteByEtatEtapeCampagneCode(String code);

    List<Distinction> findByEtatEtapeCampagneId(Long id);

    int deleteByEtatEtapeCampagneId(Long id);







}
