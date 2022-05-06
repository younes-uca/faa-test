package com.ird.faa.service.chercheur.facade;

import java.util.List;
import com.ird.faa.bean.IdentifiantRecherche;
import com.ird.faa.ws.rest.provided.vo.IdentifiantRechercheVo;
import com.ird.faa.service.core.facade.AbstractService;

public interface IdentifiantRechercheChercheurService extends AbstractService<IdentifiantRecherche,Long,IdentifiantRechercheVo>{


    /**
    * find IdentifiantRecherche from database by code (reference)
    * @param code - reference of IdentifiantRecherche
    * @return the founded IdentifiantRecherche , If no IdentifiantRecherche were
    *         found in database return  null.
    */
    IdentifiantRecherche findByCode(String code);

    /**
    * find IdentifiantRecherche from database by id (PK) or code (reference)
    * @param id - id of IdentifiantRecherche
    * @param code - reference of IdentifiantRecherche
    * @return the founded IdentifiantRecherche , If no IdentifiantRecherche were
    *         found in database return  null.
    */
    IdentifiantRecherche findByIdOrCode(IdentifiantRecherche identifiantRecherche);


/**
    * delete IdentifiantRecherche from database
    * @param id - id of IdentifiantRecherche to be deleted
    *
    */
    int deleteById(Long id);


    List<IdentifiantRecherche> findByChercheurNumeroMatricule(String numeroMatricule);

    int deleteByChercheurNumeroMatricule(String numeroMatricule);

    List<IdentifiantRecherche> findByChercheurId(Long id);

    int deleteByChercheurId(Long id);


    /**
    * delete IdentifiantRecherche from database by code (reference)
    *
    * @param code - reference of IdentifiantRecherche to be deleted
    * @return 1 if IdentifiantRecherche deleted successfully
    */
    int deleteByCode(String code);





}
