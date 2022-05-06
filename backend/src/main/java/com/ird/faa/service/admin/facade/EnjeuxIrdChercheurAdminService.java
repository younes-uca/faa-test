package com.ird.faa.service.admin.facade;

import java.util.List;
import com.ird.faa.bean.EnjeuxIrdChercheur;
import com.ird.faa.ws.rest.provided.vo.EnjeuxIrdChercheurVo;
import com.ird.faa.service.core.facade.AbstractService;

public interface EnjeuxIrdChercheurAdminService extends AbstractService<EnjeuxIrdChercheur,Long,EnjeuxIrdChercheurVo>{




/**
    * delete EnjeuxIrdChercheur from database
    * @param id - id of EnjeuxIrdChercheur to be deleted
    *
    */
    int deleteById(Long id);


    List<EnjeuxIrdChercheur> findByEnjeuxIrdCode(String code);

    int deleteByEnjeuxIrdCode(String code);

    List<EnjeuxIrdChercheur> findByEnjeuxIrdId(Long id);

    int deleteByEnjeuxIrdId(Long id);
    List<EnjeuxIrdChercheur> findByChercheurNumeroMatricule(String numeroMatricule);

    int deleteByChercheurNumeroMatricule(String numeroMatricule);

    List<EnjeuxIrdChercheur> findByChercheurId(Long id);

    int deleteByChercheurId(Long id);







}
