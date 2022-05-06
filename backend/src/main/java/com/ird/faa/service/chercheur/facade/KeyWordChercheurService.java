package com.ird.faa.service.chercheur.facade;

import java.util.List;
import com.ird.faa.bean.KeyWord;
import com.ird.faa.ws.rest.provided.vo.KeyWordVo;
import com.ird.faa.service.core.facade.AbstractService;

public interface KeyWordChercheurService extends AbstractService<KeyWord,Long,KeyWordVo>{


    /**
    * find KeyWord from database by code (reference)
    * @param code - reference of KeyWord
    * @return the founded KeyWord , If no KeyWord were
    *         found in database return  null.
    */
    KeyWord findByCode(String code);

    /**
    * find KeyWord from database by id (PK) or code (reference)
    * @param id - id of KeyWord
    * @param code - reference of KeyWord
    * @return the founded KeyWord , If no KeyWord were
    *         found in database return  null.
    */
    KeyWord findByIdOrCode(KeyWord keyWord);


/**
    * delete KeyWord from database
    * @param id - id of KeyWord to be deleted
    *
    */
    int deleteById(Long id);




    /**
    * delete KeyWord from database by code (reference)
    *
    * @param code - reference of KeyWord to be deleted
    * @return 1 if KeyWord deleted successfully
    */
    int deleteByCode(String code);





}
