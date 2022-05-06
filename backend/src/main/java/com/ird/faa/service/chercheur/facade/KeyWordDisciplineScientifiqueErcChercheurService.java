package com.ird.faa.service.chercheur.facade;

import java.util.List;
import com.ird.faa.bean.KeyWordDisciplineScientifiqueErc;
import com.ird.faa.ws.rest.provided.vo.KeyWordDisciplineScientifiqueErcVo;
import com.ird.faa.service.core.facade.AbstractService;

public interface KeyWordDisciplineScientifiqueErcChercheurService extends AbstractService<KeyWordDisciplineScientifiqueErc,Long,KeyWordDisciplineScientifiqueErcVo>{




/**
    * delete KeyWordDisciplineScientifiqueErc from database
    * @param id - id of KeyWordDisciplineScientifiqueErc to be deleted
    *
    */
    int deleteById(Long id);


    List<KeyWordDisciplineScientifiqueErc> findByKeyWordCode(String code);

    int deleteByKeyWordCode(String code);

    List<KeyWordDisciplineScientifiqueErc> findByKeyWordId(Long id);

    int deleteByKeyWordId(Long id);
    List<KeyWordDisciplineScientifiqueErc> findByDisciplineScientifiqueCode(String code);

    int deleteByDisciplineScientifiqueCode(String code);

    List<KeyWordDisciplineScientifiqueErc> findByDisciplineScientifiqueId(Long id);

    int deleteByDisciplineScientifiqueId(Long id);







}
