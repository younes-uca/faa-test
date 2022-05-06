package com.ird.faa.service.chercheur.facade;

import java.util.List;
import com.ird.faa.bean.EnjeuxIrd;
import com.ird.faa.ws.rest.provided.vo.EnjeuxIrdVo;
import com.ird.faa.service.core.facade.AbstractService;

public interface EnjeuxIrdChercheurService extends AbstractService<EnjeuxIrd,Long,EnjeuxIrdVo>{


    /**
    * find EnjeuxIrd from database by code (reference)
    * @param code - reference of EnjeuxIrd
    * @return the founded EnjeuxIrd , If no EnjeuxIrd were
    *         found in database return  null.
    */
    EnjeuxIrd findByCode(String code);

    /**
    * find EnjeuxIrd from database by id (PK) or code (reference)
    * @param id - id of EnjeuxIrd
    * @param code - reference of EnjeuxIrd
    * @return the founded EnjeuxIrd , If no EnjeuxIrd were
    *         found in database return  null.
    */
    EnjeuxIrd findByIdOrCode(EnjeuxIrd enjeuxIrd);


/**
    * delete EnjeuxIrd from database
    * @param id - id of EnjeuxIrd to be deleted
    *
    */
    int deleteById(Long id);


    List<EnjeuxIrd> findByChercheurNumeroMatricule(String numeroMatricule);

    int deleteByChercheurNumeroMatricule(String numeroMatricule);

    List<EnjeuxIrd> findByChercheurId(Long id);

    int deleteByChercheurId(Long id);


    /**
    * delete EnjeuxIrd from database by code (reference)
    *
    * @param code - reference of EnjeuxIrd to be deleted
    * @return 1 if EnjeuxIrd deleted successfully
    */
    int deleteByCode(String code);





}
