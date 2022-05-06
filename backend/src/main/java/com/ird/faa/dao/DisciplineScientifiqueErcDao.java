package com.ird.faa.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.ird.faa.bean.DisciplineScientifiqueErc;

import org.springframework.data.jpa.repository.Query;

@Repository
public interface DisciplineScientifiqueErcDao extends JpaRepository<DisciplineScientifiqueErc,Long> {



    @Query("SELECT item FROM DisciplineScientifiqueErc item ORDER BY item.code ASC")
    List<DisciplineScientifiqueErc> findAll();

    DisciplineScientifiqueErc findByCode(String code);

    int deleteByCode(String code);

    List<DisciplineScientifiqueErc> findByDisciplineScientifiqueErcParentCode(String code);
    int deleteByDisciplineScientifiqueErcParentCode(String code);

    List<DisciplineScientifiqueErc> findByDisciplineScientifiqueErcParentId(Long id);

    int deleteByDisciplineScientifiqueErcParentId(Long id);
    List<DisciplineScientifiqueErc> findByChercheurNumeroMatricule(String numeroMatricule);
    int deleteByChercheurNumeroMatricule(String numeroMatricule);

    List<DisciplineScientifiqueErc> findByChercheurId(Long id);

    int deleteByChercheurId(Long id);


}
