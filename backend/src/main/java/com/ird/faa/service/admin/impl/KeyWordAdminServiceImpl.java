package com.ird.faa.service.admin.impl;

import java.util.List;
import java.util.Date;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import javax.persistence.EntityManager;
import com.ird.faa.bean.KeyWord;
import com.ird.faa.dao.KeyWordDao;
import com.ird.faa.service.admin.facade.KeyWordAdminService;

import com.ird.faa.ws.rest.provided.vo.KeyWordVo;
import com.ird.faa.service.util.*;

import com.ird.faa.service.core.impl.AbstractServiceImpl;

@Service
public class KeyWordAdminServiceImpl extends AbstractServiceImpl<KeyWord> implements KeyWordAdminService {

@Autowired
private KeyWordDao keyWordDao;



@Autowired
private EntityManager entityManager;


@Override
public List<KeyWord> findAll(){
        String query = "SELECT o FROM KeyWord o where 1=1 ";
        query+= " ORDER BY o.code";
        return entityManager.createQuery(query).getResultList();
}
    @Override
    public KeyWord findByCode(String code){
    if( code==null) return null;
    return keyWordDao.findByCode(code);
    }

    @Override
    @Transactional
    public int deleteByCode(String  code) {
    return keyWordDao.deleteByCode(code);
    }
    @Override
    public KeyWord findByIdOrCode(KeyWord keyWord){
        KeyWord resultat=null;
        if(keyWord != null){
            if(StringUtil.isNotEmpty(keyWord.getId())){
            resultat= keyWordDao.getOne(keyWord.getId());
            }else if(StringUtil.isNotEmpty(keyWord.getCode())) {
            resultat= keyWordDao.findByCode(keyWord.getCode());
            }
        }
    return resultat;
    }

@Override
public KeyWord findById(Long id){
if(id==null) return null;
return keyWordDao.getOne(id);
}

@Override
public KeyWord findByIdWithAssociatedList(Long id){
return findById(id);
}


@Transactional
public int deleteById(Long id){
int res=0;
if(keyWordDao.findById(id).isPresent())  {
keyWordDao.deleteById(id);
res = 1;
}
return res;
}


@Override
public KeyWord update(KeyWord keyWord){
KeyWord foundedKeyWord = findById(keyWord.getId());
if(foundedKeyWord==null) return null;
else{
return  keyWordDao.save(keyWord);
}
}

@Override
public KeyWord save (KeyWord keyWord){

KeyWord result =null;
    KeyWord foundedKeyWord = findByCode(keyWord.getCode());
   if(foundedKeyWord == null){



KeyWord savedKeyWord = keyWordDao.save(keyWord);

result = savedKeyWord;
   }

return result;
}

@Override
public List<KeyWord> save(List<KeyWord> keyWords){
List<KeyWord> list = new ArrayList<>();
for(KeyWord keyWord: keyWords){
list.add(save(keyWord));
}
return list;
}



@Override
@Transactional
public int delete(KeyWord keyWord){
    if(keyWord.getCode()==null) return -1;

    KeyWord foundedKeyWord = findByCode(keyWord.getCode());
    if(foundedKeyWord==null) return -1;
keyWordDao.delete(foundedKeyWord);
return 1;
}


public List<KeyWord> findByCriteria(KeyWordVo keyWordVo){

String query = "SELECT o FROM KeyWord o where 1=1 ";

            query += SearchUtil.addConstraint( "o", "id","=",keyWordVo.getId());
            query += SearchUtil.addConstraint( "o", "libelleFr","LIKE",keyWordVo.getLibelleFr());
            query += SearchUtil.addConstraint( "o", "libelleEng","LIKE",keyWordVo.getLibelleEng());
            query += SearchUtil.addConstraint( "o", "code","LIKE",keyWordVo.getCode());
query+= " ORDER BY o.code";
return entityManager.createQuery(query).getResultList();
}


@Override
@Transactional
public void delete(List<KeyWord> keyWords){
        if(ListUtil.isNotEmpty(keyWords)){
        keyWords.forEach(e->keyWordDao.delete(e));
        }
}
@Override
public void update(List<KeyWord> keyWords){
if(ListUtil.isNotEmpty(keyWords)){
keyWords.forEach(e->keyWordDao.save(e));
}
}



}
