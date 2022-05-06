package com.ird.faa.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.ird.faa.bean.DisciplineScientifiqueErcAssociation;


@Repository
public interface DisciplineScientifiqueErcAssociationDao extends JpaRepository<DisciplineScientifiqueErcAssociation,Long> {





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
