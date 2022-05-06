package com.ird.faa.service.chercheur.facade;

import java.util.List;
import com.ird.faa.bean.IdentifiantAuteurExpert;
import com.ird.faa.ws.rest.provided.vo.IdentifiantAuteurExpertVo;
import com.ird.faa.service.core.facade.AbstractService;

public interface IdentifiantAuteurExpertChercheurService extends AbstractService<IdentifiantAuteurExpert,Long,IdentifiantAuteurExpertVo>{




/**
    * delete IdentifiantAuteurExpert from database
    * @param id - id of IdentifiantAuteurExpert to be deleted
    *
    */
    int deleteById(Long id);


    List<IdentifiantAuteurExpert> findByIdentifiantRechercheCode(String code);

    int deleteByIdentifiantRechercheCode(String code);

    List<IdentifiantAuteurExpert> findByIdentifiantRechercheId(Long id);

    int deleteByIdentifiantRechercheId(Long id);
    List<IdentifiantAuteurExpert> findByChercheurNumeroMatricule(String numeroMatricule);

    int deleteByChercheurNumeroMatricule(String numeroMatricule);

    List<IdentifiantAuteurExpert> findByChercheurId(Long id);

    int deleteByChercheurId(Long id);







}
