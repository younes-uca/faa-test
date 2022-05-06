package com.ird.faa.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.ird.faa.bean.DisciplineScientifiqueParent;

import org.springframework.data.jpa.repository.Query;

@Repository
public interface DisciplineScientifiqueParentDao extends JpaRepository<DisciplineScientifiqueParent,Long> {



    @Query("SELECT item FROM DisciplineScientifiqueParent item ORDER BY item.code ASC")
    List<DisciplineScientifiqueParent> findAll();

    DisciplineScientifiqueParent findByCode(String code);

    int deleteByCode(String code);

    List<DisciplineScientifiqueParent> findByChercheurNumeroMatricule(String numeroMatricule);
    int deleteByChercheurNumeroMatricule(String numeroMatricule);

    List<DisciplineScientifiqueParent> findByChercheurId(Long id);

    int deleteByChercheurId(Long id);


}
