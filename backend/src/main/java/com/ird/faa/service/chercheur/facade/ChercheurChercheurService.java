package com.ird.faa.service.chercheur.facade;

import java.util.List;
import com.ird.faa.bean.Chercheur;
import com.ird.faa.ws.rest.provided.vo.ChercheurVo;
import com.ird.faa.service.core.facade.AbstractService;

public interface ChercheurChercheurService extends AbstractService<Chercheur,Long,ChercheurVo>{

    Chercheur findByUsername(String username);

    /**
    * find Chercheur from database by numeroMatricule (reference)
    * @param numeroMatricule - reference of Chercheur
    * @return the founded Chercheur , If no Chercheur were
    *         found in database return  null.
    */
    Chercheur findByNumeroMatricule(String numeroMatricule);

    /**
    * find Chercheur from database by id (PK) or numeroMatricule (reference)
    * @param id - id of Chercheur
    * @param numeroMatricule - reference of Chercheur
    * @return the founded Chercheur , If no Chercheur were
    *         found in database return  null.
    */
    Chercheur findByIdOrNumeroMatricule(Chercheur chercheur);


/**
    * delete Chercheur from database
    * @param id - id of Chercheur to be deleted
    *
    */
    int deleteById(Long id);




    /**
    * delete Chercheur from database by numeroMatricule (reference)
    *
    * @param numeroMatricule - reference of Chercheur to be deleted
    * @return 1 if Chercheur deleted successfully
    */
    int deleteByNumeroMatricule(String numeroMatricule);





}
