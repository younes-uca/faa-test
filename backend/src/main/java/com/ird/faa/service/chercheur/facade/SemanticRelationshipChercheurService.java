package com.ird.faa.service.chercheur.facade;

import java.util.List;
import com.ird.faa.bean.SemanticRelationship;
import com.ird.faa.ws.rest.provided.vo.SemanticRelationshipVo;
import com.ird.faa.service.core.facade.AbstractService;

public interface SemanticRelationshipChercheurService extends AbstractService<SemanticRelationship,Long,SemanticRelationshipVo>{


    /**
    * find SemanticRelationship from database by code (reference)
    * @param code - reference of SemanticRelationship
    * @return the founded SemanticRelationship , If no SemanticRelationship were
    *         found in database return  null.
    */
    SemanticRelationship findByCode(String code);

    /**
    * find SemanticRelationship from database by id (PK) or code (reference)
    * @param id - id of SemanticRelationship
    * @param code - reference of SemanticRelationship
    * @return the founded SemanticRelationship , If no SemanticRelationship were
    *         found in database return  null.
    */
    SemanticRelationship findByIdOrCode(SemanticRelationship semanticRelationship);


/**
    * delete SemanticRelationship from database
    * @param id - id of SemanticRelationship to be deleted
    *
    */
    int deleteById(Long id);




    /**
    * delete SemanticRelationship from database by code (reference)
    *
    * @param code - reference of SemanticRelationship to be deleted
    * @return 1 if SemanticRelationship deleted successfully
    */
    int deleteByCode(String code);





}
