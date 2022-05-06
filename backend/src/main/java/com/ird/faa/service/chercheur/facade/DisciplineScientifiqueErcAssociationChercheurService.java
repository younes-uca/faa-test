package com.ird.faa.service.chercheur.facade;

import java.util.List;
import com.ird.faa.bean.DisciplineScientifiqueErcAssociation;
import com.ird.faa.ws.rest.provided.vo.DisciplineScientifiqueErcAssociationVo;
import com.ird.faa.service.core.facade.AbstractService;

public interface DisciplineScientifiqueErcAssociationChercheurService extends AbstractService<DisciplineScientifiqueErcAssociation,Long,DisciplineScientifiqueErcAssociationVo>{




/**
    * delete DisciplineScientifiqueErcAssociation from database
    * @param id - id of DisciplineScientifiqueErcAssociation to be deleted
    *
    */
    int deleteById(Long id);


    List<DisciplineScientifiqueErcAssociation> findByDisciplineScientifiqueErcCode(String code);

    int deleteByDisciplineScientifiqueErcCode(String code);

    List<DisciplineScientifiqueErcAssociation> findByDisciplineScientifiqueErcId(Long id);

    int deleteByDisciplineScientifiqueErcId(Long id);
    List<DisciplineScientifiqueErcAssociation> findByDisciplineScientifiqueCode(String code);

    int deleteByDisciplineScientifiqueCode(String code);

    List<DisciplineScientifiqueErcAssociation> findByDisciplineScientifiqueId(Long id);

    int deleteByDisciplineScientifiqueId(Long id);
    List<DisciplineScientifiqueErcAssociation> findBySemanticRelationshipCode(String code);

    int deleteBySemanticRelationshipCode(String code);

    List<DisciplineScientifiqueErcAssociation> findBySemanticRelationshipId(Long id);

    int deleteBySemanticRelationshipId(Long id);







}
