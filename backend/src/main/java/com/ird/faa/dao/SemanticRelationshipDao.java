package com.ird.faa.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.ird.faa.bean.SemanticRelationship;

import org.springframework.data.jpa.repository.Query;

@Repository
public interface SemanticRelationshipDao extends JpaRepository<SemanticRelationship,Long> {



    @Query("SELECT item FROM SemanticRelationship item ORDER BY item.niveauExactitude ASC")
    List<SemanticRelationship> findAll();

    SemanticRelationship findByCode(String code);

    int deleteByCode(String code);



}
