package com.ird.faa.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.ird.faa.bean.DisciplineScientifiqueErcParent;

import org.springframework.data.jpa.repository.Query;

@Repository
public interface DisciplineScientifiqueErcParentDao extends JpaRepository<DisciplineScientifiqueErcParent,Long> {



    @Query("SELECT item FROM DisciplineScientifiqueErcParent item ORDER BY item.code ASC")
    List<DisciplineScientifiqueErcParent> findAll();

    DisciplineScientifiqueErcParent findByCode(String code);

    int deleteByCode(String code);

    List<DisciplineScientifiqueErcParent> findByChercheurNumeroMatricule(String numeroMatricule);
    int deleteByChercheurNumeroMatricule(String numeroMatricule);

    List<DisciplineScientifiqueErcParent> findByChercheurId(Long id);

    int deleteByChercheurId(Long id);


}
