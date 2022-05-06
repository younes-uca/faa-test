package com.ird.faa.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.ird.faa.bean.KeyWordDisciplineScientifiqueErc;


@Repository
public interface KeyWordDisciplineScientifiqueErcDao extends JpaRepository<KeyWordDisciplineScientifiqueErc,Long> {





    List<KeyWordDisciplineScientifiqueErc> findByKeyWordCode(String code);
    int deleteByKeyWordCode(String code);

    List<KeyWordDisciplineScientifiqueErc> findByKeyWordId(Long id);

    int deleteByKeyWordId(Long id);
    List<KeyWordDisciplineScientifiqueErc> findByDisciplineScientifiqueCode(String code);
    int deleteByDisciplineScientifiqueCode(String code);

    List<KeyWordDisciplineScientifiqueErc> findByDisciplineScientifiqueId(Long id);

    int deleteByDisciplineScientifiqueId(Long id);


}
